// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxthub/core",
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxtjs/seo",
  ],
  ssr: true,
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
  // image: {
  //   cloudflare: {
  //     baseURL: "https://imagedelivery.net/q2nIRgCuWuc2K4JgVsWp8w/",
  //   },
  // },
  seo: {
    meta: {
      description:
        "Formwork Studios creates human-centered digital solutions blending strategy, technology, and design to solve complex problems for you and your business.",
    },
  },
});
