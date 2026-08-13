import Image from 'next/image';

// Client logos. A client with no logo file falls back to a mono wordmark, so
// the strip stays usable before any image assets exist.
export function LogoStrip({ clients = [] }) {
  if (!clients.length) return null;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px 44px',
      }}
    >
      {clients.map((c) => (
        <div key={c.name} style={{ display: 'flex', alignItems: 'center', height: 32, opacity: c.placeholder ? 0.5 : 0.8 }}>
          {c.logo ? (
            <Image src={c.logo} alt={c.name} width={160} height={32} style={{ height: 28, width: 'auto' }} />
          ) : (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-body-s)',
                letterSpacing: 'var(--tracking-label)',
                textTransform: 'uppercase',
                color: 'var(--text-tertiary)',
                border: '1px dashed var(--border-default)',
                borderRadius: 'var(--radius-sm)',
                padding: '6px 16px',
              }}
            >
              {c.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
