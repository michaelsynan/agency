<script
  setup
  lang="ts"
></script>


<template>
  <div>
    <main class="text-white">
      <ServicesHeader
        title="E-Commerce Design & Development"
        description="See things online with Shopify and other leading storefronts"
      />
      <SharedPageWrapper>
        <div>
          <!-- Intro -->
          <div class="mb-8">
            <p class="text-stone-300 text-xl md:text-2xl leading-8">
              E-commerce should feel effortless: fast pages, clear product storytelling, and a checkout that doesn’t
              get in the way. We build online stores that are easy to manage, easy to trust, and optimized for
              conversion across every device.
            </p>
          </div>

          <!-- E-commerce Platform Icons -->
          <div class="border-y border-stone-500/50 py-8 mb-8">
            <div class="grid grid-cols-3 md:flex md:justify-between items-center gap-4 md:gap-0">
              <UIcon
                name="i-mdi-shopify"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-cart"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-credit-card"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-package-variant"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-storefront"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-chart-line"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-mobile-phone"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-security"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
            </div>
          </div>

          <!-- Info Sections -->
          <div class="space-y-8">
            <!-- Complete E-commerce Solutions -->
            <div class="pt-8">
              <h3 class="text-2xl font-bold mb-4">Complete E-commerce Solutions</h3>
              <p class="text-stone-400 text-lg">We build powerful online stores that drive sales and deliver exceptional
                shopping experiences across all devices, from initial setup to ongoing optimization.</p>
            </div>

            <!-- Shopify Development -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Shopify Development</h3>
              <p class="text-stone-400 text-lg">Custom Shopify stores with tailored themes, advanced functionality, and
                seamless integrations that maximize your online sales potential and customer satisfaction.</p>
            </div>

            <!-- Payment & Checkout Optimization -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Payment & Checkout Optimization</h3>
              <p class="text-stone-400 text-lg">Secure payment processing, streamlined checkout flows, and conversion
                optimization techniques that reduce cart abandonment and increase revenue.</p>
            </div>

            <!-- Inventory & Order Management -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Inventory & Order Management</h3>
              <p class="text-stone-400 text-lg">Automated inventory tracking, order fulfillment systems, and shipping
                integrations that streamline your operations and improve customer service.</p>
            </div>

            <!-- Mobile Commerce & Analytics -->
            <div class="border-t border-stone-500/50 pt-8 pb-8">
              <h3 class="text-2xl font-bold mb-4">Mobile Commerce & Analytics</h3>
              <p class="text-stone-400 text-lg">Mobile-optimized shopping experiences and comprehensive analytics to
                track performance, understand customer behavior, and drive business growth.</p>
            </div>
          </div>
        </div>

        <ServicesCTA />

        <!-- Related Services -->
        <div class="mt-10 pt-10">
          <h3 class="text-2xl md:text-3xl font-bold mb-6 text-stone-200 font-delight">Related Services</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div class="text-stone-400 mt-1">Performance marketing to fuel store growth.</div>
                </div>
              </div>
            </NuxtLink>

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
                  <div class="text-stone-400 mt-1">Craft product pages that convert and delight.</div>
                </div>
              </div>
            </NuxtLink>

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
                  <div class="text-stone-400 mt-1">Build fast stores with reliable infrastructure.</div>
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
                  <div class="text-stone-400 mt-1">Grow organic sales with technical and content SEO.</div>
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
