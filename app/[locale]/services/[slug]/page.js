import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/core/Icon';
import { JsonLd } from '@/components/core/JsonLd';
import { SITE_URL } from '@/lib/config';
import { pageOpenGraph } from '@/lib/seo';
import { SERVICE_PAGES, SERVICE_LOCALES } from '@/lib/services';
import { localeAlternatesIn } from '@/lib/i18n/config';
import { getDictionary, getContent } from '@/lib/i18n';

// Returns complete {locale, slug} pairs rather than slugs alone, so the
// locale gate lives here: only SERVICE_LOCALES produce routes, and a request
// for /de/services/devops is simply not a route. (Returning bare slugs and
// reading the parent's locale from the argument produced zero pages under
// Next 16 + Turbopack, which is why the pairs are spelled out.)
export function generateStaticParams() {
  return SERVICE_LOCALES.flatMap((locale) =>
    SERVICE_PAGES.map((s) => ({ locale, slug: s.slug })),
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const service = getContent(locale).SERVICE_PAGES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: localeAlternatesIn(SERVICE_LOCALES, `/services/${slug}`, locale),
    ...pageOpenGraph({
      locale,
      path: `/services/${slug}`,
      title: `${service.metaTitle} · THODZ SOLUTIONS`,
      description: service.metaDescription,
    }),
  };
}

export default async function ServicePage({ params }) {
  const { locale, slug } = await params;
  if (!SERVICE_LOCALES.includes(locale)) notFound();

  const t = getDictionary(locale).services;
  const content = getContent(locale);
  const service = content.SERVICE_PAGES.find((s) => s.slug === slug);
  if (!service) notFound();

  // Only case studies that actually exist and are visible can be cited; a
  // broken proof link is worse than no proof section.
  const proof = (service.proof || [])
    .map((s) => content.CASE_STUDIES.find((c) => c.slug === s))
    .filter(Boolean);

  const index = content.SERVICE_PAGES.findIndex((s) => s.slug === slug);
  const next = content.SERVICE_PAGES[(index + 1) % content.SERVICE_PAGES.length];

  return (
    <div>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${SITE_URL}/${locale}/services/${slug}#service`,
          name: service.title,
          serviceType: service.metaTitle,
          description: service.summary,
          url: `${SITE_URL}/${locale}/services/${slug}`,
          // Points at the ProfessionalService node the layout already
          // publishes, rather than restating the organisation on every page.
          provider: { '@id': `${SITE_URL}/#organization` },
          areaServed: ['DZ', 'FR', 'EU', 'MENA', 'Worldwide'],
        }}
      />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.breadcrumbHome, item: `${SITE_URL}/${locale}` },
            {
              '@type': 'ListItem',
              position: 2,
              name: t.breadcrumbServices,
              item: `${SITE_URL}/${locale}/services`,
            },
            { '@type': 'ListItem', position: 3, name: service.title },
          ],
        }}
      />

      <div className="page-head bg-grid">
        <div className="container container--lg">
          <Link href={`/${locale}/services`} className="back-link">
            <Icon name="ArrowLeft" size={14} className="icon-flip-rtl" /> {t.back}
          </Link>
          <div className="eyebrow">{t.breadcrumbServices}</div>
          <h1 style={{ marginBottom: 20 }}>{service.title}</h1>
          <p className="case-hero-summary">{service.summary}</p>
          <div className="chip-row">
            {service.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container container--lg">
        <div className="case-body">
          {[
            [t.problem, service.problem],
            [t.approach, service.approach],
            [t.delivery, service.delivery],
          ].map(([h, b]) => (
            <div key={h} className="case-section">
              <h2>{h}</h2>
              <p>{b}</p>
            </div>
          ))}

          {service.outcomes?.length > 0 && (
            <div className="case-section">
              <h2 style={{ marginBottom: 16 }}>{t.outcomes}</h2>
              <ul className="grid-2 outcome-list">
                {service.outcomes.map((o) => (
                  <li key={o}>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {proof.length > 0 && (
            <div className="case-section">
              <h2 style={{ marginBottom: 20 }}>{t.proof}</h2>
              <div className="proof-list">
                {proof.map((c) => (
                  <Link key={c.slug} href={`/${locale}/work/${c.slug}`} className="proof-item">
                    <span className="proof-item-title">{c.title}</span>
                    <span className="proof-item-link">
                      {t.readCase} <Icon name="ArrowRight" size={13} className="icon-flip-rtl" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="case-next">
            <Link href={`/${locale}/services/${next.slug}`} className="case-next-link">
              <div className="case-next-label">{t.breadcrumbServices}</div>
              <div className="case-next-title">{`${next.title} →`}</div>
            </Link>
            <Link href={`/${locale}/contact`} className="btn btn--primary btn--md">
              {t.startProject}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
