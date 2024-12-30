<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useWindowScroll } from '@vueuse/core'

const el = ref<HTMLElement | null>(null);

const { y } = useWindowScroll();

const items = [
  '/video-photography-website.webp',
  '/dashboard.webp',
  '/hero-image.webp',
  '/facial-serum-website.webp',
  '/daily-grind.webp',
  '/mobile-app.webp',
  '/jazz.webp',
  '/coding-nurse.webp',
  '/yoga-pilates.webp',
  '/michael.webp',
];

onMounted(() => {
  watch(y, (newValue) => {
    if (el.value) {
      el.value.scrollLeft = newValue * 0.7;
    }
  }, { immediate: true });
});
</script>

<template>
  <div ref="el" class="scroll-container flex flex-nowrap overflow-x-scroll gap-6">
    <div v-for="item in items" :key="item" class="shrink-0">
      <img :src="item" class="h-64 object-contain" style="width: auto;">
    </div>
  </div>
</template>

<style scoped>
.scroll-container {

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  -ms-overflow-style: none;

  scroll-behavior: smooth;
}
</style>
