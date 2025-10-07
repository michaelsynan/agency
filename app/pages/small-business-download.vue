<script setup lang="ts">
useSeoMeta({
  title: 'Download: Small Business Playbook | Formwork Studios',
  description: 'Access your Small Business Playbook PDF. Practical strategies, templates, and frameworks for digital growth.',
  robots: 'noindex, nofollow',
})

const router = useRouter()
const email = ref('')
const ready = ref(false)

onMounted(() => {
  try {
    const stored = localStorage.getItem('sbp-email')
    if (!stored) {
      router.replace('/small-business-playbook')
      return
    }
    email.value = stored
  }
  finally {
    ready.value = true
  }
})

function clearAndGoBack() {
  try {
    localStorage.removeItem('sbp-email')
  }
  catch {
    // ignore
  }
  router.replace('/small-business-playbook')
}
</script>

<template>
  <div>
    <main class="text-white">
      <ServicesHeader title="Small Business Playbook" description="Your PDF is ready to download" />

      <SharedPageWrapper>
        <div class="max-w-3xl mx-auto">
          <div v-if="ready" class="bg-stone-900/50 border border-stone-800/50 p-8">
            <h1 class="text-3xl font-delight font-bold mb-2">
              Thanks!
            </h1>
            <p class="text-stone-300 mb-6">
              We’ll also send a copy to
              <span class="text-stone-100 font-medium">{{ email }}</span>.
            </p>

            <div class="flex flex-wrap items-center gap-4 mb-8">
              <NuxtLink to="/small-business-playbook.pdf" target="_blank" rel="noopener" download
                class="inline-flex items-center gap-2 bg-dino-500 hover:bg-dino-600 text-black font-semibold px-5 py-3 rounded">
                <UIcon name="i-mdi-download" class="w-5 h-5" />
                Download PDF
              </NuxtLink>
              <button type="button" class="text-stone-300 underline" @click="clearAndGoBack">
                Use a different email
              </button>
            </div>

            <div class="text-sm text-stone-400">
              If the download doesn’t start, the file is also available at
              <code class="text-stone-300">/public/small-business-playbook.pdf</code> in this site’s assets.
            </div>
          </div>

          <div v-else class="text-stone-300">
            Preparing your download…
          </div>
        </div>
      </SharedPageWrapper>
    </main>
  </div>
</template>

<style scoped></style>
