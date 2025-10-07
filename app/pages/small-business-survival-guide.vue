<script setup lang="ts">
useSeoMeta({
  title: 'Small Business Survival Guide | Formwork Studios',
  description: 'Your complete guide to digital transformation for small businesses. Get actionable strategies, expert insights, and proven frameworks to grow your business online.',
})

const checklistItems = [
  'Define your <strong>target audience</strong> and create detailed customer personas',
  'Establish a <strong>professional website</strong> that converts visitors into customers',
  'Set up <strong>Google My Business</strong> and optimize for local search',
  'Create <strong>valuable content</strong> that solves your customers\' problems',
  'Implement <strong>email marketing</strong> and automated lead nurturing',
  'Develop <strong>consistent branding</strong> across all touchpoints',
  'Hack your growth by leveraging <strong>online directories</strong> and building relationships in <strong>digital communities</strong>... and lots more!'
];

// Simple gated-download flow
const email = ref('')
const consent = ref(false)
const errorMsg = ref('')

function isValidEmail(value: string) {
  return /.+@.+\..+/.test(value)
}

async function onSubmitDownload(e: Event) {
  e.preventDefault()
  errorMsg.value = ''
  if (!isValidEmail(email.value)) {
    errorMsg.value = 'Please enter a valid email address.'
    return
  }
  if (!consent.value) {
    errorMsg.value = 'Please agree to the privacy notice.'
    return
  }
  try {
    // Persist locally to allow gated access on the download page
    localStorage.setItem('sbp-email', email.value)
  }
  catch {
    // Non-blocking if localStorage fails, we still navigate
  }
  await navigateTo('/small-business-download')
}
</script>

