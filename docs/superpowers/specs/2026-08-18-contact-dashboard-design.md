# Contact Submissions Dashboard — Design

Date: 2026-08-18
Status: approved in chat (backend: Supabase; auth: Supabase Auth; features: list + detail, read/new status, delete, CSV export)

## Goal

Store contact form submissions in Supabase and add a protected admin
dashboard at `/admin` where the site owner can view, triage, delete, and
export them. The public contact flow (Resend email) keeps working exactly
as today, including when Supabase is not configured.

## Architecture

One Supabase project (already created by the owner). The Next.js app talks
to it two ways:

- **Public intake** — `app/api/contact/route.js` inserts each submission
  server-side using the **secret key** (`SUPABASE_SECRET_KEY`, server-only).
  The existing Resend email remains; DB insert is the primary record, email
  is best-effort.
- **Dashboard** — authenticated Supabase Auth session via
  `@supabase/supabase-js` + `@supabase/ssr` (cookie sessions), using the
  publishable key. All reads/updates go through RLS as the logged-in user.

Row Level Security: anonymous role has no access; authenticated users can
select/update/delete. Inserts come only through the secret key. The single
admin account is created manually in the Supabase console — no signup UI.

## Environment variables

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
SUPABASE_SECRET_KEY            # server-only, never committed
```

New-format Supabase API keys (`sb_publishable_...` / `sb_secret_...`).

## Data model

Table `contact_submissions` (schema shipped as `supabase/schema.sql`, run
once in the Supabase SQL editor):

| column     | type        | notes                          |
|------------|-------------|--------------------------------|
| id         | uuid pk     | `gen_random_uuid()`            |
| created_at | timestamptz | default `now()`                |
| name       | text        | required                       |
| email      | text        | required                       |
| company    | text        |                                |
| type       | text        | project type (locale-neutral)  |
| timeline   | text        | `asap` / `q` / `flex`          |
| details    | text        |                                |
| nda        | boolean     | default false                  |
| status     | text        | `new` (default) or `read`      |

## Routes & UI

Dashboard lives outside the `[locale]` segment; English-only; excluded from
sitemap and disallowed in `app/robots.js`.

- `/admin/login` — email + password form against Supabase Auth.
- `/admin` — submissions table (name, email, type, date, status badge,
  unread count), expandable row detail, mark read/unread, delete with
  confirmation, CSV export generated client-side from fetched rows.
- `middleware.js` redirects unauthenticated visitors of `/admin` to
  `/admin/login` and refreshes Supabase session cookies.

Styling reuses existing components (`Button`, `Tag`, `Input`, `Toast`) and
the site's CSS variables.

## Files

New:
- `supabase/schema.sql`
- `lib/supabase/server.js`, `lib/supabase/client.js`
- `middleware.js`
- `app/admin/login/page.js` (+ client form)
- `app/admin/page.js` + `app/admin/SubmissionsTable.jsx`

Modified:
- `app/api/contact/route.js` — add Supabase insert
- `app/robots.js` — disallow `/admin`
- `.env.local.example` — document the three vars

## Failure handling

- Supabase env vars absent → contact route behaves exactly as today
  (email or log only); the site never breaks for visitors.
- DB insert fails but email sends → visitor still gets success; error is
  logged server-side.
- Dashboard fetch/auth errors surface as inline error states, not crashes.

## Testing

No automated test infrastructure exists in this repo; verification is
manual: submit the form locally, confirm the row appears in the dashboard,
exercise read/unread, delete, CSV export, and confirm `/admin` redirects to
login when logged out.
