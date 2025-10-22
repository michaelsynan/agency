// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineLocalBusiness } from "nuxt-schema-org/schema";

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
      families: [
        { name: "Switzer", provider: "fontshare" },
        { name: "Work Sans", provider: "google" },
      ],
      styles: ["normal", "italic"],
      subsets: ["latin"], // Simplified to only include Latin (English) characters
    },
  },
  seo: {
    schemaOrg: {
      identity: [
        defineLocalBusiness({
          "@type": "ProfessionalService",
          name: "Formwork Studios",
          description:
            "Formwork Studios creates human-centered digital solutions blending strategy, technology, and design to solve complex problems for you and your business.",
          url: "https://formworkstudios.com",
          address: {
            streetAddress: "966 Ridge Avenue",
            addressLocality: "Pennsylvania",
            addressRegion: "PA",
            postalCode: "18510",
            addressCountry: "US",
          },
          telephone: "+1-800-657-6893",
          email: "hello@formworkstudios.com",
          image: [
            "https://formworkstudios.com/pa.jpg",
            "https://formworkstudios.com/china-town-nyc.webp",
          ],
          logo: "https://formworkstudios.com/bset-web-design-company-ever.png",
          openingHoursSpecification: [
            {
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "08:00:00",
              closes: "21:00:00",
            },
          ],
          isAccessibleForDisabled: true,
          sameAs: [
            "https://www.facebook.com/formworkstudios",
            "https://www.instagram.com/formworkstudios/",
          ],
        }),
        defineLocalBusiness({
          "@type": "ProfessionalService",
          name: "Formwork Studios NYC",
          description:
            "NYC branch of Formwork Studios, providing digital solutions, web design, and marketing for New York City businesses.",
          url: "https://formworkstudios.com",
          address: {
            streetAddress: "61-25 97th Street 12R",
            addressLocality: "Queens",
            addressRegion: "NY",
            postalCode: "",
            addressCountry: "US",
          },
          telephone: "+1-800-657-6893",
          email: "hello@formworkstudios.com",
          image: [
            "https://formworkstudios.com/china-town-nyc.webp",
            "https://formworkstudios.com/pa.jpg",
          ],
          logo: "https://formworkstudios.com/bset-web-design-company-ever.png",
          openingHoursSpecification: [
            {
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "08:00:00",
              closes: "21:00:00",
            },
          ],
          isAccessibleForDisabled: true,
          sameAs: [
            "https://www.facebook.com/formworkstudios",
            "https://www.instagram.com/formworkstudios/",
          ],
        }),
      ],
    },
    meta: {
      description:
        "Formwork Studios creates human-centered digital solutions blending strategy, technology, and design to solve complex problems for you and your business.",
    },
  },
});
