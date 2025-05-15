<script setup lang="ts">
const { data: blogs } = await useAsyncData('documents-list', () => {
  return queryCollection('blogs')
    .select('title', 'path', 'description', 'date', 'tags', 'image', 'category', 'time')
    .all()
})
</script>

<template>
  <main class="text-white min-h-screen">
    <div class="w-full h-[50vh] md:h-[66vh] relative flex flex-col bg-juju-950/50 overflow-hidden">
      <!-- Background image with blur effect -->
      <div class="absolute inset-0 bg-image opacity-30 blur-image !bg-fixed"></div>

      <!-- Dark overlay for better text readability -->
      <div class="absolute inset-0 bg-juju-950/70"></div>

      <!-- Content positioned at the bottom of the hero section -->
      <div id="hero" class="relative z-10 mt-auto w-full px-6 md:px-16 pb-12 md:pb-16">
        <h1 class="text-4xl max-w-[15ch] leading-normal md:text-6xl font-bold font-delight text-left testing">Design,
          Technology &
          Philosophy</h1>
        <div class="text-lg md:text-2xl switzer opacity-50 text-left mt-3 md:mt-4"></div>
      </div>
    </div>
    <UContainer class="my-32 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div v-for="blog in blogs" :key="blog.path">
        <nuxt-link :to="blog.path" class="flex flex-col gap-2">
          <div class="relative">
            <NuxtImg prerender :src="blog.image" :alt="blog.title" class="rounded-lg" />
            <span
              class="border-2 border-juju-700 px-3 py-1.5 rounded-sm text-sm font-bold absolute top-2 left-2 bg-stone-950 bg-opacity-70">{{
                blog.category
              }}</span>
          </div>

          <div class="flex flex-col gap-1">
            <h2>{{ blog.title }}</h2>
            <div class="flex flex-row gap-2 text-stone-400">
              <time :datetime="blog.date" class="block">{{ new Date(blog.date).toLocaleDateString('en-US', {
                year:
                  'numeric', month: 'long', day: 'numeric'
              }) }}</time>
              <div class="mx-1">/</div>
              <div>about {{ blog.time }} minutes</div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </UContainer>
  </main>
</template>
<style scoped>
.bg-image {
  background-image: url('/manhattan-skyline-nyc.jpg');
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  /* Makes the background fixed */
  height: 100%;
  width: 100%;
}

.blur-image {
  /* Multiple blur approaches for browser compatibility */
  filter: blur(8px);
  -webkit-filter: blur(8px);
  transform: scale(1.1);
  /* Prevent blur edges */
}
</style>