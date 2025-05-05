<script setup>
import { ref } from 'vue';

const services = [
  {
    id: 'website-design',
    title: 'Website Design',
    description: 'We create beautiful, functional websites that drive results. Our design process focuses on user experience, conversion optimization, and brand consistency across all touchpoints. From simple landing pages to complex e-commerce solutions, we deliver designs that make an impact.'
  },
  {
    id: 'development',
    title: 'Development',
    description: 'Our development team builds robust, scalable solutions using modern technologies. We specialize in responsive websites, custom applications, and content management systems that are easy to maintain and update. We focus on performance, security, and code quality.'
  },
  {
    id: 'digital-marketing',
    title: 'Marketing',
    description: 'Drive traffic and generate leads with our comprehensive digital marketing services. We create data-driven strategies that include SEO, content marketing, social media, and paid advertising to help you reach your target audience and achieve measurable results.'
  },
  {
    id: 'ai',
    title: 'AI and Automation',
    description: 'Leverage the power of artificial intelligence to streamline your business operations. From chatbots and automated customer service to data analysis and predictive modeling, we implement AI solutions that save time, reduce costs, and improve decision-making.'
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'We help you create a strong and memorable brand identity. From logo design to brand guidelines, we ensure your brand stands out and resonates with your target audience.'
  },
  {
    id: 'consulting',
    title: 'Consulting',
    description: 'Our experts provide strategic consulting to help you navigate challenges and seize opportunities. We offer insights and solutions tailored to your business needs.'
  }
];
</script>

<template>
  <main class="text-white">
    <!-- Header with blurred background image -->
    <div
      class="w-full h-[66vh] relative flex justify-center items-center gap-10 flex-col bg-gradient-to-b from-dino-950 to-stone-900 overflow-hidden">
      <!-- Background image with blur effect -->
      <div class="absolute inset-0 bg-image opacity-30 blur-image !bg-fixed"></div>

      <!-- Dark overlay for better text readability -->
      <div class="absolute inset-0 bg-dino-950/70"></div>

      <!-- Content positioned above the background -->
      <div class="relative z-10">
        <h1 class="text-6xl font-bold font-delight">OUR SERVICES</h1>
        <div class="text-2xl switzer opacity-50 text-center mt-4">Design, Development & Marketing</div>
      </div>
    </div>

    <div class="bg-stone-950 p-6 md:p-16 !py-40 relative">
      <!-- Stack all services vertically with max width -->
      <div class="flex flex-col gap-8 max-w-4xl mx-auto" id="services-container">
        <div v-for="(service, index) in services" :key="service.id" :class="{ 'border-t': index !== 0 }"
          class="pt-12 p-6 w-full relative">
          <div class="flex flex-col">
            <h3 class="text-2xl md:text-3xl font-bold mb-8 text-stone-200 font-delight">{{ service.title }}</h3>
            <p class="text-stone-400 switzer font-switzer leading-8">
              {{ service.description }}
            </p>
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