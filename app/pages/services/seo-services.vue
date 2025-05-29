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
      </SharedPageWrapper>
    </main>
  </div>
</template>

<style scoped>
/* Add any page-specific styles here */
</style>
