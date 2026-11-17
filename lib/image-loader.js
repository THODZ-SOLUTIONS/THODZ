import variants from './image-variants.json';

// Custom loader for next/image.
//
// The default loader points every src at /_next/image, which on Cloudflare
// Workers without an IMAGES binding returns the original file unchanged — so
// the srcset is a list of identical URLs and a phone downloads the 1600px
// screenshot. This loader points at real, pre-sized files instead
// (scripts/generate-image-variants.mjs), so the browser's own srcset
// selection does the work and no image passes through the Worker at all.
//
// The manifest is consulted rather than guessed: a source smaller than 1280px
// has no 1280px variant, and emitting a URL for one would be a 404 in a
// srcset — which browsers handle by showing nothing.

export default function imageLoader({ src, width }) {
  // Remote and already-sized sources are returned untouched.
  if (!src.startsWith('/') || /-\d+w\.webp$/.test(src)) return src;

  const available = variants[src];
  if (!available) return src;

  // Smallest variant that still covers the requested width; the original
  // when nothing does.
  const pick = available.find((w) => w >= width);
  if (!pick) return src;

  return src.replace(/\.(webp|png|jpe?g)$/i, `-${pick}w.webp`);
}
