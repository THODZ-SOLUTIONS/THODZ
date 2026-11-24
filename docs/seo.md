# SEO: what lives in code, and what does not

Most of the site's SEO is in the repo and guarded by three scripts.
Every page's `<head>` comes from one helper, `buildMetadata()` in
`lib/seo.js`: title, description, canonical, hreflang and the share card are
built there from the set of locales the page actually exists in, and nowhere
else.
Some of it cannot be: a few requests never reach the Worker, and measurement
happens somewhere else entirely. Those are the two sections at the bottom, one
for the Cloudflare dashboard and one for Google Search Console.

## The guards

```bash
npm run check:i18n       # translation completeness; runs before every build
npm run build:check      # i18n check, next build, then the file-level SEO check
npm run check:seo        # the file-level check alone, against the last build
npm run seo:crawl        # the HTTP crawl, against a running `next start`
npm run seo:crawl -- https://thodz.com   # the same crawl against production
```

`check:i18n` is wired into `open-next.config.ts` (`buildCommand`), so
`npm run build` — and with it the Cloudflare deploy — fails on a missing
translation instead of shipping English under a translated URL. Anything
still in English on purpose, or withheld from a locale until it has native
copy, is listed in `SEO_TRANSLATION_TODO.md` at the repo root.

`seo:crawl` (`scripts/seo-check.mjs`) is the end-to-end version. Starting from
`/sitemap.xml`, with redirects not followed, it checks every URL for status
200, a self-referencing canonical, an hreflang set that matches the sitemap
and is reciprocal with every alternate, `x-default`, `<html lang>`/`dir`, a
title and description unique across the whole site, JSON-LD that parses and
carries the `@type`s its template must have, every internal link landing on a
direct 200, and the redirects below staying single-hop.

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
| `http(s)://www.thodz.com/*` | `https://thodz.com/*` | **301**, Cloudflare Redirect Rule "www to apex" |
| `www.thodz.com/*` reaching the Worker | `thodz.com/*` | 308, `middleware.js` (fallback) |
| `/about`, `/work/*`, any pre-i18n path | `/en/...` | 308 |
| `/` | `/{detected locale}` | **307** |
| `/EN`, `/Fr/work`, any mis-cased locale | the lowercase URL | 308 |
| `/{locale}/work/{retired slug}` | `/{locale}/work` | 308 |

Locale detection happens on the bare `/` only. Every `/{locale}/...` URL is
served as-is to any client, including one with no `Accept-Language` and no
cookie — which is how Googlebot crawls — and `seo:crawl` asserts it.

The www redirect lives in two places on purpose. The Cloudflare Redirect Rule
("www to apex", Rules → Redirect Rules) runs first, for every path and both
schemes, in one hop; before it existed `http://www` took two hops and static
files on www never reached the Worker at all. `middleware.js` keeps its own
www check as the fallback if the rule is ever disabled.

`www.thodz.com/robots.txt` is the one path the rule cannot redirect: the
Cloudflare-managed robots.txt answers it first, with only Cloudflare's AI
crawler block. `seo:crawl` accepts that exact case and fails on anything
more, such as a `Sitemap:` line appearing on www.

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
- **`lastmod` on blog posts and the blog index only**, from each post's
  `updated` (or `date`) frontmatter: the one place a true per-page date
  exists. Everything else is left without, deliberately. It used to be the
  build timestamp, so all
  198 URLs claimed to change whenever anything did. Deriving it from git is no
  better: every case study's text lives in `lib/content.js`, so one edit moves
  the date on all fourteen. A date that is wrong for thirteen pages teaches
  Google to discount the field for the whole file.

  To publish a real one, add an `updated:` field per entry and maintain it, or
  split content so a page maps to a file of its own.

## Images and caching

Both are in the repo, and they are coupled: Cloudflare derives a transformed
image's cache lifetime from the origin response, so the caching rules decide
how often the transform pipeline has to redo work it has already done.

### Images resize at the edge

`next/image` uses `lib/image-loader.js`, which emits

    /cdn-cgi/image/width=<w>,quality=65,format=auto/<path>

Cloudflare serves that path *before* the request reaches the Worker, so an
image costs no Worker invocation.

**Quality is 65, not next/image's default 75, and that is load-bearing.**
Measured on this site's own images, at Cloudflare's default quality the edge
AVIF is *larger* than the WebP it replaced:

| | 640w | 960w | 1280w |
| --- | --- | --- | --- |
| the committed WebP variants, q=80 | 28,612 | 49,922 | 70,426 |
| `/cdn-cgi` AVIF at q=85 | 51,603 | 65,380 | 95,162 |
| `/cdn-cgi` AVIF at q=65 | 27,529 | — | — |

