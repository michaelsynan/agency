<script
  setup
  lang="ts"
>
// Static selection of three showcase images with similar landscape aspect ratios
const showcaseImages = [
  { src: '/dashboard.webp', alt: 'Dashboard UI' },
  { src: '/historical-society-nyc.webp', alt: 'NYC Non-profit Website' },
  { src: '/video-photography-website.webp', alt: 'Video & Photography Website' },
]
</script>

<template>
  <div>
    <main class="text-white min-h-screen">
      <!-- Hero section: full viewport height on md+, two rows (header + showcase) -->
      <section class="md:h-screen md:grid md:grid-rows-[1fr,1fr] overflow-hidden">
        <!-- Top: Header (always visible) -->
        <div>
          <ServicesHeader
            title="Website Design"
            description="Creating beautiful, user-centered designs that captivate and convert."
          />
        </div>
        <!-- Bottom: image showcase (hidden on mobile) -->
        <div
          id="top-area"
          class="hidden md:block bg-stone-950/50 border border-stone-800/50 p-4 overflow-hidden"
        >
          <div class="h-full grid grid-cols-3 gap-4">
            <div
              v-for="(img, i) in showcaseImages"
              :key="i"
              class="w-full h-full border border-stone-500/40 bg-stone-900/30 p-3 flex items-center justify-center overflow-hidden"
            >
              <NuxtImg
                :src="img.src"
                :alt="img.alt"
                class="h-full w-full object-contain select-none pointer-events-none"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>
      <SharedPageWrapper>
        <div>

          <!-- Intro -->
          <div class="mt-12 mb-12">
            <p class="text-stone-300 text-xl md:text-2xl leading-8">
              Great website design makes your value obvious in seconds. We create clean, modern interfaces that guide
              visitors to the right action—while keeping your brand consistent, your content readable, and your
              experience enjoyable on mobile.
            </p>
          </div>
          <!-- Our Process Section -->
          <div class="mt-12">
            <h2 class="text-3xl md:text-4xl font-bold font-delight mb-12">Our Process</h2>

            <div class="flex flex-col gap-12">
              <!-- Step 1 -->
              <div class="flex gap-8">
                <div class="text-4xl font-bold text-stone-400 shrink-0 font-mono">01</div>
                <div class="flex flex-col">
                  <h3 class="text-xl font-bold mb-3">Discovery & Research</h3>
                  <p class="text-stone-400 leading-relaxed">
                    We start by understanding your business goals, target audience, and brand identity to create a
                    design
                    strategy that aligns with your vision.
                  </p>
                </div>
              </div>

              <!-- Step 2 -->
              <div class="flex gap-8">
                <div class="text-4xl font-bold text-stone-400 shrink-0 font-mono">02</div>
                <div class="flex flex-col">
                  <h3 class="text-xl font-bold mb-3">Wireframes & Mockups</h3>
                  <p class="text-stone-400 leading-relaxed">
                    We create detailed wireframes and high-fidelity mockups that showcase the user experience and visual
                    design before development begins.
                  </p>
                </div>
              </div>

              <!-- Step 3 -->
              <div class="flex gap-8">
                <div class="font-mono text-4xl font-bold text-stone-400 shrink-0">03</div>
                <div class="flex flex-col">
                  <h3 class="text-xl font-bold mb-3">Design & Refinement</h3>
                  <p class="text-stone-400 leading-relaxed">
                    We deliver polished designs with multiple revisions, ensuring every detail meets your expectations
                    and
                    brand standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ServicesCTA />

        <!-- Related Services -->
        <div class="mt-10 pt-10">
          <h3 class="text-2xl md:text-3xl font-bold mb-6 text-stone-200 font-delight">Related Services</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NuxtLink
              to="/services/website-development"
              class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors"
            >
              <div class="flex items-start gap-3">
                <UIcon
                  name="i-mdi-nodejs"
                  class="h-6 w-6 text-stone-400 group-hover:text-stone-300"
                />
                <div>
                  <div class="font-bold text-stone-200">Website Development</div>
                  <div class="text-stone-400 mt-1">Build reliable sites that bring designs to life.</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink
              to="/services/digital-marketing"
              class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors"
            >
              <div class="flex items-start gap-3">
                <UIcon
                  name="i-mdi-chart-line"
                  class="h-6 w-6 text-stone-400 group-hover:text-stone-300"
                />
                <div>
                  <div class="font-bold text-stone-200">Digital Marketing</div>
                  <div class="text-stone-400 mt-1">Turn great design into measurable growth.</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink
              to="/services/seo-services"
              class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors"
            >
              <div class="flex items-start gap-3">
                <UIcon
                  name="i-mdi-target"
                  class="h-6 w-6 text-stone-400 group-hover:text-stone-300"
                />
                <div>
                  <div class="font-bold text-stone-200">SEO Services</div>
                  <div class="text-stone-400 mt-1">Design content that ranks and converts.</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink
              to="/services/ecommerce-development"
              class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors"
            >
              <div class="flex items-start gap-3">
                <UIcon
                  name="i-mdi-storefront"
                  class="h-6 w-6 text-stone-400 group-hover:text-stone-300"
                />
                <div>
                  <div class="font-bold text-stone-200">E‑Commerce</div>
                  <div class="text-stone-400 mt-1">Product storytelling that drives online sales.</div>
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
