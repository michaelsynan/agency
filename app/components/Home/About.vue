<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Updated words with punctuation
const words = [
  "THE", "WORLD", "IS", "CHANGING", "AT", "BREAKNECK", "SPEED,", "AND", "LEAVING", "THE", "HUMAN", "ELEMENT", "BEHIND.", "WE", "ARE", "HERE", "TO", "CHANGE", "THAT.", "YOU", "ARE", "INVITED", "TO", "JOIN", "US."
];

const containerRef = ref(null);
let observer = null;

const revealWords = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const spans = entry.target.querySelectorAll('.word-span');

      // Create natural rhythm with pauses at logical points
      const getDelay = (index) => {
        // Create natural pauses after these words
        const pausePoints = [7, 13, 20];

        // Base timing
        let delay = 0;

        // Add cumulative time for each word
        for (let i = 0; i <= index; i++) {
          // Add a longer pause at natural break points
          if (pausePoints.includes(i)) {
            delay += 600; // Longer pause (increased from 400)
          } else {
            // Vary speed slightly based on position
            if (i < 8) delay += 120; // Slightly faster at start (increased from 90)
            else if (i > 20) delay += 100; // Accelerate at end but slower (increased from 70)
            else delay += 150; // Slower in middle section (increased from 110)
          }
        }

        return delay;
      };

      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add('revealed');
        }, getDelay(index));
      });
    }
  });
};

onMounted(() => {
  if (containerRef.value) {
    observer = new IntersectionObserver(revealWords, { threshold: 0.1 });
    observer.observe(containerRef.value);
  }
});

onUnmounted(() => {
  if (observer && containerRef.value) {
    observer.unobserve(containerRef.value);
    observer.disconnect();
  }
});
</script>

<template>
  <div class="border-b border-stone-500/50 py-72 bg-url !h-screen">
    <UContainer class="text-center flex flex-col justify-center items-center h-full">
      <div class="text-sm text-stone-700 mb-8 uppercase font-bold font-mono tracking-wider">
        / our common problem
      </div>
      <div
        class="text-4xl md:text-5xl font-delight font-black text-opacity-50 text-center max-w-7xl mx-auto leading-normal"
        ref="containerRef">
        <span v-for="(word, index) in words" :key="index" class="word-span">{{ word }}</span>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.word-span {
  display: inline-block;
  margin: 0 0.2rem;
  filter: blur(25px);
  opacity: 0.5;
  transition: filter 0.4s ease-out, opacity 0.4s ease-out;
}

/* Add proper spacing after periods and commas */
.word-span:nth-child(13),
/* BEHIND. */
.word-span:nth-child(19),
/* THAT. */
.word-span:nth-child(25) {
  /* US. */
  margin-right: 0.5rem;
}

/* Add a bit more space after the comma */
.word-span:nth-child(7) {
  /* SPEED, */
  margin-right: 0.3rem;
}

.word-span.revealed {
  filter: blur(0);
  opacity: 1;
}
</style>
