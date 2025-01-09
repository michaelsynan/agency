<template>
  <div id="main-border" class="relative h-[90vh] w-screen overflow-hidden">
    <!-- Background image -->
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover bg-center"
      style="background-image: url('formwork-studios.jpg'); background-attachment: fixed;" />
    <!-- Black overlay -->
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60" />
    <!-- Gradient Strip -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-stone-950 to-stone-950" />
    <UContainer class="relative z-10 flex flex-col items-start justify-center h-full gap-4">
      <UBadge variant="outline" class="font-bold rounded-full border-none">
        Expert Guidance Every Step of the Way
      </UBadge>
      <div class="font-bold flex flex-col gap-4">
        <SharedAnimatedHeader class="!text-6xl" :size="`text-6xl`" :text="`When We Build it`" />
        <SharedAnimatedHeader class="!text-6xl" :size="`text-6xl `" :text="`They Will Come`" />
      </div>
      <p class="text-stone-300 text-xl md:text-2xl mt-2 max-w-[40ch] !leading-relaxed">
        Your design, development,
        marketing and AI solutions all in one place.
      </p>
      <SharedMainCTAButton />
      <div>
        <GoogleReview />
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.bg-gradient-to-b {
  background-image: linear-gradient(to bottom, transparent 60%, #0c0a09 90%, #0c0a09 100%);
}
</style>
