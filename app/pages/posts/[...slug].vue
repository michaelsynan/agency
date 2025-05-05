<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blogs').path(route.path).first()
})
</script>

<template>
  <main class="text-white pt-32 min-h-screen">
    <UContainer :ui="{
      constrained: 'max-w-2xl',
    }">
      <ContentRenderer class="blog-post max-w-3xl mx-auto pb-[100px]" v-if="page" :value="page" />
    </UContainer>
  </main>
</template>
