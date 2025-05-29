<script setup lang="ts">
useSeoMeta({
  title: 'Nuxt Web App Development | Formwork Studios',
  description: 'Build high-performance web applications with Nuxt.js. Our expertise in Vue.js and Nuxt delivers fast, SEO-friendly, and scalable web solutions for your business.',
})
</script>

<template>
  <div>
    <main class="text-white">
      <ServicesHeader title="Nuxt Web App Development"
        description="Develop performant web apps with the meta-framework Nuxt" icon="i-tabler-brand-nuxt" />

      <SharedPageWrapper>
        <!-- Main content container -->
        <div class="max-w-4xl mx-auto">
          <!-- Nuxt Technology Icons -->
          <section class="mb-16">
            <div class="grid grid-cols-3 md:grid-cols-8 gap-8 border-b border-stone-500/50 pb-16">
              <div class="flex flex-col items-center space-y-2">
                <Icon name="i-logos-nuxt-icon" class="text-4xl text-stone-400" />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon name="i-logos-vue" class="text-4xl text-stone-400" />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon name="i-logos-typescript-icon" class="text-4xl text-stone-400" />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon name="i-mdi-rocket-launch" class="text-4xl text-stone-400" />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon name="i-mdi-search-web" class="text-4xl text-stone-400" />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon name="i-logos-pwa" class="text-4xl text-stone-400" />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon name="i-mdi-api" class="text-4xl text-stone-400" />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon name="i-mdi-cloud" class="text-4xl text-stone-400" />
              </div>
            </div>
          </section>

          <!-- Modern Vue.js Meta-Framework -->
          <section class="py-16">
            <h2 class="text-3xl md:text-4xl font-bold font-delight mb-8">
              Modern Vue.js Meta-Framework
            </h2>
            <p class="text-stone-400 switzer leading-8 mb-6">
              Nuxt.js is a powerful meta-framework built on Vue.js that provides everything you need to create
              performant, SEO-friendly web applications. We leverage Nuxt's advanced features to deliver fast, scalable
              solutions.
            </p>
            <p class="text-stone-400 switzer leading-8">
              From server-side rendering to static site generation, Nuxt offers the flexibility to choose the best
              approach for your project while maintaining excellent developer experience and optimal performance.
            </p>
          </section>

          <!-- Server-Side Rendering & Performance -->
          <section class="py-16 border-t border-stone-500/50">
            <h2 class="text-3xl md:text-4xl font-bold font-delight mb-8">
              Server-Side Rendering & Performance
            </h2>
            <p class="text-stone-400 switzer leading-8 mb-6">
              Nuxt's built-in SSR capabilities ensure your applications load quickly and rank well in search engines. We
              optimize every aspect of performance, from code splitting to image optimization and caching strategies.
            </p>
            <p class="text-stone-400 switzer leading-8">
              Our Nuxt applications consistently achieve excellent Core Web Vitals scores, providing users with
              lightning-fast experiences that convert visitors into customers.
            </p>
          </section>

          <!-- TypeScript & Developer Experience -->
          <section class="py-16 border-t border-stone-500/50">
            <h2 class="text-3xl md:text-4xl font-bold font-delight mb-8">
              TypeScript & Developer Experience
            </h2>
            <p class="text-stone-400 switzer leading-8 mb-6">
              We build Nuxt applications with TypeScript for enhanced code quality and maintainability. Nuxt's excellent
              TypeScript integration provides auto-completion, type checking, and better tooling support.
            </p>
            <p class="text-stone-400 switzer leading-8">
              Features like auto-imports, file-based routing, and composables make development efficient while keeping
              codebases clean and organized for long-term success.
            </p>
          </section>

          <!-- Progressive Web Apps & Modern Features -->
          <section class="py-16 border-t border-stone-500/50">
            <h2 class="text-3xl md:text-4xl font-bold font-delight mb-8">
              Progressive Web Apps & Modern Features
            </h2>
            <p class="text-stone-400 switzer leading-8 mb-6">
              Transform your web application into a Progressive Web App with Nuxt's PWA module. We implement offline
              functionality, push notifications, and app-like experiences that work across all devices.
            </p>
            <p class="text-stone-400 switzer leading-8">
              Our Nuxt PWAs provide native app experiences through web browsers, reducing development costs while
              reaching users on every platform.
            </p>
          </section>

          <!-- Full-Stack Capabilities & Deployment -->
          <section class="py-16 border-t border-b border-stone-500/50">
            <h2 class="text-3xl md:text-4xl font-bold font-delight mb-8">
              Full-Stack Capabilities & Deployment
            </h2>
            <p class="text-stone-400 switzer leading-8 mb-6">
              Nuxt's server API routes enable full-stack development within a single framework. We build complete
              applications with frontend interfaces, backend APIs, and database integrations all in one cohesive
              solution.
            </p>
            <p class="text-stone-400 switzer leading-8">
              Our deployment strategies leverage modern platforms like Vercel, Netlify, and AWS, ensuring your Nuxt
              applications scale automatically and perform optimally under any load.
            </p>
          </section>
        </div>

        <!-- Why Choose Nuxt -->
        <section class="mb-20">
          <h2 class="text-3xl md:text-4xl font-bold font-delight mb-8">
            Why Choose Nuxt for Your Project?
          </h2>

          <div class="space-y-8">
            <div>
              <h3 class="text-xl font-bold text-stone-200 mb-4">
                Superior Performance
              </h3>
              <p class="text-stone-400 switzer leading-7">
                Nuxt applications deliver exceptional speed through features like automatic code-splitting, efficient
                caching mechanisms, and optimized asset loading.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-bold text-stone-200 mb-4">
                SEO Excellence
              </h3>
              <p class="text-stone-400 switzer leading-7">
                With server-side rendering capabilities, Nuxt ensures your content is fully indexable by search
                engines,
                improving your visibility online.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-bold text-stone-200 mb-4">
                Developer Experience
              </h3>
              <p class="text-stone-400 switzer leading-7">
                Nuxt's intuitive architecture, comprehensive documentation, and active community make development
                faster
                and more enjoyable.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-bold text-stone-200 mb-4">
                Future-Proof Technology
              </h3>
              <p class="text-stone-400 switzer leading-7">
                Built on Vue.js and constantly evolving, Nuxt represents a sustainable investment in your digital
                infrastructure.
              </p>
            </div>
          </div>
        </section>

        <!-- Our Process -->
        <section class="mb-20">
          <h2 class="text-3xl md:text-4xl font-bold font-delight mb-8">
            Our Nuxt Development Process
          </h2>

          <div class="space-y-12">
            <div>
              <h3 class="text-xl font-bold text-stone-200 mb-4">
                1. Discovery & Planning
              </h3>
              <p class="text-stone-400 switzer leading-7">
                We begin by thoroughly understanding your business goals, target users, and technical requirements.
                This
                foundational knowledge guides our approach to architecture and feature planning.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-bold text-stone-200 mb-4">
                2. UI/UX Design
              </h3>
              <p class="text-stone-400 switzer leading-7">
                Our designers create intuitive, visually compelling interfaces that align with your brand identity and
                optimize user experience.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-bold text-stone-200 mb-4">
                3. Development
              </h3>
              <p class="text-stone-400 switzer leading-7">
                Our experienced Nuxt developers build your application with clean, maintainable code, implementing all
                required features while following best practices.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-bold text-stone-200 mb-4">
                4. Testing & Quality Assurance
              </h3>
              <p class="text-stone-400 switzer leading-7">
                We rigorously test your application to ensure flawless functionality, optimal performance, and
                cross-browser compatibility.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-bold text-stone-200 mb-4">
                5. Deployment & Maintenance
              </h3>
              <p class="text-stone-400 switzer leading-7">
                We handle deployment to your chosen hosting environment and provide ongoing support to keep your
                application running smoothly.
              </p>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <ServicesCTA />
      </SharedPageWrapper>
    </main>
  </div>
</template>

<style scoped>
/* Page-specific styles can be added here */
</style>
