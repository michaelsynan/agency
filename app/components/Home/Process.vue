<script setup lang="ts"></script>

<template>
  <UContainer class="flex flex-row gap-10 w-full justify-center">
    <div class="flex flex-col gap-6">
      <h2>How Do I Get Started?</h2>
      <div class="flex flex-col md:flex-row gap-8 align-center items-center">
        <NuxtImg src="/formwork-studios-happy-cafe.jpg" class="w-full max-w-full md:max-w-lg border-2 rounded"
          placeholder />
        <div class="flex flex-col gap-10 max-w-max">
          <p class="max-w-[50ch] hidden">
            Our process is simple. It involves 3 easy steps to get your project up and
            running.
          </p>
          <ul class="flex flex-col gap-4 text-lg">
            <li class="flex items-start p-2 rounded">
              <UIcon name="i-tabler-circle-number-1-filled" class="w-8 h-8 mr-2 text-dino-500 flex-shrink-0" />
              <div>
                Free 30-minute consultation
              </div>
            </li>
            <li class="flex items-start p-2 w-full">
              <UIcon name="i-tabler-circle-number-2-filled" class="w-8 h-8 mr-2 text-dino-500 flex-shrink-0" />
              <div class="w-full">
                If we're a good fit, we'll create a custom plan for you
              </div>
            </li>
            <li class="flex items-start p-2">
              <UIcon name="i-tabler-circle-number-3-filled" class="w-8 h-8 mr-2 text-dino-500 flex-shrink-0" />
              <div>
                Rounds of reviews and feedback
              </div>
            </li>
          </ul>

          <SharedMainCTAButton class="max-w-max" />
        </div>
      </div>
    </div>
  </UContainer>
</template>

<style scoped></style>
