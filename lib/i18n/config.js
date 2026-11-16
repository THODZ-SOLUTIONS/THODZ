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

// hreflang alternates for a page path ('' for the home page). Every page
// exists in every locale, so the language map is purely mechanical.
//
// The canonical MUST point at the caller's own locale, not at the default
// one. A translated page that canonicalises to its English twin is telling
// Google the translation is a duplicate and should not be indexed, which
// cancels the hreflang set sitting right beside it: hreflang says "these are
// seven translations, serve the right one", the canonical says "only /en is
// real". The canonical wins, and the other seven locales fall out of the
// index. Each locale is the canonical face of itself; x-default stays on the
// default locale, which is what x-default is for.
export function localeAlternates(path = '', locale = DEFAULT_LOCALE) {
  return localeAlternatesIn(LOCALES, path, locale);
}

// Same, for a page that exists in only some locales (service pages, for now).
// Listing a locale that 404s would be a broken hreflang entry, and listing one
// that serves untranslated English would be worse: it invites a crawler to
// treat five URLs as duplicates of /en. Only the locales that genuinely have
// the page are declared.
export function localeAlternatesIn(locales, path = '', locale = DEFAULT_LOCALE) {
  const languages = Object.fromEntries(locales.map((l) => [l, `/${l}${path}`]));
  // x-default still names the default locale, which is in every such set.
  languages['x-default'] = `/${DEFAULT_LOCALE}${path}`;
  return { canonical: `/${locale}${path}`, languages };
}
