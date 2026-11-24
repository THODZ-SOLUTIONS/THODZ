import { SITE_URL } from '@/lib/config';
import { LOCALES, DEFAULT_LOCALE, OG_LOCALES } from '@/lib/i18n/config';

// Every page's <head> is built here and nowhere else.
//
// Before this file did the whole job, fifteen pages each assembled their own
// title, canonical, hreflang and share card from three helpers in two
// modules. Each one was right, but nothing kept them right together: a page
// published in three locales still claimed eight in og:locale:alternate, and
// the brand suffix existed in three spellings. One function, one input shape.

// The generated share card (app/opengraph-image.js). Referenced by path so
// metadataBase resolves it to an absolute URL.
export const OG_IMAGE = '/opengraph-image';

// The brand as it appears in titles. The short name, not "THODZ SOLUTIONS":
// "thodz" is what people search for, and every character spent on the suffix
// is one the page's own title cannot use before Google truncates it.
export const BRAND = 'THODZ';
export const BRAND_SEPARATOR = ' | ';

/** `{title} | THODZ`. The homepage is the exception and passes `absolute`. */
export function brandTitle(title) {
  return `${title}${BRAND_SEPARATOR}${BRAND}`;
}

/**
 * Canonical + hreflang for one page.
 *
 * `locales` is the set of locales the page genuinely exists in. Listing one
 * that 404s is a broken hreflang entry; listing one that serves English under
 * a translated URL invites Google to fold them together as duplicates.
 *
 * The canonical is always the caller's own locale. A translated page that
 * canonicalises to its English twin is asking to be dropped from the index,
 * which is exactly what the site did until 2026-11-16 and is the reason
 * Search Console still shows "Alternate page with proper canonical tag".
 */
export function buildAlternates(path = '', locale = DEFAULT_LOCALE, locales = LOCALES) {
  const languages = Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`]));
  // x-default names the English page. `/` is not a page of its own: it
  // redirects to the visitor's language, so pointing x-default at it would
  // point at a redirect.
  if (locales.includes(DEFAULT_LOCALE)) {
    languages['x-default'] = `${SITE_URL}/${DEFAULT_LOCALE}${path}`;
  }
  return { canonical: `${SITE_URL}/${locale}${path}`, languages };
}

/**
 * The full metadata object for a page.
 *
 *   title        what goes before " | THODZ" (or the whole title with `absolute`)
 *   description  the meta description
 *   locales      locales the page exists in (default: all of them)
 *   shareTitle / shareDescription
 *                share cards have no length budget, so they may say more
 *   image        a page-specific share image (case studies pass a screenshot)
 *   type         'website' | 'article'
 *   extra        anything else Next accepts (robots, alternates.types, ...)
 */
export function buildMetadata({
  locale,
  path = '',
  title,
  description,
  locales = LOCALES,
  absolute = false,
  shareTitle,
  shareDescription,
  image,
  type = 'website',
  extra = {},
}) {
  const fullTitle = absolute ? title : brandTitle(title);
  const cardTitle = shareTitle ? (absolute ? shareTitle : brandTitle(shareTitle)) : fullTitle;
  const cardDescription = shareDescription || description;
  const images = image
    ? [{ url: image.startsWith('http') ? image : `${SITE_URL}${image}` }]
    : [{ url: OG_IMAGE, width: 1200, height: 630, alt: cardTitle }];

  const { alternates: extraAlternates, ...rest } = extra;

  return {
    // Absolute so the layout's template can never append a second brand.
    title: { absolute: fullTitle },
    description,
    alternates: { ...buildAlternates(path, locale, locales), ...extraAlternates },
    openGraph: {
      title: cardTitle,
      description: cardDescription,
      url: `${SITE_URL}/${locale}${path}`,
      siteName: BRAND,
      locale: OG_LOCALES[locale],
      // Only the locales this page actually exists in. A three-locale page
      // used to claim all eight.
      alternateLocale: locales.filter((l) => l !== locale).map((l) => OG_LOCALES[l]),
      type,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: cardTitle,
      description: cardDescription,
      images: images.map((i) => i.url),
    },
    ...rest,
  };
}

// --- structured data --------------------------------------------------------

// The organisation is published once, by the layout, under this @id. Every
// other node points at it instead of restating it, so Google sees one entity.
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * BreadcrumbList for a page. `trail` excludes the home crumb, which is always
 * first; the last entry is the current page and carries no `item`, as
 * Google's documentation prescribes.
 */
export function breadcrumbSchema(locale, homeLabel, trail) {
  const crumbs = [{ name: homeLabel, path: '' }, ...trail];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: locale,
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(i < crumbs.length - 1 ? { item: `${SITE_URL}/${locale}${c.path}` } : {}),
    })),
  };
}
