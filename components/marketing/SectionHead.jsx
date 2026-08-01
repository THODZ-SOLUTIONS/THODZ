export function SectionHead({ eyebrow, title, sub }) {
  return (
    <div style={{ maxWidth: 640 }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: 12 }}>{eyebrow}</div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-m)', color: 'var(--fg-0)', margin: '0 0 12px', letterSpacing: 'var(--tracking-tight)' }}>{title}</h2>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--fg-2)', fontSize: 'var(--text-body-m)', lineHeight: 'var(--lh-normal)', margin: 0 }}>{sub}</p>
    </div>
  );
}
