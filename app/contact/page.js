export const metadata = {
  title: 'Contact',
  description: 'Tell THODZ SOLUTIONS about the system you need. We reply within one business day.',
};

import { ContactForm } from './ContactForm';

export default function ContactPage() {
  return (
    <div style={{ background: 'var(--bg-0)', minHeight: 600 }}>
      <div className="bg-grid" style={{ padding: '72px 32px 40px', background: 'linear-gradient(180deg,var(--bg-1),var(--bg-0))', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: 16 }}>Start a project</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-m)', color: 'var(--fg-0)', margin: 0 }}>Tell us about the system you need.</h1>
        </div>
      </div>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '48px 32px' }}>
        <ContactForm />
        <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-s)', color: 'var(--text-tertiary)' }}>Prefer email or phone?</span>
          <a href="mailto:support@thodz.com" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-m)', color: 'var(--accent-primary)', textDecoration: 'none' }}>support@thodz.com</a>
          <a href="tel:+213783853544" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-m)', color: 'var(--accent-primary)', textDecoration: 'none' }}>+213 783 85 35 44</a>
        </div>
      </div>
    </div>
  );
}
