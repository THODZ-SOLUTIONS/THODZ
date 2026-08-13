import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/core/Icon';
import { Button } from '@/components/core/Button';
import { JsonLd } from '@/components/core/JsonLd';
import { Screenshot } from '@/components/marketing/Screenshot';
import { Testimonial } from '@/components/marketing/Testimonial';
import { CASE_STUDIES } from '@/lib/content';
import { SITE_URL } from '@/lib/config';

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  if (!study) return {};
  const image = study.images?.[0]?.src;
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      title: study.title,
      description: study.summary,
      url: `${SITE_URL}/work/${study.slug}`,
      type: 'article',
      images: image ? [{ url: image }] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  if (!study) notFound();

  const [lead, ...rest] = study.images || [];
  const index = CASE_STUDIES.indexOf(study);
  const next = CASE_STUDIES[(index + 1) % CASE_STUDIES.length];

  return (
    <div style={{ background: 'var(--bg-0)' }}>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: study.title,
          description: study.summary,
          url: `${SITE_URL}/work/${study.slug}`,
          about: study.category,
          image: study.images?.map((i) => `${SITE_URL}${i.src}`),
          creator: { '@type': 'Organization', name: 'THODZ SOLUTIONS', url: SITE_URL },
        }}
      />

      <div className="bg-grid" style={{ padding: '80px 32px 56px', background: 'linear-gradient(180deg,var(--bg-1),var(--bg-0))', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Link href="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-s)', marginBottom: 28, textDecoration: 'none' }}>
            <Icon name="ArrowLeft" size={14} /> Back to work
          </Link>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: 16 }}>{study.tag}</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-l)', color: 'var(--fg-0)', margin: '0 0 20px', letterSpacing: 'var(--tracking-tight)' }}>{study.title}</h1>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--fg-2)', fontSize: 'var(--text-body-l)', lineHeight: 'var(--lh-relaxed)', maxWidth: 640, margin: '0 0 24px' }}>{study.summary}</p>
          {study.client && (
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-mono-s)', color: 'var(--text-tertiary)', marginBottom: 20 }}>
              <span style={{ color: 'var(--fg-4)' }}>Client / </span>{study.client}
            </div>
          )}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {study.stack.map((s) => (
              <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-mono-s)', color: 'var(--fg-2)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '4px 10px' }}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* The work itself, before anyone has to read about it. */}
      {lead && (
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 32px 0' }}>
          <Screenshot image={lead} priority height={420} sizes="(max-width: 960px) 100vw, 900px" />
        </div>
      )}

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 32px', display: 'flex', flexDirection: 'column', gap: 44 }}>
        <div style={{ display: 'flex', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '24px 0' }}>
          <div style={{ flex: 1, borderLeft: '1px solid var(--border-subtle)', paddingLeft: 24 }}>
            {/* A short metric gets display treatment; a sentence-length one
                would just wrap badly at that size. */}
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: study.metric.length > 24 ? 'var(--text-heading-l)' : 'var(--text-display-m)', color: 'var(--accent-primary)', lineHeight: 'var(--lh-snug)' }}>{study.metric}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', color: 'var(--fg-3)', letterSpacing: 'var(--tracking-wide)', marginTop: 6 }}>HEADLINE RESULT</div>
          </div>
        </div>

        {[
          ['The challenge', study.challenge],
          ['The approach', study.approach],
          ['The result', study.result],
        ].map(([h, b]) => (
          <div key={h}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-heading-m)', color: 'var(--fg-0)', margin: '0 0 10px' }}>{h}</h2>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--fg-2)', fontSize: 'var(--text-body-m)', lineHeight: 'var(--lh-relaxed)', margin: 0, maxWidth: '68ch' }}>{b}</p>
          </div>
        ))}

        {study.outcomes?.length > 0 && (
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-heading-m)', color: 'var(--fg-0)', margin: '0 0 16px' }}>What shipped</h2>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '12px 32px' }} className="grid-2">
              {study.outcomes.map((o) => (
                <li key={o} style={{ display: 'flex', gap: 12, fontSize: 'var(--text-body-s)', color: 'var(--text-secondary)', lineHeight: 'var(--lh-normal)', borderTop: '1px solid var(--border-subtle)', paddingTop: 12 }}>
                  <span aria-hidden="true" style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>&rarr;</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {rest.length > 0 && (
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-heading-m)', color: 'var(--fg-0)', margin: '0 0 20px' }}>Inside the build</h2>
            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: rest.length === 1 ? '1fr' : 'repeat(2,1fr)', gap: 24 }}>
              {rest.map((img) => (
                <Screenshot key={img.src} image={img} height={rest.length === 1 ? 380 : 240} sizes="(max-width: 860px) 100vw, 440px" />
              ))}
            </div>
          </div>
        )}

        {study.quote && (
          <Testimonial quote={study.quote.text} name={study.quote.name} title={study.quote.title} />
        )}

        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <Link href={`/work/${next.slug}`} style={{ textDecoration: 'none', maxWidth: 380 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 6 }}>Next case study</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-heading-s)', color: 'var(--accent-primary)' }}>{`${next.title} →`}</div>
          </Link>
          <Link href="/contact" style={{ textDecoration: 'none' }}><Button variant="primary">Start a project</Button></Link>
        </div>
      </div>
    </div>
  );
}
