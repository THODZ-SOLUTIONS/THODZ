# SEO: what lives in code, and what does not

Most of the site's SEO is in the repo and guarded by `npm run check:seo`.
Some of it cannot be: a few requests never reach the Worker, and measurement
happens somewhere else entirely. Those are the two sections at the bottom, one
for the Cloudflare dashboard and one for Google Search Console.

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

---

## Not in this repo — Google Search Console

None of this can be automated from the repo, and the order matters: several of
these steps are worthless if the one before them was skipped.

### 0. Deploy first

Search Console measures the live site. Submitting a sitemap while production is
behind `master` teaches Google a version of the site that no longer exists, and
the sitemap is then cached for days.

```bash
npm run deploy
curl -s https://thodz.com/sitemap.xml | grep -c '<loc>'
```

The URL count is the cheap check that the deploy carried what you think it did:
204 before the blog shipped, 208 after.

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
