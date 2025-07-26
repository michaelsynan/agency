<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  title: { type: String, required: false, default: 'Custom Web Design & Development Solutions' },
  description: { type: String, required: false, default: 'Transform your business with professional web design, e-commerce solutions, and digital marketing. We create stunning websites that drive results and grow your online presence.' },
  headline: { type: String, required: false, default: 'Formwork Studios' },
});

const title = computed(() => (props.title || "").slice(0, 60));
const description = computed(() => (props.description || "").slice(0, 200));
</script>

<template>
  <div class="bg-stone-950 text-white w-full h-full flex flex-col justify-center p-16">
    <!-- Formwork Logo -->
    <div class="flex items-start mb-16">
      <img src="/formwork.svg" alt="Formwork Studios" class="h-16 w-auto">
    </div>

    <!-- Content Column -->
    <div class="flex flex-col max-w-4xl">
      <!-- Headline -->
      <h1 class="text-6xl font-bold font-delight leading-tight mb-8">
        {{ props.headline }}
      </h1>

      <!-- Title -->
      <h2 class="text-4xl font-semibold text-stone-200 leading-snug mb-6">
        {{ title }}
      </h2>

      <!-- Description -->
      <p class="text-xl text-stone-300 leading-relaxed max-w-3xl">
        {{ description }}
      </p>
    </div>
  </div>
</template>
