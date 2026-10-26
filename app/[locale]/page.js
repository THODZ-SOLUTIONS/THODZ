import Link from 'next/link';
import { Icon } from '@/components/core/Icon';
import { JsonLd } from '@/components/core/JsonLd';
import { Reveal } from '@/components/core/Reveal';
import { HeroArt } from '@/components/home/HeroArt';
import { ServiceMarquee } from '@/components/home/ServiceMarquee';
import { ProblemPicker } from '@/components/home/ProblemPicker';
import { ShippedCarousel, ShippedGrid } from '@/components/home/ShippedCarousel';
import { PricingPicker } from '@/components/home/PricingPicker';
import { Faq } from '@/components/marketing/Faq';
import { Testimonial } from '@/components/marketing/Testimonial';
import { ContactForm } from '@/components/forms/ContactForm';
import { CONTACT, SITE_URL, visible } from '@/lib/config';
import { FEATURED_CASE_STUDIES } from '@/lib/content';
import { getDictionary, getContent } from '@/lib/i18n';

export default async function HomePage({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const content = getContent(locale);

  // FEATURED_CASE_STUDIES is ordered and pre-filtered in lib/content.js, but
  // it holds the English entries; re-resolve against the localized list so
  // the carousel shows translated titles and before/after copy.
  const bySlug = new Map(content.CASE_STUDIES.map((c) => [c.slug, c]));
  const featured = FEATURED_CASE_STUDIES.map((c) => bySlug.get(c.slug) || c);

  return (
    <div>
      {/* The site itself, so the three locale trees are understood as one
          property rather than three unrelated sites. */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'THODZ SOLUTIONS',
          url: `${SITE_URL}/${locale}`,
          inLanguage: locale,
          publisher: { '@type': 'Organization', name: 'THODZ SOLUTIONS', url: SITE_URL },
        }}
      />
      {/* The FAQ is answered in full on this page, so the markup belongs
          here too, not only on /pricing. */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: content.FAQ.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />

      <Hero locale={locale} t={t.home} />
      <ServiceMarquee services={content.SERVICES} />
      <Problems locale={locale} t={t.home} content={content} />
      <Shipped locale={locale} t={t.home} content={content} featured={featured} />
      <OpenSource t={t.home} content={content} />
      <Proof t={t.home} content={content} />
      <Timeline t={t.home} content={content} />
      <Pricing locale={locale} t={t.home} tCard={t.engagementCard} content={content} />
      <FaqSection locale={locale} t={t.home} content={content} />
      <Start locale={locale} t={t.home} tForm={t.form} />
    </div>
  );
}

/** Section wrapper: index label, title, optional lede. */
function SectionHead({ index, label, title, sub }) {
  return (
    <div className="home-head">
      <div>
        <div className="section-index">
          <b>{index}</b> · {label}
        </div>
        <h2 className="home-h2">{title}</h2>
      </div>
      {sub && <p className="home-lede">{sub}</p>}
    </div>
  );
}

function Hero({ locale, t }) {
  return (
    <section className="hero-v2">
      <div className="container">
        <div className="hero-v2-grid">
          <div>
            <div className="hero-v2-eyebrow">{t.heroEyebrow}</div>
            <h1 className="hero-v2-title">{t.heroTitle}</h1>
            <p className="hero-v2-sub">{t.heroSub}</p>
            <div className="hero-v2-actions">
              {/* No calendar is configured (CONTACT.bookingUrl is null), so
                  the primary CTA goes to the contact form rather than a
                  dead booking link. */}
              <Link
                href={CONTACT.bookingUrl || `/${locale}/contact`}
                className="btn btn--primary btn--lg"
              >
                {t.heroCtaPrimary}
                <Icon name="ArrowRight" size={17} aria-hidden="true" />
              </Link>
              <Link href={`/${locale}/work`} className="btn btn--secondary btn--lg">
                {t.heroCtaSecondary}
              </Link>
            </div>
            <div className="hero-v2-assurances">
              {[t.heroAssuranceReply, t.heroAssurancePrice].map((a) => (
                <div className="hero-v2-assurance" key={a}>
                  <Icon name="Check" size={16} aria-hidden="true" />
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-v2-art">
            <HeroArt />
          </div>
        </div>
      </div>
    </section>
  );
}

function Problems({ locale, t, content }) {
  return (
    <section id="problems" className="section">
      <div className="container">
        <Reveal>
          <SectionHead index="01" label={t.problemLabel} title={t.problemTitle} sub={t.problemSub} />
        </Reveal>
        <Reveal delay={100}>
          <ProblemPicker
            locale={locale}
            problems={content.PROBLEMS}
            disciplineLabels={content.DISCIPLINE_LABELS}
            disciplineKeys={content.DISCIPLINE_KEYS}
            t={t}
          />
        </Reveal>
      </div>
    </section>
  );
}

function Shipped({ locale, t, content, featured }) {
  // The carousel leads with the projects that have screenshots; the grid
  // below shows the next four of everything else.
  const featuredSlugs = new Set(featured.map((c) => c.slug));
  // Lead the grid with projects that have a screenshot; the sort is stable, so
  // within each group the curated order in lib/content.js is preserved.
  const rest = content.CASE_STUDIES.filter((c) => !featuredSlugs.has(c.slug))
    .sort((a, b) => (b.images?.length ? 1 : 0) - (a.images?.length ? 1 : 0))
    .slice(0, 4);

  return (
    <section id="work" className="section section--sunken">
      <div className="container">
        <Reveal>
          <ShippedCarousel
            locale={locale}
            studies={featured}
            t={t}
            heading={
              <div>
                <div className="section-index">
                  <b>02</b> · {t.shippedLabel}
                </div>
                <h2 className="home-h2">{t.shippedTitle}</h2>
              </div>
            }
          />
        </Reveal>
        {rest.length > 0 && (
          <Reveal delay={150}>
            <ShippedGrid locale={locale} studies={rest} />
          </Reveal>
        )}
        <div className="shipped-foot">
          <Link href={`/${locale}/work`} className="btn btn--primary btn--md">
            {t.viewAllProjects}
            <Icon name="ArrowRight" size={16} aria-hidden="true" />
          </Link>
          <span className="shipped-foot-tags">
            {content.SERVICES.slice(0, 6).map((s) => s.title).join(' · ')}
          </span>
        </div>
      </div>
    </section>
  );
}

// Packages the team maintains on pub.dev. Every claim here is checkable by
// following the link, which is the point of the section.
function OpenSource({ t, content }) {
  const pkgs = content.OPEN_SOURCE;
  if (!pkgs?.length) return null;

  return (
    <section id="open-source" className="section">
      <div className="container">
        <Reveal>
          <div className="home-head">
            <div>
              <div className="section-index">{t.openSourceLabel}</div>
              <h2 className="home-h2">{t.openSourceTitle}</h2>
            </div>
            <p className="home-lede">{t.openSourceSub}</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="oss-grid">
            {pkgs.map((p) => (
              <a
                key={p.name}
                className="oss-card"
                href={p.pubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="oss-tagline">{p.tagline}</h3>
                <p className="oss-desc">{p.description}</p>
                <div className="oss-foot">
                  <span className="oss-name">{p.name}</span>
                  <span aria-hidden="true">·</span>
                  <span className="oss-link">
                    {t.openSourceCta}
                    <Icon name="ArrowUpRight" size={15} aria-hidden="true" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
        {t.openSourceClosing && (
          <Reveal delay={150}>
            <p className="oss-closing">{t.openSourceClosing}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

// Real, approved quotes only. Both lists are placeholder-gated in
// lib/config.js, so in production this section renders nothing at all
// rather than an empty shell with a quotation mark in it.
function Proof({ t, content }) {
  const quotes = visible(content.TESTIMONIALS);
  if (!quotes.length) return null;
  return (
    <section className="section">
      <div className="container">
        <div className="home-eyebrow" style={{ marginBottom: 'var(--space-6)' }}>
          {t.proofEyebrow}
        </div>
        <div className="grid-2">
          {quotes.map((q) => (
            <Testimonial key={q.name + q.quote.slice(0, 12)} {...q} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline({ t, content }) {
  return (
    <section id="process" className="section">
      <div className="container">
        <Reveal>
          <SectionHead
            index="03"
            label={t.timelineLabel}
            title={t.timelineTitle}
            sub={t.timelineSub}
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="timeline-grid">
            {content.TIMELINE.map((step) => (
              <article className="timeline-card" key={step.title}>
                <div className="timeline-when">{step.when}</div>
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-text">{step.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pricing({ locale, t, tCard, content }) {
  return (
    <section id="pricing" className="section section--sunken">
      <div className="container">
        <Reveal>
          <SectionHead
            index="04"
            label={t.pricingLabel}
            title={t.pricingTitle}
            sub={t.pricingSub}
          />
        </Reveal>
        <Reveal delay={100}>
          <PricingPicker
            locale={locale}
            engagements={content.ENGAGEMENTS}
            t={t}
            tCard={tCard}
          />
        </Reveal>
        <div style={{ marginTop: 'var(--space-8)', textAlign: 'center' }}>
          <Link href={`/${locale}/pricing`} className="btn btn--secondary btn--md">
            {t.pricingCta}
          </Link>
        </div>
      </div>
    </section>
  );
}

function FaqSection({ locale, t, content }) {
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-aside">
            <div className="section-index">
              <b>05</b> · {t.faqLabel}
            </div>
            <h2 className="home-h2">{t.faqTitle}</h2>
            <p className="home-lede" style={{ marginTop: 'var(--space-5)' }}>
              {t.faqSub}{' '}
              <a href={`https://wa.me/${CONTACT.whatsapp}`} rel="noopener noreferrer">
                WhatsApp
              </a>
              .
            </p>
          </div>
          <Faq items={content.FAQ} />
        </div>
      </div>
    </section>
  );
}

function Start({ locale, t, tForm }) {
  const channels = [
    CONTACT.bookingUrl && {
      icon: 'CalendarDays',
      title: CONTACT.bookingLabel,
      sub: t.channelBookSub,
      href: CONTACT.bookingUrl,
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      sub: CONTACT.phoneDisplay,
      href: `https://wa.me/${CONTACT.whatsapp}`,
    },
    {
      icon: 'Mail',
      title: t.channelEmail,
      sub: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
  ].filter(Boolean);

  return (
    <section id="contact" className="section section--sunken">
      <div className="container">
        <Reveal>
          <div className="section-index">
            <b>06</b> · {t.startLabel}
          </div>
          <h2 className="home-h2" style={{ maxWidth: '22ch' }}>
            {t.startTitle}
          </h2>
        </Reveal>

        <div className="start-layout">
          <div className="start-panel">
            <ContactForm locale={locale} t={tForm} />
          </div>

          <aside>
            <div className="start-aside-label">{t.preferToTalk}</div>
            {channels.map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="start-channel"
                rel="noopener noreferrer"
              >
                <span className="start-channel-icon">
                  <Icon name={c.icon} size={18} aria-hidden="true" />
                </span>
                <span>
                  <span className="start-channel-title">{c.title}</span>
                  <br />
                  <span className="start-channel-sub">{c.sub}</span>
                </span>
              </a>
            ))}
            <p className="start-note">{t.startNote}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
