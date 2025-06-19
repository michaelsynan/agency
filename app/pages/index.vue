<script setup>
definePageMeta({
  colorMode: 'dark',
});


defineOgImageComponent('Page', {
  title: 'Is this thing on?'
})
</script>

<template>
  <div>
    <header>
      <HomeHero />
    </header>
    <main class="flex flex-col bg-stone-950">
      <HomeAbout class="py-48 h-screen" />
      <SharedFinalCTA2 class="" />
      <div id="MainCarousel" class="py-32 md:py-48 flex flex-col gap-8 relative border-stone-500">
        <div
          class="absolute inset-y-0 left-0 w-[20px] md:w-[40px] bg-gradient-to-r from-stone-950 via-stone-950 to-transparent z-10">
        </div>
        <div
          class="absolute inset-y-0 right-0 w-[20px] md:w-[40px] bg-gradient-to-l from-stone-950 via-stone-950 to-transparent z-10">
        </div>
        <LazyHomeCarousel :direction="'right'" :items="[
          '/video-photography-website.webp',
          '/dashboard.webp',
          '/hero-image.webp',
          '/facial-serum-website.webp',
          '/daily-grind.webp',
          '/mobile-app.webp',
          '/jazz.webp',
          '/coding-nurse.webp',
          '/yoga-pilates.webp',
          '/michael.webp',
        ]" />
        <LazyHomeCarousel :direction="'left'" :items="[
          '/dashboard.webp',
          '/hero-image.webp',
          '/facial-serum-website.webp',
          '/primo.webp',
          '/gahs.png',
          '/nuts.webp',
          '/insure2.webp',
          '/video-photography-website.webp',
          '/sauna.webp',
          '/yoga-pilates.webp',
          '/michael.webp',
        ]" />
      </div>
      <HomeFAQ class="flex-none mx-auto" />
    </main>
  </div>
</template>

<style>
* {
  cursor: none !important;
}
</style>
