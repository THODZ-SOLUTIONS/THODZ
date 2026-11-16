import { SITE_URL } from '@/lib/config';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Nothing user-facing lives under /api; keeping it out of the index
        // avoids the contact endpoint showing up in search results. /admin
        // is the private submissions dashboard.
        disallow: ['/api/', '/admin'],
      },
    ],
    // No `host`: it is a Yandex extension that Google ignores, and the
    // canonical host is already settled by the www -> apex redirect in
    // middleware.js and by every page's self-referencing canonical.
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
