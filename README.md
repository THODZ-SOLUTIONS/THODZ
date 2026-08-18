# THODZ Solutions website

Marketing site for THODZ SOLUTIONS, a full-stack engineering studio. Built with
Next.js 16 (App Router), ported directly from the [THODZ Solutions Design
System](../../../Users/PC/Downloads/THODZ%20Solutions%20Design%20System):
same tokens, same components, same voice.

## Stack

- Next.js 16 (App Router), plain JS (no TypeScript, matching the source design system)
- No CSS framework. Design tokens live in `styles/tokens/*.css`; component styles in
  `styles/components/*.css`, all imported by `styles/globals.css`. Components carry
  classes only — no inline layout styles beyond one-off spacing and dynamic values
- Fonts are vendored in `public/fonts/` and declared in
  `styles/tokens/font-faces.css` — no `next/font/google`, so builds work
  offline and nothing ever fetches from Google. Poppins carries Latin text,
  Alexandria takes over every role on the Arabic locale, IBM Plex Mono stays
  for the mono accents on Latin locales
- Trilingual (`/en`, `/fr`, `/ar`) with native App Router i18n — no library.
  `proxy.js` redirects un-prefixed URLs by cookie/`Accept-Language`;
  UI strings live in `lib/i18n/dictionaries/`, translated content overlays in
  `lib/i18n/content/` (merged onto `lib/content.js`, the English source of
  truth, by `lib/i18n/index.js`). Arabic renders RTL with tracking zeroed
- `lucide-react` for icons
- One API route (`/api/contact`) for the contact form, optionally wired to [Resend](https://resend.com) for email delivery

## Theming

The site ships light and dark themes. Light tokens live on `:root` in
`styles/tokens/colors.css` (and `effects.css` for elevation); dark overrides live
under `[data-theme="dark"]`, with a `prefers-color-scheme` fallback for no-JS
visitors. An inline script in `app/layout.js` (`lib/theme.js`) resolves the theme
before first paint — saved choice first, OS preference otherwise — so there is no
flash. The navbar toggle persists to `localStorage`. For previews, `?theme=light`
or `?theme=dark` on any URL forces a theme without persisting it.

When editing theme-dependent tokens, keep the dark block and the
`prefers-color-scheme` fallback block in sync (both files say so in comments).

## Motion

Scroll reveals use the `Reveal` component (`components/core/Reveal.jsx`), a thin
IntersectionObserver wrapper; its hidden initial state is gated behind the
`data-js` attribute so content is never invisible to crawlers or no-JS visitors.
Hero load animations are pure CSS (`styles/components/hero.css`). Everything
respects `prefers-reduced-motion`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Contact form email delivery

The contact form POSTs to `/api/contact`. Without any environment variables
set, submissions are logged server-side (visible in `vercel logs` in
production) but **no email is actually sent**. To enable real email delivery:

1. Create a free [Resend](https://resend.com) account and API key.
2. Set these environment variables (in Vercel: Project → Settings →
   Environment Variables; locally: copy `.env.example` to `.env.local`):
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`: where inquiries should land (defaults to `support@thodz.com`)
   - `CONTACT_FROM_EMAIL`: must be a verified sender/domain in Resend once you're past their sandbox sender

## Content

All copy and data live in two files:

- `lib/content.js`: services, process steps, values, team, engagement models,
  FAQ, testimonials, client logos, and case studies.
- `lib/config.js`: contact details, social links, the booking URL, and the
  placeholder gate.

Nothing else needs editing to change what the site says.

### Case studies

Case studies use a `hidden: true` flag to pull an entry from the public site
(and stop generating its detail page) without deleting the data.

Each entry can carry an `images` array of real screenshots, stored under
`public/work/<slug>/`. The first image becomes the card thumbnail and the
detail-page lead; the rest appear under "Inside the build". Mark a full-page
capture with `tall: true` so it's framed as a scroll instead of being squashed.
An entry with no images falls back to the grid motif, so adding screenshots
later is a data-only change.

`outcomes` is the "What shipped" list on the detail page. `client` and `quote`
are optional.

### The honesty rule

The design system this site was ported from shipped with six fabricated
"illustrative" case studies and three fabricated client testimonials (fake
names, fake companies, fake metrics). Those were deliberately not carried
over, since publishing invented client results or quotes on a real company
site would be misleading. Hero stats are limited to claims that can be
defended: service count, shipped project count (derived from `CASE_STUDIES`,
so it can't drift), languages, and the reply-time promise.

`TESTIMONIALS`, `CLIENTS`, and the `startingAt` price floors in `ENGAGEMENTS`
are therefore empty of real data. The sections that use them are fully built
but render nothing until real entries exist, and a section with no entries
removes itself rather than shipping an empty shell.

To preview those sections while working on them:

```bash
NEXT_PUBLIC_SHOW_PLACEHOLDERS=1 npm run dev
```

That renders the sample entries, each visibly flagged as a placeholder. Never
set it in production. To publish a real testimonial, drop the
`placeholder: true` flag and replace every field; to publish a real price,
fill in `startingAt`.

### Contact channels

`lib/config.js` drives the contact page. WhatsApp, email, and phone are wired
to the numbers there. Set `CONTACT.bookingUrl` to a Calendly / Cal.com link and
a booking button appears; leave it `null` and it's simply not rendered, so
there's never a dead link. `SOCIALS` entries with `href: null` are skipped the
same way.

## SEO

- `app/sitemap.js` and `app/robots.js` generate `/sitemap.xml` and
  `/robots.txt`. Case study URLs come from `lib/content.js`, so new (and
  hidden) entries are handled automatically.
- `app/opengraph-image.js` renders the social share card at build time from
  the site's own tokens. No network fetch, no external font.
- Structured data ships on every page: `ProfessionalService` with the full
  service catalogue in the root layout, `FAQPage` on `/pricing`, and
  `CreativeWork` on each case study.
- Every page sets a canonical URL and its own OpenGraph metadata.

## Deploying to Vercel

1. Push this repo to GitHub (see below).
2. Go to https://vercel.com/new, import the GitHub repo.
3. Vercel auto-detects Next.js, no config needed. Add the `RESEND_API_KEY` /
   `CONTACT_TO_EMAIL` env vars in the project settings if you want the
   contact form to send real email.
4. Deploy. Point your domain (`thodz.com`) at the Vercel project under
   Project → Settings → Domains.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```
