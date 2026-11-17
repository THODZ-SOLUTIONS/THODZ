// Build-time SEO guard. Run after `next build`:  npm run check:seo
//
// Every rule here exists because the thing it checks silently broke once.
// The canonical rule in particular: localeAlternates() built its language map
// from the caller's path but hard-coded the canonical to the default locale,
// so all eight locales pointed at /en and seven of them asked to be dropped
// from the index. Nothing failed, nothing warned, and it was only visible by
// fetching a French page and reading the head.
//
// Reads the built HTML rather than the source, because what matters is the
// tag Google receives after templates, overlays and fallbacks have run.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const ROOT = process.cwd();
const BASE = join(ROOT, '.next', 'server', 'app');
const SITE = 'https://thodz.com';
const LOCALES = ['en', 'fr', 'ar', 'es', 'de', 'nl', 'ja', 'pt'];

const TITLE_MAX = 60;
const DESC_MAX = 155;

/** Rendered width: CJK glyphs take about two Latin characters' worth. */
function width(s) {
  let w = 0;
  for (const ch of s) {
    const o = ch.codePointAt(0);
    const wide =
      (o >= 0x2e80 && o <= 0xa4cf) ||
      (o >= 0xac00 && o <= 0xd7a3) ||
      (o >= 0xf900 && o <= 0xfaff) ||
      (o >= 0xff00 && o <= 0xff60);
    w += wide ? 2 : 1;
  }
  return w;
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

const grab = (html, re) => {
  const m = html.match(re);
  return m ? m[1].trim() : null;
};

const problems = [];
// (locale, path-without-locale, title, description) for the cross-locale check
const meta = [];
const seen = { title: new Map(), description: new Map() };
let checked = 0;

for (const file of walk(BASE)) {
  const rel = relative(BASE, file).split(sep).join('/').replace(/\.html$/, '');
  const [locale, ...rest] = rel.split('/');
  if (!LOCALES.includes(locale)) continue;

  const html = readFileSync(file, 'utf8');
  const canonical = grab(html, /rel="canonical" href="([^"]+)"/);
  // Pages without a canonical are the 404 shells Next emits for routes a
  // locale deliberately does not publish. Nothing to check.
  if (!canonical) continue;

  const url = `${SITE}/${rel === locale ? locale : rel}`;
  const name = `/${rel}`;

  // A 404 shell that still carries the locale home's canonical: skip, it is
  // not an indexable page. Detected by the canonical not matching its route
  // AND the page having no h1.
  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (canonical !== url && h1s === 0) continue;

  checked++;

  // 1. Canonical must be this page, in this locale. Never the default one.
  if (canonical !== url) {
    problems.push(`${name}: canonical is ${canonical}, expected ${url}`);
  }

  // 2. Exactly one h1.
  if (h1s !== 1) problems.push(`${name}: ${h1s} h1 elements, expected 1`);

  // 3. Title and description present and inside what Google renders.
  const title = grab(html, /<title>([^<]*)<\/title>/);
  const desc = grab(html, /name="description" content="([^"]*)"/);
  if (!title) problems.push(`${name}: no <title>`);
  else if (width(title) > TITLE_MAX) {
    problems.push(`${name}: title ${width(title)} wide (max ${TITLE_MAX}) — ${title}`);
  }
  if (!desc) problems.push(`${name}: no meta description`);
  else if (width(desc) > DESC_MAX) {
    problems.push(`${name}: description ${width(desc)} wide (max ${DESC_MAX})`);
  }

  // 4. Unique per locale. Two pages sharing a title are two pages competing
  //    for the same result.
  for (const [field, value] of [['title', title], ['description', desc]]) {
    if (!value) continue;
    const key = `${locale}\u0000${value}`;
    const first = seen[field].get(key);
    if (first) problems.push(`${name}: duplicate ${field} of ${first}`);
    else seen[field].set(key, name);
  }

  meta.push([locale, '/' + rest.join('/'), title, desc]);

  // 5. hreflang must be present and must include x-default.
  const alts = [...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)"/g)].map((m) => m[1]);
  if (alts.length === 0) problems.push(`${name}: no hreflang alternates`);
  else {
    if (!alts.includes('x-default')) problems.push(`${name}: hreflang has no x-default`);
    if (!alts.includes(locale)) problems.push(`${name}: hreflang does not list its own locale`);
  }

  // 6. A page must declare its own language, and Arabic must be RTL.
  const htmlTag = html.match(/<html[^>]*>/)?.[0] ?? '';
  if (!htmlTag.includes(`lang="${locale}"`)) {
    problems.push(`${name}: <html lang> is not "${locale}" — ${htmlTag.slice(0, 80)}`);
  }
  const wantDir = locale === 'ar' ? 'rtl' : 'ltr';
  if (!htmlTag.includes(`dir="${wantDir}"`)) {
    problems.push(`${name}: <html dir> is not "${wantDir}"`);
  }
}

