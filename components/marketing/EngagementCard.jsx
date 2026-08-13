import { SHOW_PLACEHOLDERS } from '@/lib/config';

// One engagement model, laid out like a spec sheet rather than a SaaS pricing
// tier: what it suits, how it's billed, and exactly what's inside it.
export function EngagementCard({ name, startingAt, placeholderPrice, bestFor, billing, includes = [], highlight = false }) {
  // A real floor wins. Otherwise show the sample figure only behind the
  // placeholder gate, and an honest "scoped per project" in production.
  const price = startingAt || (SHOW_PLACEHOLDERS ? placeholderPrice : null);
  const isPlaceholderPrice = !startingAt && Boolean(price);

  return (
    <div
      style={{
        background: highlight ? 'var(--bg-2)' : 'var(--bg-1)',
        border: `1px solid ${highlight ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-lg)',
        padding: '28px 26px',
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        height: '100%',
      }}
    >
      <div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-heading-m)', color: 'var(--fg-0)', margin: '0 0 8px' }}>{name}</h3>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-body-m)',
            color: price ? 'var(--accent-primary)' : 'var(--text-tertiary)',
          }}
        >
          {price || 'Scoped per project'}
          {isPlaceholderPrice && (
            <span style={{ color: 'var(--status-warning)', fontSize: 'var(--text-label)', marginLeft: 8, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase' }}>
              placeholder
            </span>
          )}
        </div>
      </div>

      <Row label="Best for" value={bestFor} />
      <Row label="Billing" value={billing} />

      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 16 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 12 }}>
          Includes
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
          {includes.map((line) => (
            <li key={line} style={{ display: 'flex', gap: 10, fontSize: 'var(--text-body-s)', color: 'var(--text-secondary)', lineHeight: 'var(--lh-normal)' }}>
              <span aria-hidden="true" style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', lineHeight: 'var(--lh-normal)' }}>&mdash;</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 6 }}>
        {label}
      </div>
      <p style={{ margin: 0, fontSize: 'var(--text-body-s)', color: 'var(--text-secondary)', lineHeight: 'var(--lh-normal)' }}>{value}</p>
    </div>
  );
}
