<script setup>
useHead({
  link: [
    {
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      href: '/fonts/Delight-Black-subset.woff2',
      crossorigin: 'anonymous'
    },
    {
      rel: 'preload',
      as: 'image',
      href: '/formwork-studios.webp',
      type: 'image/webp'
    }
  ]
})
</script>
<template>
  <div id="main-border" class="relative h-[100dvh] md:h-screen w-full overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <NuxtImg src="formwork-studios.webp" alt="Formwork Studios hero image"
        class="fixed-image absolute inset-0 w-full h-full object-cover brightness-40" format="webp" quality="60"
        placeholder loading="eager" fetchpriority="high" />
    </div>
    <UContainer
      class="relative z-10 flex flex-col items-center md:items-start justify-center h-full gap-2 md:gap-4 w-full mb-[40px] md:mb-0 text-center md:text-left">
      <h1 class="text-7xl md:text-8xl delight-black">
        A <span class="gradient-text">FUTURE</span> WORTH BUILDING <span class="hidden md:inline">FOR
        </span>
      </h1>
      <p
        class="text-stone-300 text-xl md:text-3xl max-w-[40ch] !leading-relaxed hover:leading-[200px] transition-all duration-300 hidden md:block">
        Shaping Tomorrow So You Can Enjoy Today
      </p>
      <UButton to="https://calendly.com/formworkstudios/free-strategy-call" target="_blank"
        class="w-auto rounded-none text-white font-bold bg-juju-700 hover:bg-juju-600 py-3 px-4 border border-juju-600 mt-4 justify-center items-center flex"
        size="xl" icon="i-mdi-calendar">
        <span class="text-center whitespace-nowrap">Book My Free Consultation</span>
      </UButton>
    </UContainer>
    <HomeHeroBottomStrip class="w-full fixed bottom-0" />
  </div>
</template>

<style scoped>
.gradient-text {
  position: relative;
  background: linear-gradient(to right, #14b8a6 0%, #8a4f7d 25%, #9d5c90 50%, #8a4f7d 75%, #14b8a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.8;
  will-change: transform;
}

.fixed-image {
  background-attachment: fixed;
  transform: translateZ(0);
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 768px) {
  .fixed-image {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    height: 100vh;
  }
}

@media (max-width: 767px) {
  .fixed-image {
    position: absolute;
  }
}
</style>
