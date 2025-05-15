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
      <div class="max-w-6xl mx-auto px-4">
        <!-- Contact Information -->
        <div class="max-w-2xl mx-auto">


          <div class="space-y-12">
            <div class="flex flex-col items-center md:flex-row md:items-start gap-6">
              <div class="bg-stone-900/50 p-4 rounded-full">
                <UIcon name="i-tabler-mail" class="h-8 w-8 text-dino-500" />
              </div>
              <div class="text-center md:text-left">
                <h3 class="text-2xl font-bold mb-2 text-stone-200">
                  Email
                </h3>
                <a href="mailto:hello@formworkstudios.com"
                  class="text-dino-400 text-xl hover:text-dino-300 transition-colors">
                  hello@formworkstudios.com
                </a>
                <p class="text-stone-400 mt-2">
                  For inquiries, project discussions, or just to say hello
                </p>
              </div>
            </div>

            <div class="flex flex-col items-center md:flex-row md:items-start gap-6">
              <div class="bg-stone-900/50 p-4 rounded-full">
                <UIcon name="i-tabler-phone" class="h-8 w-8 text-dino-500" />
              </div>
              <div class="text-center md:text-left">
                <h3 class="text-2xl font-bold mb-2 text-stone-200">
                  Phone
                </h3>
                <a href="tel:18006576893" class="text-dino-400 text-xl hover:text-dino-300 transition-colors">
                  1-800-657-6893
                </a>
              </div>
            </div>

          </div>

          <div class="mt-16 text-center">
            <h3 class="text-2xl font-bold mb-4 text-stone-200">
              Follow Us
            </h3>
            <div class="flex justify-center gap-6">
              <a href="#" class="text-stone-400 hover:text-dino-400 transition-colors" aria-label="LinkedIn">
                <UIcon name="i-tabler-brand-linkedin" class="h-8 w-8" />
              </a>
              <a href="#" class="text-stone-400 hover:text-dino-400 transition-colors" aria-label="Twitter">
                <UIcon name="i-tabler-brand-twitter" class="h-8 w-8" />
              </a>
              <a href="#" class="text-stone-400 hover:text-dino-400 transition-colors" aria-label="Instagram">
                <UIcon name="i-tabler-brand-instagram" class="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Custom styles if needed */
</style>
