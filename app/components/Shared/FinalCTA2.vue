<template>
  <div class="cta-background w-full  py-20 md:py-40 relative bg-fixed max-w-6xl pl-0 md:pl-20 ml-0 md:ml-20">
    <div class="absolute inset-0 bg-black/50"></div> <!-- Overlay -->
    <UContainer class="flex flex-row gap-10 relative z-10 text-white text-center">
      <div class="flex flex-col flex-grow items-start justify-start text-left">
        <div class="text-2xl md:text-4xl font-regular !leading-relaxed font-delight tracking-wide max-w-3xl">
          Formwork Studios operates at the intersection of design, technology, and strategy, where every project is an
          intricate exploration of how tailored digital solutions can fundamentally transform user experiences and
          organizational trajectories.
        </div>
      </div>
      <div id="right-container" class="">
        <div id="bottom-row" class="flex flex-row gap-10">
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
// Removed unnecessary imports and logic
</script>

<style scoped>
.cta-background {
  background-image: url('/birdscompressed.jpg');
  /* Set the background image */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  /* Makes the background fixed */
}
</style>
