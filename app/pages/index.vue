<script>
definePageMeta({
  colorMode: 'dark',
})
</script>

<template>
  <div>
    <header>
      <HomeHero />
    </header>
    <main class="flex flex-col">
      <HomeAbout class="py-48" />
      <div id="MainCarousel" class="py-48 flex flex-col gap-8 relative border-b border-stone-500">
        <div class="mx-20 text-9xl -mt-24 text-stone-800/50 font-delight font-black">SOME
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
      </div>
      <SharedFinalCTA />
            <SharedFinalCTA2 />
      <!-- <HomeLeads class="flex-none w-full" />
      <HomeTestimonials class="flex-none w-full" /> -->
      <HomeFAQ class="flex-none w-full py-48" />

      <SharedContactInfo />
      <!-- <HomeClosingCTA class="flex-none w-full" /> -->
    </main>
  </div>
</template>
