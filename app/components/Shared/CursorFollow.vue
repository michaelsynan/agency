<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { useMouse } from '@vueuse/core';

const props = defineProps<{ targetDiv: string }>();

const { x, y } = useMouse();
const cursorPosX = ref(0);
const cursorPosY = ref(0);
const isVisible = ref(false);
const speed = ref(0.07);

function animate() {
  const dx = x.value - cursorPosX.value;
  const dy = y.value - cursorPosY.value;
  cursorPosX.value += dx * speed.value;
  cursorPosY.value += dy * speed.value;
  requestAnimationFrame(animate);
}

const cursorStyle = computed(() => ({
  left: `${cursorPosX.value}px`,
  top: `${cursorPosY.value}px`
}));

function handleMouseMove(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if (target?.closest(`.${props.targetDiv}`)) {
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }
}

onMounted(() => {
  cursorPosX.value = x.value;
  cursorPosY.value = y.value;
  requestAnimationFrame(animate);
  window.addEventListener('mousemove', handleMouseMove);
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <div class="custom-cursor" :class="{ visible: isVisible }" :style="cursorStyle">
    <img src="/cursor-circle.svg" />
  </div>
</template>

<style scoped>
.custom-cursor {
  position: absolute;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%) scale(0.9);
  /* Initial small scale */
  opacity: 0;
  transition: opacity 0.2s ease;
}

.custom-cursor.visible {
  opacity: 1;
  animation: pulse 0.6s ease-in-out forwards;
  /* Smooth in and out animation */
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.9);
  }

  50% {
    transform: translate(-50%, -50%) scale(1.3);
  }

  /* Peak scale */
  100% {
    transform: translate(-50%, -50%) scale(1.1);
  }

  /* Settle back to normal scale */
}

.custom-cursor img {
  width: 20px;
  height: 20px;
}
</style>
