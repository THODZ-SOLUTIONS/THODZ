'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/core/Icon';
import { LOCALES, LOCALE_NAMES } from '@/lib/i18n/config';

const LOCALE_COOKIE = 'NEXT_LOCALE';

function hasPinnedLocale() {
  try {
    return document.cookie.split('; ').some((c) => c.startsWith(`${LOCALE_COOKIE}=`));
  } catch {
    return false;
  }
}

// Language switcher. Swaps the locale segment of the current path, so the
// visitor stays on the page they're reading. The cookie makes the choice
// sticky for future un-prefixed visits (read by middleware.js).
//
// "Automatic" clears that cookie rather than setting it, handing the decision
// back to middleware.js and its Accept-Language negotiation. Without it a
// visitor who once picked a language could never return to following their
// browser. It needs a full navigation, not a client route change, so the
// request actually passes through middleware again.
//
// Two presentations of the same links:
//  - "menu" (default): a compact globe + code trigger that opens a dropdown.
//    Used in the desktop bar where horizontal space is scarce.
//  - "inline": all locales visible as a segmented control. Used in the mobile
//    menu, where a dropdown nested inside a menu is one tap too many and the
//    panel has room to show every option.
export function LocaleSwitcher({ locale, label, autoLabel, autoHint, variant = 'menu' }) {
  const [open, setOpen] = useState(false);
  // null until mounted: the cookie is only readable on the client, and the
  // server cannot know whether this visitor pinned a language.
  const [pinned, setPinned] = useState(null);
  const rootRef = useRef(null);
  const pathname = usePathname() || `/${locale}`;
  const rest = pathname.replace(/^\/[^/]+/, '');

  useEffect(() => {
    setPinned(hasPinnedLocale());
  }, [pathname]);

  function remember(l) {
    document.cookie = `${LOCALE_COOKIE}=${l};path=/;max-age=31536000;samesite=lax`;
    setPinned(true);
  }

  function chooseAuto() {
    document.cookie = `${LOCALE_COOKIE}=;path=/;max-age=0;samesite=lax`;
    setPinned(false);
    setOpen(false);
    window.location.assign(rest || '/');
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
      <div className="locale-inline">
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
        <button
          type="button"
          className={`locale-auto${pinned === false ? ' locale-auto--active' : ''}`}
          aria-pressed={pinned === false}
          onClick={chooseAuto}
        >
          <Icon name="Monitor" size={13} aria-hidden="true" />
          <span>{autoLabel}</span>
        </button>
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
          <button
            type="button"
            className={`locale-switcher-option locale-switcher-option--auto${
              pinned === false ? ' locale-switcher-option--active' : ''
            }`}
            aria-current={pinned === false ? 'true' : undefined}
            onClick={chooseAuto}
          >
            <span>
              {autoLabel}
              <span className="locale-switcher-hint">{autoHint}</span>
            </span>
            {pinned === false && <Icon name="Check" size={14} aria-hidden="true" />}
          </button>

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
              {/* The tick marks the pinned choice; the highlight marks the
                  language actually shown. Under Automatic they differ. */}
              {pinned && l === locale && <Icon name="Check" size={14} aria-hidden="true" />}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
