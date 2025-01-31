<template>
  <footer>
    <div class="relative h-[60vh]"
      style="background-image: url('/china-town-nyc.jpg'); background-size: cover; background-attachment: fixed; background-repeat: no-repeat; background-position: center calc(100% + 60px);">
      <!-- Black overlay -->
      <div class="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40" />

      <!-- Gradient Strip -->
      <!-- <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black" /> -->

      <!-- Footer at the bottom -->
      <FooterMain class="absolute bottom-0 left-0 right-0" />
    </div>
  </footer>
</template>

<style scoped>
/* .bg-gradient-to-b {
  background-image: linear-gradient(to top, transparent 0%, #0c0a09 70%, #0c0a09 100%);
} */
</style>
