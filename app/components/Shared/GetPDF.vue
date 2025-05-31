<script setup lang="ts">
interface Props {
  header: string
  copy: string
  campaign: 'small-business' | 'ai'
}

const props = defineProps<Props>()

const form = reactive({
  email: ''
})

const toast = useToast()

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const submitForm = async () => {
  // Validate email
  if (!form.email) {
    toast.add({
      title: 'Error',
      description: 'Please enter your email address.',
      color: 'error'
    })
    return
  }

  if (!isValidEmail(form.email)) {
    toast.add({
      title: 'Error',
      description: 'Please enter a valid email address.',
      color: 'error'
    })
    return
  }

  try {
    // Here you would typically send the form data to your backend
    // Include campaign type in the submission
    console.log('Campaign:', props.campaign, 'Email:', form.email)

    toast.add({
      title: 'Success!',
      description: 'Your request has been submitted. We\'ll be in touch soon!',
      color: 'success'
    })

    // Reset form
    form.email = ''
  } catch (error) {
    toast.add({
      title: 'Error',
      description: 'Something went wrong. Please try again.',
      color: 'error'
    })
  }
}
</script>

<template>
  <section class="mb-16 pt-8">
    <div class="bg-gradient-to-r from-dino-950/50 to-juju-950/50 border border-dino-500/30 p-8 md:p-12">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-bold font-delight mb-4">{{ header }}</h2>
        <p class="text-lg text-stone-300 mb-8 leading-relaxed">
          {{ copy }}
        </p>

        <!-- Contact Form -->
        <form @submit.prevent="submitForm" class="flex flex-col space-y-4 w-full">
          <UInput v-model="form.email" placeholder="Enter your email address" type="email" required variant="outline"
            size="lg" :ui="{
              base: 'w-full bg-transparent border-2 border-stone-600 text-stone-100 placeholder:text-stone-400 rounded-none focus:border-dino-500 focus:ring-0 focus:outline-none'
            }" />

          <UButton type="submit" size="md"
            class="w-auto self-center px-8 py-3 bg-juju-600 hover:bg-juju-700 text-white font-semibold rounded-none border-0"
            icon="i-mdi-download">
            {{ campaign === 'small-business' ? 'Get Playbook' : 'Get AI Guide' }}
          </UButton>
        </form>

        <div class="flex items-center justify-center text-sm text-stone-500 gap-2 mt-4">
          <UIcon name="i-mdi-shield-check" class="h-4 w-4" />
          <span>We respect your privacy and never share your information</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
