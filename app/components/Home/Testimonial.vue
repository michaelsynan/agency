<script setup lang="ts">
const props = defineProps<{
  name: string
  text: string
  image: string
  profession: string
  stars: number
}>()
</script>

<template>
  <div class="px-6 max-w-sm rounded-lg  text-center flex-1 basis-1/3">
    <div class="w-full mb-8">
      <div class="w-24 h-24 flex items-center justify-center border border-stone-300 rounded-full mx-auto"
        :style="{ backgroundImage: `url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }" />
    </div>
    <p class="text-base italic leading-relaxed">
      "{{ props.text }}"
    </p>
    <UIcon v-for="(star, index) in stars" :key="index" name="i-mdi-star" class="w-4 h-4 text-yellow-300 -ml-0.5 mt-3" />
    <p class="text-lg font-bold mt-2">
      {{ props.name }}
    </p>
    <p class="text-sm opacity-50">
      {{ props.profession }}
    </p>
  </div>
</template>

<style scoped></style>
