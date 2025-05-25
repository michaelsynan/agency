<script setup lang="ts">
useSeoMeta({
  title: 'Contact Us | Formwork Studios',
  description: 'Get in touch with Formwork Studios for your web development, design, or digital marketing needs. We\'re here to help bring your vision to life.',
})
</script>

<template>
  <main class="text-white min-h-screen">
    <GeneralHeader heading="Get in Touch" description="We'd love to hear about your project" />

    <div class="bg-stone-950 py-20">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Contact Options -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Email Box -->
          <div class="bg-stone-900/50 rounded-sm p-8 text-center hover:bg-stone-900/70 transition-all duration-300">
            <div class="flex justify-center mb-6">
              <div class="bg-dino-500/20 p-4 rounded-full">
                <UIcon name="i-mdi-email" class="h-10 w-10 text-dino-500" />
              </div>
            </div>
            <h3 class="text-2xl font-bold font-delight mb-3 text-stone-200">
              Email Us
            </h3>
            <p class="text-stone-400 mb-6">
              Send us a message and we'll get back to you within 24 hours. Perfect for detailed project discussions.
            </p>
            <UButton size="lg"
              class="mt-4 font-bold !text-white !bg-dino-600 ring-dino-600 hover:!bg-dino-500 hover:ring-dino-400 transition-all duration-200 ring-2 text-center rounded-none"
              icon="i-mdi-email" to="mailto:hello@formworkstudios.com">
              Send Email
            </UButton>
          </div>

          <!-- Phone Box -->
          <div class="bg-stone-900/50 rounded-sm p-8 text-center hover:bg-stone-900/70 transition-all duration-300">
            <div class="flex justify-center mb-6">
              <div class="bg-dino-500/20 p-4 rounded-full">
                <UIcon name="i-mdi-phone" class="h-10 w-10 text-dino-500" />
              </div>
            </div>
            <h3 class="text-2xl font-bold font-delight mb-3 text-stone-200">
              Call Us
            </h3>
            <p class="text-stone-400 mb-6">
              Speak directly with our team. Available Monday-Friday, 9am-5pm EST for immediate assistance.
            </p>
            <UButton size="lg"
              class="mt-4 font-bold !text-white !bg-dino-600 ring-dino-600 hover:!bg-dino-500 hover:ring-dino-400 transition-all duration-200 ring-2 text-center rounded-none"
              icon="i-mdi-phone" to="tel:18006576893">
              Call Now
            </UButton>
          </div>

          <!-- Schedule Box -->
          <div class="bg-stone-900/50 rounded-sm p-8 text-center hover:bg-stone-900/70 transition-all duration-300">
            <div class="flex justify-center mb-6">
              <div class="bg-dino-500/20 p-4 rounded-full">
                <UIcon name="i-mdi-calendar-clock" class="h-10 w-10 text-dino-500" />
              </div>
            </div>
            <h3 class="text-2xl font-bold font-delight mb-3 text-stone-200">
              Schedule Meeting
            </h3>
            <p class="text-stone-400 mb-6">
              Book a free consultation call to discuss your project requirements and explore how we can help.
            </p>
            <UButton size="lg"
              class="mt-4 font-bold !text-white !bg-dino-600 ring-dino-600 hover:!bg-dino-500 hover:ring-dino-400 transition-all duration-200 ring-2 text-center rounded-none"
              icon="i-mdi-calendar-clock" to="https://calendly.com/formworkstudios" target="_blank" external>
              Book Meeting
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Custom styles if needed */
</style>

<style scoped>
/* Custom styles if needed */
</style>
