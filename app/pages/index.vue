<script setup>
definePageMeta({
  colorMode: 'dark',
});

useSeoMeta({
  title: 'Website Design, Development & Digital Marketing',
  description: 'Professional web design, development, and digital marketing services. We create custom websites and digital solutions that help your business grow and succeed online.',
});

defineOgImageComponent('Page', {
  title: 'No Nonsense Digital Solutions',
})
</script>

<template>
  <div>
    <header>
      <HomeHero />
    </header>
    <main class="flex flex-col bg-stone-950">
      <HomeAbout class="py-48 h-screen border-t border-stone-500" />
      <LazySharedFinalCTA2 class="" />
      <div id="MainCarousel" class="pt-32 md:pt-48 flex flex-col gap-8 relative border-stone-500">
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
          { src: '/historical-society-nyc.webp', alt: 'NYC Non-profit Website' },
          { src: '/nuts.webp', alt: 'Nuts Project' },
          { src: '/insure2.webp', alt: 'Insure2 Project' },
          { src: '/video-photography-website.webp', alt: 'Video & Photography Website' },
          { src: '/sauna.webp', alt: 'Sauna Project' },
          { src: '/yoga-pilates.webp', alt: 'Yoga & Pilates Website' },
          { src: '/michael.webp', alt: 'Michael Synan Portrait' },
        ]" />
      </div>
      <div class="w-full px-4 flex justify-center pb-32 pt-12">
        <UButton size="lg"
          class="mt-4 font-bold !text-white !bg-juju-600 ring-juju-600 hover:!bg-juju-500 hover:ring-juju-400 transition-all duration-200 ring-2 text-center rounded-none"
          trailing-icon="i-mdi-arrow-right" to="/web-design-and-development-projects/">
          Selected Work
        </UButton>
      </div>
      <HomeFAQ class="pb-48 px-4 mx-auto" />
      <HomeBadges />
    </main>
  </div>
</template>

<style>
* {
  cursor: none !important;
}
</style>
