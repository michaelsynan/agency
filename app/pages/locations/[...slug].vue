<script setup lang="ts">
import { locations } from '~/data/locations';

// Get current route and extract the slug
const route = useRoute();
const currentSlug = route.params.slug;

// Find the location with matching URL path
const location = computed(() => {
    return locations.find(loc => {
        // Create slug from location name (lowercase, replace spaces with hyphens)
        const locationSlug = loc.name.toLowerCase().replace(/\s+/g, '-');
        return locationSlug === currentSlug[0]; // Access first element of the slug array
    });
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
    title: location.value.title,
    description: location.value.description,
});
</script>

<template>
    <main class="text-white min-h-screen">
        <GeneralHeader :heading="location.nameClean" :description="`${location.city}, ${location.state}`" long />

        <div class="bg-stone-950 py-20">
            <div class="max-w-4xl mx-auto px-4">
                <!-- Location Details -->
                <div class="bg-stone-900/50 rounded-xs p-8 mb-8">
                    <!-- Content -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <!-- Location Info -->
                        <div>
                            <div class="flex items-center mb-6">
                                <div class="bg-dino-500/20 p-3 rounded-full mr-4">
                                    <UIcon name="i-mdi-map-marker" class="h-8 w-8 text-dino-500" />
                                </div>
                                <div>
                                    <h2 class="text-2xl font-bold font-delight text-stone-200">
                                        {{ location.name }}
                                    </h2>
                                    <span v-if="location.tag"
                                        class="inline-block bg-dino-500/20 text-dino-400 px-3 py-1 rounded-full text-sm font-medium mt-1">
                                        {{ location.tag }}
                                    </span>
                                </div>
                            </div>

                            <div class="space-y-4">
                                <div class="flex items-start gap-3">
                                    <UIcon name="i-mdi-home" class="h-5 w-5 text-dino-500 mt-1" />
                                    <div>
                                        <p class="text-stone-300">{{ location.address }}</p>
                                        <p class="text-stone-300">{{ location.city }}, {{ location.state }}</p>
                                    </div>
                                </div>

                                <div class="flex items-center gap-3">
                                    <UIcon name="i-mdi-phone" class="h-5 w-5 text-dino-500" />
                                    <a :href="`tel:${location.phone}`"
                                        class="text-dino-400 hover:text-dino-300 transition-colors">
                                        {{ location.phone }}
                                    </a>
                                </div>

                                <div class="flex items-center gap-3">
                                    <UIcon name="i-mdi-email" class="h-5 w-5 text-dino-500" />
                                    <a :href="`mailto:${location.email}`"
                                        class="text-dino-400 hover:text-dino-300 transition-colors">
                                        {{ location.email }}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Features & Actions -->
                        <div>
                            <h3 class="text-xl font-bold font-delight text-stone-200 mb-4">
                                Available Services
                            </h3>
                            <ul v-if="location.features" class="space-y-2 mb-6">
                                <li v-for="feature in location.features" :key="feature"
                                    class="flex items-center gap-2 text-stone-300">
                                    <UIcon name="i-mdi-check-circle" class="h-4 w-4 text-dino-500" />
                                    {{ feature }}
                                </li>
                            </ul>

                            <div class="space-y-3">
                                <UButton size="lg"
                                    class="w-full font-bold !text-white !bg-juju-500 ring-juju-500 hover:!bg-juju-400 hover:ring-juju-300 transition-all duration-200 ring-2 text-center rounded-none"
                                    icon="i-mdi-cogs" to="/services">
                                    View Services
                                </UButton>

                                <UButton size="lg"
                                    class="w-full font-bold !text-white !bg-juju-500 ring-juju-500 hover:!bg-juju-400 hover:ring-juju-300 transition-all duration-200 ring-2 text-center rounded-none"
                                    icon="i-mdi-map" :to="location.mapLink" target="_blank" external>
                                    Get Directions
                                </UButton>

                                <UButton size="lg" variant="outline"
                                    class="w-full font-bold text-juju-400 border-juju-400 hover:bg-juju-500/10 transition-all duration-200 rounded-none"
                                    icon="i-mdi-phone" to="/get-in-touch">
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
                        {{ location.description }}
                    </p>
                </div>

                <!-- Back to Locations -->
                <div class="mt-8 text-center">
                    <UButton variant="ghost" class="text-juju-400 hover:text-juju-300 transition-colors"
                        icon="i-mdi-arrow-left" to="/locations">
                        Back to All Locations
                    </UButton>
                </div>
            </div>
        </div>
    </main>
</template>