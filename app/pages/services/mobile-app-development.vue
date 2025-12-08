<script
  setup
  lang="ts"
>
useSeoMeta({
  title: 'Mobile App Development',
  description: 'High-performance mobile app development for iOS and Android. Strategy, design, and engineering to launch fast and grow reliably.',
})
</script>

<template>
  <div>
    <main class="text-white">
      <ServicesHeader
        title="Mobile App Development"
        description="iOS & Android apps. Strategy, design, and engineering to ship fast and scale reliably."
      />
      <SharedPageWrapper>
        <div>
          <!-- Small Business Value Intro -->
          <div class="mb-8">
            <p class="text-stone-300 text-lg leading-8">
              Mobile apps help small businesses deepen customer relationships, drive repeat revenue, and
              streamline operations. From easy reordering and loyalty programs to on‑the‑go bookings,
              secure payments, and real‑time notifications, an app keeps your brand close at hand and
              makes everyday actions effortless. We focus on practical features that deliver measurable
              value—so your app earns its keep from day one.
            </p>
          </div>
          <!-- Technology Icons -->
          <div class="border-y border-stone-500/50 py-8 mb-8">
            <div class="grid grid-cols-4 md:flex md:justify-between items-center gap-4 md:gap-0">
              <UIcon
                name="i-mdi-cellphone"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-android"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-apple"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-api"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-database"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-cloud"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-lock"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-speedometer"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
            </div>
          </div>

          <!-- Info Sections -->
          <div class="space-y-8">
            <!-- Product Strategy -->
            <div class="pt-8">
              <h3 class="text-2xl font-bold mb-4">Product Strategy</h3>
              <p class="text-stone-400 text-lg">We clarify goals, users, and success metrics. Then we shape a roadmap
                that balances speed with quality, so your first release is useful and extensible.</p>
            </div>

            <!-- UX & UI Design -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">UX & UI Design</h3>
              <p class="text-stone-400 text-lg">Human‑centric design that feels fast and familiar. We focus on
                accessibility, mobile ergonomics, and clear journeys that make key actions effortless.</p>
            </div>

            <!-- Cross-Platform Development -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Cross-Platform Development</h3>
              <p class="text-stone-400 text-lg">Ship for iOS and Android with a modern stack. Strong performance,
                type‑safe code, and testing give you reliability from day one.</p>
            </div>

            <!-- APIs & Integrations -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">APIs & Integrations</h3>
              <p class="text-stone-400 text-lg">Secure authentication, payments, notifications, and data sync. We
                connect your app to the services your business relies on.</p>
            </div>

            <!-- Analytics & Iteration -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Analytics & Iteration</h3>
              <p class="text-stone-400 text-lg">Instrumentation, dashboards, and release processes that make learning
                fast. We iterate with real signals—improving retention and outcomes.</p>
            </div>

            <!-- Deployment & Support -->
            <div class="border-y border-stone-500/50 pt-8 pb-8">
              <h3 class="text-2xl font-bold mb-4">Deployment & Support</h3>
              <p class="text-stone-400 text-lg">App store readiness, performance budgets, and monitoring. We keep your
                app healthy, secure, and easy to evolve.</p>
            </div>
          </div>
        </div>

        <ServicesCTA />

        <!-- Related Services -->
        <div class="mt-10 border-t border-stone-500/50 pt-10">
          <h3 class="text-2xl md:text-3xl font-bold mb-6 text-stone-200 font-delight">Related Services</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NuxtLink to="/services/website-design" class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors">
              <div class="flex items-start gap-3">
                <UIcon name="i-mdi-palette-swatch" class="h-6 w-6 text-stone-400 group-hover:text-stone-300" />
                <div>
                  <div class="font-bold text-stone-200">Website Design</div>
                  <div class="text-stone-400 mt-1">Human‑centric web design focused on clarity and conversion.</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink to="/services/nuxt-web-app-development" class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors">
              <div class="flex items-start gap-3">
                <UIcon name="i-mdi-lightning-bolt" class="h-6 w-6 text-stone-400 group-hover:text-stone-300" />
                <div>
                  <div class="font-bold text-stone-200">Nuxt Web App Development</div>
                  <div class="text-stone-400 mt-1">High‑performance web applications with modern tooling.</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink to="/services/software-development" class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors">
              <div class="flex items-start gap-3">
                <UIcon name="i-mdi-cog" class="h-6 w-6 text-stone-400 group-hover:text-stone-300" />
                <div>
                  <div class="font-bold text-stone-200">Software Development</div>
                  <div class="text-stone-400 mt-1">Custom software from concept through deployment and support.</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink to="/services/digital-marketing" class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors">
              <div class="flex items-start gap-3">
                <UIcon name="i-mdi-chart-timeline-variant" class="h-6 w-6 text-stone-400 group-hover:text-stone-300" />
                <div>
                  <div class="font-bold text-stone-200">Digital Marketing</div>
                  <div class="text-stone-400 mt-1">Acquire and retain users with data‑driven growth.
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </SharedPageWrapper>
    </main>
  </div>
</template>

<style scoped></style>
