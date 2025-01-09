<script setup lang="ts">
import { defineProps, withDefaults, ref, onMounted, computed } from 'vue';

const props = withDefaults(
  defineProps<{
    text: string
    size?: string
  }>(),
  {
    size: 'text-4xl'
  }
);

const letters = computed(() => props.text.split(''));
const revealContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.5 });

  if (revealContainer.value) {
    observer.observe(revealContainer.value);
  }
});
</script>

<template>
  <div class="overflow-hidden" ref="revealContainer">
    <template v-for="(char, i) in letters" :key="i">
      <h2 class="letter pb-0 font-black" :class="props.size" :style="{ '--letter-index': i }"
        v-html="char === ' ' ? '&nbsp;' : char"></h2>
    </template>
  </div>
</template>

<style scoped>
.letter {
  display: inline-block;
  transform: translateY(100%);
  opacity: 0;
}

.animate .letter {
  animation: revealOneByOne 0.5s forwards ease-out;
  animation-delay: calc(var(--letter-index) * 0.01s);
}

@keyframes revealOneByOne {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
