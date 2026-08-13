import { CASE_STUDIES } from '@/lib/content';
import { SITE_URL } from '@/lib/config';

// Next generates /sitemap.xml from this. Case study URLs come straight from
// lib/content.js, so a new entry (or a `hidden: true` one) is reflected without
// touching this file.
export default function sitemap() {
  const now = new Date();

  const pages = [
    { path: '', priority: 1, changeFrequency: 'monthly' },
    { path: '/work', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  ];

  return [
    ...pages.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...CASE_STUDIES.map((c) => ({
      url: `${SITE_URL}/work/${c.slug}`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.6,
    })),
  ];
}
