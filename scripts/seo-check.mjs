// HTTP-level SEO check. Crawls a running server the way a search engine
// does: starting from the sitemap, with redirects NOT followed, reading the
// HTML the server actually sends.
//
//   npm run build:next && npx next start -p 3000 &
//   node scripts/seo-check.mjs                     # http://localhost:3000
//   node scripts/seo-check.mjs https://thodz.com   # production, read-only
//
// scripts/check-seo.mjs reads the built files and is fast enough to run on
// every build. This one is the slower, end-to-end version: it sees
// middleware redirects, status codes and cross-page relationships (is the
// hreflang set reciprocal? does every alternate return 200?) that no single
// file can answer.
//
// Every absolute https://thodz.com URL found in a page or the sitemap is
// fetched from the base URL instead, so the local build is checked against
// the production URLs it will publish.

const SITE = 'https://thodz.com';
const BASE = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '');
const LOCALES = ['en', 'fr', 'ar', 'es', 'de', 'nl', 'ja', 'pt'];
const CONCURRENCY = 8;

const problems = [];
const fail = (url, msg) => problems.push(`${url.replace(SITE, '') || '/'}: ${msg}`);

const toBase = (url) => (url.startsWith(SITE) ? BASE + url.slice(SITE.length) : url);
const pathOf = (url) => new URL(url, SITE).pathname;
const localeOf = (url) => pathOf(url).split('/')[1];

async function get(url) {
  const res = await fetch(toBase(url), { redirect: 'manual' });
  const body = res.status === 200 ? await res.text() : '';
  return { status: res.status, location: res.headers.get('location'), body };
}

async function pool(items, fn) {
  const queue = [...items];
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (queue.length) await fn(queue.shift());
    })
  );
}

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

function parseHead(html) {
  const one = (re) => {
    const m = html.match(re);
    return m ? decode(m[1].trim()) : null;
  };
  const alternates = {};
  for (const m of html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/g)) {
    alternates[m[1]] = decode(m[2]);
  }
  const jsonld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(
    (m) => m[1]
  );
  const links = [...html.matchAll(/<a [^>]*href="([^"#]+)/g)].map((m) => decode(m[1]));
  return {
    htmlTag: html.match(/<html[^>]*>/)?.[0] ?? '',
    title: one(/<title>([^<]*)<\/title>/),
    description: one(/<meta name="description" content="([^"]*)"/),
    canonical: one(/<link rel="canonical" href="([^"]+)"/),
    robots: one(/<meta name="robots" content="([^"]+)"/),
    alternates,
    jsonld,
    links,
  };
}

// The @types a page's template must publish, by route shape.
function expectedTypes(path) {
  const rest = path.split('/').slice(2).join('/');
  const types = ['ProfessionalService']; // the layout's organisation, on every page
  if (rest === '') types.push('WebSite');
  else types.push('BreadcrumbList');
  if (/^work\/.+/.test(rest)) types.push('CreativeWork');
  if (/^services\/.+/.test(rest)) types.push('Service');
  if (/^blog\/.+/.test(rest)) types.push('BlogPosting');
  return types;
}

// --- 1. the sitemap -----------------------------------------------------------

const sitemapRes = await get(`${SITE}/sitemap.xml`);
if (sitemapRes.status !== 200) {
  console.error(`seo-check: ${BASE}/sitemap.xml returned ${sitemapRes.status}`);
  process.exit(1);
}
const sitemap = new Map(); // url -> { hreflang -> url }
for (const block of sitemapRes.body.match(/<url>[\s\S]*?<\/url>/g) || []) {
  const loc = decode(block.match(/<loc>([^<]+)<\/loc>/)[1]);
  const alts = {};
  for (const m of block.matchAll(/hreflang="([^"]+)"\s+href="([^"]+)"/g)) alts[m[1]] = decode(m[2]);
  sitemap.set(loc, alts);
}

// --- 2. every page in the sitemap ----------------------------------------------

const pages = new Map(); // url -> parsed head
const linkTargets = new Map(); // internal href -> first page linking to it

await pool([...sitemap.keys()], async (url) => {
  const res = await get(url);
  if (res.status !== 200) {
    fail(url, `sitemap URL returned ${res.status}${res.location ? ` -> ${res.location}` : ''}`);
    return;
  }
  const head = parseHead(res.body);
  pages.set(url, head);
  for (const href of head.links) {
    const abs = href.startsWith('/') ? SITE + href : href;
    if (abs.startsWith(SITE) && !linkTargets.has(abs)) linkTargets.set(abs, url);
  }
});

const seenTitle = new Map();
const seenDesc = new Map();

