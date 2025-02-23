<script setup lang="ts">
const items = [
  {
    label: 'What services do you offer?',
    defaultOpen: true,
    content: 'We offer a comprehensive suite of web development and design services, ranging from static websites to dynamic web applications, e-commerce platforms, and custom solutions tailored to your business needs. Our goal is to provide you with a fully optimized, scalable, and visually engaging digital presence.',
  },
  {
    label: 'How does the design process work?',
    content: 'Our design process begins with an in-depth consultation to understand your brand, goals, and target audience. We then create wireframes and prototypes, refining them through feedback loops. Once approved, we apply your brand’s visual identity to produce a polished, cohesive design ready for development.',
  },
  {
    label: 'Do you perform all work in-house or do you outsource some tasks?',
    content: 'All primary design, development, and strategy work is conducted in-house, ensuring full quality control and consistent communication. For specialized needs such as advanced animations or niche integrations, we may collaborate with trusted partners while maintaining our high standards of quality and oversight.',
  },
  {
    label: 'What is your pricing model?',
    content: 'We quote each project according to its unique specifications. Basic websites start at $1,500, business websites range from $3,000 to $10,000, e-commerce sites from $5,000 to $20,000, and custom JavaScript applications from $10,000 to $50,000. For quotes on mobile apps or specialized solutions, please contact us directly.',
  },
  {
    label: 'How does your agency utilize AI technology in its projects?',
    content: 'We strategically integrate AI-driven tools and features to enhance the user experience, streamline workflows, and optimize performance. From intelligent search functionalities and personalized content recommendations to predictive analytics and chatbots, our AI implementations serve to create smarter, more responsive solutions.',
  },
  {
    label: 'Do you offer maintenance services for websites and applications?',
    content: 'Yes, we provide ongoing maintenance services that include security updates, performance optimizations, content updates, and technical support. Our maintenance plans are designed to keep your website or application running smoothly and securely for the long term.',
  },
  {
    label: 'Can you update my existing website or application?',
    content: 'We can evaluate your current platform and perform updates to improve performance, incorporate new features, and refresh the design. Whether it’s a minor enhancement or a substantial overhaul, we work to elevate your existing digital presence to meet modern standards and user expectations.',
  },
  {
    label: 'How do you ensure privacy and security for my project?',
    content: 'We adhere to industry best practices for data protection and follow strict security protocols throughout the development process. This includes employing secure coding standards, implementing SSL/TLS encryption, conducting regular vulnerability assessments, and maintaining compliance with relevant data protection regulations.',
  },
]
</script>

<template>
  <UContainer class="max-w-4xl">
    <h2 class="text-9xl font-delight font-black text-stone-800/50 mb-4">FAQ</h2>
    <UAccordion :truncate="false" color="none" :items="items" size="xl" variant="soft" class="!text-left" :ui="{
      default: {
        class: 'mb-1.5 w-full !items-start !text-left border-b rounded-none px-0',
      },

      item: { color: 'text-stone-400' },


    }" />
  </UContainer>
</template>

<style scoped>
::v-deep button {
  position: relative;
  overflow: visible;
}

::v-deep button::before {
  content: "";
  position: absolute;
  left: -40px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  background-color: rgba(128, 128, 128, 0.5);
  /* Gray for hover */
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

::v-deep button:hover::before {
  opacity: 1;
}

::v-deep button[aria-expanded="true"]::before {
  opacity: 1;
  background-color: white;
  /* White for active */
}
</style>