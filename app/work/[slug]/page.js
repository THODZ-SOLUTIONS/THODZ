import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/core/Icon';
import { Button } from '@/components/core/Button';
import { CASE_STUDIES } from '@/lib/content';

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  if (!study) return {};
  return { title: study.title, description: study.summary };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  if (!study) notFound();

  return (
    <div style={{ background: 'var(--bg-0)' }}>
      <div className="bg-grid" style={{ padding: '80px 32px 56px', background: 'linear-gradient(180deg,var(--bg-1),var(--bg-0))', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <Link href="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-s)', marginBottom: 28, textDecoration: 'none' }}>
            <Icon name="ArrowLeft" size={14} /> Back to work
          </Link>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: 16 }}>{study.tag}</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-l)', color: 'var(--fg-0)', margin: '0 0 20px', letterSpacing: 'var(--tracking-tight)' }}>{study.title}</h1>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--fg-2)', fontSize: 'var(--text-body-l)', lineHeight: 'var(--lh-relaxed)', maxWidth: 640, margin: '0 0 24px' }}>{study.summary}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {study.stack.map((s) => (
              <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-mono-s)', color: 'var(--fg-2)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '4px 10px' }}>{s}</span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 840, margin: '0 auto', padding: '56px 32px', display: 'flex', flexDirection: 'column', gap: 40 }}>
        <div style={{ display: 'flex', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '24px 0' }}>
          <div style={{ flex: 1, borderLeft: '1px solid var(--border-subtle)', paddingLeft: 24 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-display-m)', color: 'var(--accent-primary)' }}>{study.metric}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', color: 'var(--fg-3)', letterSpacing: 'var(--tracking-wide)', marginTop: 4 }}>HEADLINE RESULT</div>
          </div>
        </div>
        {[
          ['The challenge', study.challenge],
          ['The approach', study.approach],
          ['The result', study.result],
        ].map(([h, b]) => (
          <div key={h}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-heading-m)', color: 'var(--fg-0)', margin: '0 0 10px' }}>{h}</h3>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--fg-2)', fontSize: 'var(--text-body-m)', lineHeight: 'var(--lh-relaxed)', margin: 0 }}>{b}</p>
          </div>
        ))}
        <div style={{ textAlign: 'center', paddingTop: 24 }}>
          <Link href="/work" style={{ textDecoration: 'none' }}><Button variant="primary">See more work</Button></Link>
        </div>
      </div>
    </div>
  );
}
