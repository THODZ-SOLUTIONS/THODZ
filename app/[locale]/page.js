import Link from 'next/link';
import { Icon } from '@/components/core/Icon';
import { Reveal } from '@/components/core/Reveal';
import { ServiceCard } from '@/components/marketing/ServiceCard';
import { CaseStudyCard } from '@/components/marketing/CaseStudyCard';
import { ProcessStep } from '@/components/marketing/ProcessStep';
import { StatCard } from '@/components/marketing/StatCard';
import { SectionHead } from '@/components/marketing/SectionHead';
import { Testimonial } from '@/components/marketing/Testimonial';
import { LogoStrip } from '@/components/marketing/LogoStrip';
import { EngagementCard } from '@/components/marketing/EngagementCard';
import { visible } from '@/lib/config';
import { getDictionary, getContent } from '@/lib/i18n';

export default async function HomePage({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const content = getContent(locale);

  return (
    <div>
      <Hero locale={locale} t={t.home} content={content} />
      <Services t={t.home} content={content} />
      <Work locale={locale} t={t.home} content={content} />
      <Proof t={t.home} content={content} />
      <Process t={t.home} content={content} />
      <Engagement locale={locale} t={t.home} tCard={t.engagementCard} content={content} />
      <Values t={t.home} content={content} />
      <ContactCta locale={locale} t={t.home} />
    </div>
  );
}

function Hero({ locale, t, content }) {
  return (
    <section className="hero bg-grid">
      <div className="container">
        <div className="hero-frame">
          <span className="hero-tick hero-tick--tl" aria-hidden="true" />
          <span className="hero-tick hero-tick--br" aria-hidden="true" />
          <div className="hero-eyebrow hero-rise">{t.heroEyebrow}</div>
          <h1 className="hero-rise" style={{ '--rise-delay': '80ms' }}>
            {t.heroTitle}
          </h1>
          <p className="hero-sub hero-rise" style={{ '--rise-delay': '160ms' }}>
            {t.heroSub}
          </p>
          <div className="hero-actions hero-rise" style={{ '--rise-delay': '240ms' }}>
            <Link href={`/${locale}/contact`} className="btn btn--primary btn--lg">
              {t.heroCtaPrimary}
            </Link>
            <Link href={`/${locale}/work`} className="btn btn--secondary btn--lg">
              {t.heroCtaSecondary}
            </Link>
          </div>
        </div>
        <div className="hero-stats hero-rise" style={{ '--rise-delay': '360ms' }}>
          <StatCard value={String(content.SERVICES.length)} label={t.statDisciplines} />
          <StatCard value={String(content.CASE_STUDIES.length)} label={t.statProjects} />
          <StatCard value={t.statLanguagesValue} label={t.statLanguages} />
          <StatCard value={t.statReplyValue} label={t.statReply} />
        </div>
      </div>
    </section>
  );
}

function Services({ t, content }) {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow={t.servicesEyebrow} title={t.servicesTitle} sub={t.servicesSub} />
        </Reveal>
        <Reveal delay={100}>
          <div className="grid-3" style={{ marginTop: 48 }}>
            {content.SERVICES.map((s, i) => (
              <ServiceCard
                key={s.title}
                index={String(i + 1).padStart(2, '0')}
                icon={<Icon name={s.icon} size={20} />}
                title={s.title}
                description={s.description}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Work({ locale, t, content }) {
  // Lead with the projects we can actually show. Sort is stable, so within
  // each group the curated order in lib/content.js is preserved.
  const featured = [...content.CASE_STUDIES]
    .sort((a, b) => (b.images?.length ? 1 : 0) - (a.images?.length ? 1 : 0))
    .slice(0, 6);
  return (
    <section id="work" className="section section--sunken">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow={t.workEyebrow} title={t.workTitle} sub={t.workSub} />
        </Reveal>
        <Reveal delay={100}>
          <div className="grid-3" style={{ marginTop: 40 }}>
            {featured.map((c) => (
              <Link key={c.slug} href={`/${locale}/work/${c.slug}`} style={{ textDecoration: 'none' }}>
                <CaseStudyCard {...c} />
              </Link>
            ))}
          </div>
        </Reveal>
        {content.CASE_STUDIES.length > featured.length && (
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <Link href={`/${locale}/work`} className="btn btn--secondary btn--md">
              {t.workCta}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

// Client logos and quotes. Both lists are empty in production until real,
// approved entries exist, and the whole section disappears with them rather
// than shipping an empty shell.
function Proof({ t, content }) {
  const quotes = visible(content.TESTIMONIALS);
  const clients = visible(content.CLIENTS);
  if (!quotes.length && !clients.length) return null;

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow={t.proofEyebrow} title={t.proofTitle} sub={t.proofSub} />
        </Reveal>
        {quotes.length > 0 && (
          <Reveal delay={100}>
            <div className="grid-2" style={{ marginTop: 44 }}>
              {quotes.map((q) => (
                <Testimonial key={q.name + q.quote.slice(0, 12)} {...q} />
              ))}
            </div>
          </Reveal>
        )}
        {clients.length > 0 && (
          <div style={{ marginTop: 56, paddingTop: 40, borderTop: '1px solid var(--border-subtle)' }}>
            <div className="eyebrow" style={{ textAlign: 'center', color: 'var(--text-tertiary)', marginBottom: 28 }}>
              {t.proofClients}
            </div>
            <LogoStrip clients={clients} />
          </div>
        )}
      </div>
    </section>
  );
}

function Engagement({ locale, t, tCard, content }) {
  return (
    <section id="pricing" className="section section--sunken">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow={t.engagementEyebrow} title={t.engagementTitle} sub={t.engagementSub} />
        </Reveal>
        <Reveal delay={100}>
          <div className="grid-3" style={{ marginTop: 44, alignItems: 'stretch' }}>
            {content.ENGAGEMENTS.slice(0, 3).map((e) => (
              <EngagementCard key={e.name} {...e} t={tCard} />
            ))}
          </div>
        </Reveal>
        <div style={{ marginTop: 36, textAlign: 'center' }}>
          <Link href={`/${locale}/pricing`} className="btn btn--secondary btn--md">
            {t.engagementCta}
          </Link>
        </div>
      </div>
    </section>
  );
}

function Process({ t, content }) {
  return (
    <section id="process" className="section">
      <div className="container container--lg">
        <Reveal>
          <SectionHead eyebrow={t.processEyebrow} title={t.processTitle} sub={t.processSub} />
        </Reveal>
        <Reveal delay={100}>
          <div style={{ marginTop: 48 }}>
            {content.PROCESS.map((p, i) => (
              <ProcessStep
                key={p.title}
                index={String(i + 1).padStart(2, '0')}
                title={p.title}
                description={p.description}
                isLast={i === content.PROCESS.length - 1}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Values({ t, content }) {
  return (
    <section id="values" className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <Reveal>
          <SectionHead eyebrow={t.valuesEyebrow} title={t.valuesTitle} sub={t.valuesSub} />
        </Reveal>
        <Reveal delay={100}>
          <div className="grid-3" style={{ marginTop: 48 }}>
            {content.VALUES.map((v) => (
              <div key={v.title} className="card service-card">
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCta({ locale, t }) {
  return (
    <section className="cta-section cta-section--raised">
      <div className="container container--sm">
        <div className="eyebrow">{t.ctaEyebrow}</div>
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaBody}</p>
        <div className="cta-actions">
          <Link href={`/${locale}/contact`} className="btn btn--primary btn--lg">
            {t.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  );
}
