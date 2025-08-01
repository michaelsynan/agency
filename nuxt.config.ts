// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/robots",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxthub/core",
    "@nuxtjs/sitemap",
    "@vueuse/nuxt",
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
  ],
  ssr: true,
  nitro: {
    compressPublicAssets: true,
    prerender: {
      // Pre-render the homepage
      routes: ["/"],
      // Then crawl all the links on the page
      crawlLinks: true,
    },
    routeRules: {
      // Redirects for SEO-friendly location URLs
      "/locations/pennsylvania-office": {
        redirect: "/locations/pennsylvania-web-design-and-development",
        prerender: false,
      },
      "/locations/new-york-city-office": {
        redirect: "/locations/nyc-web-design-and-development",
        prerender: false,
      },
    },
  },
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "dark",
  },
  site: {
    url: "https://formworkstudios.com",
    name: "Formwork Studios",
  },
  ui: {
    safelistColors: ["dino", "juju"],
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-11-01",
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    defaults: {
      weights: [400],
      families: [{ name: "Switzer", provider: "fontshare" }],
      styles: ["normal", "italic"],
      subsets: ["latin"], // Simplified to only include Latin (English) characters
    },
  },
  seo: {
    meta: {
      description:
        "Formwork Studios creates human-centered digital solutions blending strategy, technology, and design to solve complex problems for you and your business.",
    },
  },
});
