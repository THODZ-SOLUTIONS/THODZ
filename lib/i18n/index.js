// i18n access layer. Pages ask for a dictionary (UI strings) and content
// (localized lib/content.js data) by locale. English is the base; French and
// Arabic ship as overlays containing only the translatable fields, merged
// here onto the English structures so slugs, stacks, images, and links are
// never duplicated across languages.

import {
  SERVICES,
  PROCESS,
  VALUES,
  TEAM,
  ENGAGEMENTS,
  FAQ,
  TESTIMONIALS,
  CLIENTS,
  CASE_STUDIES,
} from '@/lib/content';
import { DEFAULT_LOCALE } from './config';
import en from './dictionaries/en';
import fr from './dictionaries/fr';
import ar from './dictionaries/ar';
import frContent from './content/fr';
import arContent from './content/ar';

const DICTIONARIES = { en, fr, ar };
const OVERLAYS = { en: null, fr: frContent, ar: arContent };

export function getDictionary(locale) {
  return DICTIONARIES[locale] || DICTIONARIES[DEFAULT_LOCALE];
}

// Arrays whose entries translate field-by-field merge by index: the overlay
// files mirror the order of lib/content.js and carry only translated fields.
function mergeList(baseList, overlayList) {
  if (!overlayList) return baseList;
  return baseList.map((item, i) => ({ ...item, ...(overlayList[i] || {}) }));
}

// Case studies merge by slug (order-independent), and their image entries
// merge by index so only alt/caption are translated, never src/dimensions.
function mergeCaseStudies(baseList, overlayBySlug) {
  if (!overlayBySlug) return baseList;
  return baseList.map((study) => {
    const t = overlayBySlug[study.slug];
    if (!t) return study;
    const { images: imageTexts, ...fields } = t;
    return {
      ...study,
      ...fields,
      images: (study.images || []).map((img, i) => ({ ...img, ...(imageTexts?.[i] || {}) })),
    };
  });
}

export function getContent(locale) {
  const o = OVERLAYS[locale] || null;
  return {
    SERVICES: mergeList(SERVICES, o?.services),
    PROCESS: mergeList(PROCESS, o?.process),
    VALUES: mergeList(VALUES, o?.values),
    TEAM: mergeList(TEAM, o?.team),
    ENGAGEMENTS: mergeList(ENGAGEMENTS, o?.engagements),
    FAQ: mergeList(FAQ, o?.faq),
    CASE_STUDIES: mergeCaseStudies(CASE_STUDIES, o?.caseStudies),
    // Testimonials and client logos are real, attributable material; they
    // render in whatever language the client approved and are never machine
    // localized. (Today both lists are placeholder-gated anyway.)
    TESTIMONIALS,
    CLIENTS,
  };
}
