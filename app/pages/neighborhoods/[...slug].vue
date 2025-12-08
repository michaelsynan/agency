<script
  setup
  lang="ts"
>
function fromKebab(str: string) {
  if (!str) return ''
  return str.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
function toKebab(str: string) {
  return (str || '')
    .trim()
    .toLowerCase()
    // Preserve hyphens; drop other non-word chars
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
}
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { neighborhoods } from '../../data/neighborhoods'
import { servicesForLocation } from '../../data/services'
import type { Neighborhood } from '../../data/neighborhoods'
import type { Service } from '../../data/services'

const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug]

const [regionSlug, locationSlug, serviceId] = slug

const region = fromKebab(regionSlug || '')
const location = fromKebab(locationSlug || '')
const regionSlugNorm = toKebab(String(regionSlug || ''))
const locationSlugNorm = toKebab(String(locationSlug || ''))

// Match using normalized slugs to avoid hyphen/space mismatches
const neighborhoodData = neighborhoods.find(
  (n: Neighborhood) => toKebab(n.region) === regionSlugNorm && toKebab(n.name) === locationSlugNorm
)
const localizedServices = servicesForLocation(location)
const serviceData = localizedServices.find((s: Service) => s.id === serviceId)

// Remove global cities "Serving: ..." from description; we'll render local serving separately
const descriptionNoServing = computed(() => {
  const desc = serviceData?.description || ''
  // Strip a trailing/embedded "Serving: ... ." clause
  return desc.replace(/\s*Serving:\s[^.]+\./i, '')
})

// Build unique city list and link targets for this service
const servedCities = computed(() => {
  const unique = Array.from(new Set(neighborhoods.map(n => n.city)))
  // Map each city to a representative neighborhood for building the link
  return unique.map(city => {
    const match = neighborhoods.find(n => n.city === city) || neighborhoods[0]
    const regionPart = match ? toKebab(match.region) : 'region'
    const href = `/neighborhoods/${regionPart}/${toKebab(city)}/${serviceId}`
    return { city, href }
  })
})

// Exclude the current city from the served list for "Also Serving"
const servedOtherCities = computed(() => {
  const currentCity = neighborhoodData?.city || ''
  return servedCities.value.filter(c => c.city !== currentCity)
})

// City-specific details explaining why the service matters for this area
const cityServiceDetails = computed(() => {
  if (!serviceData || !neighborhoodData) return ''
  const city = neighborhoodData.city
  const name = neighborhoodData.name
  const region = neighborhoodData.region
  switch (serviceData.id) {
    case 'website-design':
      return `In ${name}, ${region}, local businesses compete for attention. A modern, fast website helps ${city} small businesses build trust, rank better, and convert visitors into customers.`
    case 'development':
      return `Growing companies in ${city} need reliable engineering. Solid foundations, performance, and security ensure your site works flawlessly for customers across ${region}.`
    case 'digital-marketing':
      return `${city} is a competitive market. Targeted SEO and campaigns help your business get discovered, drive qualified traffic, and turn interest into leads in ${region}.`
    case 'ai':
      return `Businesses in ${city} can save time and scale with automation. AI assistants and workflows reduce busywork, improve response times, and unlock data-driven decisions.`
    case 'branding':
      return `A clear brand stands out in ${city}. Consistent visuals and voice make it easier for customers across ${region} to remember, trust, and choose you.`
    case 'consulting':
      return `Whether you’re starting up or scaling in ${city}, expert guidance clarifies priorities and helps you ship the right improvements for sustainable growth.`
    case 'e-commerce':
      return `Customers in ${region} expect fast, simple online buying. A polished storefront with smooth checkout helps ${city} shops sell more with fewer drop-offs.`
    case 'seo':
      return `Ranking in search for ${city} terms brings steady, high‑intent traffic. Technical fixes and content tuned to ${region} help you show up where it matters.`
    case 'nuxt-web-app':
      return `High‑performance apps make a difference in ${city}. Nuxt’s SSR/ISR and smart caching deliver speed and reliability customers across ${region} notice.`
    case 'software-development':
      return `Custom software gives ${city} teams leverage. Well‑designed systems reduce manual work, integrate tools, and scale smoothly as your business grows.`
    default:
      return `We tailor this service to ${city} and surrounding ${region}, focusing on outcomes that matter locally—visibility, reliability, and growth.`
  }
})

// Use the per-city service blurb authored in services.ts
const cityServiceBlurb = computed(() => {
  if (!serviceData || !neighborhoodData) return ''
  return serviceData.location?.[neighborhoodData.city] || ''
})

// Build links for relevant services for this location
type RelatedItem = { id: string; title: string; href: string; micro?: string }

const relevantServices = computed(() => {
  if (!serviceData || !neighborhoodData) return [] as Array<RelatedItem>
  const regionPart = toKebab(neighborhoodData.region)
  const cityPart = toKebab(neighborhoodData.city)
  const rel = serviceData.relevant || []
  return rel
    .map((id) => {
      const s = localizedServices.find((x: Service) => x.id === id)
      if (!s) return null
      return {
        id,
        title: s.title,
        href: `/neighborhoods/${regionPart}/${cityPart}/${id}`,
        micro: (s as any).micro || '',
      }
    })
    .filter(Boolean) as Array<RelatedItem>
})

// SEO based on neighborhood data
if (neighborhoodData) {
  // Prefer provided SEO fields; fallback to a sensible default
  useSeoMeta({
    title: neighborhoodData.seoTitle || `${location} | ${region}`,
    description: neighborhoodData.seoDescription || `${location} in ${region}`,
  })
}
</script>

