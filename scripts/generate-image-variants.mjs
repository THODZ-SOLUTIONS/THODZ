// Pre-size the images next/image cannot resize for us.  npm run images
//
// On Cloudflare Workers, /_next/image does not optimise anything. The
// OpenNext adapter needs an IMAGES binding, and without it it answers with
// the ORIGINAL file (see @opennextjs/cloudflare templates/images.js). Measured
// on production:
//
//   /work/djalil-location/fleet.webp              108,508 bytes
//   /_next/image?url=…fleet.webp&w=640&q=75       108,508 bytes   identical
//
// So every phone downloads a 1600px screenshot to paint it 375px wide, and
// next/image's srcset buys nothing at all.
//
// Enabling Images on the Cloudflare account is the better fix and needs an
// account change we cannot make from here. This is the fallback the brief
// allows: generate the sizes ourselves, commit them, and point a custom
// loader at them (lib/image-loader.js). It works on any host, needs no
// binding, and costs nothing at runtime because the variants are static
// files served by the assets layer.
//
// Rerun after adding or replacing any image under public/work. It is
// idempotent: a variant whose source has not changed is left alone.

import { readdirSync, statSync, existsSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname, relative, sep } from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const PUBLIC = join(ROOT, 'public');
// Only the trees next/image actually renders from.
const SOURCES = [join(PUBLIC, 'work'), join(PUBLIC, 'team')];
const MANIFEST = join(ROOT, 'lib', 'image-variants.json');

// Chosen to cover the real breakpoints: a phone, a tablet or half a desktop
// grid, and a full-width figure. Anything wider is served the original.
const WIDTHS = [640, 960, 1280];
const QUALITY = 80;

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const manifest = {};
let written = 0;
let skipped = 0;
let savedFrom = 0;
let savedTo = 0;

for (const file of SOURCES.flatMap(walk)) {
  // A variant is itself a file in these trees; never re-process one.
  if (/-\d+w\.webp$/.test(file)) continue;
  if (!/\.(webp|png|jpe?g)$/i.test(file)) continue;

  const src = '/' + relative(PUBLIC, file).split(sep).join('/');
  const meta = await sharp(file).metadata();
  const available = [];

  for (const width of WIDTHS) {
    // Never upscale: a 1200px source gets 640 and 960, not 1280.
    if (meta.width <= width) continue;
    const out = file.replace(/\.(webp|png|jpe?g)$/i, `-${width}w.webp`);
    available.push(width);

    if (existsSync(out) && statSync(out).mtimeMs >= statSync(file).mtimeMs) {
      skipped++;
      continue;
    }
    mkdirSync(dirname(out), { recursive: true });
    await sharp(file).resize({ width }).webp({ quality: QUALITY }).toFile(out);
    written++;
    if (width === 640) {
      savedFrom += statSync(file).size;
      savedTo += statSync(out).size;
    }
  }

  if (available.length) manifest[src] = available;
}

writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');

console.log(`images: ${written} written, ${skipped} up to date`);
console.log(`manifest: ${Object.keys(manifest).length} sources -> lib/image-variants.json`);
if (savedFrom) {
  console.log(
    `at 640w: ${(savedFrom / 1024).toFixed(0)} KB of originals -> ` +
      `${(savedTo / 1024).toFixed(0)} KB ` +
      `(${(100 - (savedTo / savedFrom) * 100).toFixed(0)}% smaller)`
  );
}
