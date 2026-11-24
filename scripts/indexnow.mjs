// IndexNow: tell participating search engines (Bing, Yandex, Seznam, Naver,
// Yep) that pages changed, instead of waiting for them to recrawl.
//
//   node scripts/indexnow.mjs                 # every URL in the live sitemap
//   node scripts/indexnow.mjs /en/work /fr    # just these paths
//   node scripts/indexnow.mjs --dry-run       # print what would be sent
//
// Runs from .github/workflows/indexnow.yml after each deploy. Google does not
// take part in IndexNow; it reads the sitemap and Search Console instead.
//
// Why the whole sitemap rather than only what changed: a page's text lives in
// lib/content.js, a dictionary and a locale overlay at once, so mapping a diff
// to URLs is guesswork, and a wrong guess silently leaves a changed page out.
// 232 URLs is far inside the protocol's 10,000-per-request limit, and the
// workflow only runs when files that render pages change. Engines dedupe
// unchanged URLs on their side.
//
// The key is public by design: it is served at /<key>.txt so an engine can
// confirm that whoever submits for thodz.com controls thodz.com.

const SITE = 'https://thodz.com';
const KEY = 'ee85c3817876adbf105445fb5cfcde04';
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const paths = args.filter((a) => a.startsWith('/'));

// The key file must be live before an engine will accept the key, so a
// submission straight after a deploy that has not finished is refused here
// rather than by the engine.
const keyRes = await fetch(KEY_LOCATION);
const keyBody = keyRes.ok ? (await keyRes.text()).trim() : '';
if (keyBody !== KEY) {
  console.error(`indexnow: ${KEY_LOCATION} returned ${keyRes.status}, not the key. Is the deploy live?`);
  process.exit(1);
}

let urls;
if (paths.length) {
  urls = paths.map((p) => `${SITE}${p}`);
} else {
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}
if (!urls.length) {
  console.error('indexnow: no URLs to submit');
  process.exit(1);
}

const payload = { host: new URL(SITE).host, key: KEY, keyLocation: KEY_LOCATION, urlList: urls };

if (dryRun) {
  console.log(`indexnow (dry run): ${urls.length} URLs, e.g.\n  ${urls.slice(0, 5).join('\n  ')}`);
  process.exit(0);
}

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});

// 200 = accepted, 202 = accepted, key validation pending. Anything else is a
// real failure: 400 bad request, 403 key not valid, 422 URLs not on this
// host, 429 too many requests.
if (res.status === 200 || res.status === 202) {
  console.log(`indexnow: ${urls.length} URLs submitted (${res.status})`);
} else {
  console.error(`indexnow: ${res.status} ${await res.text()}`);
  process.exit(1);
}
