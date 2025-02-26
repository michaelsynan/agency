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
  { name: 'Cecily Nicole Gaither', text: 'Cecily has led our marketing team to new heights with innovative strategies and strong leadership.', image: 'cecily.webp' },
]
</script>

<template>
  <UContainer class="flex flex-col !px-0">
    <div class="my-20 w-full flex flex-col md:flex-row gap-12">
      <h2
        class="text-4xl md:text-5xl font-delight font-black text-opacity-50 text-left max-w-4xl min-w-3xl mx-auto leading-loose uppercase">
        <span class="whitespace-nowrap">We are built</span>
        differently
      </h2>

      <div class="flex flex-row items-start gap-10">
        <TeamProfile v-for="(profile, index) in profiles" :key="index" :name="profile.name" :text="profile.text"
          :socials="profile.socials" :image="profile.image" :website="profile.website" />
      </div>
    </div>
  </UContainer>
</template>