for (const [url, h] of pages) {
  const locale = localeOf(url);

  // Self-referencing canonical, in this page's own locale.
  if (h.canonical !== url) fail(url, `canonical is ${h.canonical}, expected itself`);

  // Indexable: a sitemap URL must not ask to be left out.
  if (h.robots && /noindex/.test(h.robots)) fail(url, `in the sitemap but robots says "${h.robots}"`);

  // <html lang> and dir.
  if (!h.htmlTag.includes(`lang="${locale}"`)) fail(url, `<html lang> is not "${locale}"`);
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  if (!h.htmlTag.includes(`dir="${dir}"`)) fail(url, `<html dir> is not "${dir}"`);

  // Title and description: present and unique across the whole site.
  if (!h.title) fail(url, 'no <title>');
  else if (seenTitle.has(h.title)) fail(url, `title duplicates ${seenTitle.get(h.title)}`);
  else seenTitle.set(h.title, url.replace(SITE, ''));
  if (!h.description) fail(url, 'no meta description');
  else if (seenDesc.has(h.description)) fail(url, `description duplicates ${seenDesc.get(h.description)}`);
  else seenDesc.set(h.description, url.replace(SITE, ''));

  // hreflang: lists itself, x-default whenever English exists, and matches
  // what the sitemap declares for this URL.
  const alts = h.alternates;
  if (alts[locale] !== url) fail(url, `hreflang "${locale}" is ${alts[locale]}, expected itself`);
  if (alts.en && alts['x-default'] !== alts.en) fail(url, 'x-default missing or not the English page');
  const fromSitemap = sitemap.get(url) || {};
  if (JSON.stringify(Object.entries(alts).sort()) !== JSON.stringify(Object.entries(fromSitemap).sort())) {
    fail(url, 'hreflang in the page differs from the sitemap');
  }

  // Reciprocal: every alternate exists (200, in the sitemap) and declares
  // exactly the same set back.
  for (const [lang, alt] of Object.entries(alts)) {
    if (lang === 'x-default') continue;
    const other = pages.get(alt);
    if (!other) {
      fail(url, `hreflang "${lang}" -> ${alt} is not a 200 page in the sitemap`);
      continue;
    }
    if (JSON.stringify(Object.entries(other.alternates).sort()) !== JSON.stringify(Object.entries(alts).sort())) {
      fail(url, `hreflang set is not reciprocal with ${alt}`);
    }
  }

  // JSON-LD: every block parses, and the template's required types are there.
  const types = new Set();
  const collect = (node) => {
    if (Array.isArray(node)) node.forEach(collect);
    else if (node && typeof node === 'object') {
      if (node['@type']) [].concat(node['@type']).forEach((t) => types.add(t));
      Object.values(node).forEach(collect);
    }
  };
  for (const raw of h.jsonld) {
    try {
      const data = JSON.parse(raw);
      if (data['@context'] !== 'https://schema.org') fail(url, 'JSON-LD block without schema.org @context');
      collect(data);
    } catch (e) {
      fail(url, `JSON-LD does not parse: ${e.message}`);
    }
  }
  for (const t of expectedTypes(pathOf(url))) {
    if (!types.has(t)) fail(url, `JSON-LD has no ${t}`);
  }
}

// --- 3. internal links ------------------------------------------------------
//
// Every internal link must land on a 200 directly. A link to a redirect costs
// crawl budget and a hop; a link to a 404 is the "Not found" row in Search
// Console. Feeds and static files are checked for status too.

let linkCount = 0;
await pool([...linkTargets.keys()], async (url) => {
  if (pages.has(url)) return; // already fetched as a sitemap page
  if (pathOf(url).startsWith('/cdn-cgi/')) return; // Cloudflare edge only
  linkCount++;
  const res = await fetch(toBase(url), { redirect: 'manual' });
  if (res.status !== 200) {
    fail(linkTargets.get(url), `links to ${url.replace(SITE, '')} which returns ${res.status}`);
  }
});

// --- 4. redirects that must stay single-hop -----------------------------------

const REDIRECTS = [
  ['/', /^\/(en|fr|ar|es|de|nl|ja|pt)$/],
  ['/about', /^\/en\/about$/],
  ['/EN', /^\/en$/],
  ['/Fr/work', /^\/fr\/work$/],
];
for (const [from, to] of REDIRECTS) {
  const res = await fetch(BASE + from, { redirect: 'manual' });
  const loc = res.headers.get('location');
  const target = loc ? new URL(loc, BASE).pathname : null;
  if (![301, 302, 307, 308].includes(res.status) || !to.test(target || '')) {
    fail(from, `expected one redirect to ${to}, got ${res.status} -> ${loc}`);
    continue;
  }
  const next = await fetch(new URL(loc, BASE), { redirect: 'manual' });
  if (next.status !== 200) fail(from, `redirect chain: ${target} returned ${next.status}`);
}

