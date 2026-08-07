import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ja"],
  defaultLocale: "en",
  // English keeps its existing unprefixed URLs (/, /about, /blog...) so nothing
  // already indexed or linked (Toast, Resy, Google Business) breaks. Japanese
  // lives under /ja.
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