// --- English leaking into a translated page ------------------------------
//
// A description byte-identical to the English one means the translation did
// not reach the tag. That happened for real: the English case studies carry
// metaTitle/metaDescription only where the English copy overflows, and
// spreading the English entry first let those survive into every locale that
// had not defined its own -- so Arabic and Japanese pages rendered English
// descriptions while displaying Arabic and Japanese prose.
//
// Descriptions only. A title can legitimately be the same in every language
// when it is a proper name: "Ability Beyond Disability" is the project's name,
// not an untranslated string. The metaTitle half of the same bug is caught
// precisely in the source check below instead.
//
// Compared per path, so it only ever fires on a page that exists in both.

const byPath = new Map();
for (const [locale, path, title, desc] of meta) {
  if (!byPath.has(path)) byPath.set(path, new Map());
  byPath.get(path).set(locale, { title, desc });
}
for (const [path, locales] of byPath) {
  const en = locales.get('en');
  if (!en) continue;
  for (const [locale, v] of locales) {
    if (locale === 'en') continue;
    if (v.desc && v.desc === en.desc) {
      problems.push(`/${locale}${path}: description is identical to English — the translation did not reach the tag`);
    }
  }
}

// --- source shapes -------------------------------------------------------
//
// Not built HTML, but it belongs here because the failure is invisible in the
// browser and in `next build`. A locale overlay once had two `services` keys
// — an array translating the homepage service cards, and an object keyed by
// service-page slug. In an object literal the second wins silently, so the
// French and Arabic homepages shipped English service names for days with
// nothing failing. Only esbuild, during the Cloudflare build, ever said a
// word about it.

// The English metaTitle must not appear in a translated page's <title>.
//
// metaTitle exists on an English case study only where the English headline
// overflows the SERP. Spreading the English entry first let that survive into
// locales that had not defined their own, so an Arabic page with a perfectly
// good Arabic title rendered the English one in its <title> tag.
// mergeCaseStudies now drops the override when the locale translated the
// field it overrides; this checks the result rather than the condition.
//
// Keyed on metaTitle specifically, so a title that is the same in every
// language because it is a proper name -- "Ability Beyond Disability" -- is
// not mistaken for an untranslated string.
{
  const { CASE_STUDIES } = await import('../lib/content.js');
  const overrides = new Map(
    CASE_STUDIES.filter((c) => c.metaTitle).map((c) => [`/work/${c.slug}`, c.metaTitle])
  );
  for (const [locale, path, title] of meta) {
    if (locale === 'en') continue;
    const english = overrides.get(path);
    if (english && title && title.includes(english)) {
      problems.push(
        `/${locale}${path}: <title> carries the English metaTitle — ` +
          'the locale translated the headline but the override overrode it'
      );
    }
  }
}

const OVERLAY_SHAPES = {
  services: 'array',
  servicePages: 'object',
  landing: 'object',
  caseStudies: 'object',
};

for (const locale of LOCALES.filter((l) => l !== 'en')) {
  let overlay;
  try {
    overlay = (await import(`../lib/i18n/content/${locale}.js`)).default;
  } catch {
    continue; // a locale may legitimately have no overlay
  }
  for (const [key, shape] of Object.entries(OVERLAY_SHAPES)) {
    const value = overlay[key];
    if (value === undefined) continue;
    const actual = Array.isArray(value) ? 'array' : typeof value;
    if (actual !== shape) {
      problems.push(
        `lib/i18n/content/${locale}.js: "${key}" is ${actual}, expected ${shape} ` +
          '(a duplicate key in the object literal silently replaced it)'
      );
    }
  }
}

if (checked === 0) {
  console.error('check-seo: no built pages found. Run `next build` first.');
  process.exit(1);
}

console.log(`check-seo: ${checked} pages checked`);
if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const p of problems) console.error('  -', p);
  process.exit(1);
}
console.log('check-seo: all good');
