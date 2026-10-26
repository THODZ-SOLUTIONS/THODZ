'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@/components/core/Icon';
import { THEME_STORAGE_KEY } from '@/lib/theme';

const ICONS = { system: 'Monitor', light: 'Sun', dark: 'Moon' };

function readMode() {
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY);
    return v === 'light' || v === 'dark' ? v : 'system';
  } catch {
    return 'system';
  }
}

/**
 * Three-state theme control: System → Light → Dark → System.
 *
 * "System" is the default and is stored as the *absence* of a value, so a
 * visitor who never touches this keeps following their browser, and anyone
 * who has picked a theme can get back to following it.
 *
 * html[data-theme] is set pre-hydration by the inline script in lib/theme.js,
 * so the mode is only read after mount; until then the button renders at full
 * size with no icon, avoiding both a hydration mismatch and layout shift.
 */
export function ThemeToggle({ labels }) {
  const [mode, setMode] = useState(null);

  useEffect(() => {
    setMode(readMode());
    // While in system mode the init script keeps data-theme in sync with the
    // browser; this only keeps the icon honest when that happens.
    const onChange = () => setMode(readMode());
    window.addEventListener('thodz:themechange', onChange);
    return () => window.removeEventListener('thodz:themechange', onChange);
  }, []);

  function cycle() {
    const next = mode === 'system' ? 'light' : mode === 'light' ? 'dark' : 'system';
    try {
      if (next === 'system') localStorage.removeItem(THEME_STORAGE_KEY);
      else localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the attribute below still
      // applies the theme for this session.
    }
    const resolved =
      next === 'system'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : next;
    document.documentElement.dataset.theme = resolved;
    setMode(next);
  }

  const label = mode ? labels?.[mode] : undefined;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={cycle}
      disabled={mode === null}
      aria-label={label}
      title={label}
    >
      {mode !== null && <Icon name={ICONS[mode]} size={17} />}
    </button>
  );
}
