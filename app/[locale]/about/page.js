import Link from 'next/link';
import { SectionHead } from '@/components/marketing/SectionHead';
import { TeamCard } from '@/components/marketing/TeamCard';
import { SITE_URL } from '@/lib/config';
import { localeAlternates } from '@/lib/i18n/config';
import { getDictionary, getContent } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale).about;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: localeAlternates('/about'),
    openGraph: {
      title: `${t.metaTitle} · THODZ SOLUTIONS`,
      description: t.ogDescription,
      url: `${SITE_URL}/${locale}/about`,
    },
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale).about;
  const { SERVICES, TEAM } = getContent(locale);

  return (
    <div>
      <div className="page-head bg-grid" style={{ padding: '96px 0 72px', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'var(--text-display-l)', maxWidth: 760, marginInline: 'auto' }}>
            {t.heroTitle}
          </h1>
        </div>
      </div>

      <div
        className="container container--md"
        style={{ paddingBlock: 72, display: 'flex', flexDirection: 'column', gap: 28 }}
      >
        <p className="case-hero-summary" style={{ maxWidth: 'none', margin: 0 }}>
          {t.intro1}
        </p>
        <p className="case-hero-summary" style={{ maxWidth: 'none', margin: 0 }}>
          {t.intro2}
        </p>
      </div>

      {TEAM.length > 0 && (
        <div className="section section--sunken">
          <div className="container container--lg">
            <SectionHead
              eyebrow={t.teamEyebrow}
              title={TEAM.length === 1 ? t.teamTitleSingle : t.teamTitlePlural}
              sub={t.teamSub}
            />
            <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 20 }}>
              {TEAM.map((m) => (
                <TeamCard key={m.name} {...m} />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="section">
        <div className="container">
          <div className="eyebrow">{t.coverEyebrow}</div>
          <div className="chip-row">
            {SERVICES.map((s) => (
              <span key={s.title} className="chip chip--lg">
                {s.title}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container container--sm">
          <h2 style={{ marginBottom: 24 }}>{t.ctaTitle}</h2>
          <div className="cta-actions">
            <Link href={`/${locale}/contact`} className="btn btn--primary btn--lg">
              {t.ctaPrimary}
            </Link>
            <Link href={`/${locale}/pricing`} className="btn btn--secondary btn--lg">
              {t.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
