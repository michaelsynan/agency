<script setup lang="ts">
// You can add any reactive properties here if needed
const isAvailable = true; // Set to false to show unavailable status
</script>

<template>
  <div class="flex flex-col md:flex-row grow-1 w-full text-white">
    <div class="flex-1 relative">
      <div class="max-w-md p-0 relative z-10">
        <!-- Minimalist availability marker -->
        <div class="flex items-center border-stone-700 pb-2">
          <div class="w-2 h-2 mr-2" :class="isAvailable ? 'bg-green-500 animate-pulse' : 'bg-red-500'"></div>
          <span class="text-xs uppercase tracking-widest font-mono text-stone-400">
            {{ isAvailable ? 'AVAILABLE' : 'UNAVAILABLE' }}
          </span>
        </div>

        <p class="text-stone-400 font-mono text-sm leading-relaxed">
          Currently accepting new projects and inquiries. Direct communication preferred.
        </p>

      </div>
    </div>

    <!-- Other boxes remain unchanged -->
  </div>
</template>

<style scoped>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.3;
  }
}
</style>
