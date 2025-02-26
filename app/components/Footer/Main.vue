<script setup lang="ts"></script>

<template>
  <div id="footer" class-bak="border-t border-stone-500">
    <UContainer class="text-white pt-12 pb-8 flex flex-col items-center gap-10 justify-between">
      <div class="flex align-center items-center">
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
          </NuxtLink>| <NuxtLink to="/tos">
            Sitemap
          </NuxtLink>
        </div>
        <div>
          &copy; {{ new Date().getFullYear() }} Formwork Studios. All rights reserved.
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
