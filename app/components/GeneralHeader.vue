<script
  setup
  lang="ts"
>
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
  image: {
    type: String,
    default: '/manhattan-skyline-nyc.jpg',
  },
})
</script>

<template>
  <div class="w-full h-[50vh] md:h-[66vh] relative flex flex-col bg-juju-950/50 overflow-hidden">
    <!-- Background image with blur effect -->
    <div
      class="absolute inset-0 bg-image opacity-50 blur-image bg-fixed!"
      :style="{ backgroundImage: `url(${image})` }"
    />

    <!-- Dark overlay for better text readability -->
    <div class="absolute inset-0 bg-juju-950/70" />

    <!-- Content positioned at the bottom of the hero section -->
    <div
      id="hero"
      class="relative z-10 mt-auto w-full px-6 md:px-16 pb-12 md:pb-16"
    >
      <h1
        :class="[' !text-white text-4xl leading-tight md:text-6xl font-bold font-delight text-left testing', long ? 'max-w-[30ch]' : 'max-w-[15ch]']"
      >
        {{ heading }}
      </h1>
      <div
        v-if="description"
        class="text-lg !text-white md:text-2xl switzer opacity-50 text-left mt-1 max-w-[40ch] md:mx-w-[60ch]"
      >
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
  /* reverted to bottom */
  background-attachment: fixed;
  height: 100%;
  width: 100%;
}

.blur-image {
  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
  transform: scale(1.1);
}
</style>
