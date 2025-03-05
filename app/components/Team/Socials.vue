<script setup lang="ts">
const props = defineProps<{
  team: string;
}>();

// Define team members and their social links
const teamMembers = {
  michael: [
    { name: "Website", url: "https://michaelswebsite.com", icon: "i-mdi-web" },
    { name: "LinkedIn", url: "https://linkedin.com/in/michael", icon: "i-mdi-linkedin" },
    { name: "GitHub", url: "https://github.com/michael", icon: "i-mdi-github" }
  ],
  cecily: [
    { name: "LinkedIn", url: "https://linkedin.com/in/cecily", icon: "i-mdi-linkedin" },
    { name: "Email", url: "https://linkedin.com/in/cecily", icon: "i-mdi-email" }

  ]
};

// Get the social links for the selected team member
const socials = teamMembers[props.team] || [];
</script>

<template>
  <div
    class="bg-stone-900 bg-opacity-90 px-3 py-3 rounded-full w-max ml-auto border border-stone-500/50 shadow-[inset_0_2px_6px_rgba(255,255,255,0.1)]">
    <ul v-if="socials.length" class="flex flex-row gap-3 justify-end">
      <li v-for="social in socials" :key="social.name">
        <a :href="social.url" target="_blank" class="flex items-center text-blue-500 hover:underline">
          <UIcon :name="social.icon" class="text-xl text-white" />
        </a>
      </li>
    </ul>
  </div>
</template>


<style scoped></style>
