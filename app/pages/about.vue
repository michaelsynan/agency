<template>
  <div>
    <main class="text-white h-auto md:h-screen flex flex-col">
      <div id="top-row" class=" bg-stone-950 flex flex-col md:flex-row h-screen md:h-2/3">
        <div
          class="flex-0 md:flex-1 text-3xl bg-dino-950 font-delight flex flex-col justify-end p-6 md:p-10 h-1/2 md:h-auto"
          style="background-image: url('grid.svg'); background-size: 100px 100px; background-repeat: repeat;">
          <h1 class="mb-4 text-5xl font-delight text-left font-bold">Our Team</h1>
        </div>
        <div class="flex flex-row w-full md:w-2/3 h-1/2 md:h-auto">
          <div style="background-image: url(/michael_synan.webp)"
            class="w-1/2 bg-cover bg-top flex flex-col justify-end p-4">
            <TeamSocials team="michael" class="p-4 bg-black/50" />
          </div>
          <div style="background-image: url(/cecily.webp)" class="w-1/2 bg-cover bg-top flex flex-col justify-end p-4">
            <TeamSocials team="cecily" class="p-4 bg-black/50" />
          </div>
        </div>
      </div>

      <div id="bottom-row"
        class="h-1/3 bg-stone-950 p-6 md:p-8 flex flex-col border-b border-stone-500/50 gap-4 md:gap-0">
        <div class="flex-1 lora text-3xl md:text-6xl text-stone-800 flex flex-row">
          <!-- Every Detail Matters
          <div class="relative ml-1">
            <span id="one-dot" class="absolute">.</span>
            <span id="two-dots" class="absolute">..</span>
            <span id="three-dots" class="absolute">...</span>
          </div> -->
        </div>
        <div class="ml-auto max-w-lg leading-8  text-left md:text-right switzer text-stone-100">
          Underlying all change and uncertainty are a few things you can count on—Hard work, Creativity & Imagination
          will lead the way, even when the destination unclear. When we work together, we're on the same team. Your
          goals
          are our goals. Your success is our success.

        </div>
      </div>
    </main>
    <AboutScroll class="text-white" />
    <AboutProcess class=" bg-stone-950 border-b border-stone-500/50" />
    <!-- <AboutFinal class=" bg-stone-950 border-b border-stone-500/50" /> -->
    <AboutPhilosophy />
    <!-- <AboutContact /> -->
  </div>
</template>

<style scoped>
@keyframes dotCycle {
  0% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  33.33% {
    opacity: 1;
  }

  43.33% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

#one-dot,
#two-dots,
#three-dots {
  opacity: 0;
  animation: dotCycle 3s infinite;
}

#one-dot {
  animation-delay: 0s;
}

#two-dots {
  animation-delay: 1s;
}

#three-dots {
  animation-delay: 2s;
}
</style>
