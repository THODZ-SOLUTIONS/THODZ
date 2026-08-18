// Site-wide configuration. Values that will change between "we're still
// setting this up" and "this is live" belong here, not scattered across pages.

export const SITE_URL = 'https://thodz.com';

export const CONTACT = {
  email: 'support@thodz.com',
  phoneDisplay: '+213 783 85 35 44',
  phoneE164: '+213783853544',
  // WhatsApp uses the number without the leading + or any spaces.
  whatsapp: '213783853544',
  // Optional. Set to a real booking URL (Calendly, Cal.com, SavvyCal) and a
  // "Book a 30-minute call" button appears on the contact page. Leave null and
  // the button is simply not rendered: no dead links.
  bookingUrl: null,
  bookingLabel: 'Book a 30-minute call',
};

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/THODZ-SOLUTIONS' },
  // Add these as the profiles go live. An entry with href: null is skipped.
  { label: 'LinkedIn', href: null },
];

// Placeholder gate.
//
// The site deliberately publishes no invented client quotes, logos, or
// metrics (see README). Sections that need content we don't have yet are
// fully built but stay hidden until real data exists.
//
// Set NEXT_PUBLIC_SHOW_PLACEHOLDERS=1 in .env.local to preview those sections
// with example data while you work on them. It must never be set in
// production: placeholder entries are clearly fake and marked as such.
export const SHOW_PLACEHOLDERS = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === '1';

// Returns the entries a section should actually render: real ones always,
// placeholder ones only behind the gate above.
export function visible(entries = []) {
  return entries.filter((e) => !e.placeholder || SHOW_PLACEHOLDERS);
}
