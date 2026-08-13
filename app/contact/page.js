import { Icon } from '@/components/core/Icon';
import { ContactForm } from './ContactForm';
import { CONTACT, SITE_URL } from '@/lib/config';

export const metadata = {
  title: 'Contact',
  description: 'Tell THODZ SOLUTIONS about the system you need. Reach us by form, WhatsApp, email, or a booked call. We reply within one business day.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact · THODZ SOLUTIONS',
    description: 'One call with an engineer, not a salesperson. We reply within one business day.',
    url: `${SITE_URL}/contact`,
  },
};

const NEXT_STEPS = [
  { title: 'We read it', body: 'An engineer reads your message. Not a form-routing tool, and not a salesperson.' },
  { title: 'We reply in one business day', body: 'With first questions, an honest read on fit, and a proposed time to talk.' },
  { title: 'We scope it together', body: 'A call to pin down the problem, then a written scope and a number before anything is built.' },
];

export default function ContactPage() {
  return (
    <div style={{ background: 'var(--bg-0)', minHeight: 600 }}>
      <div className="bg-grid" style={{ padding: '72px 32px 40px', background: 'linear-gradient(180deg,var(--bg-1),var(--bg-0))', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: 16 }}>Start a project</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-m)', color: 'var(--fg-0)', margin: 0 }}>Tell us about the system you need.</h1>
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: '0 auto', padding: '40px 32px 48px' }}>
        <Channels />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '36px 0 32px' }}>
          <span style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>or send the details</span>
          <span style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
        </div>

        <ContactForm />

        <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--border-subtle)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: 20 }}>What happens next</div>
          <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 18 }}>
            {NEXT_STEPS.map((s, i) => (
              <li key={s.title} style={{ display: 'flex', gap: 16 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-mono-s)', color: 'var(--fg-4)', paddingTop: 2 }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-body-m)', color: 'var(--fg-1)', marginBottom: 3 }}>{s.title}</div>
                  <div style={{ fontSize: 'var(--text-body-s)', color: 'var(--text-secondary)', lineHeight: 'var(--lh-normal)' }}>{s.body}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

function Channels() {
  const channels = [
    CONTACT.bookingUrl && {
      icon: 'CalendarClock',
      label: CONTACT.bookingLabel,
      detail: 'Pick a slot that suits you',
      href: CONTACT.bookingUrl,
      external: true,
      primary: true,
    },
    {
      icon: 'MessageCircle',
      label: 'WhatsApp',
      detail: CONTACT.phoneDisplay,
      href: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi THODZ, I'd like to talk about a project.")}`,
      external: true,
    },
    {
      icon: 'Mail',
      label: 'Email',
      detail: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: 'Phone',
      label: 'Call',
      detail: CONTACT.phoneDisplay,
      href: `tel:${CONTACT.phoneE164}`,
    },
  ].filter(Boolean);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }} className="grid-2">
      {channels.map((c) => (
        <a
          key={c.label}
          href={c.href}
          {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '16px 18px',
            background: c.primary ? 'var(--bg-2)' : 'var(--bg-1)',
            border: `1px solid ${c.primary ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
            borderRadius: 'var(--radius-md)',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <span style={{ color: 'var(--accent-primary)', display: 'flex' }}><Icon name={c.icon} size={20} /></span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-body-m)', color: 'var(--fg-0)' }}>{c.label}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-mono-s)', color: 'var(--text-tertiary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.detail}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
