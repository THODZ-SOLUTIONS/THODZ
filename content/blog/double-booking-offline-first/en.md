---
title: 'How we stopped double-booking in an offline-first desktop app'
description: 'A car returned at 10:00 can leave again at 10:00. Getting that right meant checking overlap twice, and understanding what a booking interval actually is.'
metaTitle: 'Stopping double-booking in an offline-first app'
date: 2026-11-17
author: 'THODZ SOLUTIONS'
---

A car rental office runs on a counter. Someone walks in, asks for a Duster for four days, and the person behind the desk needs to know in about two seconds whether that car is free. Get it wrong and you have promised the same car to two people on the same afternoon — which you find out about when the second one arrives.

That is the expensive failure in this business, and it is the one we spent the most care on when building [Djalil Location](/en/work/djalil-location), an offline-first Windows app for exactly that counter. Here is what it actually took.

## The check in the form is not the check

The obvious implementation is a validation on the booking form: when the dates change, query existing bookings for that car, and if any of them overlap, show an error and disable Save.

That is necessary and it is not sufficient. A check that only runs in the interface is a check that holds right up until two things happen at once. Two staff members at two machines, or one person with the form open in two windows, or a slow disk between the validation and the write — any of those and both bookings pass validation, because at the moment each was validated it genuinely was free.

The window is small. It is also exactly the window that opens on a busy Friday afternoon, which is when you can least afford it.

So the rule has to live where it cannot be raced: **inside the write transaction**. The form check stays — it is what makes the app pleasant, because you learn about the conflict while you are still looking at the dates rather than after you press Save — but it is a convenience, not the guarantee. The guarantee runs again at the moment of writing, against the same data the write is about to touch, and refuses the insert if the world changed in between.

Two checks, deliberately. One for the human, one for correctness.

## What is a booking interval, exactly?

The second problem is subtler and it is where most implementations quietly get it wrong.

A booking runs from a pick-up time to a return time. The question is whether the endpoints belong to the interval. If a car is booked until Tuesday at 10:00, and someone wants it from Tuesday at 10:00, is that a conflict?

If you treat the interval as closed on both ends — `[start, end]` — then yes, it conflicts, because both bookings contain the instant 10:00. The system refuses a booking that is completely reasonable. The counter staff discover they cannot do something they obviously can do, and they start working around the software, which is the beginning of the end for any internal tool.

The fix is to treat the interval as **half-open**: `[start, end)`. The start instant belongs to the booking, the end instant does not. Two intervals overlap when `a.start < b.end AND b.start < a.end` — note the strict comparisons. Under that rule, a car returned at 10:00 can leave again at 10:00, and a car returned at 10:00 cannot be given to someone who wanted it from 09:59.

This is the same reasoning behind how you index time ranges in a database, and the same reason most date libraries treat ranges as half-open. It is worth stating in a comment next to the query, because the next person to read it will wonder whether the missing `=` is a bug.

## To the minute, not to the day

Early drafts of this kind of system often store dates, not timestamps. It is tempting: a rental is "four days", the UI shows a date picker, and dates are easier to reason about.

It falls apart at the counter. A car returning Tuesday morning and going out Tuesday afternoon is one rental day of inventory and two bookings, and a day-granularity model cannot express it. You end up with either a lost day of revenue per turnaround or a staff workaround involving a notebook.

So the model stores an instant for pick-up and an instant for return, each with an hour the user picks, and the overlap rule runs at minute resolution. The same half-open comparison, just with more precision underneath it.

## Maintenance is a booking too

The last piece: a car in the workshop is unavailable for the same reasons a rented car is, and if maintenance periods live in a separate table checked by separate code, one of the two paths will eventually be forgotten.

They are the same shape — a car, a start, an end — so they go through the same overlap check. When the conflict check fails, it names what it collided with, whether that is a booking or a maintenance period. The person at the counter does not need to know which table it came from; they need to know the car is not available and why.

## What this bought

Concretely, in the shipped app:

- The booking form checks as you pick the dates and names the clashing booking or maintenance period rather than saying "unavailable".
- Save stays disabled while a conflict exists, so the error arrives before the effort.
- The same rule runs inside the write transaction, so two people entering bookings at the same moment cannot both succeed.
- A car returned at 10:00 can leave again at 10:00.
- The availability view uses the identical rule, so what the calendar shows and what the form allows can never disagree.

That last point is worth more than it sounds. The failure mode of booking systems is not usually a crash — it is a calendar that says one thing and a form that says another, and staff who learn not to trust either.

## The general version

None of this is specific to cars. Any system that allocates a single resource over time — rooms, equipment, appointments, machines — has the same three decisions to make:

1. Where does the rule live? Not only in the form. In the write.
2. Are the intervals half-open? They should be, or your users will fight you over the boundary.
3. What granularity? The one your users actually work in, which is almost never whole days.

Get those three right and the rest is interface. Get them wrong and no amount of interface will save it.

*Djalil Location is an offline-first Windows app built with Electron, Vue 3 and SQLite. The [case study](/en/work/djalil-location) covers the rest of the system: the fleet, the availability timeline, and the encrypted backups.*
