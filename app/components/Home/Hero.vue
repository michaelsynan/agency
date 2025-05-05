<template>
  <div id="main-border" class="relative h-screen w-full overflow-hidden">
    <!-- Background image -->
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover bg-center"
      style="background-image: url('formwork-studios.jpg'); background-attachment: fixed;"></div>
    <!-- Black overlay -->
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60"></div>
    <UContainer class="relative z-10 flex flex-col items-start justify-center h-full gap-2 md:gap-4 w-full">
      <h1 class="text-7xl md:text-8xl font-delight font-black text-white-200">
        A <span id="future" class="gradient-text">FUTURE</span> WORTH BUILDING FOR
      </h1>
      <p
        class="text-stone-300 text-xl md:text-3xl max-w-[40ch] !leading-relaxed hover:leading-[200px] transition-all duration-300">
        Shaping Tomorrow So You Can Enjoy Today
      </p>
      <!-- <SharedMainCTAButton /> REMOVE THIS COMPONENT -->
      <UButton
        class="rounded-none text-white font-bold bg-juju-600 hover:bg-juju-500 py-3 px-4 border border-juju-500 mt-4"
        size="xl" icon="i-mdi-calendar">
        Book My Free
        Consultation</UButton>
    </UContainer>
    <HomeHeroBottomStrip class="w-full fixed bottom-0" />
  </div>
</template>

<style scoped>
#main-header {
  font-size: clamp(6rem, 8vw, 10rem);
}

.gradient-text {
  position: relative;
  background: linear-gradient(to right, #14b8a6 0%, #8a4f7d 25%, #9d5c90 50%, #8a4f7d 75%, #14b8a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.8;
}

.gradient-text::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  color: white;

  /* Outline effect */

  pointer-events: none;
}

.bg-gradient-to-b {
  background-image: linear-gradient(to bottom, transparent 60%, #0c0a09 90%, #0c0a09 100%);
}
</style>
