<script>
definePageMeta({
  colorMode: 'dark',
});

export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <div>
    <header>
      <HomeHero />
    </header>
    <main class="flex flex-col">
      <HomeAbout class="py-48 h-screen" />
      <div id="MainCarousel" class="py-48 flex flex-col gap-8 relative border-b border-stone-500">
        <div class="mx-4 md:mx-20 text-6xl md:text-9xl -mt-24 text-stone-800/50 font-delight font-black">SOME
          WORK</div>
        <div
          class="absolute inset-y-0 left-0 w-[20px] md:w-[40px] bg-gradient-to-r from-stone-950 via-stone-950 to-transparent z-10">
        </div>
        <div
          class="absolute inset-y-0 right-0 w-[20px] md:w-[40px] bg-gradient-to-l from-stone-950 via-stone-950 to-transparent z-10">
        </div>
        <HomeCarousel :direction="'right'" :items="[
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
        <HomeCarousel :direction="'left'" :items="[
          '/dashboard.webp',
          '/hero-image.webp',
          '/facial-serum-website.webp',
          '/primo.png',
          '/gahs.png',
          '/insure2.png',

          '/video-photography-website.webp',

          '/sauna.webp',
          '/yoga-pilates.webp',



          '/michael.webp',
        ]" />
      </div>
      <SharedFinalCTA2 />

      <HomeFAQ class="flex-none w-full py-48" />

      <SharedContactInfo />
    </main>
  </div>
</template>

<style>
/* Remove default pointer and finger globally */
* {
  cursor: none !important;
}
</style>
