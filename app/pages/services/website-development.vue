<script
  setup
  lang="ts"
></script>

<template>
  <div>
    <main class="text-white">
      <ServicesHeader
        title="Website Development"
        description="Building robust, scalable websites with cutting-edge technology."
      />
      <SharedPageWrapper>
        <div>
          <!-- Intro -->
          <div class="mb-8">
            <p class="text-stone-300 text-xl md:text-2xl leading-8">
              Your website should be fast, reliable, and built to evolve. We develop modern sites and web experiences
              with clean architecture, strong performance, and integrations that support how your business actually
              operates.
            </p>
          </div>

          <!-- Developer Technology Icons -->
          <div class="border-y border-stone-500/50 py-8 mb-8">
            <div class="grid grid-cols-3 md:flex md:justify-between items-center gap-4 md:gap-0">
              <UIcon
                name="i-mdi-vuejs"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-react"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-nodejs"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-language-python"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-database"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-aws"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-docker"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
              <UIcon
                name="i-mdi-git"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center"
              />
            </div>
          </div>

          <!-- Info Sections -->
          <div class="space-y-8">
            <!-- Modern Web Technologies -->
            <div class="pt-8">
              <h3 class="text-2xl font-bold mb-4">Modern Web Technologies</h3>
              <p class="text-stone-400 text-lg">We leverage cutting-edge frameworks and tools to build fast, secure, and
                scalable websites that perform exceptionally across all devices and browsers.</p>
            </div>

            <!-- Frontend Excellence -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Frontend Excellence</h3>
              <p class="text-stone-400 text-lg">React, Vue.js, and modern JavaScript frameworks for dynamic, interactive
                user experiences that engage your visitors.</p>
            </div>

            <!-- Backend Power -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Backend Power</h3>
              <p class="text-stone-400 text-lg">Node.js, Python, and robust server architectures for reliable
                performance and data management that scales with your business.</p>
            </div>

            <!-- CMS & E-commerce -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">CMS & E-commerce Solutions</h3>
              <p class="text-stone-400 text-lg">WordPress, Shopify, and custom content management systems optimized for
                your specific business requirements and growth objectives.</p>
            </div>

            <!-- Cloud & Deployment -->
            <div class="border-t border-stone-500/50 pt-8 pb-8">
              <h3 class="text-2xl font-bold mb-4">Cloud & Deployment</h3>
              <p class="text-stone-400 text-lg">AWS, Vercel, and modern hosting solutions with CI/CD pipelines for
                seamless deployment and reliable uptime.</p>
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
                  <div class="text-stone-400 mt-1">Interface design that improves usability and conversion.</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink
              to="/services/nuxt-web-app-development"
              class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors"
            >
              <div class="flex items-start gap-3">
                <UIcon
                  name="i-mdi-lightning-bolt"
                  class="h-6 w-6 text-stone-400 group-hover:text-stone-300"
                />
                <div>
                  <div class="font-bold text-stone-200">Nuxt Web App Development</div>
                  <div class="text-stone-400 mt-1">Modern app foundations with SSR and performance.</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink
              to="/services/software-development"
              class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors"
            >
              <div class="flex items-start gap-3">
                <UIcon
                  name="i-mdi-cog"
                  class="h-6 w-6 text-stone-400 group-hover:text-stone-300"
                />
                <div>
                  <div class="font-bold text-stone-200">Software Development</div>
                  <div class="text-stone-400 mt-1">APIs, integrations, and scalable backend services.</div>
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
                  <div class="text-stone-400 mt-1">Technical improvements that improve search visibility.</div>
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
