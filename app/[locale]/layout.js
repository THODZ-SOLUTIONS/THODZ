import '@/styles/globals.css';
import { preload } from 'react-dom';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { JsonLd } from '@/components/core/JsonLd';
import { SITE_URL, CONTACT, SOCIALS, ADDRESS } from '@/lib/config';
import { THEME_INIT_SCRIPT } from '@/lib/theme';
import { LOCALES, localeDir } from '@/lib/i18n/config';
import { buildMetadata, ORG_ID } from '@/lib/seo';
import { getDictionary, getContent } from '@/lib/i18n';
import { SERVICE_LOCALES, SERVICE_PAGES } from '@/lib/services';
import { LANDING_LOCALES, LANDING_PAGES } from '@/lib/landing';
import { getBlogLocales, getPostSlugs, getPublishedPostLocales } from '@/lib/blog';

// Fonts are vendored under public/fonts and declared in
// styles/tokens/font-faces.css — no next/font, so builds never depend on
// reaching Google Fonts. Preload only the regular-weight body face the
// locale paints first; the rest arrive via the unicode-range CSS.
const PRELOAD_FONTS = {
  en: ['/fonts/poppins-400-latin.woff2'],
  fr: ['/fonts/poppins-400-latin.woff2'],
  ar: ['/fonts/alexandria-100-900-arabic.woff2', '/fonts/alexandria-100-900-latin.woff2'],
  es: ['/fonts/poppins-400-latin.woff2'],
  de: ['/fonts/poppins-400-latin.woff2'],
  nl: ['/fonts/poppins-400-latin.woff2'],
  // Japanese renders its CJK from the reader's own system gothic (see
  // styles/tokens/fonts.css); only the Latin run needs Poppins.
  ja: ['/fonts/poppins-400-latin.woff2'],
  pt: ['/fonts/poppins-400-latin.woff2'],
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
  // These are the homepage's tags, and the defaults any page without its own
  // generateMetadata would inherit. Every real page overrides them through
  // the same helper, so the shape is identical everywhere.
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: 'THODZ',
    authors: [{ name: 'THODZ SOLUTIONS', url: SITE_URL }],
    creator: 'THODZ SOLUTIONS',
    publisher: 'THODZ SOLUTIONS',
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    ...buildMetadata({
      locale,
      path: '',
      // "THODZ | {value proposition}": the brand leads on the homepage
      // because "thodz" is the query this page has to win outright.
      title: t.meta.title,
      absolute: true,
      description: t.meta.description,
      shareDescription: t.meta.ogDescription,
    }),
    // Pages render their own title through buildMetadata (absolute), so this
    // template only catches a page that forgot to.
    title: { default: t.meta.title, template: t.meta.template },
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
  // Computed here so lib/services.js stays out of the client bundle; the nav
  // and footer receive a boolean, not the data.
  const showServices = SERVICE_LOCALES.includes(locale);
  const showBlog = getBlogLocales().includes(locale);
  // Landing page links for the footer, resolved server-side so their titles
  // are already translated and lib/landing.js stays off the client.
  const landingLinks = LANDING_LOCALES.includes(locale)
    ? getContent(locale).LANDING_PAGES.map((p) => ({
        label: p.title,
        href: `/${locale}/${p.slug}`,
      }))
    : [];

  // The service pages are the commercial pages; linking each one from every
  // page in its locale is what tells a crawler they matter.
  const serviceLinks = showServices
    ? getContent(locale).SERVICE_PAGES.map((s) => ({
        label: s.title,
        href: `/${locale}/services/${s.slug}`,
      }))
    : [];

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
        <Navbar
          locale={locale}
          t={t.nav}
          showServices={showServices}
          pageLocales={pageLocales()}
          showBlog={showBlog}
        />
        <main>{children}</main>
        <Footer
          locale={locale}
          t={t}
          showServices={showServices}
          landingLinks={landingLinks}
          serviceLinks={serviceLinks}
          showBlog={showBlog}
        />
      </body>
    </html>
  );
}

// Pages that exist in only some locales, keyed by their path without the
// locale prefix. The language switcher offers only these locales on these
// pages; everywhere else it offers all of them. Built here, on the server,
// so lib/services.js and the blog's filesystem reads never reach the client.
function pageLocales() {
  const map = { '/services': SERVICE_LOCALES, '/blog': getBlogLocales() };
  for (const s of SERVICE_PAGES) map[`/services/${s.slug}`] = SERVICE_LOCALES;
  for (const p of LANDING_PAGES) map[`/${p.slug}`] = LANDING_LOCALES;
  for (const slug of getPostSlugs()) map[`/blog/${slug}`] = getPublishedPostLocales(slug);
  return map;
}

function organizationSchema(locale) {
  const t = getDictionary(locale);
  const { SERVICES, TEAM } = getContent(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: 'THODZ SOLUTIONS',
    // What people actually type. Without it Google has only the legal name to
    // match a brand query against.
    alternateName: ['THODZ', 'Thodz Solutions'],
    url: SITE_URL,
    description: t.meta.orgDescription,
    // A square raster, not the wordmark: Google's logo guidance asks for at
    // least 112x112 and crops toward a square in the knowledge panel.
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/assets/logo-512.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/opengraph-image`,
    email: CONTACT.email,
    telephone: CONTACT.phoneE164,
    address: {
      '@type': 'PostalAddress',
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      addressCountry: ADDRESS.country,
    },
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
