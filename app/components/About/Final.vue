<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Reference to the header container
const headerRef = ref(null);
const isSticky = ref(false);

// Add scroll event listener
const handleScroll = () => {
  if (!headerRef.value) return;

  const rect = headerRef.value.getBoundingClientRect();
  // Trigger the change when the element is 100px from top of viewport
  isSticky.value = rect.top <= 100;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="grid grid-rows-3 h-screen">
    <!-- Top Row - Content in right column -->
    <div class="grid grid-cols-3 w-full max-h-[100px]" ref="headerRef">
      <div class="col-span-2">
        <!-- Empty left and middle columns -->
      </div>
      <div class="p-4 sticky" :class="isSticky ? 'top-10' : 'top-0'">
        <h2 class="text-6xl font-delight mb-4 text-white font-black transition-all duration-300 text-right">THIS HEADER
        </h2>
      </div>
    </div>

    <!-- Middle Row - Content in middle column -->
    <div class="grid grid-cols-3 w-full">
      <div></div>
      <div class="p-4 flex items-start justify-center">
        <div class="text-stone-100 text-base text-right max-w-sm">Some textSome textSome textSome textSome textSome
          textSome textSome textSome textSome textSome textSome textSome textSome textSome textSome text</div>
      </div>
      <div></div>
    </div>

    <!-- Bottom Row - Content in left column -->
    <div class="grid grid-cols-3 w-full">
      <div class="p-4 overflow-hidden flex flex-col justify-end">
        <div class="text-stone-100 text-2xl">
          <Nuxt-img src="subway.png" class="max-w-full h-auto object-contain" />
        </div>
      </div>
      <div class="col-span-2">
        <!-- Empty middle and right columns -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-0 {
  top: 0;
}

.top-10 {
  top: 40px;
}

.sticky {
  position: sticky;
  z-index: 10;
  /* Ensure it's above other content */
  transition: all 0.3s ease;
}
</style>
