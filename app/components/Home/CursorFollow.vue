<template>
  <div>
    <div class="cursor"></div>
    <img src="/cursor-circle.svg" />
  </div>
</template>

<script setup>
document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor');
  if (cursor) {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  }
});
</script>

<style scoped>
body {
  cursor: none;
}

.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
</style>
