import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  // The whole site is prerendered (generateStaticParams + dynamicParams=false).
  // Without an incremental cache the prerendered /en /fr /ar pages can't be
  // looked up at runtime and every locale route 404s. Static-assets cache
  // serves them read-only from the assets bundle.
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
