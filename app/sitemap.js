import { CASE_STUDIES } from '@/lib/content';
import { SITE_URL } from '@/lib/config';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n/config';
import { SERVICE_PAGES, SERVICE_LOCALES } from '@/lib/services';

// Next generates /sitemap.xml from this. Every page exists once per locale and
// carries its hreflang alternates, so search engines treat the set as
// translations of one page rather than duplicates. Case study and service URLs
// come straight from the data, so a new entry (or a `hidden: true` one) is
// reflected without touching this file.
//
// No <priority> and no <changefreq>: Google ignores both, and the arithmetic
// that produced them was emitting values like 0.6000000000000001.
//
// No <lastmod> either, which is a deliberate second choice. It used to carry
// the build timestamp, so all 198 URLs claimed to change whenever anything
// did. Deriving it from git was tried and is no better: every case study's
// text lives in lib/content.js and every static page's in a dictionary, so a
// single edit moves the date on all of them. A lastmod that is wrong for 13
// pages out of 14 teaches Google to discount the field across the whole
// sitemap, which costs more than leaving it out.
//
// To publish a real one, give each entry an `updated:` field that is
// maintained when its copy changes, or split the content so that a page maps
// to a file of its own.
export default function sitemap() {
  const pages = [
    { path: '' },
    { path: '/work' },
    { path: '/pricing' },
    { path: '/about' },
    { path: '/contact' },
    { path: '/privacy' },
    { path: '/terms' },
    ...CASE_STUDIES.map((c) => ({ path: `/work/${c.slug}` })),
  ];

  // Service pages exist only in SERVICE_LOCALES, so they are emitted
  // separately: listing a locale the route does not generate would put 404s in
  // the sitemap and declare hreflang alternates that are not there.
  const servicePages = [
    { path: '/services' },
    ...SERVICE_PAGES.map((s) => ({ path: `/services/${s.slug}` })),
  ];

  const entries = (list, locales) =>
    list.flatMap((p) => {
      const languages = Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${p.path}`]));
      languages['x-default'] = `${SITE_URL}/${DEFAULT_LOCALE}${p.path}`;
      return locales.map((locale) => ({
        url: `${SITE_URL}/${locale}${p.path}`,
        alternates: { languages },
      }));
    });

  return [...entries(pages, LOCALES), ...entries(servicePages, SERVICE_LOCALES)];
}
