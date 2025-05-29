<script setup lang="ts"></script>

<template>
  <div>
    <main class="text-white">
      <ServicesHeader title="Website Design"
        description="Creating beautiful, user-centered designs that captivate and convert." />
      <SharedPageWrapper>
        <div>
          <div id="top-area"
            class="flex flex-col-reverse md:flex-row-reverse gap-6 md:gap-10 bg-stone-900/50 border border-stone-800/50 p-4 md:p-6">
            <div class="w-full md:w-1/2 flex flex-col justify-between">
              <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-left md:text-right leading-relaxed">Website
                Design for Small Business,
                E-Commerce
                Brands & More
              </h2>
              <div class="font-mono text-left md:text-right text-stone-600 mt-4 md:mt-0">WIREFRAME - MOCKUPS - FULL
                DESIGN</div>
            </div>
            <Nuxt-img src="/serum-mockup.png" alt="Serum Mockup" width="800" height="600"
              class="rounded-lg shadow-lg w-full md:w-1/2 max-w-md md:max-w-none" />
          </div>

          <!-- Our Process Section -->
          <div class="mt-12">
            <h2 class="text-3xl md:text-4xl font-bold font-delight mb-12">Our Process</h2>

            <div class="flex flex-col gap-12">
              <!-- Step 1 -->
              <div class="flex gap-8">
                <div class="text-4xl font-bold text-stone-400 flex-shrink-0 font-mono">01</div>
                <div class="flex flex-col">
                  <h3 class="text-xl font-bold mb-3">Discovery & Research</h3>
                  <p class="text-stone-400 leading-relaxed">
                    We start by understanding your business goals, target audience, and brand identity to create a
                    design
                    strategy that aligns with your vision.
                  </p>
                </div>
              </div>

              <!-- Step 2 -->
              <div class="flex gap-8">
                <div class="text-4xl font-bold text-stone-400 flex-shrink-0 font-mono">02</div>
                <div class="flex flex-col">
                  <h3 class="text-xl font-bold mb-3">Wireframes & Mockups</h3>
                  <p class="text-stone-400 leading-relaxed">
                    We create detailed wireframes and high-fidelity mockups that showcase the user experience and visual
                    design before development begins.
                  </p>
                </div>
              </div>

              <!-- Step 3 -->
              <div class="flex gap-8">
                <div class="font-mono text-4xl font-bold text-stone-400 flex-shrink-0">03</div>
                <div class="flex flex-col">
                  <h3 class="text-xl font-bold mb-3">Design & Refinement</h3>
                  <p class="text-stone-400 leading-relaxed">
                    We deliver polished designs with multiple revisions, ensuring every detail meets your expectations
                    and
                    brand standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ServicesCTA />
      </SharedPageWrapper>
    </main>
  </div>
</template>

<style scoped></style>
