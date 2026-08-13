import Image from 'next/image';

// A real product screenshot in a capture frame: hairline border, accent corner
// brackets carried over from the hero, and a mono caption bar underneath.
//
// Full-page captures (`tall`) are clipped to a readable height and faded out at
// the bottom rather than squashed, so the frame reads as the top of a long page
// instead of a distorted image.
export function Screenshot({ image, priority = false, height = 340, sizes = '(max-width: 900px) 100vw, 900px' }) {
  if (!image) return null;
  const { src, w, h, alt, caption, tall } = image;

  return (
    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
      {/* The brackets sit on this wrapper, not on the clipping box below, so
          the rounded corners can't crop them. */}
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'relative',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-1)',
            overflow: 'hidden',
            height,
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={w}
            height={h}
            priority={priority}
            sizes={sizes}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
            }}
          />
          {tall && (
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 'auto 0 0 0',
                height: 72,
                background: 'linear-gradient(180deg,transparent,var(--bg-void))',
                opacity: 0.85,
              }}
            />
          )}
        </div>
        <Brackets />
      </div>
      {caption && (
        <figcaption
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-mono-s)',
            color: 'var(--text-tertiary)',
            lineHeight: 'var(--lh-normal)',
            marginTop: 10,
            display: 'flex',
            gap: 8,
          }}
        >
          <span aria-hidden="true" style={{ color: 'var(--accent-primary)' }}>/</span>
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}

// The hero's corner-bracket motif, reused to frame captured work.
function Brackets() {
  const arm = { position: 'absolute', width: 16, height: 16, pointerEvents: 'none' };
  return (
    <>
      <span
        aria-hidden="true"
        style={{ ...arm, top: -1, left: -1, borderTop: '2px solid var(--accent-primary)', borderLeft: '2px solid var(--accent-primary)' }}
      />
      <span
        aria-hidden="true"
        style={{ ...arm, bottom: -1, right: -1, borderBottom: '2px solid var(--accent-primary)', borderRight: '2px solid var(--accent-primary)' }}
      />
    </>
  );
}
