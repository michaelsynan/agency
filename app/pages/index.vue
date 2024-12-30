<template>
  <div id="home-page">
    <header>
      <HomeHero />
    </header>
    <main class="flex flex-col gap-32 md:gap-48 mt-10 mb-20 mx-4">
      <HomeProblem class="flex-none w-full" />
      <HomeSolutions class="flex-none w-full" />
      <HomeProcess class="flex-none w-full" />
      <div class="flex flex-col gap-10">
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
      </div>
      <HomeLeads class="flex-none w-full" />
      <HomeTestimonials class="flex-none w-full" />
      <HomeFAQ class="flex-none w-full" />
      <HomeClosingCTA class="flex-none w-full" />
    </main>
  </div>
</template>
