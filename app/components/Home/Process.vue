<template>
  <UContainer class="flex flex-row gap-10 w-full justify-center relative py-40">
    <div class="flex flex-col gap-10">
      <div class="flex flex-col md:flex-row gap-16 align-center items-start">
        <NuxtImg src="/formwork-studios-happy-cafe.jpg" class="w-full max-w-full md:max-w-lg" placeholder />
        <div class="flex flex-col gap-4  w-full items-start">
          <SharedAnimatedHeader :text="`How Do I Get Started?`" />
          <ul class="flex flex-col gap-4 text-lg">
            <li class="flex items-start rounded">
              <UIcon name="i-tabler-circle-number-1-filled" class="w-8 h-8 mr-2 text-dino-500 flex-shrink-0" />
              <div>
                Free 30-minute consultation
              </div>
            </li>
            <li class="flex items-start w-full">
              <UIcon name="i-tabler-circle-number-2-filled" class="w-8 h-8 mr-2 text-dino-500 flex-shrink-0" />
              <div class="w-full">
                If we're a good fit, we'll create a custom plan for you
              </div>
            </li>
            <li class="flex items-start">
              <UIcon name="i-tabler-circle-number-3-filled" class="w-8 h-8 mr-2 text-dino-500 flex-shrink-0" />
              <div>
                Rounds of reviews and feedback
              </div>
            </li>
          </ul>

          <SharedMainCTAButton class="max-w-full md:max-w-max" />
        </div>
      </div>
    </div>
  </UContainer>
</template>