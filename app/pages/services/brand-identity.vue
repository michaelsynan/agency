<script
  setup
  lang="ts"
></script>

<template>
  <div>
    <main class="text-white">
      <ServicesHeader
        title="Brand Identity"
        description="Crafting a unique brand identity that resonates with your audience."
      />
      <SharedPageWrapper>
        <div>
          <!-- Intro -->
          <div class="mb-8">
            <p class="text-stone-300 text-xl md:text-2xl leading-8">
              A strong brand makes you easier to choose. We help you clarify your story, voice, and visual system so
              your business looks intentional across your website, social, print, and every customer touchpoint.
            </p>
          </div>

          <!-- Brand Identity Design Icons -->
          <div class="border-y border-stone-500/50 py-8 mb-8">
            <div class="grid grid-cols-3 md:flex md:justify-between items-center gap-4 md:gap-0">
              <UIcon
                name="i-mdi-palette"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-format-font"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-vector-polyline"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-camera"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-file-document-outline"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-image-frame"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-eye"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-heart"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
            </div>
          </div>

          <!-- Info Sections -->
          <div class="space-y-8">
            <!-- Strategic Brand Development -->
            <div class="pt-8">
              <h3 class="text-2xl font-bold mb-4">Strategic Brand Development</h3>
              <p class="text-stone-400 text-lg">We create compelling brand identities that capture your essence,
                resonate with your target audience, and differentiate you from the competition in meaningful ways.</p>
            </div>

            <!-- Logo Design & Visual Identity -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Logo Design & Visual Identity</h3>
              <p class="text-stone-400 text-lg">Custom logo design, color palettes, typography systems, and visual
                elements that create a cohesive and memorable brand experience across all touchpoints.</p>
            </div>

            <!-- Brand Guidelines & Standards -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Brand Guidelines & Standards</h3>
              <p class="text-stone-400 text-lg">Comprehensive brand style guides that ensure consistent application of
                your visual identity across digital platforms, print materials, and marketing campaigns.</p>
            </div>

            <!-- Marketing Collateral -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Marketing Collateral</h3>
              <p class="text-stone-400 text-lg">Business cards, brochures, presentations, and digital assets that
                reinforce your brand identity and support your marketing and sales efforts.</p>
            </div>

            <!-- Brand Strategy & Positioning -->
            <div class="border-t border-stone-500/50 pt-8 pb-8">
              <h3 class="text-2xl font-bold mb-4">Brand Strategy & Positioning</h3>
              <p class="text-stone-400 text-lg">Strategic brand positioning, messaging frameworks, and brand voice
                development that creates emotional connections with your customers and drives business growth.</p>
            </div>
          </div>
        </div>

        <ServicesCTA />

        <!-- Related Services -->
        <div class="mt-10 pt-10">
          <h3 class="text-2xl md:text-3xl font-bold mb-6 text-stone-200 font-delight">Related Services</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NuxtLink
              to="/services/website-design"
              class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors"
            >
              <div class="flex items-start gap-3">
                <UIcon
                  name="i-mdi-palette-swatch"
                  class="h-6 w-6 text-stone-400 group-hover:text-stone-300"
                />
                <div>
                  <div class="font-bold text-stone-200">Website Design</div>
                  <div class="text-stone-400 mt-1">Translate your brand into clear, effective interfaces.</div>
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
                  <div class="text-stone-400 mt-1">Amplify your brand with targeted, measurable campaigns.</div>
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
                  <div class="text-stone-400 mt-1">Build authority and visibility with consistent messaging.</div>
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
                  <div class="text-stone-400 mt-1">Carry your brand through high‑converting shopping experiences.</div>
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
