import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/core/Icon';
import { JsonLd } from '@/components/core/JsonLd';
import { Screenshot } from '@/components/marketing/Screenshot';
import { Testimonial } from '@/components/marketing/Testimonial';
import { CASE_STUDIES } from '@/lib/content';
import { SITE_URL } from '@/lib/config';
import { localeAlternates } from '@/lib/i18n/config';
import { getDictionary, getContent } from '@/lib/i18n';

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const study = getContent(locale).CASE_STUDIES.find((c) => c.slug === slug);
  if (!study) return {};
  const image = study.images?.[0]?.src;
  return {
    title: study.title,
    description: study.summary,
    alternates: localeAlternates(`/work/${study.slug}`),
    openGraph: {
      title: study.title,
      description: study.summary,
      url: `${SITE_URL}/${locale}/work/${study.slug}`,
      type: 'article',
      images: image ? [{ url: image }] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { locale, slug } = await params;
  const t = getDictionary(locale).caseStudy;
  const studies = getContent(locale).CASE_STUDIES;
  const study = studies.find((c) => c.slug === slug);
  if (!study) notFound();

  const [lead, ...rest] = study.images || [];
  const index = studies.indexOf(study);
  const next = studies[(index + 1) % studies.length];

  return (
    <div>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: study.title,
          description: study.summary,
          url: `${SITE_URL}/${locale}/work/${study.slug}`,
          about: study.category,
          image: study.images?.map((i) => `${SITE_URL}${i.src}`),
          creator: { '@type': 'Organization', name: 'THODZ SOLUTIONS', url: SITE_URL },
        }}
      />

      <div className="page-head bg-grid">
        <div className="container container--lg">
          <Link href={`/${locale}/work`} className="back-link">
            <Icon name="ArrowLeft" size={14} className="icon-flip-rtl" /> {t.back}
          </Link>
          <div className="eyebrow">{study.tag}</div>
          <h1 style={{ marginBottom: 20 }}>{study.title}</h1>
          <p className="case-hero-summary">{study.summary}</p>
          {study.client && (
            <div className="case-client">
              <span className="case-client-prefix">{t.clientPrefix}</span>
              {study.client}
            </div>
          )}
          <div className="chip-row">
            {study.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* The work itself, before anyone has to read about it. */}
      {lead && (
        <div className="container container--lg" style={{ paddingTop: 48 }}>
          <Screenshot image={lead} priority height={420} sizes="(max-width: 960px) 100vw, 900px" />
        </div>
      )}

      <div className="container container--lg">
        <div className="case-body">
          <div className="case-metric-band">
            <div className="case-metric">
              {/* A short metric gets display treatment; a sentence-length one
                  would just wrap badly at that size. */}
              <div className={`case-metric-value${study.metric.length > 24 ? ' case-metric-value--long' : ''}`}>
                {study.metric}
              </div>
              <div className="case-metric-label">{t.headlineResult}</div>
            </div>
          </div>

          {[
            [t.challenge, study.challenge],
            [t.approach, study.approach],
            [t.result, study.result],
          ].map(([h, b]) => (
            <div key={h} className="case-section">
              <h2>{h}</h2>
              <p>{b}</p>
            </div>
          ))}

          {study.outcomes?.length > 0 && (
            <div className="case-section">
              <h2 style={{ marginBottom: 16 }}>{t.whatShipped}</h2>
              <ul className="grid-2 outcome-list">
                {study.outcomes.map((o) => (
                  <li key={o}>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {rest.length > 0 && (
            <div className="case-section">
              <h2 style={{ marginBottom: 20 }}>{t.insideBuild}</h2>
              <div className={rest.length === 1 ? '' : 'grid-2'} style={{ gap: 24 }}>
                {rest.map((img) => (
                  <Screenshot
                    key={img.src}
                    image={img}
                    height={rest.length === 1 ? 380 : 240}
                    sizes="(max-width: 860px) 100vw, 440px"
                  />
                ))}
              </div>
            </div>
          )}

          {study.quote && (
            <Testimonial quote={study.quote.text} name={study.quote.name} title={study.quote.title} />
          )}

          <div className="case-next">
            <Link href={`/${locale}/work/${next.slug}`} className="case-next-link">
              <div className="case-next-label">{t.nextCase}</div>
              <div className="case-next-title">{`${next.title} ${t.nextArrow}`}</div>
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
