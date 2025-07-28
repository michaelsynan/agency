<script setup lang="ts">
defineProps({
  heading: {
    type: String,
    default: 'Design, Technology & Philosophy',
  },
  description: {
    type: String,
    default: '',
  },
  long: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="w-full h-[50vh] md:h-[66vh] relative flex flex-col bg-juju-950/50 overflow-hidden">
    <!-- Background image with blur effect -->
    <div class="absolute inset-0 bg-image opacity-30 blur-image !bg-fixed" />

    <!-- Dark overlay for better text readability -->
    <div class="absolute inset-0 bg-juju-950/70" />

    <!-- Content positioned at the bottom of the hero section -->
    <div id="hero" class="relative z-10 mt-auto w-full px-6 md:px-16 pb-12 md:pb-16">
      <h1
        :class="['text-4xl leading-normal md:text-6xl font-bold font-delight text-left testing', long ? 'max-w-[30ch]' : 'max-w-[15ch]']">
        {{ heading }}
      </h1>
      <div v-if="description" class="text-lg md:text-2xl switzer opacity-50 text-left mt-3 md:mt-4">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  background-image: url('/manhattan-skyline-nyc.jpg');
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
}

.blur-image {
  filter: blur(8px);
  -webkit-filter: blur(8px);
  transform: scale(1.1);
}
</style>
