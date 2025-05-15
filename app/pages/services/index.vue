<script setup>
useSeoMeta({
  title: 'SEO, Marketing, AI, Web Design & Development',
  description: 'Unlock your business potential with Formwork Studios. Expert services in website design, development, marketing, AI automation, branding and strategic consulting. Results-driven solutions tailored to your needs.',
})

const services = [
  {
    id: 'website-design',
    title: 'Website Design',
    description: 'We create beautiful, functional websites that drive results. Our design process focuses on user experience, conversion optimization, and brand consistency across all touchpoints. From simple landing pages to complex e-commerce solutions, we deliver designs that make an impact.',
    // link: '/services/website-design'
  },
  {
    id: 'development',
    title: 'Development',
    description: 'Our development team builds robust, scalable solutions using modern technologies. We specialize in responsive websites, custom applications, and content management systems that are easy to maintain and update. We focus on performance, security, and code quality.',
    // link: '/services/development'
  },
  {
    id: 'digital-marketing',
    title: 'Marketing',
    description: 'Drive traffic and generate leads with our comprehensive digital marketing services. We create data-driven strategies that include SEO, content marketing, social media, and paid advertising to help you reach your target audience and achieve measurable results.',
    // link: '/services/digital-marketing'
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    description: 'Leverage the power of artificial intelligence to streamline your business operations. From chatbots and automated customer service to data analysis and predictive modeling, we implement AI solutions that save time, reduce costs, and improve decision-making.',
    // link: '/services/ai'
  },
  {
    id: 'branding',
    title: 'Brand Identity',
    description: 'We help you create a strong and memorable brand identity. From logo design to brand guidelines, we ensure your brand stands out and resonates with your target audience.',
    link: '/services/brand-identity'
  },
  {
    id: 'consulting',
    title: 'Consulting',
    description: 'Our experts provide strategic consulting to help you navigate challenges and seize opportunities. We offer insights and solutions tailored to your business needs.',
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce',
    description: 'We build powerful e-commerce platforms that enhance user experience and drive sales. From product catalogs to secure payment gateways, we deliver solutions tailored to your business.',
    link: '/services/ecommerce-development'
  },
  {
    id: 'seo',
    title: 'SEO',
    description: 'Optimize your website to rank higher in search engine results. Our SEO services include keyword research, on-page optimization, and link building to improve visibility and drive organic traffic.',
    link: '/services/seo-services'
  },
  {
    id: 'nuxt-web-app',
    title: 'Nuxt Web App Development',
    description: 'We specialize in building high-performance web applications using Nuxt.js. Our solutions are scalable, fast, and tailored to meet your business needs.',
    link: '/services/nuxt-web-app-development'
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'We provide end-to-end software development services, creating custom solutions tailored to your business needs. From initial concept to deployment, we ensure quality, scalability, and performance.',
    link: '/services/software-development',
  }
];
</script>

<template>
  <main class="text-white">
    <!-- Header with blurred background image -->
    <div
      class="w-full h-[50vh] md:h-[66vh] relative flex flex-col bg-gradient-to-b from-dino-950 to-stone-900 overflow-hidden">
      <!-- Background image with blur effect -->
      <div class="absolute inset-0 bg-image opacity-30 blur-image !bg-fixed"></div>

      <!-- Dark overlay for better text readability -->
      <div class="absolute inset-0 bg-dino-950/70"></div>

      <!-- Content positioned at the bottom of the hero section -->
      <div id="hero" class="relative z-10 mt-auto w-full px-6 md:px-16 pb-12 md:pb-16">
        <h1 class="text-4xl md:text-6xl font-bold font-delight text-left">OUR SERVICES</h1>
        <div class="text-lg md:text-2xl switzer opacity-50 text-left mt-3 md:mt-4">Design, Development &
          Marketing</div>
      </div>
    </div>

    <div class="bg-stone-950 p-6 md:p-16 !py-40 relative">
      <!-- Stack all services vertically with max width -->
      <div class="flex flex-col gap-8 max-w-4xl mx-auto" id="services-container">
        <div v-for="(service, index) in services" :key="service.id"
          :class="{ 'border-t border-stone-500/50': index !== 0 }" class="pt-12 p-6 px-0 w-full relative">
          <div class="flex flex-col">
            <h3 class="text-2xl md:text-3xl font-bold mb-8 text-stone-200 font-delight">{{ service.title }}</h3>
            <p class="text-stone-400 switzer font-switzer leading-8">
              {{ service.description }}
            </p>
            <nuxt-link v-if="service.link" :href="service.link" class="text-dino-500 hover:underline mt-4">Read more
              -></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.bg-image {
  background-image: url('/manhattan-skyline-nyc.jpg');
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  /* Makes the background fixed */
  height: 100%;
  width: 100%;
}

.blur-image {
  /* Multiple blur approaches for browser compatibility */
  filter: blur(8px);
  -webkit-filter: blur(8px);
  transform: scale(1.1);
  /* Prevent blur edges */
}
</style>