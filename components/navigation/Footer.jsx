import Link from 'next/link';
import Image from 'next/image';
import { CONTACT, SOCIALS } from '@/lib/config';

export function Footer() {
  const company = [
    { label: 'Services', href: '/#services' },
    { label: 'Work', href: '/work' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const contact = [
    { label: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { label: CONTACT.phoneDisplay, href: `tel:${CONTACT.phoneE164}` },
    { label: 'WhatsApp', href: `https://wa.me/${CONTACT.whatsapp}` },
  ];

  const socials = SOCIALS.filter((s) => s.href);

  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-void)', padding: '56px 32px 32px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 40 }}>
        <div style={{ maxWidth: 320 }}>
          <Image src="/assets/logo-full-dark.svg" alt="THODZ" width={240} height={64} style={{ height: 38, width: 'auto', marginBottom: 18 }} />
          <p style={{ fontSize: 'var(--text-body-s)', color: 'var(--text-tertiary)', lineHeight: 'var(--lh-normal)', margin: '0 0 14px' }}>
            A full-stack engineering studio. Web, mobile, desktop, and infrastructure systems, built and operated by one accountable team.
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-mono-s)', color: 'var(--fg-4)', margin: 0 }}>
            Algeria (UTC+1) &middot; working remotely
          </p>
        </div>

        <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap' }}>
          <FooterCol title="Company" links={company} />
          <FooterCol title="Contact" links={contact} />
          {socials.length > 0 && <FooterCol title="Elsewhere" links={socials} />}
        </div>
      </div>

      <div style={{ maxWidth: 'var(--container-max)', margin: '40px auto 0', paddingTop: 24, borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', color: 'var(--text-tertiary)' }}>
          &copy; {new Date().getFullYear()} THODZ SOLUTIONS. All rights reserved.
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', color: 'var(--text-tertiary)' }}>thodz.com</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 14 }}>
        {title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map((l) => {
          const external = l.href.startsWith('http');
          const style = { color: 'var(--text-secondary)', fontSize: 'var(--text-body-s)', textDecoration: 'none' };
          return external ? (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={style}>{l.label}</a>
          ) : (
            <Link key={l.label} href={l.href} style={style}>{l.label}</Link>
          );
        })}
      </div>
    </div>
  );
}
