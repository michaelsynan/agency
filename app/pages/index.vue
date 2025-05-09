<script setup>
definePageMeta({
  colorMode: 'dark',
});
</script>

<template>
  <div>
    <header>
      <HomeHero />
    </header>
    <main class="flex flex-col bg-stone-950">
      <HomeAbout class="py-48 h-screen" />
      <div id="MainCarousel" class="py-48 flex flex-col gap-8 relative border-stone-500">
        <div class="mx-4 md:mx-20 text-6xl md:text-9xl -mt-24 text-stone-800/50 font-delight font-black">
          WORK</div>
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
      <SharedFinalCTA2 class="rounded-3xl px-4 md:px-10 max-w-none md:max-w-[90%]" />
      <HomeFAQ class="flex-none py-48 mx-auto" />
      <SharedContactInfo class="max-w-2xl border-x ml-0 md:ml-10 w-full -translate-y-10" />
    </main>
  </div>
</template>

<style>
* {
  cursor: none !important;
}
</style>
