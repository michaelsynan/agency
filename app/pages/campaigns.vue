<script setup lang="ts">
useSeoMeta({
  title: 'Campaigns | Formwork Studios',
  description: 'Explore our latest campaigns, resources, and initiatives designed to help businesses succeed in the digital landscape.',
})

const campaigns = [
  {
    title: 'Small Business Playbook',
    description: 'Your complete guide to digital transformation for small businesses. Get actionable strategies, expert insights, and proven frameworks to grow your business online.',
    link: '/small-business-playbook',
    icon: 'i-mdi-book-open-page-variant',
    tag: 'Free Resource',
    featured: true
  }
];
</script>

<template>
  <div>
    <main class="text-white">
      <ServicesHeader title="Campaigns & Resources"
        description="Discover valuable resources and initiatives to accelerate your business growth" />

      <SharedPageWrapper>
        <div class="max-w-4xl mx-auto">

          <!-- Introduction -->
          <section class="mb-16">
            <h2 class="text-3xl font-bold font-delight mb-6">Current Campaigns</h2>
            <p class="text-lg text-stone-300 leading-relaxed">
              We regularly create valuable resources and campaigns to help businesses thrive in the digital landscape.
              Check out our current offerings below.
            </p>
          </section>

          <!-- Campaigns List -->
          <section class="border-t border-stone-500/50 pt-8">
            <ul class="space-y-4">
              <li v-for="(campaign, index) in campaigns" :key="index"
                class="group border-b border-stone-500/50 pb-4 hover:border-dino-500/50 transition-colors">
                <div class="flex items-center justify-between">
                  <div class="flex-1">
                    <div class="flex items-center gap-3 mb-2">
                      <UIcon :name="campaign.icon" class="h-5 w-5 text-dino-500" />
                      <h3 class="text-xl font-bold group-hover:text-dino-300 transition-colors">
                        {{ campaign.title }}
                      </h3>
                      <span v-if="campaign.tag"
                        class="bg-dino-500/20 text-dino-400 px-2 py-1 rounded text-xs font-medium">
                        {{ campaign.tag }}
                      </span>
                    </div>
                    <p class="text-stone-400 leading-relaxed">
                      {{ campaign.description }}
                    </p>
                  </div>
                  <div class="ml-6">
                    <NuxtLink :to="campaign.link"
                      class="inline-flex items-center gap-2 text-juju-500 hover:text-juju-400 font-medium transition-colors group/link">
                      <span>View</span>
                      <UIcon name="i-mdi-arrow-right"
                        class="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </NuxtLink>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <!-- Coming Soon Section -->
          <section class="mt-16 border-t border-stone-500/50 pt-16">
            <div class="text-center">
              <h2 class="text-3xl font-bold font-delight mb-6">
                More Coming Soon
              </h2>
              <p class="text-lg text-stone-400 leading-relaxed max-w-2xl mx-auto mb-8">
                We're constantly developing new resources, guides, and campaigns to help businesses succeed.
                Stay tuned for more valuable content and initiatives.
              </p>

              <!-- Newsletter Signup -->
              <div class="bg-stone-900/30 border border-stone-800/50 p-8 max-w-md mx-auto">
                <h3 class="text-xl font-bold mb-4">
                  Get Notified
                </h3>
                <p class="text-stone-400 mb-6">
                  Be the first to know about new campaigns and resources.
                </p>
                <NuxtLink to="/get-in-touch"
                  class="inline-flex items-center gap-2 bg-dino-600 hover:bg-dino-500 text-white font-bold px-6 py-3 w-full justify-center transition-all duration-200">
                  <UIcon name="i-mdi-bell-outline" class="h-4 w-4" />
                  <span>Stay Updated</span>
                </NuxtLink>
              </div>
            </div>
          </section>

        </div>


      </SharedPageWrapper>
    </main>
  </div>
</template>

<style scoped></style>
