// Theme persistence contract, shared by the pre-paint init script below and
// the ThemeToggle component. The attribute always resolves to an explicit
// 'light' or 'dark'; the prefers-color-scheme CSS fallback only handles no-JS.
export const THEME_STORAGE_KEY = 'thodz-theme';

// Runs inline as the first child of <body>, before first paint. Also stamps
// data-js so JS-dependent styling (scroll reveals) never hides content from
// no-JS visitors or crawlers.
// Resolution order: ?theme= override (previews/testing, not persisted) →
// saved choice → OS preference.
export const THEME_INIT_SCRIPT = `(function(){var d=document.documentElement;d.dataset.js='';try{var q=new URLSearchParams(location.search).get('theme');var t=q==='light'||q==='dark'?q:localStorage.getItem('${THEME_STORAGE_KEY}');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}d.dataset.theme=t}catch(e){}})()`;
