<script setup lang="ts">
const route = useRoute()
const showBackToServices = computed(() => route.path.includes('/services'))
</script>

<template>
  <div class="bg-stone-950 p-6 md:p-16 !py-20 relative">
    <div class="flex flex-col gap-8 max-w-4xl mx-auto">
      <slot />

      <div v-if="showBackToServices" class="">
        <NuxtLink to="/services" class="text-dino-500 inline-flex items-center gap-2 group">
          <UIcon name="i-mdi-arrow-left-thin"
            class="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Services
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
