<template>
  <div class="w-full py-24 md:py-48 relative max-w-6xl mx-auto">
    <div class="flex flex-col md:flex-row">
      <!-- Left Column: Image with Text -->
      <div class="w-full md:w-1/2 relative">
        <div class="cta-background relative h-full p-8 md:p-12">
          <div class="absolute inset-0 bg-black/50"></div> <!-- Overlay -->
          <div class="relative z-10 text-white">
            <div class="text-2xl md:text-4xl font-regular !leading-relaxed font-delight tracking-wide">
              Formwork Studios operates at the intersection of design, technology, and strategy, where every project is
              an
              intricate exploration of how tailored digital solutions can fundamentally transform user experiences and
              organizational trajectories.
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Empty Space (hidden on mobile) -->
      <div class="hidden md:block md:w-1/2"></div>
    </div>
  </div>
</template>

<script setup>
// Removed unnecessary imports and logic
</script>

<style scoped>
.cta-background {
  background-image: url('/birdscompressed.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
