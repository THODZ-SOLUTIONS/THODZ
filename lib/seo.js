import { SITE_URL } from '@/lib/config';
import { LOCALES, OG_LOCALES } from '@/lib/i18n/config';

// The generated share card (app/opengraph-image.js). Referenced by path so
// metadataBase resolves it to an absolute URL.
export const OG_IMAGE = '/opengraph-image';

/**
 * Builds the openGraph + twitter metadata for a page.
 *
 * Next merges metadata by key, so a page that declares `openGraph` replaces
 * the layout's object rather than extending it — which is how every inner
 * page silently lost its share image. Routing them all through one helper
 * means the card, the site name and the locale alternates can only be set
 * one way.
 *
 * `image` overrides the generated card: case studies pass their screenshot.
 */
export function pageOpenGraph({ locale, path = '', title, description, image, type = 'website' }) {
  const img = image
    ? [{ url: image.startsWith('http') ? image : `${SITE_URL}${image}` }]
    : [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }];

  return {
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}${path}`,
      siteName: 'THODZ SOLUTIONS',
      locale: OG_LOCALES[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALES[l]),
      type,
      images: img,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: img.map((i) => i.url),
    },
  };
}
