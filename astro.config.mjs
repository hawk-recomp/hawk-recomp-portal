import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://hawk-recomp.github.io",
  base: "/hawk-recomp-portal",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
