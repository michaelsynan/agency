<script setup lang="ts">
interface Profile {
  name: string
  text: string
  image: string
  socials?: Array<object>
  website?: string
}

const profiles: Profile[] = [
  {
    name: 'Michael Synan', text: 'Michael has been instrumental in revamping our web design to be more modern and user-friendly.', image: '/michael_synan.webp', socials: [
      { company: 'github', url: 'https://github.com' },
      { company: 'linkedin', url: 'https://linkedin.com' },
    ], website: 'https://michaelsynan.com',
  },
  { name: 'Cecily Nicole Gaither', text: 'Cecily has led our marketing team to new heights with innovative strategies and strong leadership.', image: 'michael_synan.webp' },
]
</script>

<template>
  <UContainer class="flex flex-col !px-0">
    <div class="my-20 w-full flex flex-col gap-4">
      <h2>
        Meet the Team
      </h2>
      <div>
        Some explainer text in here
      </div>
    </div>
    <div class="flex flex-col items-start gap-12">
      <TeamProfile v-for="(profile, index) in profiles" :key="index" :name="profile.name" :text="profile.text"
        :socials="profile.socials" :image="profile.image" :website="profile.website" />
    </div>
  </UContainer>
</template>
