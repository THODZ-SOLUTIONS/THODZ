import { ImageResponse } from 'next/og';

export const alt = 'THODZ SOLUTIONS: one technical partner, every system you need';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// The share card. Built from the site's own tokens rather than a screenshot, so
// it stays sharp and readable at thumbnail size in a Slack or LinkedIn preview.
// System fonts only: no network fetch during the build.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0a0e13',
          backgroundImage:
            'linear-gradient(rgba(92,127,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(92,127,255,0.10) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          padding: 72,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 14, height: 14, background: '#5c7fff' }} />
          <div style={{ fontSize: 26, letterSpacing: 6, color: '#5c7fff', textTransform: 'uppercase' }}>
            THODZ SOLUTIONS
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 74, color: '#f3f6f8', lineHeight: 1.08, letterSpacing: -2, maxWidth: 940 }}>
            One technical partner. Every system you need.
          </div>
          <div style={{ fontSize: 30, color: '#aab6c0', maxWidth: 900, lineHeight: 1.4 }}>
            Web, mobile, desktop, and infrastructure, built and operated by one accountable team.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #1c242d', paddingTop: 28 }}>
          <div style={{ fontSize: 24, color: '#7c8892', letterSpacing: 2 }}>thodz.com</div>
          <div style={{ fontSize: 24, color: '#7c8892', letterSpacing: 2 }}>FR &middot; EN &middot; AR</div>
        </div>
      </div>
    ),
    size,
  );
}
