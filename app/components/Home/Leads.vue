<script setup lang="ts"></script>

<template>
  <UContainer class="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-40 ">
    <div class="text-white flex flex-col gap-2 max-w-md">
      <h2 class="flex flex-col gap-1.5 mb-4 leading-snug">
        <div>
          Download Our <br><span class="cool-underline header">Free Guide</span> to Using AI & Automation to Build
          your
          Business
        </div>
      </h2>
      <div class="flex flex-col gap-0">
        <div class="flex flex-col items-start w-full">
          <label class="mb-1 text-sm font-medium text-stone-500">Email Address</label>
          <UInput
            class="w-full"
            size="lg"
            type="text"
            color="primary"
            :ui="{ placeholder: 'placeholder-stone-400 dark:placeholder-stone-600' }"
            placeholder="e.g. bill.gates@microsoft.com"
          />
        </div>
        <div class="py-2">
          <UButton
            color="juju"
            icon="i-mdi-download"
            size="lg"
            class="my-2 font-bold"
          >
            Get My Free Guide
          </UButton>
        </div>
      </div>
      <div class="flex items-center text-sm text-stone-500 gap-1">
        <UIcon
          name="i-material-symbols:asterisk-rounded"
          class="h-4 w-4"
        />
        <span>We do not share your personal information</span>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <NuxtImg
        class="max-w-[80%] md:max-w-lg"
        height="600"
        width="300"
        fit="contain"
        src="/mock-up.png"
      />
    </div>
  </UContainer>
</template>
