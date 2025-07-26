<script setup lang="ts">
import { ref, onMounted } from 'vue'

const badgesRef = ref<HTMLElement>()
const isVisible = ref(false)

onMounted(() => {
  if (badgesRef.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )
    observer.observe(badgesRef.value)
  }
})
</script>

<template>
  <div ref="badgesRef"
    class="py-10 pt-14 border-stone-500 flex flex-row gap-8 md:gap-10 justify-center items-center flex-wrap md:flex-nowrap">
    <NuxtLink to="https://www.designrush.com/agency/profile/formwork-studios"
      :class="['badge-item', { 'animate-fade-in-1': isVisible }]">
      <NuxtImg src="/best-website-designrush.png" alt="Award Winning Studio"
        class="w-20 h-20 md:w-28 md:h-28 object-contain mx-auto mb-6 md:mb-4" placeholder />
    </NuxtLink>
    <NuxtLink to="https://www.credly.com/badges/77e58564-6fe0-44c8-b79f-c566daab4bf3"
      :class="['badge-item', { 'animate-fade-in-2': isVisible }]">
      <NuxtImg src="/googleux.png" alt="Google UX Design Certificate"
        class="w-20 h-20 md:w-28 md:h-28 object-contain mx-auto mb-6 md:mb-4" placeholder />
    </NuxtLink>
    <NuxtLink to="https://skillshop.credential.net/c97736c6-4a06-46b3-9eda-527fb4afe2b1#acc.ilTI78bP"
      :class="['badge-item', { 'animate-fade-in-3': isVisible }]">
      <NuxtImg src="/google-analytics.png" alt="Google Analytics Certificate"
        class="w-20 h-20 md:w-28 md:h-28 object-contain mx-auto mb-6 md:mb-4" placeholder />
    </NuxtLink>

    <NuxtLink to="https://www.bbb.org/us/pa/scranton/profile/web-design/formwork-studios-0241-236094847"
      :class="['badge-item', { 'animate-fade-in-4': isVisible }]">
      <NuxtImg src="/bbb.png" alt="BBB Accredited Business"
        class="w-20 h-20 md:w-28 md:h-28 object-contain mx-auto mb-6 md:mb-4" placeholder />
    </NuxtLink>
  </div>
</template>

<style scoped>
.badge-item {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-1 {
  animation: fadeInUp 0.6s ease-out 0.1s forwards;
}

.animate-fade-in-2 {
  animation: fadeInUp 0.6s ease-out 0.2s forwards;
}

.animate-fade-in-3 {
  animation: fadeInUp 0.6s ease-out 0.3s forwards;
}

.animate-fade-in-4 {
  animation: fadeInUp 0.6s ease-out 0.4s forwards;
}
</style>
