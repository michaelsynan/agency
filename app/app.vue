<script setup>
const route = useRoute();
</script>

<template>
  <UApp>
  <div id="page-wrapper" class="flex flex-col min-h-screen relative">
    <NavBar />
    <div>
      <NuxtPage />
    </div>
    <FooterWrapper v-if="route.path === '/'" />
    <FooterMinimal v-else />
    <SharedCursorFollow :targetDiv="'turtles'" />
    <UNotifications :ui="{ background: 'bg-stone-900' }" class="toast" />
  </div>
  </UApp>
</template>

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