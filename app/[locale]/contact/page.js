import { Icon } from '@/components/core/Icon';
import { ContactForm } from './ContactForm';
import { CONTACT, SITE_URL } from '@/lib/config';
import { localeAlternates } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale).contact;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: localeAlternates('/contact'),
    openGraph: {
      title: `${t.metaTitle} · THODZ SOLUTIONS`,
      description: t.ogDescription,
      url: `${SITE_URL}/${locale}/contact`,
    },
  };
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const t = dict.contact;

  return (
    <div style={{ minHeight: 600 }}>
      <div className="page-head bg-grid" style={{ padding: '72px 0 40px' }}>
        <div className="container container--sm">
          <div className="eyebrow">{t.eyebrow}</div>
          <h1 style={{ fontSize: 'var(--text-display-m)' }}>{t.title}</h1>
        </div>
      </div>

      <div className="container container--sm" style={{ paddingBlock: '40px 48px' }}>
        <Channels t={t} />

        <div className="divider-label">
          <span>{t.divider}</span>
        </div>

        <ContactForm locale={locale} t={dict.form} />

        <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--border-subtle)' }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>{t.nextEyebrow}</div>
          <ol className="next-steps">
            {t.nextSteps.map((s, i) => (
              <li key={s.title}>
                <span className="next-steps-index">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div className="next-steps-title">{s.title}</div>
                  <div className="next-steps-body">{s.body}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

function Channels({ t }) {
  const channels = [
    CONTACT.bookingUrl && {
      icon: 'CalendarClock',
      label: CONTACT.bookingLabel,
      detail: t.bookingDetail,
      href: CONTACT.bookingUrl,
      external: true,
      primary: true,
    },
    {
      icon: 'MessageCircle',
      label: t.whatsappLabel,
      detail: CONTACT.phoneDisplay,
      href: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(t.whatsappPrefill)}`,
      external: true,
    },
    {
      icon: 'Mail',
      label: t.emailLabel,
      detail: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: 'Phone',
      label: t.callLabel,
      detail: CONTACT.phoneDisplay,
      href: `tel:${CONTACT.phoneE164}`,
    },
  ].filter(Boolean);

  return (
    <div className="grid-2" style={{ gap: 12 }}>
      {channels.map((c) => (
        <a
          key={c.label}
          href={c.href}
          {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
          className={`channel-card${c.primary ? ' channel-card--primary' : ''}`}
        >
          <span className="channel-icon">
            <Icon name={c.icon} size={20} />
          </span>
          <span className="channel-text">
            <span className="channel-label">{c.label}</span>
            <span className="channel-detail">{c.detail}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
