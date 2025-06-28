<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const route = useRoute();

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})


// For the follower circle (with delay)
const followerCircleStyle = ref({
  left: '0px',
  top: '0px',
  transition: 'none',
});

// For the main cursor circle (exact position)
const cursorCircleStyle = ref({
  left: '0px',
  top: '0px',
  backgroundColor: 'white', // White works best with mix-blend-mode: difference
});

const targetPosition = ref({ x: 0, y: 0 });
const currentPosition = ref({ x: 0, y: 0 });
let animationFrame;

const updatePositions = (event) => {
  // Update the main cursor circle position immediately
  cursorCircleStyle.value = {
    ...cursorCircleStyle.value,
    left: `${event.clientX}px`,
    top: `${event.clientY}px`,
  };

  // Update target for the follower circle
  targetPosition.value = { x: event.clientX, y: event.clientY };
};

const animateFollowerCircle = () => {
  const speed = 0.1; // Adjust speed for trailing effect
  currentPosition.value.x += (targetPosition.value.x - currentPosition.value.x) * speed;
  currentPosition.value.y += (targetPosition.value.y - currentPosition.value.y) * speed;

  followerCircleStyle.value = {
    left: `${currentPosition.value.x}px`,
    top: `${currentPosition.value.y}px`,
    transition: 'none',
  };

  animationFrame = requestAnimationFrame(animateFollowerCircle);
};

const handleMouseOver = (event) => {
  const target = event.target.closest('a, button'); // Check if the target or its parent is an <a> or <button>
  if (target) {
    cursorCircleStyle.value = {
      ...cursorCircleStyle.value,
      backgroundColor: '#ba7baf', // Change to purple when over a link or button
      mixBlendMode: 'normal', // Disable inverse effect on interactive elements
    };
  }
};

const handleMouseOut = (event) => {
  const target = event.target.closest('a, button'); // Check if the target or its parent is an <a> or <button>
  if (target) {
    cursorCircleStyle.value = {
      ...cursorCircleStyle.value,
      backgroundColor: 'white', // Revert to default color
      mixBlendMode: 'difference', // Re-enable inverse effect
    };
  }
};

onMounted(() => {
  // Initial cursor style setup
  cursorCircleStyle.value.mixBlendMode = 'difference';

  window.addEventListener('mousemove', updatePositions);
  window.addEventListener('mouseover', handleMouseOver);
  window.addEventListener('mouseout', handleMouseOut);
  animateFollowerCircle();

  // Add class to body to hide default cursor
  document.body.classList.add('custom-cursor');
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updatePositions);
  window.removeEventListener('mouseover', handleMouseOver);
  window.removeEventListener('mouseout', handleMouseOut);
  cancelAnimationFrame(animationFrame);

  // Remove class from body when component unmounts
  document.body.classList.remove('custom-cursor');
});
</script>

<template>
  <UApp>
    <div class="cursor-circle fixed w-4 h-4 rounded-full pointer-events-none transition-colors duration-300 ease-in-out"
      :style="cursorCircleStyle"></div>
    <div class="follower-circle fixed w-8 h-8 border border-stone-500 rounded-full pointer-events-none"
      :style="followerCircleStyle"></div>

    <div id="page-wrapper" class="flex flex-col min-h-screen relative">
      <NavBar />
      <div>
        <NuxtPage />
      </div>
      <FooterWrapper v-if="route.path === '/'" class="border-t border-stone-500" />
      <FooterMinimal v-else />

    </div>
  </UApp>
</template>

<style>
/* Hide default cursor */
.custom-cursor {
  cursor: none;
}

.cursor-circle {
  transform: translate(-50%, -50%);
  z-index: 9999;
  /* Very high to stay on top of everything */
  mix-blend-mode: difference;
  /* Add this line for inverse effect */
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    border-radius 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    background-color 0.3s;
  will-change: transform, border-radius, background-color;
  backface-visibility: hidden;
}

.follower-circle {
  transform: translate(-50%, -50%);
  z-index: 9998;
}

/* Hide custom cursors on mobile devices */
@media (max-width: 768px) {

  .cursor-circle,
  .follower-circle {
    display: none;
  }

  .custom-cursor {
    cursor: auto;
    /* Restore default cursor on mobile */
  }
}
</style>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>