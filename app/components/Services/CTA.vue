<script setup lang="ts"></script>

<template>
  <section class="text-center p-8 md:p-12 bg-stone-900/30 rounded-sm border border-stone-800/50 mt-12">
    <h2 class="text-2xl md:text-3xl font-bold font-delight mb-4 text-stone-200">
      Ready to Get Started?
    </h2>
    <p class="text-stone-400 switzer leading-7 mb-8 max-w-2xl mx-auto">
      Let's discuss your project and explore how we can help bring your vision to life.
      Get in touch for a free consultation.
    </p>
    <NuxtLink to="/get-in-touch"
      class="inline-flex items-center gap-2 bg-juju-500 hover:bg-juju-600 text-white font-bold py-3 px-8 rounded-none transition-colors duration-200 group">
      Get in Touch
      <UIcon name="i-mdi-message-text" class="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
    </NuxtLink>
  </section>
</template>

<style scoped></style>
