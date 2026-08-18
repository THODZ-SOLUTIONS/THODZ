'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/core/Icon';
import { ThemeToggle } from '@/components/core/ThemeToggle';
import { LocaleSwitcher } from '@/components/navigation/LocaleSwitcher';

// Anchor links (/en#services) are never "current"; real routes are, including
// their subpaths so /en/work/some-case keeps Work highlighted.
function isActive(href, pathname) {
  if (href.includes('#')) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLogo({ className }) {
  return (
    <>
      <Image
        src="/assets/logo-full.svg"
        alt="THODZ"
        width={240}
        height={64}
        priority
        className={`logo-light ${className}`.trim()}
        style={{ height: 34, width: 'auto' }}
      />
      <Image
        src="/assets/logo-full-dark.svg"
        alt="THODZ"
        width={240}
        height={64}
        priority
        className={`logo-dark ${className}`.trim()}
        style={{ height: 34, width: 'auto' }}
      />
    </>
  );
}

export function Navbar({ locale, t }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: t.services, href: `/${locale}#services` },
    { label: t.work, href: `/${locale}/work` },
    { label: t.process, href: `/${locale}#process` },
    { label: t.pricing, href: `/${locale}/pricing` },
    { label: t.about, href: `/${locale}/about` },
  ];

  // Any navigation closes the menu, including same-page anchor jumps.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled((prev) => {
        const next = window.scrollY > 8;
        return next === prev ? prev : next;
      });
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <Link href={`/${locale}`} className="nav-logo">
          <NavLogo className="" />
        </Link>

        <div className="nav-links-desktop">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`nav-link${isActive(l.href, pathname) ? ' nav-link--active' : ''}`}
              aria-current={isActive(l.href, pathname) ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
          <LocaleSwitcher locale={locale} label={t.languageLabel} />
          <ThemeToggle />
          <Link href={`/${locale}/contact`} className="btn btn--primary btn--sm">
            {t.startProject}
          </Link>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-mobile"
          aria-label={open ? t.closeMenu : t.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'X' : 'Menu'} size={18} />
        </button>
      </div>

      {open && (
        <div id="nav-mobile" className="nav-mobile">
          {links.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setOpen(false)} className="nav-link">
              {l.label}
            </Link>
          ))}
          <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <LocaleSwitcher locale={locale} label={t.languageLabel} />
            <ThemeToggle />
          </div>
          <Link href={`/${locale}/contact`} onClick={() => setOpen(false)} className="btn btn--primary btn--md">
            {t.startProject}
          </Link>
        </div>
      )}
    </nav>
  );
}
