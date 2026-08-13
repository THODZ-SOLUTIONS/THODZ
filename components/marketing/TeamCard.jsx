import Image from 'next/image';

// The person who will actually answer your email.
export function TeamCard({ name, role, photo, bio, credentials = [], links = [] }) {
  const live = links.filter((l) => l.href);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '180px 1fr',
        gap: 36,
        alignItems: 'start',
        background: 'var(--bg-1)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: 32,
      }}
      className="team-card"
    >
      <div style={{ position: 'relative', width: 180, aspectRatio: '1 / 1', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-default)', background: 'var(--bg-2)' }}>
        {photo ? (
          <Image src={photo} alt={name} width={360} height={360} sizes="180px" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-display-m)', color: 'var(--fg-4)' }}>
            {name.split(' ').map((p) => p[0]).join('')}
          </span>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-heading-l)', color: 'var(--fg-0)', margin: '0 0 4px', letterSpacing: 'var(--tracking-tight)' }}>{name}</h3>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-mono-s)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--accent-primary)' }}>{role}</div>
        </div>

        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-m)', lineHeight: 'var(--lh-relaxed)', color: 'var(--fg-2)' }}>{bio}</p>

        {credentials.length > 0 && (
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, borderTop: '1px solid var(--border-subtle)', paddingTop: 16 }}>
            {credentials.map((c) => (
              <li key={c} style={{ display: 'flex', gap: 10, fontSize: 'var(--text-body-s)', color: 'var(--text-secondary)', lineHeight: 'var(--lh-normal)' }}>
                <span aria-hidden="true" style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>&mdash;</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        )}

        {live.length > 0 && (
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {live.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-mono-s)', color: 'var(--accent-primary)', textDecoration: 'none' }}
              >
                {`${l.label} →`}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
