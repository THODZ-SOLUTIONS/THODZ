'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/core/Icon';
import { LOCALES, LOCALE_NAMES } from '@/lib/i18n/config';

// Language switcher. Swaps the locale segment of the current path, so the
// visitor stays on the page they're reading. The cookie makes the choice
// sticky for future un-prefixed visits (read by middleware.js).
//
// Two presentations of the same links:
//  - "menu" (default): a compact globe + code trigger that opens a dropdown.
//    Used in the desktop bar where horizontal space is scarce.
//  - "inline": all locales visible as a segmented control. Used in the mobile
//    menu, where a dropdown nested inside a menu is one tap too many and the
//    panel has room to show every option.
export function LocaleSwitcher({ locale, label, variant = 'menu' }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const pathname = usePathname() || `/${locale}`;
  const rest = pathname.replace(/^\/[^/]+/, '');

  function remember(l) {
    document.cookie = `NEXT_LOCALE=${l};path=/;max-age=31536000;samesite=lax`;
  }

  // Navigation (including same-page locale swaps) closes the menu.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    }
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  if (variant === 'inline') {
    return (
      <div className="locale-segmented" role="group" aria-label={label}>
        {LOCALES.map((l) => (
          <Link
            key={l}
            href={`/${l}${rest}`}
            lang={l}
            className={`locale-segmented-option${l === locale ? ' locale-segmented-option--active' : ''}`}
            aria-current={l === locale ? 'true' : undefined}
            onClick={() => remember(l)}
          >
            {LOCALE_NAMES[l]}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="locale-switcher" ref={rootRef}>
      <button
        type="button"
        className="locale-switcher-trigger"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name="Globe" size={15} aria-hidden="true" />
        <span className="locale-switcher-current">{locale.toUpperCase()}</span>
        <Icon name="ChevronDown" size={13} aria-hidden="true" className="locale-switcher-chevron" />
      </button>

      {open && (
        <div className="locale-switcher-menu" role="group" aria-label={label}>
          {LOCALES.map((l) => (
            <Link
              key={l}
              href={`/${l}${rest}`}
              lang={l}
              className={`locale-switcher-option${l === locale ? ' locale-switcher-option--active' : ''}`}
              aria-current={l === locale ? 'true' : undefined}
              onClick={() => {
                remember(l);
                setOpen(false);
              }}
            >
              <span>{LOCALE_NAMES[l]}</span>
              {l === locale && <Icon name="Check" size={14} aria-hidden="true" />}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
