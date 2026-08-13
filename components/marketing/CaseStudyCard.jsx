'use client';
import React from 'react';
import Image from 'next/image';

export function CaseStudyCard({ tag, title, summary, stack = [], metric, images = [] }) {
  const cover = images[0];

  return (
    <div
      style={{
        background: 'var(--bg-1)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'all var(--duration-base) var(--ease-standard)',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
    >
      {/* Real screenshot when we have one, the grid motif when we don't. The
          tag lives in the body below, so nothing has to stay legible over an
          arbitrarily bright screenshot. */}
      <div
        className={cover ? undefined : 'bg-grid'}
        style={{
          position: 'relative',
          height: 160,
          background: 'linear-gradient(160deg,var(--bg-2),var(--bg-1))',
          borderBottom: '1px solid var(--border-subtle)',
          overflow: 'hidden',
        }}
      >
        {cover && (
          <>
            <Image
              src={cover.src}
              alt=""
              width={cover.w}
              height={cover.h}
              sizes="(max-width: 600px) 100vw, (max-width: 860px) 50vw, 400px"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
            />
            {/* Light screenshots would otherwise glare against the dark page. */}
            <div
              aria-hidden="true"
              style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(7,9,12,0.12) 0%,rgba(7,9,12,0.45) 100%)' }}
            />
          </>
        )}
      </div>

      <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-label)',
            letterSpacing: 'var(--tracking-label)',
            textTransform: 'uppercase',
            color: 'var(--accent-primary)',
          }}
        >
          {tag}
        </span>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-heading-s)', color: 'var(--text-primary)', margin: 0, marginTop: -4 }}>{title}</h3>
        <p style={{ fontSize: 'var(--text-body-s)', color: 'var(--text-secondary)', lineHeight: 'var(--lh-normal)', margin: 0 }}>{summary}</p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 'auto' }}>
          {stack.map((s) => (
            <span
              key={s}
              style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-tertiary)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '2px 7px' }}
            >
              {s}
            </span>
          ))}
        </div>
        {metric && (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-s)', color: 'var(--accent-primary)', marginTop: 4 }}>{metric}</div>
        )}
      </div>
    </div>
  );
}
