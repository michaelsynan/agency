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
          { src: '/video-photography-website.webp', alt: 'Video & Photography Website' },
          { src: '/dashboard.webp', alt: 'Dashboard UI' },
          { src: '/hero-image.webp', alt: 'Hero Image' },
          { src: '/facial-serum-website.webp', alt: 'Facial Serum Website' },
          { src: '/daily-grind.webp', alt: 'Daily Grind Project' },
          { src: '/mobile-app.webp', alt: 'Mobile App Design' },
          { src: '/jazz.webp', alt: 'Jazz Project' },
          { src: '/coding-nurse.webp', alt: 'Coding Nurse Project' },
          { src: '/yoga-pilates.webp', alt: 'Yoga & Pilates Website' },
          { src: '/michael.webp', alt: 'Michael Synan Portrait' },
        ]" />
        <LazyHomeCarousel :direction="'left'" :items="[
          { src: '/dashboard.webp', alt: 'Dashboard UI' },
          { src: '/hero-image.webp', alt: 'Hero Image' },
          { src: '/facial-serum-website.webp', alt: 'Facial Serum Website' },
          { src: '/primo.webp', alt: 'Primo Project' },
          { src: '/gahs.png', alt: 'GAHS Project' },
          { src: '/nuts.webp', alt: 'Nuts Project' },
          { src: '/insure2.webp', alt: 'Insure2 Project' },
          { src: '/video-photography-website.webp', alt: 'Video & Photography Website' },
          { src: '/sauna.webp', alt: 'Sauna Project' },
          { src: '/yoga-pilates.webp', alt: 'Yoga & Pilates Website' },
          { src: '/michael.webp', alt: 'Michael Synan Portrait' },
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
