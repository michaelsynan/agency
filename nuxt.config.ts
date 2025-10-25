// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineLocalBusiness } from "nuxt-schema-org/schema";

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/robots",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/content",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxthub/core",
    "@nuxtjs/sitemap",
    "@vueuse/nuxt",
    "@nuxtjs/seo",
    "@nuxtjs/tailwindcss",
  ],
  ssr: true,
  content: {
    experimental: { nativeSqlite: true },
  },
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
  // future: {
  //   compatibilityVersion: 4,
  // },
  // compatibilityDate: "2024-11-01",
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
        hasMap:
          "https://www.google.com/maps/place/966+Ridge+Avenue+Scranton+PA",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 41.4145277,
          longitude: -75.6408618,
        },
        priceRange: "$$",
        serviceArea: [
          { "@type": "AdministrativeArea", name: "Pennsylvania" },
          { "@type": "City", name: "Scranton" },
          { "@type": "City", name: "Pittsburgh" },
          { "@type": "City", name: "Philadelphia" },
          { "@type": "AdministrativeArea", name: "New York" },
        ],
        areaServed: ["Northeast US", "Global"],
        knowsAbout: [
          "Web Design",
          "Web Development",
          "Digital Marketing",
          "SEO",
          "Brand Strategy",
        ],
        telephone: "+1-800-657-6893",
        email: "hello@formworkstudios.com",
        image: [
          "https://formworkstudios.com/pa.jpg",
          "https://formworkstudios.com/china-town-nyc.webp",
        ],
        logo: "https://formworkstudios.com/best-web-design-company-ever.png",
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
            opens: "08:00",
            closes: "21:00",
          },
        ],
        isAccessibleForDisabled: false,
        founder: {
          "@type": "Person",
          name: "Michael Synan",
          url: "https://michaelsynan.com",
        },
        foundingDate: "2022-01-01",
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
        url: "https://formworkstudios.com/locations/nyc-web-design-and-development",
        address: {
          streetAddress: "61-25 97th Street 12R",
          addressLocality: "Queens",
          addressRegion: "NY",
          postalCode: "11374",
          addressCountry: "US",
        },
        hasMap:
          "https://www.google.com/maps/place/61-25+97th+Street+Queens+NY+11374",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 40.7266,
          longitude: -73.8625,
        },
        priceRange: "$$",
        serviceArea: [
          { "@type": "AdministrativeArea", name: "New York" },
          { "@type": "Borough", name: "Manhattan" },
          { "@type": "Borough", name: "Queens" },
          { "@type": "Borough", name: "Brooklyn" },
          { "@type": "AdministrativeArea", name: "Pennsylvania" },
        ],
        areaServed: ["New York City", "Global"],
        knowsAbout: [
          "Web Design",
          "Web Development",
          "Digital Marketing",
          "SEO",
          "Brand Strategy",
        ],
        telephone: "+1-800-657-6893",
        email: "hello@formworkstudios.com",
        image: [
          "https://formworkstudios.com/china-town-nyc.webp",
          "https://formworkstudios.com/pa.jpg",
        ],
        logo: "https://formworkstudios.com/best-web-design-company-ever.png",
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
            opens: "08:00",
            closes: "21:00",
          },
        ],
        isAccessibleForDisabled: false,
        founder: {
          "@type": "Person",
          name: "Michael Synan",
          url: "https://michaelsynan.com",
        },
        foundingDate: "2022-01-01",
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
});
