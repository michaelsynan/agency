<template>
  <div id="page-wrapper" class="flex flex-col min-h-screen relative">
    <NavBar />
    <transition name="fade" mode="out-in">
      <NuxtPage class="flex-grow" />
    </transition>
    <FooterWrapper class="turtles" />
    <SharedCursorFollow :targetDiv="'turtles'" />
  </div>
</template>