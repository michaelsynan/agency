<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const opacity = ref(1); // Initial opacity

const handleScroll = () => {
  const scrollTop = window.scrollY; // Get the vertical scroll position
  const fadeStart = 0; // Start fading at the top
  const fadeEnd = 200; // Fully fade out after 200px of scrolling
  const fadeRange = fadeEnd - fadeStart;

  if (scrollTop <= fadeStart) {
    opacity.value = 1; // Fully visible
  } else if (scrollTop >= fadeEnd) {
    opacity.value = 0; // Fully invisible
  } else {
    opacity.value = 1 - (scrollTop - fadeStart) / fadeRange; // Gradually fade
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div
    class="group w-full absolute bottom-0 left-0 border-t border-stone-500 font-switzer font-bold text-opacity-40 text-sm h-content flex items-center pl-2"
    :style="{ opacity: opacity }">

    <a href="tel:18006576893"
      class="block transition-all duration-300 ease-in-out !font-mono mt-0.5 hover:text-stone-100 tracking-wide text-xs md:text-sm">
      (800) 657-6893 | call for free consultation
    </a>
  </div>
</template>

<style scoped></style>
