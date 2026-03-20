<script setup lang="ts">
useHead({
  title: 'Featured Small Business Clients in NEPA | Formwork Studios',
  meta: [
    {
      name: 'description',
      content: 'A curated list of small businesses we are proud to partner with in Northeastern Pennsylvania. See our web design and SEO work for local NEPA companies.',
    },
  ],
})

const clients = [
  {
    name: 'Primo Sewer Cleaning',
    website: 'https://primosewercleaning.com',
    description: 'Expert sewer and drain cleaning for residential and commercial properties.',
    imageUrl: '/primo.webp',
    linkPreText: 'View ',
    linkAnchorText: 'sewer cleaning services',
  },
  {
    name: 'Weidlich Brothers Tree Care',
    website: 'https://www.weidlichbrotherstreecare.com/',
    description: 'Professional and reliable tree care, trimming, and removal services.',
    imageUrl: '/tree-care-services.webp',
    linkPreText: 'View ',
    linkAnchorText: 'tree care services',
  },
  {
    name: "Cierra's Maid To Clean",
    website: 'https://www.cierrasmaidtoclean.com/',
    description: 'Top-quality residential and commercial cleaning services, tailored to your needs.',
    imageUrl: '/cleaning-service.webp',
    linkPreText: 'View ',
    linkAnchorText: 'cleaning services',
  },
  {
    name: 'Drain-Flo',
    website: 'https://drainflonepa.com',
    description: 'Specializing in drain diagnostics, clearing, and maintenance.',
    imageUrl: '/drain-flo-drain-and-sewer-cleaning.webp',
    linkPreText: 'View ',
    linkAnchorText: 'drain and sewer cleaning services',
  },
  {
    name: 'Best Scranton Plumber',
    website: 'https://www.bestscrantonplumber.com/',
    description: 'Your trusted local plumber for reliable and efficient plumbing solutions in Scranton.',
    imageUrl: '/best-scranton-plumber.webp',
    linkPreText: 'View ',
    linkAnchorText: 'plumbing services',
  },
]
</script>

<template>
  <main class="min-h-screen text-white">
    <GeneralHeader
      heading="Our NEPA Partners"
      description="We're proud to work with and support these fantastic local businesses in Northeastern Pennsylvania."
      image="/poconos-web-design-and-marketing.jpg"
    />
    <UContainer class="py-16 sm:py-24">
      <div class="flex flex-col gap-y-16">
        <div
          v-for="client in clients"
          :key="client.name"
          class="flex flex-col gap-6 sm:flex-row sm:gap-8 items-center"
        >
          <div class="w-full sm:w-1/3 md:w-1/4 flex-shrink-0">
            <a
              :href="client.website"
              target="_blank"
              rel="noopener noreferrer"
              class="block"
            >
              <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-stone-800">
                <img
                  :src="client.imageUrl"
                  :alt="`Image of ${client.name}`"
                  class="h-full w-full object-cover object-center hover:opacity-80 transition-opacity"
                >
              </div>
            </a>
          </div>
          <div class="w-full sm:w-2/3 md:w-3/4">
            <h3 class="text-2xl font-semibold text-white">
              <a
                :href="client.website"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ client.name }}
              </a>
            </h3>
            <p class="mt-2 text-gray-400 max-w-prose">
              {{ client.description }}
            </p>
            <p class="mt-4 text-sm text-gray-300">
              {{ client.linkPreText }}
              <a
                :href="client.website"
                target="_blank"
                rel="noopener noreferrer"
                class="font-medium text-juju-400 hover:text-juju-300 underline"
              >
                {{ client.linkAnchorText }}
              </a>
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </main>
</template>
