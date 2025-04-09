<script setup>
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
    <div class="w-full h-[66vh] bg-dino-950 relative flex justify-center items-center gap-10 flex-col">
      <h1 class="text-6xl font-bold font-delight">OUR SERVICES</h1>
      <div class="text-2xl switzer opacity-50">Design, Development & Marketing</div>
    </div>

    <UContainer class="relative">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 py-20"> <!-- Grid layout for services -->
        <div v-for="service in services" :key="service.id" class="bg-stone-900 p-6 md:p-10 transition-all duration-300 border-t border-stone-700">
          <h2 class="text-3xl md:text-3xl font-delight mb-4 font-bold">{{ service.title }}</h2>
          <p class="text-stone-400">{{ service.description }}</p>
        </div>
      </div>
    </UContainer>
    <ServicesSection />
  </main>
</template>

<style scoped>
.grid {
  display: grid;
}
</style>