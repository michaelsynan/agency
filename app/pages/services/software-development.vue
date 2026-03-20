<script
  setup
  lang="ts"
></script>

<template>
  <div>
    <main class="text-white">
      <ServicesHeader
        title="Software Development"
        description="Software Development"
      />
      <SharedPageWrapper>
        <!-- Main content container -->
        <div class="max-w-4xl mx-auto">
          <!-- Intro -->
          <div class="mb-12">
            <p class="text-stone-300 text-xl md:text-2xl leading-8">
              Custom software should make your business run smoother—fewer manual steps, fewer mistakes, and clearer
              visibility into what’s happening. We build reliable tools, integrations, and platforms that fit your
              workflows and hold up as you grow.
            </p>
          </div>

          <!-- Software Development Technology Icons -->
          <section class="mb-16">
            <div class="grid grid-cols-3 md:grid-cols-8 gap-8 border-b border-stone-500/50 pb-16">
              <div class="flex flex-col items-center space-y-2">
                <Icon
                  name="i-logos-python"
                  class="text-4xl text-stone-400"
                />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon
                  name="i-logos-javascript"
                  class="text-4xl text-stone-400"
                />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon
                  name="i-logos-react"
                  class="text-4xl text-stone-400"
                />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon
                  name="i-logos-nodejs-icon"
                  class="text-4xl text-stone-400"
                />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon
                  name="i-logos-docker-icon"
                  class="text-4xl text-stone-400"
                />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon
                  name="i-logos-aws"
                  class="text-4xl text-stone-400"
                />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon
                  name="i-logos-git-icon"
                  class="text-4xl text-stone-400"
                />
              </div>
              <div class="flex flex-col items-center space-y-2">
                <Icon
                  name="i-mdi-api"
                  class="text-4xl text-stone-400"
                />
              </div>
            </div>
          </section>

          <!-- Custom Software Solutions -->
          <section class="py-16">
            <h2 class="text-3xl md:text-4xl font-bold font-delight mb-8">
              Custom Software Solutions
            </h2>
            <p class="text-stone-400 switzer leading-8 mb-6">
              We create tailored software applications that solve your unique business challenges. From web applications
              to mobile apps and enterprise systems, our development team builds solutions that scale with your growth.
            </p>
            <p class="text-stone-400 switzer leading-8">
              Using modern development practices and cutting-edge technologies, we deliver robust, secure, and
              maintainable software that gives you a competitive advantage in your market.
            </p>
          </section>

          <!-- Full-Stack Development -->
          <section class="py-16 border-t border-stone-500/50">
            <h2 class="text-3xl md:text-4xl font-bold font-delight mb-8">
              Full-Stack Development
            </h2>
            <p class="text-stone-400 switzer leading-8 mb-6">
              Our team specializes in full-stack development, handling everything from frontend user interfaces to
              backend systems and databases. We work with React, Vue.js, Node.js, Python, and modern cloud platforms.
            </p>
            <p class="text-stone-400 switzer leading-8">
              Whether you need a single-page application, a complex web platform, or a microservices architecture, we
              have the expertise to build it right from the ground up.
            </p>
          </section>

          <!-- API Development & Integration -->
          <section class="py-16 border-t border-stone-500/50">
            <h2 class="text-3xl md:text-4xl font-bold font-delight mb-8">
              API Development & Integration
            </h2>
            <p class="text-stone-400 switzer leading-8 mb-6">
              We design and develop RESTful APIs and GraphQL endpoints that power your applications and enable seamless
              integration with third-party services. Our APIs are built for performance, security, and scalability.
            </p>
            <p class="text-stone-400 switzer leading-8">
              From payment gateways to CRM systems and marketing tools, we ensure your software ecosystem works together
              harmoniously to maximize efficiency and user experience.
            </p>
          </section>

          <!-- Cloud Infrastructure & DevOps -->
          <section class="py-16 border-t border-stone-500/50">
            <h2 class="text-3xl md:text-4xl font-bold font-delight mb-8">
              Cloud Infrastructure & DevOps
            </h2>
            <p class="text-stone-400 switzer leading-8 mb-6">
              We implement modern DevOps practices and cloud infrastructure that ensures your applications are reliable,
              scalable, and secure. Using AWS, Docker, and automated deployment pipelines, we streamline your
              development workflow.
            </p>
            <p class="text-stone-400 switzer leading-8">
              Our infrastructure solutions include continuous integration, automated testing, monitoring, and disaster
              recovery to keep your applications running smoothly around the clock.
            </p>
          </section>

          <!-- Maintenance & Support -->
          <section class="py-16 border-t border-stone-500/50">
            <h2 class="text-3xl md:text-4xl font-bold font-delight mb-8">
              Maintenance & Support
            </h2>
            <p class="text-stone-400 switzer leading-8 mb-6">
              Our relationship doesn't end at launch. We provide ongoing maintenance, security updates, feature
              enhancements, and technical support to ensure your software continues to serve your business effectively.
            </p>
            <p class="text-stone-400 switzer leading-8">
              With proactive monitoring, regular updates, and responsive support, we keep your applications secure,
              performant, and aligned with your evolving business needs.
            </p>
          </section>
        </div>

        <ServicesCTA />

        <!-- Related Services -->
        <div class="mt-10 pt-10">
          <h3 class="text-2xl md:text-3xl font-bold mb-6 text-stone-200 font-delight">Related Services</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div class="text-stone-400 mt-1">Modern web apps with performance and DX in mind.</div>
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
                  <div class="text-stone-400 mt-1">Backend services, APIs, and dependable infrastructure.</div>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink
              to="/services/ai-automation-services"
              class="group block p-6 border border-stone-700/60 bg-stone-900/40 hover:bg-stone-900/60 transition-colors"
            >
              <div class="flex items-start gap-3">
                <UIcon
                  name="i-mdi-brain"
                  class="h-6 w-6 text-stone-400 group-hover:text-stone-300"
                />
                <div>
                  <div class="font-bold text-stone-200">AI & Automation</div>
                  <div class="text-stone-400 mt-1">Automate workflows and enhance products with AI.</div>
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
                  <div class="text-stone-400 mt-1">Design systems that make software easier to use.</div>
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
