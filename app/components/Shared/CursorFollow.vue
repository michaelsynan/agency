<template>
  <div>
    <img src="/cursor-circle.svg" :style="cursorStyle" class="cursor-follower" />
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue';
import { useMouse } from '@vueuse/core';

const { x, y } = useMouse();

const cursorX = ref(0);
const cursorY = ref(0);
const speed = 0.05; // Reduced speed for more lag

const cursorStyle = computed(() => ({
  position: 'absolute',
  left: `${cursorX.value}px`,
  top: `${cursorY.value}px`,
  transform: 'translate(-50%, -50%)',
  pointerEvents: 'none',
  zIndex: '1000'
}));

const animate = () => {
  const dx = x.value - cursorX.value;
  const dy = y.value - cursorY.value;

  cursorX.value += dx * speed;
  cursorY.value += dy * speed;

  requestAnimationFrame(animate);
};

onMounted(() => {
  animate();
});
</script>

<style>
/* Transition effects for fade animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* Vue 2 compatibility */
  {
  opacity: 0;
}

/* Styles for the cursor follower */
.cursor-follower {
  width: 20px;
  /* Adjust if necessary */
  height: 20px;
  /* Adjust if necessary */
}
</style>
