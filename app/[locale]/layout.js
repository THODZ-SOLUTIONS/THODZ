import '@/styles/globals.css';
import { preload } from 'react-dom';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { JsonLd } from '@/components/core/JsonLd';
import { SITE_URL, CONTACT, SOCIALS } from '@/lib/config';
import { THEME_INIT_SCRIPT } from '@/lib/theme';
import { LOCALES, OG_LOCALES, localeDir, localeAlternates } from '@/lib/i18n/config';
import { getDictionary, getContent } from '@/lib/i18n';

// Fonts are vendored under public/fonts and declared in
// styles/tokens/font-faces.css — no next/font, so builds never depend on
// reaching Google Fonts. Preload only the regular-weight body face the
// locale paints first; the rest arrive via the unicode-range CSS.
const PRELOAD_FONTS = {
  en: ['/fonts/poppins-400-latin.woff2'],
  fr: ['/fonts/poppins-400-latin.woff2'],
  ar: ['/fonts/alexandria-100-900-arabic.woff2', '/fonts/alexandria-100-900-latin.woff2'],
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

// Only /en, /fr, /ar exist; anything else 404s instead of rendering with a
// half-valid locale.
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.meta.title, template: t.meta.template },
    description: t.meta.description,
    applicationName: 'THODZ SOLUTIONS',
    keywords: [
      'software development agency Algeria',
      'full-stack engineering studio',
      'web development Algeria',
      'mobile app development Algeria',
      'DevOps consulting',
      'cybersecurity consulting',
      'AI ML development',
      'agence de développement web Algérie',
      'تطوير مواقع الجزائر',
    ],
    authors: [{ name: 'THODZ SOLUTIONS', url: SITE_URL }],
    creator: 'THODZ SOLUTIONS',
    publisher: 'THODZ SOLUTIONS',
    alternates: localeAlternates(''),
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.ogDescription,
      url: `${SITE_URL}/${locale}`,
      siteName: 'THODZ SOLUTIONS',
      locale: OG_LOCALES[locale],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.title,
      description: t.meta.ogDescription,
    },
  };
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f8fa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0e13' },
  ],
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const t = getDictionary(locale);

  for (const href of PRELOAD_FONTS[locale] || []) {
    preload(href, { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' });
  }

  return (
    // suppressHydrationWarning: the theme init script mutates <html> with
    // data-theme/data-js before React hydrates, which is intentional.
    // data-scroll-behavior tells Next the CSS smooth scrolling is deliberate
    // so it can suspend it during route transitions.
    <html
      lang={locale}
      dir={localeDir(locale)}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body>
        {/* Must stay first in <body>: it resolves the theme pre-paint. The
            script arrives via the wrapper's innerHTML, so the HTML parser
            executes it as a blocking script on first load, but React never
            renders a <script> element itself — client re-renders (e.g. locale
            navigation) neither warn nor re-execute it. next/script's
            beforeInteractive can't be used here: its queue is consumed by an
            async chunk, which would allow a themeless first paint. */}
        <span
          hidden
          dangerouslySetInnerHTML={{ __html: `<script>${THEME_INIT_SCRIPT}</script>` }}
        />
        <JsonLd data={organizationSchema(locale)} />
        <Navbar locale={locale} t={t.nav} />
        <main>{children}</main>
        <Footer locale={locale} t={t} />
      </body>
    </html>
  );
}

function organizationSchema(locale) {
  const t = getDictionary(locale);
  const { SERVICES, TEAM } = getContent(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: 'THODZ SOLUTIONS',
    url: SITE_URL,
    description: t.meta.orgDescription,
    logo: `${SITE_URL}/assets/logo-full.svg`,
    image: `${SITE_URL}/opengraph-image`,
    email: CONTACT.email,
    telephone: CONTACT.phoneE164,
    address: { '@type': 'PostalAddress', addressCountry: 'DZ' },
    areaServed: ['DZ', 'FR', 'EU', 'MENA', 'Worldwide'],
    availableLanguage: ['French', 'English', 'Arabic'],
    founder: TEAM.map((m) => ({ '@type': 'Person', name: m.name, jobTitle: m.role })),
    sameAs: SOCIALS.filter((s) => s.href).map((s) => s.href),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: CONTACT.email,
      telephone: CONTACT.phoneE164,
      availableLanguage: ['French', 'English', 'Arabic'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Engineering services',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.description },
      })),
    },
  };
}
