# Translations needed for SEO

Nothing here was machine-translated. Each item is either English that still
renders on a translated page, or a page that is deliberately **not published**
in a locale until it has native copy. Publishing English under `/de/...` would
read to Google as a duplicate of `/en/...`, which is the "Crawled – currently
not indexed" outcome this work is trying to avoid.

`npm run check:i18n` fails the build when a translatable field is missing, so
anything not on this list is already covered.

## 1. Pages withheld from five locales

These page types exist in `en`, `fr` and `ar` only. Each needs the overlay
listed, translated in full, before its locale can be added to the gate.

| Page type | URLs per locale | Overlay key to translate | Gate to extend once done |
| --- | --- | --- | --- |
| Service index + 9 service pages | 10 | `servicePages` (9 entries: title, metaTitle, metaDescription, summary, problem, approach, delivery, outcomes) and dictionary `services` (already translated) | `SERVICE_LOCALES` in `lib/services.js` |
| Landing pages: `/hire-full-stack-developers`, `/nearshore-development-algeria` | 2 | `landing` (2 entries) | `LANDING_LOCALES` in `lib/landing.js` |
| Blog post `double-booking-offline-first` | 1 | new file `content/blog/double-booking-offline-first/<locale>.md` | none: a post exists in a locale when its file exists |

| Locale | Missing service pages | Missing landing pages | Missing blog post |
| --- | --- | --- | --- |
| es | 10 | 2 | 1 |
| de | 10 | 2 | 1 |
| nl | 10 | 2 | 1 |
| ja | 10 | 2 | 1 |
| pt | 10 | 2 | 1 |
| ar | — | — | 1 |

Priority: the service pages. They are the commercial pages, and they are what
Search Console lists under `/de`, `/es` and the rest once they exist.

## 2. English still rendered on translated pages

Short strings, all from structural data that is not in a locale overlay today.
Each needs either a translatable field in the overlay or a decision that it
stays English (stack names such as `PostgreSQL` or `Flutter` should).

| Source | Field | English text | Rendered on |
| --- | --- | --- | --- |
| `lib/content.js` · `sadjia-ceram` | `stack` | `Admin dashboard`, `DZD pricing engine` | `/{fr,ar,es,de,nl,ja,pt}`, `/…/work`, `/…/work/sadjia-ceram` |
| `lib/content.js` · `ability-beyond-disability` | `stack` | `Bilingual (AR/EN)` | `/…/work`, `/…/work/ability-beyond-disability` |
| `lib/content.js` · `dentidz-dental-booking`, `onyxia-jewelry`, `sotex` | `stack` | `RTL Arabic` | `/…/work` and those three case studies |
| `lib/content.js` · `little-hafiz` | `stack` | `PWA / offline-capable`, `Cross-platform` | `/…/work`, `/…/work/little-hafiz` |
| `lib/services.js` · `automation` | `stack` | `Scheduled jobs` | `/{fr,ar}/services/automation` |
| `lib/services.js` · `cybersecurity` | `stack` | `Threat modelling` | `/{fr,ar}/services/cybersecurity` |
| `lib/services.js` · `technical-consulting` | `stack` | `Architecture review` | `/{fr,ar}/services/technical-consulting` |
| `lib/services.js` · `ui-ux-design` | `stack` | `Design systems`, `Design tokens` | `/{fr,ar}/services/ui-ux-design` |
| `lib/i18n/content/nl.js` · `id-verification-pipeline` | `tag` | `Computer vision · AI/ML` (identical to English) | `/nl`, `/nl/work`, `/nl/work/id-verification-pipeline` |
| `components/home/HeroArt.jsx` | SVG text | `in production` | every locale's home page (decorative, `aria-hidden`) |

## 3. Wording to review

Short titles written during the SEO work so that no two URLs share a
`<title>`. They are not body copy, but a native speaker should confirm them.

| Locale | Page | `metaTitle` |
| --- | --- | --- |
| fr | `/fr/work/ability-beyond-disability` | Ability Beyond Disability : plateforme de talents |
| es | `/es/work/ability-beyond-disability` | Ability Beyond Disability: plataforma de talentos |
| pt | `/pt/work/ability-beyond-disability` | Ability Beyond Disability: montra de talentos |
| de | `/de/work/ability-beyond-disability` | Ability Beyond Disability: Talentplattform |
| nl | `/nl/work/ability-beyond-disability` | Ability Beyond Disability: talentenplatform |
| ja | `/ja/work/ability-beyond-disability` | Ability Beyond Disability：才能紹介プラットフォーム |
| pt | `/pt/work/sadjia-ceram` | SADJIA CERAM: showroom digital de cerâmica |
