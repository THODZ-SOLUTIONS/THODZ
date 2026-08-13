import Link from 'next/link';
import { CASE_STUDIES } from '@/lib/content';

// A client quote. Placeholder entries are visually flagged so a sample can
// never be mistaken for a real endorsement while previewing locally.
export function Testimonial({ quote, name, title, project, placeholder = false }) {
  const study = project ? CASE_STUDIES.find((c) => c.slug === project) : null;

  return (
    <figure
      style={{
        margin: 0,
        background: 'var(--bg-1)',
        border: '1px solid var(--border-subtle)',
        borderLeft: '2px solid var(--accent-primary)',
        borderRadius: 'var(--radius-lg)',
        padding: '28px 30px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        height: '100%',
      }}
    >
      {placeholder && <PlaceholderFlag />}
      <blockquote
        style={{
          margin: 0,
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-body-l)',
          lineHeight: 'var(--lh-relaxed)',
          color: 'var(--fg-1)',
        }}
      >
        {quote}
      </blockquote>
      <figcaption style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-body-m)', color: 'var(--fg-0)' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-mono-s)', color: 'var(--text-tertiary)' }}>{title}</span>
        {study && (
          <Link
            href={`/work/${study.slug}`}
            style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-mono-s)', color: 'var(--accent-primary)', textDecoration: 'none', marginTop: 6 }}
          >
            {`Read the ${study.title} case study →`}
          </Link>
        )}
      </figcaption>
    </figure>
  );
}

function PlaceholderFlag() {
  return (
    <span
      style={{
        alignSelf: 'flex-start',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-label)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: 'var(--status-warning)',
        border: '1px solid var(--status-warning)',
        borderRadius: 'var(--radius-sm)',
        padding: '3px 8px',
      }}
    >
      Placeholder · not a real quote
    </span>
  );
}
