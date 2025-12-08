<script setup lang="ts"></script>

<template>
  <div>
    <main class="text-white">
      <ServicesHeader title="Digital Marketing"
        description="Drive traffic and generate leads with our comprehensive digital marketing services." />
      <SharedPageWrapper>
        <div>
          <!-- Digital Marketing Platform Icons -->
          <div class="border-y border-stone-500/50 py-8 mb-8">
            <div class="grid grid-cols-3 md:flex md:justify-between items-center gap-4 md:gap-0">
              <UIcon name="i-mdi-google" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-facebook" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-instagram" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-linkedin" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-youtube" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-email" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-chart-line" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-target" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
            </div>
          </div>

          <!-- Info Sections -->
          <div class="space-y-8">
            <!-- Strategic Digital Marketing -->
            <div class="pt-8">
              <h3 class="text-2xl font-bold mb-4">Strategic Digital Marketing</h3>
              <p class="text-stone-400 text-lg">We develop comprehensive digital marketing strategies that drive
                traffic, generate leads, and convert visitors into loyal customers across all digital channels.</p>
            </div>

            <!-- Search Engine Optimization -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Search Engine Optimization</h3>
              <p class="text-stone-400 text-lg">Advanced SEO techniques to improve your search rankings, increase
                organic traffic, and establish your brand as an authority in your industry.</p>
            </div>

            <!-- Paid Advertising -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Paid Advertising</h3>
              <p class="text-stone-400 text-lg">Google Ads, Facebook Ads, and targeted campaigns that maximize your ROI
                while reaching your ideal customers at the right time.</p>
            </div>

            <!-- Social Media Marketing -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Social Media Marketing</h3>
              <p class="text-stone-400 text-lg">Engaging social media strategies across Instagram, LinkedIn, YouTube,
                and other platforms to build brand awareness and community engagement.</p>
            </div>

            <!-- Analytics & Reporting -->
            <div class="border-t border-stone-500/50 border-b border-stone-500/50 pt-8 pb-8">
              <h3 class="text-2xl font-bold mb-4">Analytics & Reporting</h3>
              <p class="text-stone-400 text-lg">Detailed performance tracking and reporting to measure campaign success,
                optimize strategies, and demonstrate clear return on investment.</p>
            </div>
          </div>
        </div>

        <ServicesCTA />

        <!-- Related Services -->
        <div class="mt-10 border-t border-stone-500/50 pt-10">
          <h3 class="text-2xl md:text-3xl font-bold mb-6 text-stone-200 font-delight">Related Services</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NuxtLink to="/services/seo-services" class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors">
              <div class="flex items-start gap-3">
                <UIcon name="i-mdi-target" class="h-6 w-6 text-stone-400 group-hover:text-stone-300" />
                <div>
                  <div class="font-bold text-stone-200">SEO Services</div>
                  <div class="text-stone-400 mt-1">Boost organic traffic with technical and content SEO.</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink to="/services/website-design" class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors">
              <div class="flex items-start gap-3">
                <UIcon name="i-mdi-palette-swatch" class="h-6 w-6 text-stone-400 group-hover:text-stone-300" />
                <div>
                  <div class="font-bold text-stone-200">Website Design</div>
                  <div class="text-stone-400 mt-1">Improve conversion with human‑centric interfaces.</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink to="/services/website-development" class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors">
              <div class="flex items-start gap-3">
                <UIcon name="i-mdi-nodejs" class="h-6 w-6 text-stone-400 group-hover:text-stone-300" />
                <div>
                  <div class="font-bold text-stone-200">Website Development</div>
                  <div class="text-stone-400 mt-1">Fast, reliable sites that support growth campaigns.</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink to="/services/ecommerce-development" class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors">
              <div class="flex items-start gap-3">
                <UIcon name="i-mdi-cart" class="h-6 w-6 text-stone-400 group-hover:text-stone-300" />
                <div>
                  <div class="font-bold text-stone-200">E‑Commerce</div>
                  <div class="text-stone-400 mt-1">Drive sales with optimized storefronts and analytics.</div>
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
