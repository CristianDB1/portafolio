import { defineConfig } from "astro/config";

// En GitHub Pages el sitio vive en https://<usuario>.github.io/<repo>/.
// Si luego usas dominio propio, define ASTRO_SITE y ASTRO_BASE="/" en el workflow.
export default defineConfig({
  site: process.env.ASTRO_SITE ?? "https://cristiandb1.github.io",
  base: process.env.ASTRO_BASE ?? "/portafolio",
  trailingSlash: "ignore",
});
