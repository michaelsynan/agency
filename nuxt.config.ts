// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxthub/core',
    '@nuxt/content',
  ],
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark',
  },
  ui: {
    safelistColors: ['dino', 'juju'],
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  image: {
    cloudflare: {
      baseURL: 'https://imagedelivery.net/q2nIRgCuWuc2K4JgVsWp8w/',
    },
  },
})