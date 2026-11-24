// Locale configuration. English is the default and the content source of
// truth (lib/content.js); the others are overlays in lib/i18n.
// Adding a locale means: add it here, add a dictionary, add a content overlay,
// wire both into lib/i18n/index.js, and add a font preload in
// app/[locale]/layout.js.

export const LOCALES = ['en', 'fr', 'ar', 'es', 'de', 'nl', 'ja', 'pt'];
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
  pt: 'Português',
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
  pt: 'pt_PT',
};

export function localeDir(locale) {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

// Canonical and hreflang are built in lib/seo.js (buildAlternates), next to
// the rest of each page's <head>.
