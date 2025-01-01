<template>
  <div id="home-page">
    <header>
      <HomeHero />
    </header>
    <main class="flex flex-col gap-32 md:gap-48 mt-10 mb-20 mx-4">
      <HomeProblem class="flex-none w-full" />
      <HomeSolutions class="flex-none w-full" />
      <HomeProcess class="flex-none w-full" />
      <div class="flex flex-col gap-8 relative">
        <!-- Gradient on the left -->
        <div
          class="absolute inset-y-0 left-0 w-[40px] bg-gradient-to-r from-stone-950 via-stone-950 to-transparent z-10">
        </div>

        <!-- Gradient on the right -->
        <div
          class="absolute inset-y-0 right-0 w-[40px] bg-gradient-to-l from-stone-950 via-stone-950 to-transparent z-10">
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

      <HomeLeads class="flex-none w-full" />
      <HomeTestimonials class="flex-none w-full" />
      <HomeFAQ class="flex-none w-full" />
      <HomeClosingCTA class="flex-none w-full" />
    </main>
  </div>
</template>
