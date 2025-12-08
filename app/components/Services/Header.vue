<script
  setup
  lang="ts"
>
import { onMounted, onBeforeUnmount, ref } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'OUR SERVICES',
  },
  description: {
    type: String,
    default: 'Design, Development & Marketing',
  },
  icon: {
    type: String,
  },
  bgImage: {
    type: String,
    default: '/manhattan-skyline-nyc.jpg',
  },
})

const imgRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const handler = () => {
    const y = window.scrollY || 0
    if (imgRef.value) {
      imgRef.value.style.transform = `translateY(${y}px)`
    }
  }
  handler()
  window.addEventListener('scroll', handler, { passive: true })
    ; (onBeforeUnmount as any)(() => {
      window.removeEventListener('scroll', handler as any)
    })
})
</script>

<template>
  <div class="w-full h-[50vh] md:h-[66vh] relative flex flex-col overflow-hidden">
    <!-- Image confined to header; counter-translated on scroll to appear fixed -->
    <div
      ref="imgRef"
      class="absolute inset-0 z-0 bg-no-repeat bg-cover bg-bottom will-change-transform"
      :style="{ backgroundImage: `url(${bgImage})` }"
      aria-hidden="true"
    />
    <!-- Overlay for readability over the header area -->
    <div class="absolute inset-0 z-10 bg-dino-950/40" />

    <!-- Content positioned at the bottom of the hero section -->
    <div
      id="hero"
      class="relative z-20 mt-auto w-full px-6 md:px-16 pb-12 md:pb-16"
    >
      <UIcon
        v-if="icon"
        :name="icon"
        class="size-16"
      />

      <h1 class="text-4xl md:text-6xl font-bold font-delight text-left text-white!">
        {{ title }}
      </h1>
      <div
        class="text-lg md:text-2xl switzer opacity-50 text-left mt-3 md:mt-4 max-w-[40ch] md:mx-w-[60ch] text-white!">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Make the background attachment fixed via class on the container */
.bg-fixed {
  background-attachment: fixed;
}
</style>
