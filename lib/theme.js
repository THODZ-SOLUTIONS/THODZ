// Theme contract, shared by the pre-paint init script and ThemeToggle.
//
// Three modes, but only two are ever stored:
//   'light' | 'dark'  — an explicit choice, saved under THEME_STORAGE_KEY
//   system            — no stored value; the browser's prefers-color-scheme wins
//
// Absence-means-system is deliberate: clearing the key is what returns a
// visitor to following their browser, and it keeps every previously stored
// value working untouched.
//
// html[data-theme] always resolves to an explicit 'light' or 'dark' so the CSS
// never has to reason about the third state. The prefers-color-scheme block in
// tokens/colors.css only covers visitors with no JavaScript at all.
export const THEME_STORAGE_KEY = 'thodz-theme';
export const THEME_MODES = ['system', 'light', 'dark'];

// Runs inline as the first child of <body>, before first paint. Also stamps
// data-js so JS-dependent styling (scroll reveals) never hides content from
// no-JS visitors or crawlers.
//
// Resolution order: ?theme= override (previews/testing, not persisted) →
// saved choice → browser preference.
//
// It also subscribes to prefers-color-scheme for the rest of the page's life,
// so a visitor who has made no explicit choice follows their browser live —
// when the OS flips to dark at sunset, so does the page. The listener re-reads
// storage on each change rather than closing over the initial value, so it
// stops applying the moment someone picks a theme. The handler reads
// mq.matches rather than the event payload, so it behaves correctly however
// the change is delivered.
export const THEME_INIT_SCRIPT = `(function(){
var d=document.documentElement;d.dataset.js='';
var K='${THEME_STORAGE_KEY}';
function saved(){try{var v=localStorage.getItem(K);return v==='light'||v==='dark'?v:null}catch(e){return null}}
function sys(){try{return window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch(e){return 'light'}}
try{
var q=new URLSearchParams(location.search).get('theme');
var t=(q==='light'||q==='dark')?q:saved();
d.dataset.theme=t||sys();
var mq=window.matchMedia('(prefers-color-scheme: dark)');
var on=function(){if(!saved()){d.dataset.theme=mq.matches?'dark':'light';
window.dispatchEvent(new CustomEvent('thodz:themechange'))}};
mq.addEventListener?mq.addEventListener('change',on):mq.addListener(on);
}catch(e){}
})()`.replace(/\n/g, '');
