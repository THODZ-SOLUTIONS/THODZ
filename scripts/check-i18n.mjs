// Translation completeness guard. Runs before `next build` (see package.json
// and open-next.config.ts), so a missing translation fails the build instead
// of shipping as English under a translated URL.
//
//   node scripts/check-i18n.mjs
//
// Why this has to exist: lib/i18n/index.js merges each locale's overlay onto
// the English structures, field by field. That is what keeps slugs and images
// in one place, but it also means a field nobody translated renders English
// with no error anywhere. A German case study with an English `challenge`
// paragraph looks fine in review and reads to Google as a half-duplicate of
// the English page.
//
// Two checks:
//   1. Dictionaries: every key in en.js exists in every other locale, with the
//      same type.
//   2. Content overlays: every translatable field of every entry is present in
//      every locale that publishes that collection. "Translatable" is learnt
//      from the data, not listed here: a field is translatable when any locale
//      translates it and the English entry has it. So adding a new field to
//      one locale's overlay immediately flags the locales that lack it.

import { LOCALES, DEFAULT_LOCALE } from '../lib/i18n/config.js';
import * as content from '../lib/content.js';
import { SERVICE_PAGES, SERVICE_LOCALES } from '../lib/services.js';
import { LANDING_PAGES, LANDING_LOCALES } from '../lib/landing.js';

const OTHERS = LOCALES.filter((l) => l !== DEFAULT_LOCALE);
const problems = [];

// --- 1. dictionaries ---------------------------------------------------------

const dict = async (l) => (await import(`../lib/i18n/dictionaries/${l}.js`)).default;
const isObj = (v) => v && typeof v === 'object' && !Array.isArray(v);

function compare(en, other, locale, path = '') {
  for (const [k, v] of Object.entries(en)) {
    const p = path ? `${path}.${k}` : k;
    const o = other?.[k];
    if (v === null || v === undefined) continue; // English deliberately empty
    if (o === undefined || o === null) {
      problems.push(`dictionaries/${locale}.js: missing "${p}"`);
    } else if (isObj(v)) {
      if (!isObj(o)) problems.push(`dictionaries/${locale}.js: "${p}" should be an object`);
      else compare(v, o, locale, p);
    } else if (Array.isArray(v) && (!Array.isArray(o) || o.length !== v.length)) {
      problems.push(`dictionaries/${locale}.js: "${p}" should be an array of ${v.length}`);
    }
  }
}

const enDict = await dict(DEFAULT_LOCALE);
for (const l of OTHERS) compare(enDict, await dict(l), l);

// --- 2. content overlays -----------------------------------------------------

const overlays = Object.fromEntries(
  await Promise.all(OTHERS.map(async (l) => [l, (await import(`../lib/i18n/content/${l}.js`)).default]))
);

// Fields that exist on an entry only where that locale's copy overflows the
// search result. Their absence is the normal case, not a gap.
const OPTIONAL = new Set(['metaTitle', 'metaDescription']);

/**
 * collection: overlay key; base: English entries; keyOf: how overlay entries
 * are addressed (index for arrays, slug for objects); locales: who publishes it.
 */
function checkCollection(collection, base, keyOf, locales) {
  base.forEach((enEntry, i) => {
    const id = keyOf(enEntry, i);
    const translated = locales.map((l) => [l, overlays[l]?.[collection]?.[id]]);
    // Translatable = translated by at least one locale, and present in English.
    const fields = new Set();
    for (const [, entry] of translated) {
      for (const k of Object.keys(entry || {})) {
        if (!OPTIONAL.has(k) && enEntry[k] !== undefined && enEntry[k] !== null) fields.add(k);
      }
    }
    for (const [l, entry] of translated) {
      if (!entry) {
        problems.push(`content/${l}.js: ${collection}[${JSON.stringify(id)}] is missing entirely`);
        continue;
      }
      for (const f of fields) {
        if (entry[f] === undefined || entry[f] === null) {
          problems.push(`content/${l}.js: ${collection}[${JSON.stringify(id)}].${f} is missing (renders English)`);
        } else if (Array.isArray(enEntry[f]) && Array.isArray(entry[f]) && entry[f].length < enEntry[f].length) {
          problems.push(
            `content/${l}.js: ${collection}[${JSON.stringify(id)}].${f} has ${entry[f].length} of ${enEntry[f].length} items`
          );
        }
      }
    }
  });
}

const byIndex = (_, i) => i;
const bySlug = (e) => e.slug;

// Arrays in lib/content.js, merged by index. Keys are the overlay names.
const ARRAYS = {
  services: content.SERVICES,
  process: content.PROCESS,
  values: content.VALUES,
  team: content.TEAM,
  engagements: content.ENGAGEMENTS,
  faq: content.FAQ,
  problems: content.PROBLEMS,
  timeline: content.TIMELINE,
  openSource: content.OPEN_SOURCE,
};
for (const [key, base] of Object.entries(ARRAYS)) {
  if (base) checkCollection(key, base, byIndex, OTHERS);
}
checkCollection('caseStudies', content.CASE_STUDIES, bySlug, OTHERS);
checkCollection('servicePages', SERVICE_PAGES, bySlug, SERVICE_LOCALES.filter((l) => l !== DEFAULT_LOCALE));
checkCollection('landing', LANDING_PAGES, bySlug, LANDING_LOCALES.filter((l) => l !== DEFAULT_LOCALE));

if (problems.length) {
  console.error(`check-i18n: ${problems.length} missing translation(s)\n`);
  for (const p of problems) console.error('  -', p);
  console.error('\nTranslate them, or remove the locale from the page\'s locale set.');
  process.exit(1);
}
console.log(`check-i18n: ${LOCALES.length} locales, dictionaries and content overlays complete`);
