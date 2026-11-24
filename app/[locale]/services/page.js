import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/core/Icon';
import { JsonLd } from '@/components/core/JsonLd';
import { PageHead } from '@/components/marketing/PageHead';
import { SITE_URL } from '@/lib/config';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { SERVICE_LOCALES } from '@/lib/services';
import { getDictionary, getContent } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale).services;
  return buildMetadata({
    locale,
    path: '/services',
    title: t.metaTitle,
    description: t.metaDescription,
    shareDescription: t.ogDescription,
    locales: SERVICE_LOCALES,
  });
}

export default async function ServicesIndexPage({ params }) {
  const { locale } = await params;
  // The locale gate lives here rather than in generateStaticParams because
  // this route has no dynamic segment of its own: it inherits all eight
  // locales from the parent. A locale without translated service copy 404s
  // instead of serving English under a translated URL.
  if (!SERVICE_LOCALES.includes(locale)) notFound();

  const t = getDictionary(locale).services;
  const services = getContent(locale).SERVICE_PAGES;

  return (
    <div>
      <JsonLd
        data={breadcrumbSchema(locale, getDictionary(locale).caseStudy.breadcrumbHome, [
          { name: getDictionary(locale).nav.services, path: '/services' },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: t.metaTitle,
          itemListElement: services.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: s.title,
            url: `${SITE_URL}/${locale}/services/${s.slug}`,
          })),
        }}
      />

      <PageHead eyebrow={t.headEyebrow} title={t.headTitle} sub={t.headSub} />

      <section className="section section--flush-top">
        <div className="container">
          <div className="grid-3">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/${locale}/services/${s.slug}`}
                className="card card--interactive service-card service-card--link"
              >
                <div className="service-card-top">
                  <div className="service-card-icon">
                    <Icon name={s.icon} size={22} />
                  </div>
                  <span className="service-card-index">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2>{s.title}</h2>
                <p>{s.summary}</p>
                <span className="service-card-more">
                  {t.readMore} <Icon name="ArrowRight" size={14} className="icon-flip-rtl" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
