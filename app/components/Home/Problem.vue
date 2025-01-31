<script setup lang="ts"></script>

<template>
  <UContainer class="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-20 mb-40">
    <div class="text-white flex flex-col max-w-md ">

      <SharedAnimatedHeader class="break-normal pb-4" :text="`The Struggle is Real`" />
      <h1 class="being text-6xl">formwork studios</h1>
      <p class="!leading-relaxed mb-4 ">
        <strong>There are many challenges that come with choosing the right technology
          for
          your
          business.</strong> Here are some of the
        most common ones:
      </p>
      <!-- Bullet Points Section -->
      <ul class="space-y-3 text-lg ml-2.5">
        <li class="flex items-center">
          <UIcon name="i-mdi-alert-circle" class="w-6 h-6 mr-2 text-dino-400" />
          <span>Too many high-cost subscriptions</span>
        </li>
        <li class="flex items-center">
          <UIcon name="i-mdi-alert-circle" class="w-6 h-6 mr-2 text-dino-400" />
          <span>Unclear way to measure results</span>
        </li>
        <li class="flex items-center">
          <UIcon name="i-mdi-alert-circle" class="w-6 h-6 mr-2 text-dino-400" />
          <span>Unreliable & untrustworthy marketers</span>
        </li>
      </ul>
    </div>

    <div class="relative group mx-auto w-full max-w-xl
           after:content-[''] after:absolute after:z-[-1]
           after:top-4 after:left-4
           after:w-full after:h-full
           after:bg-[url('/nyc-subway-n-train.png')]
           after:bg-center after:bg-cover
           after:grayscale
           after:transition-transform after:duration-500
           group-hover:after:translate-x-4 ">
      <NuxtImg class="w-full hover:opacity-50 transition-opacity duration-500" src="/nyc-subway-n-train.png" />
    </div>
  </UContainer>
</template>

<style scoped></style>
