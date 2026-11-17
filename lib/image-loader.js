// Custom loader for next/image.
//
// Cloudflare image transformations are enabled on this zone, so the resize
// happens at the edge via /cdn-cgi/image/. That path is handled by Cloudflare
// before the request reaches the Worker, so an image still costs no Worker
// invocation — the same property the pre-generated variants had, without
// 113 files and 3.0 MB of them living in git.
//
// What it buys over the variants it replaces:
//   - format=auto, so a browser that takes AVIF gets AVIF and the rest get
//     WebP, decided per request rather than at build time
//   - any width, so 2x and 3x screens get a real size instead of being
//     rounded to one of three
//   - no build step that can silently skip a file. The generator did exactly
//     that once: little-hafiz/overview.png never made it into the manifest
//     and shipped at full size.
//
// Quality is 65 rather than next/image's default 75. Measured on this site's
// own images, 65 lands within a few hundred bytes of the q=80 WebP variants
// it replaces; 75 and above is consistently larger, because 36 of the 39
// sources are already lossy WebP and re-encoding lossy to lossy spends bits
// without buying detail.
const QUALITY = 65;

// /cdn-cgi/image/ only exists on a Cloudflare zone with transformations
// turned on. `next dev` is therefore excluded outright, and
// NEXT_PUBLIC_IMAGE_TRANSFORM=off covers the other two cases: a local
// `opennextjs-cloudflare preview`, which builds in production mode on
// localhost, and the escape hatch if transformations are ever turned off or
// the monthly allowance runs out. With it off the loader returns the original
// source, which is still a real file in public/ — images get heavier, nothing
// breaks.
const ENABLED =
  process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_IMAGE_TRANSFORM !== 'off';

export default function imageLoader({ src, width, quality }) {
  if (!ENABLED) return src;

  // Remote sources are left alone: /cdn-cgi/image/ can fetch them, but that
  // would silently make this site responsible for someone else's bandwidth.
  if (!src.startsWith('/')) return src;

  // SVG is already resolution-independent, and asking a raster pipeline to
  // rasterize it at a width is strictly worse than sending the file.
  if (/\.svg$/i.test(src)) return src;

  // Guard against double-prefixing if a src ever arrives already transformed.
  if (src.startsWith('/cdn-cgi/')) return src;

  const q = Number.isInteger(quality) ? quality : QUALITY;

  // width comes from next/image's own deviceSizes/imageSizes list, so the set
  // of distinct URLs is bounded — which is what the monthly unique-transform
  // allowance counts.
  return `/cdn-cgi/image/width=${width},quality=${q},format=auto${src}`;
}
