import Image from 'next/image';

// Client logos. A client with no logo file falls back to a mono wordmark, so
// the strip stays usable before any image assets exist.
export function LogoStrip({ clients = [] }) {
  if (!clients.length) return null;

  return (
    <div className="logo-strip">
      {clients.map((c) => (
        <div
          key={c.name}
          className={`logo-strip-item${c.placeholder ? ' logo-strip-item--placeholder' : ''}`}
        >
          {c.logo ? (
            <Image src={c.logo} alt={c.name} width={160} height={32} style={{ height: 28, width: 'auto' }} />
          ) : (
            <span className="logo-strip-wordmark">{c.name}</span>
          )}
        </div>
      ))}
    </div>
  );
}
