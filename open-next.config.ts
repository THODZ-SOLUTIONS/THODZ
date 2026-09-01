import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Every page is prerendered at build time (generateStaticParams +
// dynamicParams=false), and the adapter serves prerendered routes through the
// incremental cache. The default cache is a no-op, which turns every page
// into a 404 at runtime. The static-assets cache bakes the prerendered pages
// into the Worker's assets — read-only, no revalidation, which is exactly
// what a fully static site needs. Populated by `opennextjs-cloudflare
// deploy` (plain `wrangler deploy` skips that step).
export default {
  ...defineCloudflareConfig({
    incrementalCache: staticAssetsIncrementalCache,
  }),
  // `npm run build` is `opennextjs-cloudflare build`, and OpenNext's default
  // Next.js build step is `npm run build` — without this override it calls
  // itself forever. Point it straight at Next.
  buildCommand: "npx next build",
};
