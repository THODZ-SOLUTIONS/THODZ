'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@/components/core/Icon';
import { THEME_STORAGE_KEY } from '@/lib/theme';

// The html[data-theme] attribute is set before hydration by the inline script
// in the layout, so we only read it after mount; until then the button renders
// at full size with no icon, avoiding both hydration mismatch and layout shift.
export function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for
      // the session via the attribute above.
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      disabled={theme === null}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme !== null && <Icon name={theme === 'dark' ? 'Sun' : 'Moon'} size={17} />}
    </button>
  );
}
