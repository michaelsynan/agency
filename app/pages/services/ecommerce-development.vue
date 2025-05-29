<script setup lang="ts"></script>


<template>
  <div>
    <main class="text-white">
      <ServicesHeader title="E-Commerce Design & Development"
        description="See things online with Shopify and other leading storefronts" />
      <SharedPageWrapper>
        <div>
          <!-- E-commerce Platform Icons -->
          <div class="border-y border-stone-500/50 py-8 mb-8">
            <div class="grid grid-cols-3 md:flex md:justify-between items-center gap-4 md:gap-0">
              <UIcon name="i-mdi-shopify" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-cart" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-credit-card" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-package-variant" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-storefront" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-chart-line" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-mobile-phone" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-security" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
            </div>
          </div>

          <!-- Info Sections -->
          <div class="space-y-8">
            <!-- Complete E-commerce Solutions -->
            <div class="pt-8">
              <h3 class="text-2xl font-bold mb-4">Complete E-commerce Solutions</h3>
              <p class="text-stone-400 text-lg">We build powerful online stores that drive sales and deliver exceptional
                shopping experiences across all devices, from initial setup to ongoing optimization.</p>
            </div>

            <!-- Shopify Development -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Shopify Development</h3>
              <p class="text-stone-400 text-lg">Custom Shopify stores with tailored themes, advanced functionality, and
                seamless integrations that maximize your online sales potential and customer satisfaction.</p>
            </div>

            <!-- Payment & Checkout Optimization -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Payment & Checkout Optimization</h3>
              <p class="text-stone-400 text-lg">Secure payment processing, streamlined checkout flows, and conversion
                optimization techniques that reduce cart abandonment and increase revenue.</p>
            </div>

            <!-- Inventory & Order Management -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Inventory & Order Management</h3>
              <p class="text-stone-400 text-lg">Automated inventory tracking, order fulfillment systems, and shipping
                integrations that streamline your operations and improve customer service.</p>
            </div>

            <!-- Mobile Commerce & Analytics -->
            <div class="border-t border-stone-500/50 border-b border-stone-500/50 pt-8 pb-8">
              <h3 class="text-2xl font-bold mb-4">Mobile Commerce & Analytics</h3>
              <p class="text-stone-400 text-lg">Mobile-optimized shopping experiences and comprehensive analytics to
                track performance, understand customer behavior, and drive business growth.</p>
            </div>
          </div>
        </div>

        <ServicesCTA />
      </SharedPageWrapper>
    </main>
  </div>
</template>
<style scoped></style>
