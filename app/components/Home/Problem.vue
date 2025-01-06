<script setup lang="ts"></script>

<template>
  <UContainer class="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-20">
    <div class="text-white flex flex-col max-w-md gap-4">
      <h2 class="flex flex-col mb-2">
        <SharedAnimatedHeader class="break-normal" :text="`Choose The Right Technology`" />

      </h2>
      <p class="!leading-relaxed mb-4 ">
        <strong>There are many challenges that come with choosing the right technology
          for
          your
          business.</strong> Here are some of the
        most common ones:
      </p>
      <!-- Bullet Points Section -->
      <ul class="space-y-3 text-lg">
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

    <div class="items-center align-middle mx-auto">
      <NuxtImg class="w-full max-w-xl rounded-lg" src="/nyc-subway-n-train.png" />
    </div>
  </UContainer>
</template>

<style scoped></style>
