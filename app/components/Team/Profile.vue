<script setup lang="ts">
const props = defineProps<{
  name: string
  text: string
  image: string
  socials?: Array<string>
  website?: string
}>()

onMounted(() => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.async = true
  script.src = '//cdn.credly.com/assets/utilities/embed.js'
  document.body.appendChild(script)
})
</script>

<template>
  <div class="flex flex-col pb-6 my-2 gap-6">
    <NuxtImg :src="props.image" :alt="props.name" class="rounded object-cover h-[400px]" />
    <div class="max-w-max flex flex-col gap-4">
      <div class="text-2xl font-bold">
        {{ props.name }}
      </div>
      <p class="text-stone-500">
        {{ props.text }}
      </p>
      <ULink :to="props.website">{{ props.website }}</ULink>
      <div v-if="props.socials" class="text-stone-500 flex flex-row gap-2">
        <p v-for="(social, index) in props.socials" :key="index">
          <ULink :to="social.url" target="_blank">
            <UIcon :name="`i-mdi-${social.company}`" class="w-7 h-7 text-stone-100" />
          </ULink>
        </p>
      </div>
      <slot>
        <div v-if="props.name == 'Michael Synan'" data-iframe-width="150" data-iframe-height="270"
          data-share-badge-id="77e58564-6fe0-44c8-b79f-c566daab4bf3" data-share-badge-host="https://www.credly.com">
        </div>
      </slot>
    </div>
  </div>
</template>