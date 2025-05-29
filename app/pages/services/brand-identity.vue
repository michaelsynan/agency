<script setup lang="ts"></script>

<template>
  <div>
    <main class="text-white">
      <ServicesHeader title="Brand Identity"
        description="Crafting a unique brand identity that resonates with your audience." />
      <SharedPageWrapper>
        <div>
          <!-- Brand Identity Design Icons -->
          <div class="border-y border-stone-500/50 py-8 mb-8">
            <div class="grid grid-cols-3 md:flex md:justify-between items-center gap-4 md:gap-0">
              <UIcon name="i-mdi-palette" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-format-font" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-vector-polyline" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-camera" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-file-document-outline"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-image-frame" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-eye" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-heart" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
            </div>
          </div>

          <!-- Info Sections -->
          <div class="space-y-8">
            <!-- Strategic Brand Development -->
            <div class="pt-8">
              <h3 class="text-2xl font-bold mb-4">Strategic Brand Development</h3>
              <p class="text-stone-400 text-lg">We create compelling brand identities that capture your essence,
                resonate with your target audience, and differentiate you from the competition in meaningful ways.</p>
            </div>

            <!-- Logo Design & Visual Identity -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Logo Design & Visual Identity</h3>
              <p class="text-stone-400 text-lg">Custom logo design, color palettes, typography systems, and visual
                elements that create a cohesive and memorable brand experience across all touchpoints.</p>
            </div>

            <!-- Brand Guidelines & Standards -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Brand Guidelines & Standards</h3>
              <p class="text-stone-400 text-lg">Comprehensive brand style guides that ensure consistent application of
                your visual identity across digital platforms, print materials, and marketing campaigns.</p>
            </div>

            <!-- Marketing Collateral -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Marketing Collateral</h3>
              <p class="text-stone-400 text-lg">Business cards, brochures, presentations, and digital assets that
                reinforce your brand identity and support your marketing and sales efforts.</p>
            </div>

            <!-- Brand Strategy & Positioning -->
            <div class="border-t border-stone-500/50 border-b border-stone-500/50 pt-8 pb-8">
              <h3 class="text-2xl font-bold mb-4">Brand Strategy & Positioning</h3>
              <p class="text-stone-400 text-lg">Strategic brand positioning, messaging frameworks, and brand voice
                development that creates emotional connections with your customers and drives business growth.</p>
            </div>
          </div>
        </div>

        <ServicesCTA />
      </SharedPageWrapper>
    </main>
  </div>
</template>


<style scoped></style>
