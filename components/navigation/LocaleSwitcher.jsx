'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/core/Icon';
import { LOCALES, LOCALE_NAMES } from '@/lib/i18n/config';

/**
 * Language switcher: a dropdown that swaps the locale segment of the current
 * path, so the visitor stays on the page they're reading. The cookie makes
 * the choice sticky for future un-prefixed visits (read by middleware.js).
 *
 * A menu rather than a <select>: the options are navigations, so they have to
 * be real links — crawlable, and openable in a new tab. Keyboard handling is
 * the usual menu-button contract (arrows, Home/End, Escape, click-outside).
 */
const LOCALE_COOKIE = 'NEXT_LOCALE';

function hasPinnedLocale() {
  try {
    return document.cookie.split('; ').some((c) => c.startsWith(`${LOCALE_COOKIE}=`));
  } catch {
    return false;
  }
}

export function LocaleSwitcher({ locale, label, autoLabel, autoHint }) {
  const pathname = usePathname() || `/${locale}`;
  const rest = pathname.replace(/^\/[^/]+/, '');
  const [open, setOpen] = useState(false);
  // null until mounted: the cookie is only readable on the client, and the
  // server has no way to know whether this visitor pinned a language.
  const [pinned, setPinned] = useState(null);
  const wrapRef = useRef(null);
  const btnRef = useRef(null);
  const menuId = useId();

  useEffect(() => {
    setPinned(hasPinnedLocale());
  }, []);

  // Close on click-outside and on Escape, and return focus to the trigger so
  // keyboard users aren't dropped at the top of the document.
  useEffect(() => {
    if (!open) return undefined;

    function onPointerDown(e) {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    }
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
        btnRef.current?.focus();
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  function focusItem(i) {
    const items = wrapRef.current?.querySelectorAll('[role="menuitem"]');
    if (!items?.length) return;
    items[(i + items.length) % items.length].focus();
  }

  function onMenuKeyDown(e) {
    const items = [...(wrapRef.current?.querySelectorAll('[role="menuitem"]') || [])];
    const i = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusItem(i + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusItem(i - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      focusItem(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      focusItem(items.length - 1);
    }
  }

  function choose(l) {
    document.cookie = `${LOCALE_COOKIE}=${l};path=/;max-age=31536000;samesite=lax`;
    setPinned(true);
    setOpen(false);
  }

  // Clearing the cookie hands the decision back to middleware.js, which reads
  // Accept-Language. A full navigation (not a client route change) is required
  // so the request actually passes through middleware again.
  function chooseAuto() {
    document.cookie = `${LOCALE_COOKIE}=;path=/;max-age=0;samesite=lax`;
    setPinned(false);
    setOpen(false);
    window.location.assign(rest || '/');
  }

  return (
    <div className="locale-switcher" ref={wrapRef}>
      <button
        ref={btnRef}
        type="button"
        className="locale-trigger"
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown' && !open) {
            e.preventDefault();
            setOpen(true);
            // wait for the menu to mount before moving focus into it
            requestAnimationFrame(() => focusItem(0));
          }
        }}
      >
        <Icon name="Globe" size={15} aria-hidden="true" />
        <span className="locale-trigger-code">{locale.toUpperCase()}</span>
        <Icon
          name="ChevronDown"
          size={14}
          aria-hidden="true"
          className={`locale-chevron${open ? ' locale-chevron--open' : ''}`}
        />
      </button>

      {open && (
        <ul className="locale-menu" id={menuId} role="menu" onKeyDown={onMenuKeyDown}>
          <li role="none">
            <button
              type="button"
              role="menuitem"
              className={`locale-item locale-item--auto${pinned === false ? ' locale-item--active' : ''}`}
              aria-current={pinned === false ? 'true' : undefined}
              onClick={chooseAuto}
            >
              <span className="locale-item-code" aria-hidden="true">
                <Icon name="Monitor" size={13} />
              </span>
              <span>
                {autoLabel}
                <span className="locale-item-hint">{autoHint}</span>
              </span>
              {pinned === false && <Icon name="Check" size={14} aria-hidden="true" />}
            </button>
          </li>
          {LOCALES.map((l) => (
            <li key={l} role="none">
              <Link
                href={`/${l}${rest}`}
                lang={l}
                role="menuitem"
                className={`locale-item${l === locale ? ' locale-item--active' : ''}`}
                aria-current={l === locale ? 'true' : undefined}
                onClick={() => choose(l)}
              >
                <span className="locale-item-code">{l.toUpperCase()}</span>
                <span>{LOCALE_NAMES[l]}</span>
                {pinned && l === locale && <Icon name="Check" size={14} aria-hidden="true" />}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
