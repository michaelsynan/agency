<script setup lang="ts">
const navLinks = [
  { title: 'Web Design', link: '/services/#website-design' },
  { title: 'Development', link: '/services/#development' },
  { title: 'AI Marketing', link: '/services/#ai' },
  { title: 'Marketing', link: '/services/#digital-marketing' },
]
</script>

<template>
  <div>
    <ul class="flex flex-row gap-1.5 md:gap-10 text-xs sm:text-sm md:text-xl">
      <li v-for="navLink in navLinks" :key="navLink.link">
        <div class="flex flex-row gap-4 md:gap-10">
          <NuxtLink :to="navLink.link" class="flex gap-10">
            <span>{{ navLink.title }}</span>
          </NuxtLink>
          <span>/</span>
        </div>
      </li>
    </ul>
  </div>
</template>
