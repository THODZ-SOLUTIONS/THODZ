import '@/styles/globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { JsonLd } from '@/components/core/JsonLd';
import { SERVICES, TEAM } from '@/lib/content';
import { SITE_URL, CONTACT, SOCIALS } from '@/lib/config';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'THODZ SOLUTIONS: Full-stack engineering studio',
    template: '%s · THODZ SOLUTIONS',
  },
  description:
    'THODZ SOLUTIONS designs, builds, and operates web, mobile, desktop, and infrastructure systems for teams who need it done right the first time. Based in Algeria, working remotely in French, English, and Arabic.',
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
  ],
  authors: [{ name: 'THODZ SOLUTIONS', url: SITE_URL }],
  creator: 'THODZ SOLUTIONS',
  publisher: 'THODZ SOLUTIONS',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'THODZ SOLUTIONS: Full-stack engineering studio',
    description: 'One technical partner. Every system you need.',
    url: SITE_URL,
    siteName: 'THODZ SOLUTIONS',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THODZ SOLUTIONS: Full-stack engineering studio',
    description: 'One technical partner. Every system you need.',
  },
};

export const viewport = {
  themeColor: '#0a0e13',
  colorScheme: 'dark',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: 'THODZ SOLUTIONS',
    url: SITE_URL,
    description:
      'Full-stack engineering studio delivering web, mobile, desktop, DevOps, security, AI/ML, automation, UI/UX, and technical consulting.',
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
