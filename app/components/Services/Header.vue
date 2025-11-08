<script
  setup
  lang="ts"
>
defineProps({
  title: {
    type: String,
    default: 'OUR SERVICES',
  },
  description: {
    type: String,
    default: 'Design, Development & Marketing',
  },
  icon: {
    type: String,
  },
})
</script>

<template>
  <div class="w-full h-[50vh] md:h-[66vh] relative flex flex-col overflow-hidden">
    <!-- Fixed background image spanning the viewport -->
    <div
      class="fixed inset-0 z-0 pointer-events-none bg-top bg-cover"
      style="background-image:url('/manhattan-skyline-nyc.jpg')"
      aria-hidden="true"
    />
    <!-- Overlay for readability over the header area -->
    <div class="absolute inset-0 z-10 bg-dino-950/40" />

    <!-- Content positioned at the bottom of the hero section -->
    <div
      id="hero"
      class="relative z-20 mt-auto w-full px-6 md:px-16 pb-12 md:pb-16"
    >
      <UIcon
        v-if="icon"
        :name="icon"
        class="size-16"
      />

      <h1 class="text-4xl md:text-6xl font-bold font-delight text-left">
        {{ title }}
      </h1>
      <div class="text-lg md:text-2xl switzer opacity-50 text-left mt-3 md:mt-4 max-w-[40ch] md:mx-w-[60ch]">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Fixed background handled via a fixed, full-viewport layer for cross-browser reliability. */
</style>
