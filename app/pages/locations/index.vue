<script setup lang="ts">
import { locations } from '~/data/locations';

useSeoMeta({
  title: 'Our Locations | Formwork Studios',
  description: 'Find Formwork Studios locations in Pennsylvania and New York City. Visit our offices for web development, design, and digital marketing services.',
})
</script>

<template>
  <main class="text-white min-h-screen">
    <GeneralHeader heading="Our Locations" description="Visit us at our Pennsylvania or New York City locations" />

    <div class="bg-stone-950 py-20">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Locations Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="location in locations" :key="location.id"
            class="bg-stone-900/40 rounded-xs hover:bg-stone-900/70 transition-all duration-300 overflow-hidden border border-stone-500/20">

            <!-- Top Section with Background Image -->
            <div class="relative p-8 pb-6">
              <!-- Background Image -->
              <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                :style="{ backgroundImage: `url(${location.image})` }"></div>
              <!-- Overlay -->
              <div class="absolute inset-0 bg-stone-900/60"></div>

              <!-- Content -->
              <div class="relative z-10 text-center">
                <div class="flex justify-center mb-6">
                  <div class="bg-dino-500/20 p-4 rounded-full">
                    <UIcon name="i-mdi-map-marker" class="h-10 w-10 text-dino-500" />
                  </div>
                </div>
                <h3 class="text-2xl font-bold font-delight mb-2 text-stone-200">
                  {{ location.name }}
                </h3>
                <span v-if="location.tag"
                  class="inline-block bg-dino-500/20 text-dino-400 px-3 py-1 rounded-full text-sm font-medium">
                  {{ location.tag }}
                </span>
              </div>
            </div>

            <!-- Bottom Section with Regular Background -->
            <div class="p-8 pt-2">
              <div class="text-center space-y-2 mb-6">
                <p class="text-stone-300 text-lg">
                  {{ location.address }}
                </p>
                <p class="text-stone-300 text-lg">
                  {{ location.city }}, {{ location.state }}
                </p>
              </div>
              <div class="text-center space-y-3">
                <NuxtLink :to="`/locations/${location.name.toLowerCase().replace(/\s+/g, '-')}`"
                  class="block w-full font-bold !text-white !bg-blue-600 ring-blue-600 hover:!bg-blue-500 hover:ring-blue-400 transition-all duration-200 ring-2 text-center rounded-none px-6 py-3">
                  View Details
                </NuxtLink>
                <a :href="location.mapLink" target="_blank" rel="noopener noreferrer"
                  class="block w-full font-bold text-stone-300 border-stone-600 border-2 hover:bg-stone-700/50 transition-all duration-200 rounded-none px-6 py-3">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </main>
</template>
