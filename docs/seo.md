# SEO: what lives in code, and what lives in Cloudflare

Most of the site's SEO is in the repo and guarded by `npm run check:seo`.
A few things cannot be, because the request never reaches the Worker. Those
are listed at the bottom and have to be done in the Cloudflare dashboard.

## The guard

```bash
npm run build:check      # next build, then the SEO check
npm run check:seo        # the check alone, against the last build
```

`scripts/check-seo.mjs` reads the **built HTML** — not the source — because
what matters is the tag Google receives after templates, overlays and
fallbacks have run. For every indexable page it asserts:

| Rule | Why it exists |
| --- | --- |
| Canonical is self-referencing, in that page's locale | `localeAlternates()` once hard-coded the canonical to the default locale, so all eight locales pointed at `/en` and seven asked to be dropped from the index. Nothing failed and nothing warned. |
| Exactly one `h1` | |
| Title within 60 rendered columns | CJK glyphs count double, Latin runs inside them count single. |
| Description present, within 155 | |
| Title and description unique per locale | Two pages sharing a title compete for one result. |
| `hreflang` present, includes `x-default` and its own locale | |
| `<html lang>` matches the route, `dir="rtl"` on `ar` | |

404 shells — the pages Next emits for routes a locale deliberately does not
publish, such as `/de/services` — are skipped.

## Redirects (`middleware.js`)

| From | To | Status |
| --- | --- | --- |
| `www.thodz.com/*` | `thodz.com/*` | 308 |
| `/about`, `/work/*`, any pre-i18n path | `/en/...` | 308 |
| `/` | `/{detected locale}` | **307** |
| `/{locale}/work/{retired slug}` | `/{locale}/work` | 308 |

The home page stays **temporary** on purpose: the same URL answers differently
per visitor, and a permanent redirect would be cached and lock a browser into
one locale forever. Every other unprefixed path is a URL that no longer exists
in the information architecture, so it is permanent — which trades locale
detection on old links for a signal Google treats as final.

`RETIRED_CASE_STUDIES` in `middleware.js` must list every slug marked
`hidden: true` in `lib/content.js`. Hidden entries do not generate a detail
page, so without the redirect their URL 404s for anything still linking to it.

## Sitemap

`app/sitemap.js` emits `<loc>` and `<xhtml:link>` alternates, and nothing else.

- **No `priority` / `changefreq`** — Google ignores both.
- **No `lastmod`** — deliberately. It used to be the build timestamp, so all
  198 URLs claimed to change whenever anything did. Deriving it from git is no
  better: every case study's text lives in `lib/content.js`, so one edit moves
  the date on all fourteen. A date that is wrong for thirteen pages teaches
  Google to discount the field for the whole file.

  To publish a real one, add an `updated:` field per entry and maintain it, or
  split content so a page maps to a file of its own.

---

## Not in this repo — Cloudflare dashboard

### 1. `robots.txt` has a second block we do not control

The live file starts with a long Cloudflare-managed section, including the
`User-agent: *` block with `Content-Signal` and the list of blocked AI
crawlers. `app/robots.js` only produces what comes after `# END Cloudflare
Managed Content`.

So the two `User-agent: *` blocks cannot be merged in code, and the AI crawler
rules are not ours to edit here. Both live in **Security → Settings → AI
crawl control** (previously "AI Scrapers and Crawlers" / "Managed robots.txt").

To allow AI *search* crawlers while still blocking AI *training* crawlers, the
distinction to make there is:

- **Allow** — `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`,
  `Claude-SearchBot`, `Claude-User`. These fetch a page because a user asked a
  question, and they are how the site appears in AI answers.
- **Block** — `GPTBot`, `CCBot`, `Google-Extended`, `ClaudeBot`,
  `anthropic-ai`, `Bytespider`. These collect pages to train models and send
  no traffic back.

Googlebot and Bingbot must stay fully allowed.

### 2. `X-Robots-Tag: noindex` on `/fonts/*`

`next.config.mjs` sets this for `/opengraph-image`, which is a Worker route.
Static assets under `public/` are served by the Cloudflare assets layer
*before* the Worker runs, so no config in this repo can add a header to them.

Add a **Rules → Transform Rules → Modify Response Header** rule:

- When incoming requests match: `URI Path` `starts with` `/fonts/`
- Set static: `X-Robots-Tag` = `noindex`

Do **not** block `/fonts/` in `robots.txt`. The files must stay crawlable or
Google cannot render the page properly; the header is what keeps them out of
the index.

The alternative in code is `run_worker_first: ["/fonts/*"]` in
`wrangler.jsonc`, which costs a Worker invocation on every font request to
suppress what Search Console reports as "crawled, currently not indexed" — not
an error. The Transform Rule is free and does the same job.

### 3. Images

`wrangler.jsonc` still has the `IMAGES` binding commented out, so
`/_next/image?...&w=640` returns the full-size original byte for byte and
`next/image`'s srcset buys nothing. Enable **Images** on the Cloudflare account,
then uncomment the binding.
