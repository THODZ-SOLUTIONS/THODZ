import Link from 'next/link';
import { Button } from '@/components/core/Button';
import { JsonLd } from '@/components/core/JsonLd';
import { SectionHead } from '@/components/marketing/SectionHead';
import { EngagementCard } from '@/components/marketing/EngagementCard';
import { Faq } from '@/components/marketing/Faq';
import { ENGAGEMENTS, FAQ } from '@/lib/content';
import { SITE_URL } from '@/lib/config';

export const metadata = {
  title: 'Pricing & engagement',
  description: 'How THODZ SOLUTIONS engagements are structured and billed: fixed-price projects, monthly retainers, support plans, and consulting. Plus who owns the code, what the contract covers, and what happens after launch.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing & engagement · THODZ SOLUTIONS',
    description: 'Four ways to work with us, and the contract terms behind them.',
    url: `${SITE_URL}/pricing`,
  },
};

export default function PricingPage() {
  return (
    <div style={{ background: 'var(--bg-0)' }}>
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

      <div className="bg-grid" style={{ padding: '80px 32px 56px', background: 'linear-gradient(180deg,var(--bg-1),var(--bg-0))', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHead
            eyebrow="Pricing & engagement"
            title="Four ways to work with us."
            sub="Every project is scoped and quoted before it starts, so you approve a number rather than watch one accumulate. These are the shapes those quotes take."
          />
        </div>
      </div>

      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 32px 24px' }}>
        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, alignItems: 'stretch' }}>
          {ENGAGEMENTS.map((e) => (
            <EngagementCard key={e.name} {...e} />
          ))}
        </div>
        <p style={{ marginTop: 28, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-mono-s)', color: 'var(--text-tertiary)', lineHeight: 'var(--lh-normal)', maxWidth: '70ch' }}>
          Not sure which one fits? Describe the problem and we&rsquo;ll tell you which of these it is, including when the answer is &ldquo;none of them, you don&rsquo;t need us for this.&rdquo;
        </p>
      </div>

      <div style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-void)', padding: '72px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHead
            eyebrow="The details"
            title="The questions worth asking before you sign."
            sub="Code ownership, billing, contracts, and what happens once the system is live."
          />
          <div style={{ marginTop: 40 }}>
            <Faq items={FAQ} />
          </div>
        </div>
      </div>

      <div style={{ padding: '96px 32px', textAlign: 'center', borderTop: '1px solid var(--border-subtle)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-m)', color: 'var(--fg-0)', margin: '0 0 16px' }}>Get a number, not a brochure.</h2>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--fg-2)', fontSize: 'var(--text-body-l)', lineHeight: 'var(--lh-relaxed)', margin: '0 auto 32px', maxWidth: 560 }}>
          Tell us what you&rsquo;re building and we&rsquo;ll come back within one business day with the engagement model that fits and what it would cost.
        </p>
        <Link href="/contact" style={{ textDecoration: 'none' }}><Button variant="primary" size="lg">Start a project</Button></Link>
      </div>
    </div>
  );
}