<template>
  <div>
    <main class="text-white">
      <ServicesHeader title="Small Business Survival Guide" description="Your Roadmap from Zero to Growth, Quick" />

      <!-- Hero Quote Section -->
      <section class="mb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class=" p-8 md:p-12 mt-10 relative rounded-xl">
          <div class="flex flex-col md:flex-row gap-8 items-center">
            <div class="flex-1">
              <blockquote class="text-2xl md:text-3xl lora italic leading-relaxed text-stone-100">
                "Success in small business isn't just about having a great product or
                service—it's about connecting
                with your customers where they are and delivering value consistently."
              </blockquote>
              <div class="mt-6 flex items-center gap-4">
                <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-juju-500">
                  <NuxtImg src="/michael_synan.webp" alt="Michael Synan" class="w-full h-full object-cover" />
                </div>
                <div>
                  <div class="font-bold text-lg">Michael Synan</div>
                  <div class="text-stone-400">Founder, Formwork Studios</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Redesigned CTA Section -->
      <section class="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="bg-gradient-to-br from-stone-900/60 to-stone-800/40 border border-stone-700/50 p-8 lg:p-12 rounded-2xl backdrop-blur-sm">
          <div class="grid lg:grid-cols-5 gap-12 items-center">
            <!-- Left: Content (3 columns) -->
            <div class="lg:col-span-3 space-y-6">
              <div class="space-y-3">
                <h2 class="text-3xl lg:text-4xl font-bold work text-white leading-tight">
                  Get the Complete
                  <span class="text-dino-500 work font-bold">Survival Guide</span>
                </h2>
                <p class="text-stone-300 leading-relaxed">
                  Everything you need to launch, grow, and scale your small business in today's digital world.
                </p>
              </div>

              <form class="space-y-4" @submit="onSubmitDownload">
                <div class="space-y-3">
                  <label class="sr-only">
                    Email address
                  </label>
                  <input v-model="email" type="email" required placeholder="you@example.com"
                    class="w-full bg-stone-900/50 border border-stone-600/50 text-stone-100 rounded-xl px-4 py-3 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-juju-500/50 focus:border-juju-500/50 transition-all duration-200 hover:border-stone-500/70">

                  <label class="flex items-start gap-3 text-stone-300 text-sm cursor-pointer">
                    <input v-model="consent" type="checkbox" class="mt-1 h-4 w-4 accent-juju-500 rounded">
                    <span class="leading-relaxed">
                      I agree to receive the survival guide and occasional updates.
                      See our <NuxtLink to="/privacy" class="underline hover:text-juju-400 transition-colors">
                        Privacy
                        Policy</NuxtLink>.
                    </span>
                  </label>

                  <div v-if="errorMsg"
                    class="text-red-400 text-sm bg-red-900/20 border border-red-800/30 p-3 rounded-lg">
                    {{ errorMsg }}
                  </div>
                </div>

                <div class="space-y-2">
                  <button type="submit"
                    class="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-juju-500 to-juju-600 hover:from-juju-600 hover:to-juju-700 text-black font-bold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    <UIcon name="i-mdi-download" class="w-5 h-5" />
                    Download Free Guide
                  </button>
                  <p class="text-stone-400 text-xs">
                    ✓ Instant download • ✓ Email backup • ✓ No spam, ever
                  </p>
                </div>
              </form>
            </div>

            <!-- Right: Cover Image (2 columns) -->
            <div class="lg:col-span-2 flex justify-center lg:justify-end">
              <div class="relative group">
                <!-- Glow effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-br from-juju-500/30 to-purple-500/20 blur-3xl rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500">
                </div>
                <!-- Cover image -->
                <div class="relative">
                  <NuxtImg src="/cover-final.png" alt="Small Business Survival Guide cover"
                    class="w-full max-w-sm h-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-300 filter group-hover:brightness-110" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- Introduction -->
      <section class="mb-16 border-t border-stone-500/50 pt-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold font-delight mb-6">The Digital Transformation Imperative</h2>
        <div class="prose prose-lg prose-stone text-stone-300 space-y-6">
          <p class="text-lg leading-relaxed">
            In today's digital landscape, small businesses face unprecedented opportunities and
            challenges.
            The companies that thrive are those that embrace digital transformation not as a luxury,
            but as
            a fundamental business strategy.
          </p>
          <p class="text-lg leading-relaxed">
            This survival guide distills years of experience working with hundreds of small
            businesses into
            actionable strategies you can implement immediately. Whether you're just starting out or
            looking to scale, these frameworks will guide your digital transformation journey.
          </p>
        </div>
      </section>

      <!-- The Essential Checklist -->
      <section class="mb-16 border-t border-stone-500/50 pt-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold font-delight mb-8">The Essential Digital Business Checklist</h2>
        <div class="space-y-4">
          <div v-for="(item, index) in checklistItems" :key="index"
            class="flex items-start gap-4 p-4 hover:bg-stone-900/30 rounded-lg transition-colors">
            <UIcon name="i-mdi-check-circle" class="h-6 w-6 text-dino-500 flex-shrink-0 mt-0.5" />
            <span class="text-lg text-stone-200" v-html="item" />
          </div>
        </div>
      </section>

      <!-- Key Strategies Section -->
      <section class="mb-16 border-t border-stone-500/50 pt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold font-delight mb-8">Proven Growth Strategies</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Strategy 1 -->
          <div
            class="bg-stone-900/30 border border-stone-800/50 p-6 rounded-lg hover:bg-stone-900/40 transition-colors">
            <div class="flex items-center gap-3 mb-4">
              <UIcon name="i-mdi-target" class="h-8 w-8 text-dino-500" />
              <h3 class="text-xl font-bold">Customer-Centric Approach</h3>
            </div>
            <p class="text-stone-300 leading-relaxed">
              Build everything around your customer's needs and pain points. Use data and feedback
              to continuously improve your products, services, and customer experience.
            </p>
          </div>

          <!-- Strategy 2 -->
          <div
            class="bg-stone-900/30 border border-stone-800/50 p-6 rounded-lg hover:bg-stone-900/40 transition-colors">
            <div class="flex items-center gap-3 mb-4">
              <UIcon name="i-mdi-rocket-launch" class="h-8 w-8 text-dino-500" />
              <h3 class="text-xl font-bold">Digital-First Marketing</h3>
            </div>
            <p class="text-stone-300 leading-relaxed">
              Leverage digital channels to reach your audience where they spend their time.
              Focus on owned media, content marketing, and building genuine relationships.
            </p>
          </div>

          <!-- Strategy 3 -->
          <div
            class="bg-stone-900/30 border border-stone-800/50 p-6 rounded-lg hover:bg-stone-900/40 transition-colors">
            <div class="flex items-center gap-3 mb-4">
              <UIcon name="i-mdi-cog-sync" class="h-8 w-8 text-dino-500" />
              <h3 class="text-xl font-bold">Process Automation</h3>
            </div>
            <p class="text-stone-300 leading-relaxed">
              Automate repetitive tasks to free up time for strategic work. Start with email
              marketing, social media scheduling, and customer follow-up systems.
            </p>
          </div>

          <!-- Strategy 4 -->
          <div
            class="bg-stone-900/30 border border-stone-800/50 p-6 rounded-lg hover:bg-stone-900/40 transition-colors">
            <div class="flex items-center gap-3 mb-4">
              <UIcon name="i-mdi-chart-line" class="h-8 w-8 text-dino-500" />
              <h3 class="text-xl font-bold">Data-Driven Decisions</h3>
            </div>
            <p class="text-stone-300 leading-relaxed">
              Use analytics and metrics to guide your business decisions. Track what matters,
              measure results, and iterate based on actual performance data.
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped></style>
