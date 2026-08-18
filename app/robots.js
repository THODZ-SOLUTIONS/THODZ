import { SITE_URL } from '@/lib/config';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Nothing user-facing lives under /api; keeping it out of the index
        // avoids the contact endpoint showing up in search results.
        disallow: '/api/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
