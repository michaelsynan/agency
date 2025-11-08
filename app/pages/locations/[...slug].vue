<script
  setup
  lang="ts"
>
import { locations } from '~/data/locations';

// Get current route and extract the slug
const route = useRoute();
const currentSlug = route.params.slug as string[] | undefined;

// Find the location with matching URL path
const location = computed(() => {
  if (!currentSlug || !currentSlug[0]) return undefined;
  const target = currentSlug[0];
  return locations.find(loc => loc.name.toLowerCase().replace(/\s+/g, '-') === target) as typeof locations[number] | undefined;
});

// Handle case where location is not found
if (!location.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Location not found'
  });
}

// Set SEO meta tags
useSeoMeta({
  title: location.value!.title,
  description: location.value!.description,
});
</script>

<template>
  <main class="text-white min-h-screen">
    <GeneralHeader
      v-if="location"
      :heading="location.nameClean"
      :description="`${location.city}, ${location.state}`"
      :image="location.image"
      long
    />

    <div class="bg-stone-950 py-20">
      <div class="max-w-4xl mx-auto px-4">
        <!-- Location Details -->
        <div class="bg-stone-900/50 rounded-xs p-8 mb-8">
          <!-- Content -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Location Info -->
            <div>
              <div class="flex items-start mb-6">
                <!-- Perfect circular icon wrapper aligned to top -->
                <div class="bg-dino-500/20 rounded-full aspect-square w-14 h-14 mr-4 flex items-center justify-center">
                  <UIcon
                    name="i-mdi-map-marker"
                    class="w-8 h-8 text-dino-500"
                  />
                </div>
                <div>
                  <h2
                    v-if="location"
                    class="text-2xl font-bold font-delight text-stone-200"
                  >
                    {{ location.name }}
                  </h2>
                  <span
                    v-if="location?.tag"
                    class="inline-block bg-dino-500/20 text-dino-400 px-2 py-0.5 text-xs font-medium mt-2.5"
                  >
                    {{ location?.tag }}
                  </span>
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <UIcon
                    name="i-mdi-home"
                    class="h-5 w-5 text-dino-500 mt-1"
                  />
                  <div>
                    <p
                      v-if="location"
                      class="text-stone-300"
                    >{{ location.address }}</p>
                    <p
                      v-if="location"
                      class="text-stone-300"
                    >{{ location.city }}, {{ location.state }}</p>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <UIcon
                    name="i-mdi-phone"
                    class="h-5 w-5 text-dino-500"
                  />
                  <a
                    v-if="location"
                    :href="`tel:${location.phone}`"
                    class="text-dino-400 hover:text-dino-300 transition-colors"
                  >
                    {{ location?.phone }}
                  </a>
                </div>

                <div class="flex items-center gap-3">
                  <UIcon
                    name="i-mdi-email"
                    class="h-5 w-5 text-dino-500"
                  />
                  <a
                    v-if="location"
                    :href="`mailto:${location.email}`"
                    class="text-dino-400 hover:text-dino-300 transition-colors"
                  >
                    {{ location?.email }}
                  </a>
                </div>
              </div>
            </div>

            <!-- Features & Actions -->
            <div>
              <h3 class="text-xl font-bold font-delight text-stone-200 mb-4">
                Available Services
              </h3>
              <ul
                v-if="location?.features"
                class="space-y-2 mb-6"
              >
                <li
                  v-for="feature in location?.features"
                  :key="feature"
                  class="flex items-center gap-2 text-stone-300"
                >
                  <UIcon
                    name="i-mdi-check-circle"
                    class="h-4 w-4 text-dino-500"
                  />
                  {{ feature }}
                </li>
              </ul>

              <div class="space-y-3">
                <UButton
                  size="lg"
                  class="w-full font-bold text-white! bg-juju-500! ring-juju-500 hover:bg-juju-400! hover:ring-juju-300 transition-all duration-200 ring-2 text-center rounded-none"
                  icon="i-mdi-cogs"
                  to="/services"
                >
                  View Services
                </UButton>

                <UButton
                  size="lg"
                  class="w-full font-bold text-white! bg-juju-500! ring-juju-500 hover:bg-juju-400! hover:ring-juju-300 transition-all duration-200 ring-2 text-center rounded-none"
                  icon="i-mdi-map"
                  v-if="location"
                  :to="location.mapLink"
                  target="_blank"
                  external
                >
                  Get Directions
                </UButton>

                <UButton
                  size="lg"
                  variant="outline"
                  class="w-full font-bold text-juju-400 border-juju-400 hover:bg-juju-500/10 transition-all duration-200 rounded-none"
                  icon="i-mdi-phone"
                  to="/get-in-touch"
                >
                  Contact Us
                </UButton>
              </div>
            </div>
          </div>
        </div>

        <!-- Description -->
        <div class="bg-stone-900/30 rounded-xs p-8">
          <h3 class="text-2xl font-bold font-delight text-stone-200 mb-4">
            About This Location
          </h3>
          <p class="text-stone-300 text-lg leading-relaxed">
            {{ location?.description }}
          </p>
        </div>

        <!-- Back to Locations -->
        <div class="mt-8 text-center">
          <UButton
            variant="ghost"
            class="text-juju-400 hover:text-juju-300 transition-colors"
            icon="i-mdi-arrow-left"
            to="/locations"
          >
            Back to All Locations
          </UButton>
        </div>
      </div>
    </div>
  </main>
</template>