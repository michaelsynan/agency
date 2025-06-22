<script setup lang="ts"></script>

<template>
  <div id="footer" class-bak="border-t border-stone-500">
    <UContainer class="text-white pt-0 pb-8 flex flex-col items-center gap-10 justify-between">
      <div class="flex align-center items-center flex flex-col gap-8">
        <NuxtImg src="/logo.png" alt="Formwork Studios"
          class="h-auto max-h-32 gap-10 max-w-[80%] mx-auto self-center pb-10" />

        <NuxtImg src="/formwork-studios-logo-text.png" height="30" width="486" fit="cover"
          class="max-w-[80%] self-center mx-auto" alt="Formwork Studios" />
      </div>
      <FooterSocials />
      <div class="flex flex-col items-center gap-1 text-stone-400">
        <div>
          <NuxtLink to="/privacy">
            Privacy Policy
          </NuxtLink> | <NuxtLink to="/tos">
            Terms of Service
          </NuxtLink> |
          <NuxtLink to="/get-in-touch">Contact</NuxtLink>
        </div>
        <div>
          &copy; {{ new Date().getFullYear() }} Formwork Studios. All rights reserved.
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
