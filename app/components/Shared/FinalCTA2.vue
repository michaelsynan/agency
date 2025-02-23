<template>
  <div ref="background" class="w-full border-b border-stone-500 py-20 md:py-40 relative" :style="{
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url('/birdscompressed.jpg')`
  }">


    <div class="absolute inset-0 bg-black bg-opacity-50"></div> <!-- Overlay -->
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
import { ref, computed } from 'vue'
import { useScroll, useElementBounding } from '@vueuse/core'

const background = ref(null)
const { y } = useScroll(window) // Track scroll position
const { top, height } = useElementBounding(background) // Track element position & height

const backgroundZoom = computed(() => {
  const windowHeight = window.innerHeight
  if (top.value > y.value) return 100 // Keep at 100% before entering view

  const scrollSinceVisible = y.value - top.value // Scroll distance after entering viewport
  const progress = scrollSinceVisible / (windowHeight / 2) // MUCH SLOWER: 1% zoom per half viewport height

  return Math.min(100 + progress, 110) // Max zoom now takes WAY more scroll
})
</script>

<style scoped>
div {
  transition: background-size 0.8s ease-out;
  /* Even slower transition */
}
</style>
