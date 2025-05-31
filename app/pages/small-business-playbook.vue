<script setup lang="ts">
useSeoMeta({
  title: 'Small Business Playbook | Formwork Studios',
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
</script>

<template>
  <div>
    <main class="text-white">
      <ServicesHeader title="Small Business Playbook"
        description="Your roadmap to digital success and sustainable growth" />

      <SharedPageWrapper>
        <div class="max-w-4xl mx-auto">

          <!-- Hero Quote Section -->
          <section class="mb-16">
            <div class="bg-stone-900/50 border border-stone-800/50 p-8 md:p-12 relative">
              <div class="flex flex-col md:flex-row gap-8 items-center">
                <!-- Quote Text -->
                <div class="flex-1">
                  <blockquote class="text-2xl md:text-3xl font-delight italic leading-relaxed text-stone-100">
                    "Success in small business isn't just about having a great product or service—it's about connecting
                    with your customers where they are and delivering value consistently."
                  </blockquote>
                  <div class="mt-6 flex items-center gap-4">
                    <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-dino-500">
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

          <!-- Introduction -->
          <section class="mb-16 border-t border-stone-500/50 pt-8">
            <h2 class="text-3xl font-bold font-delight mb-6">The Digital Transformation Imperative</h2>
            <div class="prose prose-lg prose-stone text-stone-300 space-y-6">
              <p class="text-lg leading-relaxed">
                In today's digital landscape, small businesses face unprecedented opportunities and challenges.
                The companies that thrive are those that embrace digital transformation not as a luxury, but as
                a fundamental business strategy.
              </p>
              <p class="text-lg leading-relaxed">
                This playbook distills years of experience working with hundreds of small businesses into
                actionable strategies you can implement immediately. Whether you're just starting out or
                looking to scale, these frameworks will guide your digital transformation journey.
              </p>
            </div>
          </section>

          <!-- The Essential Checklist -->
          <section class="mb-16 border-t border-stone-500/50 pt-8">
            <h2 class="text-3xl font-bold font-delight mb-8">The Essential Digital Business Checklist</h2>
            <div class="space-y-4">
              <div v-for="(item, index) in checklistItems" :key="index" class="flex items-start gap-4 p-4">
                <UIcon name="i-mdi-check-circle" class="h-6 w-6 text-dino-500 flex-shrink-0 mt-0.5" />
                <span class="text-lg text-stone-200" v-html="item"></span>
              </div>
            </div>
          </section>

          <!-- Key Strategies Section -->
          <section class="mb-16 border-t border-stone-500/50 pt-8">
            <h2 class="text-3xl font-bold font-delight mb-8">Proven Growth Strategies</h2>
            <div class="grid md:grid-cols-2 gap-8">

              <!-- Strategy 1 -->
              <div class="bg-stone-900/30 border border-stone-800/50 p-6">
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
              <div class="bg-stone-900/30 border border-stone-800/50 p-6">
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
              <div class="bg-stone-900/30 border border-stone-800/50 p-6">
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
              <div class="bg-stone-900/30 border border-stone-800/50 p-6">
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

          <!-- Get Your Complete Playbook -->
          <SharedGetPDF header="Get Your Complete Playbook"
            copy="Ready to transform your business? Get our comprehensive 50-page digital business playbook with detailed strategies, templates, and step-by-step guides. Plus, schedule a free consultation to discuss your specific challenges."
            campaign="small-business" />


        </div>

      </SharedPageWrapper>
    </main>
  </div>
</template>

<style scoped></style>
