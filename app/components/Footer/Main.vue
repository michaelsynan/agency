<script setup lang="ts"></script>

<template>
  <div class="border-t">
    <UContainer class="text-white py-10 flex flex-col items-center gap-10 justify-between">
      <div>
        <NuxtImg src="/formwork-studios-logo-text.png" height="30" alt="Formwork Studios" />
      </div>
      <FooterSocials />
      <div class="flex flex-col items-center gap-1">
        <div>
          <NuxtLink to="/tos">Privacy Policy</NuxtLink> | <NuxtLink to="/tos">Terms of Service</NuxtLink>
        </div>
        <div>
          &copy; {{ new Date().getFullYear() }} Formwork Studios. All rights reserved.
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
