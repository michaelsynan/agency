<script setup lang="ts">
import { useRoute } from 'vue-router'
import { neighborhoods } from '../../data/neighborhoods'
import { services } from '../../data/services'
import type { Neighborhood } from '../../data/neighborhoods'
import type { Service } from '../../data/services'

const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug]

const [city, neighborhood, serviceId] = slug

const neighborhoodData = neighborhoods.find((n: Neighborhood) => n.city.toLowerCase() === city?.toLowerCase() && n.name.toLowerCase() === neighborhood?.toLowerCase())
const serviceData = services.find((s: Service) => s.id === serviceId)
</script>

<template>
  <div
    v-if="neighborhoodData && serviceData"
    class="max-w-2xl mx-auto py-12 px-4 text-white"
  >
    <h1 class="text-3xl md:text-5xl font-bold mb-6 font-delight">
      {{ serviceData.title }} in {{ neighborhoodData.name }}, {{ neighborhoodData.city }}
    </h1>
    <div class="mb-4 text-lg text-stone-300">
      <b>Region:</b> {{ neighborhoodData.region }}
    </div>
    <div class="mb-6 text-stone-400">
      {{ neighborhoodData.description }}
    </div>
    <div class="mb-6 text-stone-400">
      <b>Service:</b> {{ serviceData.description }}
    </div>
    <img
      v-if="neighborhoodData.image"
      :src="neighborhoodData.image"
      :alt="neighborhoodData.name"
      class="w-full max-w-md rounded-lg shadow mb-8"
    >
    <div class="mt-8 text-stone-500 text-sm">
      <b>SEO Title:</b> {{ neighborhoodData.seoTitle }}<br>
      <b>SEO Description:</b> {{ neighborhoodData.seoDescription }}
    </div>
  </div>
  <div
    v-else
    class="max-w-2xl mx-auto py-12 px-4 text-white"
  >
    <h1 class="text-3xl font-bold mb-6">
      Location or Service Not Found
    </h1>
    <p class="text-stone-400">
      Please check your URL or try another city/neighborhood/service combination.
    </p>
  </div>
</template>
