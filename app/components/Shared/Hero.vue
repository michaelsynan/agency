<script setup lang="ts">
const props = defineProps<{
  heading: string
  description: string
  image?: string
  gradientOff?: boolean
}>()
</script>

<template>
  <div :style="{ backgroundImage: `url(${props.image})`, backgroundPosition: 'bottom center' }"
    class="py-40 bg-cover bg-center bg-no-repeat relative bg-juju-950">
    <!-- Black overlay -->
    <div v-if="props.image" class="absolute top-0 left-0 right-0 bottom-0 bg-stone-950 opacity-40 z-10" />
    <!-- Gradient Strip -->
    <!-- <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-stone-950 to-stone-950"
      :class="{ 'hidden': props.gradientOff }" /> -->
    <UContainer class="flex flex-col gap-10">
      <h1 class="text-5xl relative z-20 font-delight font-black uppercase">
        {{ props.heading }}
      </h1>
      <!-- <p class="text-2xl delight relative z-20">
        {{ props.description }}
      </p> -->
    </UContainer>
  </div>
</template>

<style scoped>
.bg-gradient-to-b {
  background-image: linear-gradient(to bottom, transparent 60%, #0c0a09 90%, #0c0a09 100%);
}
</style>
