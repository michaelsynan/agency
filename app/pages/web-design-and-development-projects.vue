<script setup lang="ts">
useSeoMeta({
  title: 'View Our Work - Portfolio & Case Studies',
  description: 'Explore our portfolio of custom websites, e-commerce solutions, and digital projects. See how we help businesses succeed online with innovative web design and development.',
});

interface Project {
  id: number;
  title: string;
  image: string;
  alt: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Best Organic Nuts',
    image: '/nuts.webp',
    alt: 'Best Organic Nuts website',
    tags: ['E-commerce'],
    link: '#'
  },
  {
    id: 2,
    title: 'Red Light Bed Consulting',
    image: '/red-light-bed-thum.jpg',
    alt: 'Red Light Bed Consulting website',
    tags: ['E-commerce', 'Nuxt'],
    link: '#'
  },
  {
    id: 3,
    title: 'Native NY Video',
    image: '/video-photography-website.webp',
    alt: 'Native NY Video website',
    tags: ['Nuxt'],
    link: 'https://www.nativenyvideo.com/'
  },
  {
    id: 4,
    title: 'Biohack Your Sauna',
    image: '/sauna.webp',
    alt: 'Biohack Your Sauna website',
    tags: ['E-commerce'],
    link: '#'
  },
  {
    id: 5,
    title: 'OAK Property Found',
    image: '/oak.jpg',
    alt: 'OAK Property Found website',
    tags: ['Real Estate'],
    link: 'https://www.oakpropertyfound.com/'
  },
  {
    id: 6,
    title: 'Shan Shan Peer Coaching',
    image: '/shan-shan-peer-coaching.jpg',
    alt: 'Shan Shan Peer Coaching website',
    tags: ['Nuxt'],
    link: 'https://shan-shan-song.vercel.app/'
  }
];
</script>

<template>
  <div>
    <GeneralHeader heading="Selected Work" description="Showcasing our latest projects and success stories" />

    <main class="bg-stone-950 text-white min-h-screen py-20">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <NuxtLink v-for="project in projects" :key="project.id" :to="project.link"
            class="bg-stone-900/50 overflow-hidden hover:bg-stone-900/70 transition-colors block group">
            <div class="bg-stone-800 relative border border-stone-500/20" style="aspect-ratio: 1200/565;">
              <NuxtImg :src="project.image" :alt="project.alt" class="w-full h-full object-cover" placeholder />
            </div>
            <div class="">
              <div class="border border-stone-500/20 p-2">
                <h3
                  class="text-2xl font-bold font-delight text-stone-700 group-hover:text-stone-200 ease-in-out duration-200 transition-all">
                  {{ project.title }}
                </h3>
              </div>
              <div class="flex flex-row justify-between border-b border-stone-500/20">
                <div class="flex">
                  <span v-for="tag in project.tags" :key="tag"
                    class="inline-block bg-stone-700/30 text-stone-500 px-2 py-1 text-xs font-medium border border-stone-500/50">
                    {{ tag }}
                  </span>
                </div>
                <div
                  class="inline-flex items-center text-juju-400/50 group-hover:text-juju-400 transition-all duration-300 border-l border-stone-500/20 pl-1 pr-1 text-sm">
                  Visit Website
                  <UIcon name="i-mdi-arrow-right" class="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
