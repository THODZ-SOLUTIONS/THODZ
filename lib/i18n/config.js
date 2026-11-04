// Locale configuration. English is the default and the content source of
// truth (lib/content.js); the others are overlays in lib/i18n.
// Adding a locale means: add it here, add a dictionary, add a content overlay,
// wire both into lib/i18n/index.js, and add a font preload in
// app/[locale]/layout.js.

export const LOCALES = ['en', 'fr', 'ar', 'es', 'de', 'nl', 'ja'];
export const DEFAULT_LOCALE = 'en';

// Shown in the language switcher. Each language names itself.
export const LOCALE_NAMES = {
  en: 'English',
  fr: 'Français',
  ar: 'العربية',
  es: 'Español',
  de: 'Deutsch',
  nl: 'Nederlands',
  ja: '日本語',
};

// Open Graph locale codes per site locale.
export const OG_LOCALES = {
  en: 'en_US',
  fr: 'fr_FR',
  ar: 'ar_DZ',
  es: 'es_ES',
  de: 'de_DE',
  nl: 'nl_NL',
  ja: 'ja_JP',
};

export function localeDir(locale) {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

// hreflang alternates for a page path ('' for the home page). Every page
// exists in every locale, so this is purely mechanical.
export function localeAlternates(path = '') {
  const languages = Object.fromEntries(LOCALES.map((l) => [l, `/${l}${path}`]));
  languages['x-default'] = `/${DEFAULT_LOCALE}${path}`;
  return { canonical: `/${DEFAULT_LOCALE}${path}`, languages };
}
