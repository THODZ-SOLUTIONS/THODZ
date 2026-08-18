import { CASE_STUDIES } from '@/lib/content';
import { SITE_URL } from '@/lib/config';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n/config';

// Next generates /sitemap.xml from this. Every page exists once per locale;
// each entry carries its hreflang alternates so search engines treat the
// three URLs as translations of one page. Case study URLs come straight from
// lib/content.js, so a new entry (or a `hidden: true` one) is reflected
// without touching this file.
export default function sitemap() {
  const now = new Date();

  const pages = [
    { path: '', priority: 1, changeFrequency: 'monthly' },
    { path: '/work', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
    ...CASE_STUDIES.map((c) => ({
      path: `/work/${c.slug}`,
      priority: 0.6,
      changeFrequency: 'yearly',
    })),
  ];

  return pages.flatMap((p) => {
    const languages = Object.fromEntries(LOCALES.map((l) => [l, `${SITE_URL}/${l}${p.path}`]));
    return LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      // The default locale is the canonical face of each page.
      priority: locale === DEFAULT_LOCALE ? p.priority : Math.max(0.1, p.priority - 0.2),
      alternates: { languages },
    }));
  });
}
