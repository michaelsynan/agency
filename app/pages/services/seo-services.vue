<script setup lang="ts">
useSeoMeta({
  title: 'SEO Services | Formwork Studios',
  description: 'Expert SEO services to improve your website visibility, drive organic traffic, and increase your search engine rankings. Get a customized SEO strategy for your business.',
})
</script>

<template>
  <div>
    <main class="text-white">
      <ServicesHeader title="SEO SERVICES" description="Search Engine Optimization & Digital Visibility" />

      <SharedPageWrapper>
        <!-- Main content container -->
        <div class="max-w-4xl mx-auto">
          <!-- SEO Platform Icons -->
          <section class="mb-16">
            <div class="grid grid-cols-3 md:grid-cols-8 gap-8 border-b border-stone-500/50 pb-16">
              <div class="flex flex-col items-center space-y-2">
                <Icon name="i-logos-google" class="text-4xl text-stone-400" />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon name="i-mdi-search-web" class="text-4xl text-stone-400" />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon name="i-mdi-chart-line" class="text-4xl text-stone-400" />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon name="i-mdi-target" class="text-4xl text-stone-400" />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon name="i-mdi-file-document" class="text-4xl text-stone-400" />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon name="i-mdi-link" class="text-4xl text-stone-400" />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon name="i-mdi-map-marker" class="text-4xl text-stone-400" />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon name="i-mdi-speedometer" class="text-4xl text-stone-400" />
              </div>
            </div>
          </section>

          <!-- Keyword Research & Strategy -->
          <section class="py-16">
            <h2 class="text-3xl md:text-4xl font-bold font-delight mb-8">
              Keyword Research & Strategy
            </h2>
            <p class="text-stone-400 switzer leading-8 mb-6">
              Success in SEO starts with understanding what your customers are searching for. Our comprehensive keyword
              research identifies high-value search terms that drive qualified traffic to your business.
            </p>
            <p class="text-stone-400 switzer leading-8">
              We analyze search volume, competition levels, and user intent to create a strategic keyword map that
              aligns with your business goals and content strategy.
            </p>
          </section>

          <!-- Technical SEO Optimization -->
          <section class="py-16 border-t border-stone-500/50">
            <h2 class="text-3xl md:text-4xl font-bold font-delight mb-8">
              Technical SEO Optimization
            </h2>
            <p class="text-stone-400 switzer leading-8 mb-6">
              Your website's technical foundation determines how search engines crawl, index, and rank your content. We
              optimize site speed, mobile responsiveness, and technical architecture for maximum search visibility.
            </p>
            <p class="text-stone-400 switzer leading-8">
              From structured data markup to XML sitemaps, we ensure your website meets all technical SEO requirements
              while providing an exceptional user experience.
            </p>
          </section>

          <!-- Content Optimization -->
          <section class="py-16 border-t border-stone-500/50">
            <h2 class="text-3xl md:text-4xl font-bold font-delight mb-8">
              Content Optimization
            </h2>
            <p class="text-stone-400 switzer leading-8 mb-6">
              Quality content that satisfies user intent is the cornerstone of effective SEO. We optimize your existing
              content and create new material that establishes authority in your industry.
            </p>
            <p class="text-stone-400 switzer leading-8">
              Our content strategy focuses on creating valuable resources that answer your customers' questions while
              naturally incorporating target keywords for improved rankings.
            </p>
          </section>

          <!-- Link Building & Authority -->
          <section class="py-16 border-t border-stone-500/50">
            <h2 class="text-3xl md:text-4xl font-bold font-delight mb-8">
              Link Building & Authority
            </h2>
            <p class="text-stone-400 switzer leading-8 mb-6">
              Building domain authority through high-quality backlinks remains one of the most important ranking
              factors. We develop strategic link-building campaigns that earn links from reputable sources in your
              industry.
            </p>
            <p class="text-stone-400 switzer leading-8">
              Our approach focuses on creating link-worthy content and building genuine relationships that result in
              natural, high-value backlinks that improve your search rankings.
            </p>
          </section>

          <!-- Local SEO & Visibility -->
          <section class="py-16 border-t border-b border-stone-500/50">
            <h2 class="text-3xl md:text-4xl font-bold font-delight mb-8">
              Local SEO & Visibility
            </h2>
            <p class="text-stone-400 switzer leading-8 mb-6">
              For businesses serving local markets, local SEO is crucial for attracting nearby customers. We optimize
              your Google Business Profile, local citations, and location-based content.
            </p>
            <p class="text-stone-400 switzer leading-8">
              Our local SEO strategies help you dominate local search results, driving foot traffic and local leads that
              convert into customers.
            </p>
          </section>
        </div>

        <ServicesCTA />

        <!-- Related Services -->
        <div class="mt-10 border-t border-stone-500/50 pt-10">
          <h3 class="text-2xl md:text-3xl font-bold mb-6 text-stone-200 font-delight">Related Services</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NuxtLink to="/services/digital-marketing" class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors">
              <div class="flex items-start gap-3">
                <UIcon name="i-mdi-chart-line" class="h-6 w-6 text-stone-400 group-hover:text-stone-300" />
                <div>
                  <div class="font-bold text-stone-200">Digital Marketing</div>
                  <div class="text-stone-400 mt-1">Drive growth across channels with measurable impact.</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink to="/services/website-design" class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors">
              <div class="flex items-start gap-3">
                <UIcon name="i-mdi-palette-swatch" class="h-6 w-6 text-stone-400 group-hover:text-stone-300" />
                <div>
                  <div class="font-bold text-stone-200">Website Design</div>
                  <div class="text-stone-400 mt-1">Create content and UX that satisfy search intent.</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink to="/services/website-development" class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors">
              <div class="flex items-start gap-3">
                <UIcon name="i-mdi-nodejs" class="h-6 w-6 text-stone-400 group-hover:text-stone-300" />
                <div>
                  <div class="font-bold text-stone-200">Website Development</div>
                  <div class="text-stone-400 mt-1">Technical foundations that improve crawl and speed.</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink to="/services/nuxt-web-app-development" class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors">
              <div class="flex items-start gap-3">
                <UIcon name="i-mdi-lightning-bolt" class="h-6 w-6 text-stone-400 group-hover:text-stone-300" />
                <div>
                  <div class="font-bold text-stone-200">Nuxt Web App Development</div>
                  <div class="text-stone-400 mt-1">SSR and performance for search visibility.</div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </SharedPageWrapper>
    </main>
  </div>
</template>

<style scoped>
/* Add any page-specific styles here */
</style>
