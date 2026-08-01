# THODZ Solutions — website

Marketing site for THODZ SOLUTIONS, a full-stack engineering studio. Built with
Next.js 14 (App Router), ported directly from the [THODZ Solutions Design
System](../../../Users/PC/Downloads/THODZ%20Solutions%20Design%20System) —
same tokens, same components, same voice.

## Stack

- Next.js 14 (App Router), plain JS (no TypeScript, matching the source design system)
- No CSS framework — design tokens from `styles/tokens/*.css` (colors, type, spacing, radius, effects, motifs), same files as the design system
- `lucide-react` for icons
- One API route (`/api/contact`) for the contact form, optionally wired to [Resend](https://resend.com) for email delivery

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
   - `CONTACT_TO_EMAIL` — where inquiries should land (defaults to `support@thodz.com`)
   - `CONTACT_FROM_EMAIL` — must be a verified sender/domain in Resend once you're past their sandbox sender

## Content

- `lib/content.js` — services list, process steps, values, and case studies.
  **The case-study list is intentionally minimal right now** — it only
  includes Boonka, a real shipped engagement. The design system this site
  was ported from shipped with six fabricated "illustrative" case studies
  and three fabricated client testimonials (fake names, fake companies,
  fake metrics) — those were deliberately **not** carried over, since
  publishing invented client results/quotes on a real company site would be
  misleading. Add real entries to `CASE_STUDIES` in `lib/content.js` as
  engagements complete.
- Hero stats were similarly trimmed to only defensible claims (service
  count, languages, location) — no invented uptime/client numbers.

## Deploying to Vercel

1. Push this repo to GitHub (see below).
2. Go to https://vercel.com/new, import the GitHub repo.
3. Vercel auto-detects Next.js — no config needed. Add the `RESEND_API_KEY` /
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