<template>
  <div>
    <ServicesHeader
      v-if="neighborhoodData && serviceData"
      :title="`${serviceData.title} in ${neighborhoodData.name}`"
      :description="`Professional ${serviceData.title} for ${neighborhoodData.city === neighborhoodData.name ? neighborhoodData.city : `${neighborhoodData.name}, ${neighborhoodData.city}`}`"
      :bg-image="neighborhoodData.image || '/manhattan-skyline-nyc.jpg'"
    />
    <UContainer class="py-12 px-4 text-white pt-26 min-h-screen pb-20">
      <div
        v-if="neighborhoodData && serviceData"
        class="max-w-2xl mx-auto text-left"
      >
        <h1 class="text-3xl md:text-5xl font-bold mb-6 font-delight">
          {{ serviceData.header || serviceData.title }}
        </h1>
        <!-- <div class="mb-4 text-lg text-stone-300">
          <b>Region:</b> {{ neighborhoodData.region }}
        </div> -->
        <div
          v-if="cityServiceDetails"
          class="mb-2 text-stone-300"
        >
          {{ cityServiceDetails }}
        </div>

        <div
          v-if="cityServiceBlurb"
          class="mb-6 text-stone-300"
        >
          {{ cityServiceBlurb }}
        </div>

        <div class="mb-6 text-stone-400">
          {{ descriptionNoServing }}
        </div>
        <ul
          v-if="serviceData?.bullets?.length"
          class="mb-8 space-y-2"
        >
          <li
            v-for="(point, idx) in serviceData.bullets"
            :key="idx"
            class="flex items-center gap-2 text-stone-300"
          >
            <UIcon
              name="i-mdi-check-circle"
              class="h-4 w-4 text-dino-500"
            />
            <span>{{ point }}</span>
          </li>
        </ul>
        <div class="mb-8 text-stone-400">
          <div class="mb-6 text-stone-400">
            {{ neighborhoodData.description }}
          </div>
          <span class="font-bold">Also Serving: </span>
          <span>
            <template
              v-for="(c, idx) in servedOtherCities"
              :key="c.city"
            >
              <NuxtLink
                :to="c.href"
                class="text-dino-400 hover:text-dino-300 underline"
              >{{ c.city }}</NuxtLink><span v-if="idx < servedOtherCities.length - 1">, </span>
            </template>
          </span>
        </div>

        <img
          v-if="neighborhoodData.image && neighborhoodData.image.length > 0"
          :src="neighborhoodData.image"
          :alt="neighborhoodData.name"
          class="w-full rounded-none shadow mb-8"
        >
        <!-- <div class="mt-8 text-stone-500 text-sm">
          <b>SEO Title:</b> {{ neighborhoodData.seoTitle }}<br>
          <b>SEO Description:</b> {{ neighborhoodData.seoDescription }}
        </div> -->
      </div>
      <div
        v-else
        class="max-w-2xl mx-auto"
      >
        <h1 class="text-3xl font-bold mb-6">
          Location or Service Not Found
        </h1>
        <p class="text-stone-400">
          Please check your URL or try another city/neighborhood/service combination.
        </p>
      </div>
      <div class="flex justify-start max-w-2xl mx-auto flex-col gap-10">
        <div
          v-if="relevantServices.length"
          class="flex flex-col gap-4"
        >
          <h2 class="text-xl md:text-2xl font-semibold text-white mt-4">Other Services</h2>
          <div class="mb-4 text-stone-400">
            Do you need something other than
            {{ serviceData?.title }}?
            Please see what other services we offer to help your small business succeed.
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <NuxtLink
              v-for="item in relevantServices"
              :key="item.id"
              :to="item.href"
              class="block border border-stone-700 hover:border-dino-500 rounded-none p-4 bg-stone-900/40 hover:bg-stone-900/60 transition-colors"
            >
              <div class="text-white font-semibold mb-1">{{ item.title }}</div>
              <div class="text-stone-400 text-sm">{{ item.micro || 'Explore related service' }}</div>
            </NuxtLink>
          </div>
        </div>
        <UButton
          size="lg"
          class="mt-0 mb-10 w-full md:w-auto md:inline-flex items-center gap-2 font-bold text-white! bg-juju-600! ring-juju-600 hover:bg-juju-500! hover:ring-juju-400 transition-all duration-200 ring-2 rounded-none mr-auto"
          trailing-icon="i-mdi-arrow-right"
          to="/services/"
        >
          View All Services
        </UButton>
        <ServicesCTA />
        <div
          v-if="neighborhoodData && serviceData"
          class="mt-10 px-2"
        >
          <h2 class="text-xl md:text-2xl font-semibold text-white mb-2">About Formwork Studios</h2>
          <p class="text-stone-300">
            Formwork Studios provides professional {{ serviceData.title.toLowerCase() }} and serves
            {{ neighborhoodData.name }}, {{ neighborhoodData.city }}.
            We practice human‑centric design and engineering: clear content, accessible interfaces,
            and fast performance that respect people’s time. Our approach pairs research with
            pragmatic execution—so small businesses get reliable systems, measurable outcomes,
            and pages that help neighbors quickly call, book, or buy.
          </p>
          <p class="text-stone-400 mt-3">
            Want to learn more? Explore our
            <NuxtLink
              to="/"
              class="text-dino-400 hover:text-dino-300 underline"
            >homepage</NuxtLink>.
          </p>
        </div>
      </div>


    </UContainer>
  </div>
</template>
