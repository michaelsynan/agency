<template>
  <div :class="{ 'cursor-follower': true, 'show-dot': isVisible }">
    <img src="/cursor-circle.svg" :style="cursorStyle" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useMouse } from '@vueuse/core';

// Using useMouse without a target to track the mouse across the entire document
const { x: mouseX, y: mouseY } = useMouse();

const cursorPosX = ref(mouseX.value);  // Initialize with current mouseX position
const cursorPosY = ref(mouseY.value);  // Initialize with current mouseY position
const isVisible = ref(true);           // Cursor is always visible
const speed = ref(0.05);

const cursorStyle = computed(() => ({
  position: 'absolute',
  left: `${cursorPosX.value}px`,
  top: `${cursorPosY.value}px`,
  transform: 'translate(-50%, -50%)', // Centers the image on the cursor
  pointerEvents: 'none',              // Ensures the image does not interfere with other mouse events
  zIndex: '1000'                      // Ensures the cursor is visible above other elements
}));

const animate = () => {
  const dx = mouseX.value - cursorPosX.value;
  const dy = mouseY.value - cursorPosY.value;
  cursorPosX.value += dx * speed.value;
  cursorPosY.value += dy * speed.value;

  requestAnimationFrame(animate);
};

onMounted(() => {
  requestAnimationFrame(animate);
});
</script>

<style scoped>
.cursor-follower {
  display: none;
}

.show-dot {
  display: block;
}
</style>
