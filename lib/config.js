// Site-wide configuration. Values that will change between "we're still
// setting this up" and "this is live" belong here, not scattered across pages.

export const SITE_URL = 'https://thodz.com';

// Where the studio is, for search engines. Google needs a locality before it
// will treat the site as relevant to "… in Algiers" or "… in Algeria" queries,
// and a Business Profile cannot be verified against a country code alone.
// Street address is deliberately omitted: the studio works remotely, and a
// city plus wilaya is enough for local relevance without publishing a desk.
export const ADDRESS = {
  locality: 'Algiers',
  // The wilaya. Schema.org wants the administrative region, not the country.
  region: 'Alger',
  country: 'DZ',
};

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

// The studio's own profiles. Each one is published twice: as a footer link
// with rel="me", and in the organisation's schema.org `sameAs`. Together they
// tell search engines these accounts and thodz.com are one entity, which is
// what a knowledge panel is built from. Only list accounts THODZ controls;
// an entry with href: null is skipped.
export const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/thodz' },
  { label: 'GitHub', href: 'https://github.com/THODZ-SOLUTIONS' },
  { label: 'pub.dev', href: 'https://pub.dev/publishers/thodz.com' },
  { label: 'X', href: 'https://x.com/thodzsolutions' },
  { label: 'Facebook', href: 'https://www.facebook.com/thodzsolutions' },
  { label: 'Instagram', href: 'https://www.instagram.com/thodzsolutions' },
  { label: 'YouTube', href: 'https://www.youtube.com/@thodzsolutions' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@thodzsolutions' },
  { label: 'Threads', href: 'https://www.threads.com/@thodzsolutions' },
  { label: 'Bluesky', href: 'https://bsky.app/profile/thodz.com' },
  { label: 'Mastodon', href: 'https://mastodon.social/@thodzsolutions' },
  { label: 'Reddit', href: 'https://www.reddit.com/user/thodzsolutions' },
  { label: 'DEV', href: 'https://dev.to/thodz' },
  { label: 'Medium', href: 'https://medium.com/@thodz' },
  { label: 'Dribbble', href: 'https://dribbble.com/thodzsolutions' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/thodzsolutions' },
];

// Products THODZ publishes under its own name. Linked from the footer and
// declared in structured data as made by the organisation, so a search for
// "thodz" that finds the product also finds the studio behind it.
export const PRODUCTS = [
  {
    name: 'THODZ Drop',
    url: 'https://drop.thodz.com',
    // Where it is distributed; becomes the product's sameAs.
    listings: ['https://apps.microsoft.com/detail/9NRMNDLPSSBQ'],
    category: 'UtilitiesApplication',
    os: 'Windows',
    description:
      'Drag a file, tap Alt and drop it on a format: photo, video, audio and subtitle conversion for Windows without opening an app.',
  },
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
