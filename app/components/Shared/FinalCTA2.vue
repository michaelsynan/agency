<template>
  <div class="w-full relative">
    <div class="flex flex-col md:flex-row items-stretch border-b border-stone-500/50">
      <!-- Left Column: Text -->
      <div class="w-full md:w-1/2 p-8 md:p-12 bg-stone-950 flex items-center justify-center">
        <div
          class="text-2xl md:text-4xl font-regular !leading-relaxed tracking-wide text-white max-w-xl mx-auto switzer">
          Formwork Studios operates at the intersection of design, technology & strategy, where every project is
          jumping-off point into the creation of tailored digital solutions that fundamentally transform user
          experiences and
          organizational trajectories.
        </div>
      </div>

      <!-- Right Column: Image -->
      <div class="w-full md:w-1/2 h-[400px] md:h-auto">
        <nuxt-img src="/birdscompressed.webp" format="webp" width="1200" height="800" loading="lazy"
          alt="Formwork Studios" class="w-full h-full object-cover" placeholder />
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can go here
</script>

<style scoped>
/* Full-width overrides */
</style>
