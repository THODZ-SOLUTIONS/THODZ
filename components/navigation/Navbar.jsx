'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/core/Icon';

const LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/#process' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];

const linkStyle = {
  color: 'var(--text-secondary)',
  fontSize: 'var(--text-body-s)',
  textDecoration: 'none',
  fontFamily: 'var(--font-body)',
};

const ctaStyle = {
  fontFamily: 'var(--font-body)',
  fontWeight: 'var(--weight-medium)',
  fontSize: 'var(--text-body-s)',
  borderRadius: 'var(--radius-sm)',
  padding: '10px 18px',
  background: 'var(--accent-primary)',
  color: 'var(--text-inverse)',
  textDecoration: 'none',
  border: '1px solid var(--accent-primary)',
};

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  // Any navigation closes the menu, including same-page anchor jumps.
  React.useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: '1px solid var(--border-subtle)',
        background: 'rgba(10,14,19,0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 32px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/assets/logo-full-dark.svg" alt="THODZ" width={240} height={64} priority style={{ height: 34, width: 'auto' }} />
        </Link>

        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="nav-links-desktop">
          {LINKS.map((l) => (
            <Link key={l.label} href={l.href} style={linkStyle}>{l.label}</Link>
          ))}
          <Link href="/contact" style={ctaStyle}>Start a project</Link>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-mobile"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            background: 'transparent',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-primary)',
            cursor: 'pointer',
          }}
        >
          <Icon name={open ? 'X' : 'Menu'} size={18} />
        </button>
      </div>

      {open && (
        <div
          id="nav-mobile"
          className="nav-mobile"
          style={{ borderTop: '1px solid var(--border-subtle)', padding: '12px 32px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}
        >
          {LINKS.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setOpen(false)} style={{ ...linkStyle, padding: '12px 0', borderBottom: '1px solid var(--border-subtle)' }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} style={{ ...ctaStyle, marginTop: 14, textAlign: 'center' }}>Start a project</Link>
        </div>
      )}
    </nav>
  );
}