36 of the 39 sources are already lossy WebP, and re-encoding lossy to lossy
spends bits without buying detail. Anyone tempted to raise the quality should
re-measure rather than assume AVIF wins by default.

So this is not a payload change — it is roughly at parity. What it buys is
`format=auto` per request, arbitrary widths for 2x and 3x screens, 3.0 MB of
generated files out of git, and the removal of a build step that could silently
skip a file. That last one had already happened: the old generator missed
`little-hafiz/overview.png`, which was absent from the manifest and shipping at
full size with nothing to flag it.

The loader leaves SVG alone, leaves remote sources alone, and is bypassed
entirely by `next dev` and by `NEXT_PUBLIC_IMAGE_TRANSFORM=off`.

One sharp edge worth knowing: those URLs contain commas, and `srcset` is a
comma-separated list. It works — the parser reads the URL up to whitespace, so
interior commas survive — but it is the kind of thing that looks broken in a
diff. It was checked in a live browser, not just against the spec.

### Caching

Workers Assets answers every static file with

    Cache-Control: public, max-age=0, must-revalidate

which is the documented default, not a misconfiguration. With an ETag it means
a conditional request per asset on every repeat visit — roughly twenty round
trips before the page can paint, and it applied to the content-hashed Next
chunks too, which can never go stale.

`public/_headers` overrides it. Workers parses that file and it is never served
as an asset; the build copies it to `.open-next/assets/_headers`.

| Path | Policy | Why |
| --- | --- | --- |
| `/_next/static/*` | 1 year, `immutable` | content-hashed, the name changes with the bytes |
| `/fonts/*` | 1 year, `immutable` | a font file is finished; replacing one means renaming it |
| `/work`, `/assets`, `/team`, `/spline` | 30 days | **not** content-hashed — re-exporting an image keeps its path, so `immutable` would strand anyone who had already cached it |

The 30-day value is also what the `/cdn-cgi/image/` derivatives inherit. Before
this file existed the transform pipeline replied with

    warning: cf-images 299 "cache-control is too restrictive"

and a four-hour TTL, which would have spent the monthly allowance re-deriving
images it had already made.

`_headers` does **not** apply to responses the Worker generates, so the HTML's
security headers are unaffected — those come from `next.config.mjs`. The
converse is also true and is the reason both exist: `next.config.mjs` headers
never reach static assets.

---
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

### 2. `X-Robots-Tag: noindex` on `/fonts/*` — done in code now

This used to ask for a Rules → Transform Rules → Modify Response Header rule,
because `next.config.mjs` cannot reach files the assets layer serves ahead of
the Worker.

`public/_headers` can, and now sets it. **If that Transform Rule was ever
created in the dashboard, delete it** — two sources for one header is how they
drift.

Do not block `/fonts/` in `robots.txt` instead. The files have to stay
crawlable or Google cannot render the page properly; the header is what keeps
them out of the index while leaving them fetchable.

The code alternative, `run_worker_first: ["/fonts/*"]` in `wrangler.jsonc`, is
still the wrong answer: it spends a Worker invocation on every font request to
suppress something Search Console reports as "crawled, currently not indexed",
which is not an error.

### 3. Image transformations must stay switched on

This one is now a dependency rather than a to-do. `next/image` points at
`/cdn-cgi/image/`, which only exists on a zone with **Images → Transformations**
enabled. If it is ever turned off, or the monthly allowance runs out, every
`<img>` on the site 404s.

The recovery is one line and one deploy: build with
`NEXT_PUBLIC_IMAGE_TRANSFORM=off` and the loader emits the original file from
`public/` instead. Images get heavier; nothing breaks.

Usage is a few hundred unique transforms a month against an allowance of 5,000,
so the realistic risk is somebody switching it off, not the budget.

See **Images and caching** above for why the `IMAGES` binding is deliberately
*not* used.

---

## Not in this repo — Google Search Console

None of this can be automated from the repo, and the order matters: several of
these steps are worthless if the one before them was skipped.

### 0. Make sure what is live is what you think is live

Search Console measures the live site. Submitting a sitemap while production is
behind `master` teaches Google a version of the site that no longer exists, and
the sitemap is then cached for days.

Cloudflare Workers Builds deploys on push to `master`, so normally this is
already true — but it has been silently broken before (a lockfile that `npm ci`
rejected, which left hand-run `npm run deploy` as the only path that worked).
Confirm rather than assume:

