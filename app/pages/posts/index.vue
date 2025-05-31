<script setup lang="ts">
const { data: blogs } = await useAsyncData('documents-list', () => {
  return queryCollection('blogs')
    .select('title', 'path', 'description', 'date', 'tags', 'image', 'category', 'time')
    .all()
})
</script>

<template>
  <main class="text-white min-h-screen">
    <GeneralHeader heading="Design, Technology & Philosophy" />
    <UContainer class="my-32 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div v-for="blog in blogs" :key="blog.path">
        <nuxt-link :to="blog.path" class="flex flex-col gap-2">
          <div class="relative">
            <NuxtImg prerender :src="blog.image" :alt="blog.title" class="rounded-none" />
            <span
              class="border-2 border-juju-700 px-3 py-1.5 rounded-sm text-sm font-bold absolute top-2 left-2 bg-stone-950 bg-opacity-70">
              {{ blog.category }}
            </span>
          </div>

          <div class="flex flex-col gap-1">
            <h2>{{ blog.title }}</h2>
            <div class="flex flex-row gap-2 text-stone-400">
              <time :datetime="String(blog.date)" class="block">
                {{ new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }) }}
              </time>
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
/* Styles moved to GeneralHeader component */
</style>