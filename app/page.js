import Link from 'next/link';
import { Button } from '@/components/core/Button';
import { Tag } from '@/components/core/Tag';
import { Icon } from '@/components/core/Icon';
import { ServiceCard } from '@/components/marketing/ServiceCard';
import { CaseStudyCard } from '@/components/marketing/CaseStudyCard';
import { ProcessStep } from '@/components/marketing/ProcessStep';
import { StatCard } from '@/components/marketing/StatCard';
import { SectionHead } from '@/components/marketing/SectionHead';
import { SERVICES, PROCESS, VALUES, CASE_STUDIES } from '@/lib/content';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <Work />
      <Process />
      <Values />
      <ContactCta />
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-grid" style={{ position: 'relative', padding: '160px 32px 96px', background: 'linear-gradient(180deg,var(--bg-0),var(--bg-1))', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', position: 'relative' }}>
        <div style={{ position: 'relative', maxWidth: 780, padding: '40px 44px' }}>
          <div style={{ position: 'absolute', top: -1, left: -1, width: 20, height: 20, borderTop: '2px solid var(--accent-primary)', borderLeft: '2px solid var(--accent-primary)' }} />
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: 20, height: 20, borderBottom: '2px solid var(--accent-primary)', borderRight: '2px solid var(--accent-primary)' }} />
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: 20 }}>Full-stack engineering studio</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-xl)', color: 'var(--fg-0)', lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--tracking-tight)', margin: '0 0 24px' }}>One technical partner. Every system you need.</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-l)', color: 'var(--fg-2)', lineHeight: 'var(--lh-relaxed)', margin: '0 0 36px', maxWidth: 600 }}>THODZ SOLUTIONS designs, builds, and operates web, mobile, desktop, and infrastructure systems for teams who need it done right the first time.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}><Button variant="primary" size="lg">Start a project</Button></Link>
            <Link href="/work" style={{ textDecoration: 'none' }}><Button variant="secondary" size="lg">View selected work</Button></Link>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: 64, paddingTop: 40, borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap', gap: 24 }}>
          <StatCard value="9" label="DISCIPLINES COVERED" />
          <StatCard value="FR·EN·AR" label="MULTILINGUAL DELIVERY" />
          <StatCard value="DZ" label="BASED · REMOTE-READY" />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" style={{ padding: '96px 32px', background: 'var(--bg-0)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHead eyebrow="Capabilities" title="Nine disciplines. One accountable team." sub="We staff full delivery teams, not point solutions. Every engagement can span as many of these as the system needs." />
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 48 }}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} index={String(i + 1).padStart(2, '0')} icon={<Icon name={s.icon} size={20} />} title={s.title} description={s.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  const featured = CASE_STUDIES.slice(0, 6);
  return (
    <section id="work" style={{ padding: '96px 32px', background: 'var(--bg-void)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHead eyebrow="Selected work" title="Recent engagements." sub="A look at what we’ve shipped. More case studies land here as engagements complete." />
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 40 }}>
          {featured.map((c) => (
            <Link key={c.slug} href={`/work/${c.slug}`} style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <CaseStudyCard {...c} />
            </Link>
          ))}
        </div>
        {CASE_STUDIES.length > featured.length && (
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <Link href="/work" style={{ textDecoration: 'none' }}><Button variant="secondary">See all work</Button></Link>
          </div>
        )}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" style={{ padding: '96px 32px', background: 'var(--bg-0)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionHead eyebrow="How we work" title="A process built for accountability." sub="Five stages, one team, no handoffs between strangers." />
        <div style={{ marginTop: 48 }}>
          {PROCESS.map((p, i) => (
            <ProcessStep key={p.title} index={String(i + 1).padStart(2, '0')} title={p.title} description={p.description} isLast={i === PROCESS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section id="values" style={{ padding: '96px 32px', background: 'var(--bg-void)', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHead eyebrow="Why choose us" title="Engineering credibility, not just delivery." sub="We publish runbooks, document architecture decisions, and stay reachable after launch." />
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 48 }}>
          {VALUES.map((v) => (
            <div key={v.title} style={{ background: 'var(--bg-1)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '28px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-heading-s)', color: 'var(--text-primary)', margin: '0 0 10px' }}>{v.title}</h3>
              <p style={{ fontSize: 'var(--text-body-s)', lineHeight: 'var(--lh-normal)', color: 'var(--text-secondary)', margin: 0 }}>{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section style={{ padding: '120px 32px', background: 'var(--bg-1)', borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: 16 }}>Get started</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-m)', color: 'var(--fg-0)', margin: '0 0 16px' }}>Tell us what you&rsquo;re building.</h2>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--fg-2)', fontSize: 'var(--text-body-l)', lineHeight: 'var(--lh-relaxed)', margin: '0 0 32px' }}>One call with an engineer, not a salesperson. We&rsquo;ll scope your project and reply within one business day.</p>
        <Link href="/contact" style={{ textDecoration: 'none' }}><Button variant="primary" size="lg">Start a project</Button></Link>
      </div>
    </section>
  );
}