```bash
curl -s https://thodz.com/sitemap.xml | grep -c '<loc>'
```

The URL count is the cheap check that the deploy carried what you think it did:
204 before the blog shipped, 208 after. `npm run deploy` still works if CI is
wedged.

### 1. One Domain property, not a URL-prefix one

`thodz.com` already carries three `google-site-verification` TXT records, so
verification is done — but three tokens means the property was set up more than
once, and data split across two properties is how you conclude that nothing is
working.

Use a **Domain** property (`thodz.com`, DNS-verified). A URL-prefix property
treats `https://thodz.com` and `https://www.thodz.com` as separate sites, which
matters here because the `www` → apex 308 means Google still holds `www` URLs it
has to reconcile. Delete the duplicates.

### 2. Submit the sitemap

**Indexing → Sitemaps** → `sitemap.xml`.

Check the discovered-URL count the next day. If it disagrees with the `grep -c`
above, that discrepancy is the thing to investigate, before rankings.

### 3. Spend the Request Indexing quota on the old pages, not the new ones

This is the step where the obvious answer is wrong.

The instinct is to request indexing for whatever just shipped. But the pages in
the worst position are the French and Arabic ones that **already existed**:
until the `localeAlternates()` fix they all canonicalised to `/en`, which told
Google not to index them. Google obliged — and also learned those URLs were not
worth crawling often. The fix only takes effect on recrawl, and the affected
URLs are precisely the ones Google has deprioritised, so they do not heal on
their own at any useful speed.

**URL Inspection → Request Indexing**, roughly ten a day, in this order:

1. The locales the canonical bug suppressed: `/fr`, `/ar`, `/fr/work`,
   `/ar/work`, `/fr/pricing`, `/fr/about`
2. The commercial pages: `/en/hire-full-stack-developers`,
   `/en/nearshore-development-algeria`, `/{en,fr,ar}/services`
3. The rest of the new surface: the `fr` and `ar` landing pages, a few
   `/services/{slug}`, `/en/blog` and the posts

Do not work through all 208. The quota will not allow it, and the sitemap plus
internal links already do that job.

### 4. Page indexing, read as a diagnosis

**Indexing → Pages**, under "Why pages aren't indexed":

| Bucket | What it means for this site |
| --- | --- |
| **Alternate page with proper canonical tag** | The canonical bug's fingerprint. A large number of non-`en` URLs here confirms the diagnosis, and the count falling over following weeks is the best available evidence that the fix worked. |
| **Duplicate without user-selected canonical** | Google overriding a canonical. Should be empty now; if it is not, the URL is a bug report. |
| **Crawled — currently not indexed** | Seen, and judged not worth indexing. Thin content. `sahafood` at 84 words belongs here until it is written. |
| **Discovered — not indexed** | Known and not fetched. A crawl-budget signal, fixed with internal links rather than by resubmitting. |

`/fonts/*` may appear under "crawled, currently not indexed" until the Transform
Rule above is in place. That is not an error.

### 5. The Performance baseline

**Performance → Search results**, last 3 months, **Compare** on. The filters
worth recording a before-number for:

- Query contains `full stack` — the target cluster
- Query contains `algeria` / `algérie`
- Country: Algeria, then France, then Saudi Arabia / UAE
- Search type **Image**, where the case-study screenshots can earn traffic

In the first month the only number that means anything is **impressions**.
Position on a new page starts bad and is noise.

### 6. robots.txt and crawl stats

**Settings → robots.txt** shows Google's fetched copy, which is the only place
the Cloudflare-managed block and the `app/robots.js` output can be read as one
file. Confirm Googlebot and Bingbot are fully allowed, `/api/` and `/admin` are
disallowed, and the `Sitemap:` line is present.

**Settings → Crawl stats** for 404 or 5xx spikes. The retired case-study slugs
should appear there as redirects, not as errors.

### 7. Import into Bing in one click

Bing Webmaster Tools → **Import from Google Search Console** does the
verification and the sitemap for you.

Worth the minute because ChatGPT search runs on the Bing index. For the goal of
appearing in AI answers, Bing is not an afterthought — it is the other half of
it, and the AI crawl control settings in the Cloudflare section above are
the rest.

### Not worth doing

- **The Removals tool.** It hides a page from search; it does not fix it.
- **The International Targeting report.** Google retired it in 2022. There is
  no hreflang report any more — validate with URL Inspection's rendered HTML.
- **A country target.** Also retired. `hreflang` does that job, and it is in
  code and guarded.
