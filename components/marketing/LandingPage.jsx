import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/core/Icon';
import { JsonLd } from '@/components/core/JsonLd';
import { SITE_URL } from '@/lib/config';
import { buildMetadata } from '@/lib/seo';
import { LANDING_LOCALES } from '@/lib/landing';
import { getDictionary, getContent } from '@/lib/i18n';

// Both landing pages render through here. They differ only in content, so a
// shared component keeps the metadata, the schema and the locale gate in one
// place rather than copied into two route files that will drift.

export async function landingMetadata(slug, params) {
  const { locale } = await params;
  const page = getContent(locale).LANDING_PAGES.find((p) => p.slug === slug);
  if (!page) return {};
  return buildMetadata({
    locale,
    path: `/${slug}`,
    title: page.metaTitle,
    description: page.metaDescription,
    locales: LANDING_LOCALES,
  });
}

export async function LandingPage({ slug, params }) {
  const { locale } = await params;
  // The gate lives here rather than in generateStaticParams: these routes
  // have no dynamic segment of their own, so they inherit all eight locales
  // from the parent. A locale without translated copy 404s instead of
  // serving English under a translated URL.
  if (!LANDING_LOCALES.includes(locale)) notFound();

  const t = getDictionary(locale).landing;
  const content = getContent(locale);
  const page = content.LANDING_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();

  // Only case studies that exist and are visible can be cited; a broken proof
  // link is worse than no proof section.
  const proof = (page.proof || [])
    .map((s) => content.CASE_STUDIES.find((c) => c.slug === s))
    .filter(Boolean);

  return (
    <div>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: t.breadcrumbHome, item: `${SITE_URL}/${locale}` },
            { '@type': 'ListItem', position: 2, name: page.title },
          ],
        }}
      />

      {/* The FAQ is answered in full on the page, so the markup belongs with
          it — same source as the visible list, so the two cannot diverge. */}
      {page.faq?.length > 0 && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: page.faq.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }}
        />
      )}

      <div className="page-head bg-grid">
        <div className="container container--lg">
          <div className="eyebrow">{t.eyebrow}</div>
          <h1 style={{ marginBottom: 20 }}>{page.title}</h1>
          <p className="case-hero-summary">{page.summary}</p>
          <div className="btn-row" style={{ marginTop: 28 }}>
            <Link href={`/${locale}/contact`} className="btn btn--primary btn--md">
              {t.startProject}
            </Link>
            <Link href={`/${locale}/work`} className="btn btn--secondary btn--md">
              {t.seeWork}
            </Link>
          </div>
        </div>
      </div>

      <div className="container container--lg">
        <div className="case-body">
          {page.facts?.length > 0 && (
            <div className="case-section">
              <h2 style={{ marginBottom: 16 }}>{t.atAGlance}</h2>
              <dl className="fact-list">
                {page.facts.map((f) => (
                  <div key={f.label} className="fact-row">
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {page.sections.map((s) => (
            <div key={s.heading} className="case-section">
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
            </div>
          ))}

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

          {page.faq?.length > 0 && (
            <div className="case-section">
              <h2 style={{ marginBottom: 20 }}>{t.faq}</h2>
              <div className="landing-faq">
                {page.faq.map((f) => (
                  <div key={f.q} className="landing-faq-item">
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="case-next">
            <div>
              <div className="case-next-label">{t.ctaLabel}</div>
              <div className="case-next-title">{t.ctaTitle}</div>
            </div>
            <Link href={`/${locale}/contact`} className="btn btn--primary btn--md">
              {t.startProject}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
