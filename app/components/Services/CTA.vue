<script setup lang="ts"></script>

<template>
  <section class="text-center py-12">
    <h2 class="text-3xl md:text-4xl font-bold font-delight mb-6 text-white">
      Ready to Get Started?
    </h2>
    <p class="text-stone-400 text-lg mb-12 max-w-2xl mx-auto max-w-lg">
      Let's discuss your project and explore how we can help bring your vision to life.
    </p>
    <NuxtLink to="/get-in-touch"
      class="inline-flex items-center gap-2 bg-juju-500 hover:bg-juju-600 text-white font-bold py-4 px-10 rounded-none transition-colors duration-200 group">
      Get in Touch
      <UIcon name="i-mdi-message-text" class="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
    </NuxtLink>
  </section>
</template>

<style scoped></style>
