import Link from 'next/link';
import { Button } from '@/components/core/Button';
import { SERVICES } from '@/lib/content';

export const metadata = {
  title: 'About',
  description: 'THODZ SOLUTIONS is a full-stack engineering studio: a one-stop technical partner for teams that need it done right the first time.',
};

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--bg-0)' }}>
      <div className="bg-grid" style={{ padding: '96px 32px 72px', background: 'linear-gradient(180deg,var(--bg-1),var(--bg-0))', borderBottom: '1px solid var(--border-subtle)', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-l)', color: 'var(--fg-0)', maxWidth: 760, margin: '0 auto', letterSpacing: 'var(--tracking-tight)' }}>
          THODZ SOLUTIONS builds the systems your roadmap needs, and stays on call after launch.
        </h1>
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '72px 32px', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--fg-2)', fontSize: 'var(--text-body-l)', lineHeight: 'var(--lh-relaxed)', margin: 0 }}>
          We&rsquo;re a full-stack engineering studio: one team covering web, mobile, desktop, DevOps, security, AI/ML, automation, UI/UX, and technical consulting, so you scope a system once, not nine vendor relationships.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--fg-2)', fontSize: 'var(--text-body-l)', lineHeight: 'var(--lh-relaxed)', margin: 0 }}>
          We work remotely with clients across timezones, and deliver in French, English, and Arabic when a project calls for it. Every engagement gets a documented architecture, a runbook, and an engineer who stays reachable after the system ships, not a handoff to a support queue.
        </p>
      </div>

      <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '72px 32px', background: 'var(--bg-void)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: 16 }}>What we cover</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {SERVICES.map((s) => (
              <span key={s.title} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-s)', color: 'var(--text-secondary)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '8px 14px' }}>{s.title}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '96px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-m)', color: 'var(--fg-0)', margin: '0 0 24px' }}>Have a system to build?</h2>
        <Link href="/contact" style={{ textDecoration: 'none' }}><Button variant="primary" size="lg">Start a project</Button></Link>
      </div>
    </div>
  );
}
