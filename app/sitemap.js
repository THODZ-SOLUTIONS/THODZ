import { CASE_STUDIES } from '@/lib/content';
import { LOCALES } from '@/lib/i18n/config';
import { buildAlternates } from '@/lib/seo';
import { SERVICE_PAGES, SERVICE_LOCALES } from '@/lib/services';
import { LANDING_PAGES, LANDING_LOCALES } from '@/lib/landing';
import { getBlogLocales, getPostSlugs, getPublishedPostLocales, getPost, getPosts } from '@/lib/blog';

// Next generates /sitemap.xml from this. Every page exists once per locale and
// carries its hreflang alternates, so search engines treat the set as
// translations of one page rather than duplicates. Case study and service URLs
// come straight from the data, so a new entry (or a `hidden: true` one) is
// reflected without touching this file.
//
// No <priority> and no <changefreq>: Google ignores both, and the arithmetic
// that produced them was emitting values like 0.6000000000000001.
//
// <lastmod> only where the date is true. Blog posts carry `date` and
// `updated` in their frontmatter, so they get one, and the blog index takes
// its newest post's. Everything else is still left without, which is a
// deliberate second choice. It used to carry
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

  // Service and landing pages exist only in their own locale sets, so listing
  // the rest would put 404s in the sitemap and declare hreflang alternates
  // that are not there.
  const servicePages = [
    { path: '/services' },
    ...SERVICE_PAGES.map((s) => ({ path: `/services/${s.slug}` })),
  ];
  const landingPages = LANDING_PAGES.map((p) => ({ path: `/${p.slug}` }));

  // The same function that writes each page's <link rel="alternate"> tags,
  // so the sitemap and the pages cannot disagree about a page's locale set.
  const entries = (list, locales) =>
    list.flatMap(({ path, lastModified }) => {
      const { languages } = buildAlternates(path, locales[0], locales);
      return locales.map((locale) => ({
        url: buildAlternates(path, locale, locales).canonical,
        ...(lastModified?.[locale] ? { lastModified: lastModified[locale] } : {}),
        alternates: { languages },
      }));
    });

  // The blog index in each locale that has something published, dated by
  // that locale's newest post.
  const blogLocales = getBlogLocales();
  const blogIndex = {
    path: '/blog',
    lastModified: Object.fromEntries(
      blogLocales.map((l) => {
        const newest = getPosts(l)[0];
        return [l, newest?.updated || newest?.date];
      })
    ),
  };

  // Posts are the one thing here whose locale set differs per URL: an article
  // written in English and French belongs in two sitemap entries with two
  // alternates, not eight. Drafts are excluded entirely.
  const postEntries = getPostSlugs().flatMap((slug) => {
    const locales = getPublishedPostLocales(slug);
    if (!locales.length) return [];
    const lastModified = Object.fromEntries(
      locales.map((l) => {
        const post = getPost(slug, l);
        return [l, post.updated || post.date];
      })
    );
    return entries([{ path: `/blog/${slug}`, lastModified }], locales);
  });

  return [
    ...entries(pages, LOCALES),
    ...entries(servicePages, SERVICE_LOCALES),
    ...entries(landingPages, LANDING_LOCALES),
    ...(blogLocales.length ? entries([blogIndex], blogLocales) : []),
    ...postEntries,
  ];
}
