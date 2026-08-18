import Link from 'next/link';
import { JsonLd } from '@/components/core/JsonLd';
import { SectionHead } from '@/components/marketing/SectionHead';
import { EngagementCard } from '@/components/marketing/EngagementCard';
import { Faq } from '@/components/marketing/Faq';
import { SITE_URL } from '@/lib/config';
import { localeAlternates } from '@/lib/i18n/config';
import { getDictionary, getContent } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale).pricing;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: localeAlternates('/pricing'),
    openGraph: {
      title: `${t.metaTitle} · THODZ SOLUTIONS`,
      description: t.ogDescription,
      url: `${SITE_URL}/${locale}/pricing`,
    },
  };
}

export default async function PricingPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const t = dict.pricing;
  const { ENGAGEMENTS, FAQ } = getContent(locale);

  return (
    <div>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />

      <div className="page-head bg-grid">
        <div className="container">
          <SectionHead eyebrow={t.headEyebrow} title={t.headTitle} sub={t.headSub} />
        </div>
      </div>

      <div className="container" style={{ paddingBlock: '56px 24px' }}>
        <div className="grid-4" style={{ alignItems: 'stretch' }}>
          {ENGAGEMENTS.map((e) => (
            <EngagementCard key={e.name} {...e} t={dict.engagementCard} />
          ))}
        </div>
        <p
          style={{
            marginTop: 28,
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-mono-s)',
            color: 'var(--text-tertiary)',
            lineHeight: 'var(--lh-normal)',
            maxWidth: '70ch',
          }}
        >
          {t.unsure}
        </p>
      </div>

      <div className="section section--sunken">
        <div className="container container--lg">
          <SectionHead eyebrow={t.faqEyebrow} title={t.faqTitle} sub={t.faqSub} />
          <div style={{ marginTop: 40 }}>
            <Faq items={FAQ} />
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container container--sm">
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaBody}</p>
          <div className="cta-actions">
            <Link href={`/${locale}/contact`} className="btn btn--primary btn--lg">
              {t.ctaButton}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