// The www host must redirect everything to the apex in one hop, including
// the files a crawler reads first. robots.txt and sitemap.xml once answered
// 200 on www (the middleware skipped dotted paths), and Search Console then
// chose www URLs as canonical over the apex ones.
//
// Against production the www host is fetched directly. Locally there is no
// www, so the Host header is set by hand: fetch() drops it, node:http keeps it.
async function wwwRedirect(path) {
  if (BASE === SITE) {
    const res = await fetch(`https://www.thodz.com${path}`, { redirect: 'manual' });
    return { status: res.status, location: res.headers.get('location') };
  }
  const { request } = await import('node:http');
  const { hostname, port } = new URL(BASE);
  return new Promise((resolve, reject) => {
    request({ hostname, port, path, headers: { host: 'www.thodz.com' } }, (res) => {
      res.resume();
      resolve({ status: res.statusCode, location: res.headers.location });
    })
      .on('error', reject)
      .end();
  });
}
const WWW_PATHS = ['/', '/en', '/fr/about', '/robots.txt', '/sitemap.xml', '/favicon.ico'];
for (const path of WWW_PATHS) {
  const { status, location } = await wwwRedirect(path);
  // One known exception. Cloudflare's managed robots.txt (AI Crawl Control)
  // answers /robots.txt on every proxied hostname before any redirect rule
  // runs, so www serves Cloudflare's AI-crawler block with a 200. That is
  // acceptable only while it is purely that block: no Sitemap line and none
  // of app/robots.js's rules, i.e. nothing that presents www as a live site.
  if (path === '/robots.txt' && status === 200 && BASE === SITE) {
    const body = await (await fetch('https://www.thodz.com/robots.txt')).text();
    const tail = body.split('# END Cloudflare Managed Content')[1] ?? body;
    if (/cloudflare managed content/i.test(body) && !/sitemap:/i.test(tail) && !tail.trim()) continue;
  }
  if (![301, 308].includes(status) || location !== `${SITE}${path}`) {
    fail(`www${path}`, `expected a permanent redirect to ${SITE}${path}, got ${status} -> ${location}`);
  }
}

// Locale URLs are reachable directly by a crawler with no Accept-Language and
// no cookie: Googlebot crawls mostly from the US and must see /de as /de.
for (const l of LOCALES) {
  const res = await fetch(`${BASE}/${l}`, { redirect: 'manual', headers: { 'accept-language': '' } });
  if (res.status !== 200) fail(`/${l}`, `returned ${res.status} to a client with no Accept-Language`);
}

// --- 5. brand signals -----------------------------------------------------------
//
// What Google shows next to the result (favicon, site name) and what it
// builds an entity from (organisation logo, sameAs). None of it is per-page,
// so it is checked once, on the English homepage.

{
  const home = await get(`${SITE}/en`);
  const icons = [...home.body.matchAll(/<link rel="(?:icon|apple-touch-icon)"[^>]*href="([^"]+)"/g)].map(
    (m) => decode(m[1])
  );
  for (const href of ['/favicon.ico', ...icons]) {
    const res = await fetch(new URL(href, BASE), { redirect: 'manual' });
    const type = res.headers.get('content-type') || '';
    if (res.status !== 200 || !type.startsWith('image/')) {
      fail(href, `icon returned ${res.status} ${type}`);
    }
  }
  if (!icons.some((h) => h.includes('apple-icon'))) fail('/en', 'no apple-touch-icon link');

  const org = parseHead(home.body)
    .jsonld.map((raw) => JSON.parse(raw))
    .find((d) => d['@type'] === 'ProfessionalService');
  if (!org) fail('/en', 'no organisation JSON-LD');
  else {
    const logo = typeof org.logo === 'string' ? org.logo : org.logo?.url;
    const res = logo ? await fetch(toBase(logo), { redirect: 'manual' }) : null;
    if (!res || res.status !== 200 || !/^image\/(png|jpeg|webp)/.test(res.headers.get('content-type') || '')) {
      fail('/en', `organisation logo ${logo} is not a reachable raster image`);
    }
    if (!Array.isArray(org.sameAs) || !org.sameAs.length) fail('/en', 'organisation has no sameAs');
    for (const url of org.sameAs || []) {
      if (!/^https:\/\//.test(url)) fail('/en', `sameAs entry is not an https URL: ${url}`);
    }
  }
}

// --- report -------------------------------------------------------------------

const byLocale = Object.fromEntries(LOCALES.map((l) => [l, 0]));
for (const url of pages.keys()) byLocale[localeOf(url)]++;

console.log(`seo-check against ${BASE}`);
console.log(`  sitemap URLs     ${sitemap.size}`);
console.log(`  pages fetched    ${pages.size}  (${Object.entries(byLocale).map(([l, n]) => `${l} ${n}`).join(', ')})`);
console.log(`  internal links   ${linkTargets.size} distinct, ${linkCount} outside the sitemap checked`);
console.log(`  redirects        ${REDIRECTS.length} single-hop cases, ${WWW_PATHS.length} www paths, ${LOCALES.length} locale roots without Accept-Language`);
console.log('  brand            favicon, apple-touch-icon, organisation logo, sameAs');

if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const p of problems) console.error('  -', p);
  process.exit(1);
}
console.log('\nseo-check: all good');
