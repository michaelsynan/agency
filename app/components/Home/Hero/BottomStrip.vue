<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const opacity = ref(1)
const x = ref(0)
const y = ref(0)

const updateMousePosition = (event: MouseEvent) => {
  x.value = event.clientX
  y.value = event.clientY
}

const handleScroll = () => {
  const scrollTop = window.scrollY
  const fadeStart = 0
  const fadeEnd = 200
  const fadeRange = fadeEnd - fadeStart

  if (scrollTop <= fadeStart) {
    opacity.value = 1
  }
  else if (scrollTop >= fadeEnd) {
    opacity.value = 0
  }
  else {
    opacity.value = 1 - (scrollTop - fadeStart) / fadeRange
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('mousemove', updateMousePosition)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('mousemove', updateMousePosition)
})
</script>

<template>
  <div
    class="group w-full absolute bottom-0 left-0 border-t border-stone-500 font-switzer font-bold text-opacity-40 text-sm h-content flex items-center pl-2"
    :style="{ opacity: opacity }">
    <div
      class="block transition-all duration-300 ease-in-out !font-mono mt-0.5 text-stone-400 tracking-wide text-xs md:text-sm">
      ({{ x }}, {{ y }})
    </div>
  </div>
</template>

<style scoped></style>
