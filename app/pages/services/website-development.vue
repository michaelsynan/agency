<script setup lang="ts"></script>

<template>
  <div>
    <main class="text-white">
      <ServicesHeader title="Website Development"
        description="Building robust, scalable websites with cutting-edge technology." />
      <SharedPageWrapper>
        <div>
          <!-- Developer Technology Icons -->
          <div class="border-y border-stone-500/50 py-8 mb-8">
            <div class="grid grid-cols-3 md:flex md:justify-between items-center gap-4 md:gap-0">
              <UIcon name="i-mdi-vuejs" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-react" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-nodejs" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-language-python" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-database" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-aws" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-docker" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-git" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
            </div>
          </div>

          <!-- Info Boxes Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Full Width Box -->
            <div class="md:col-span-2 bg-stone-900/50 border border-stone-500/50 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-3">Modern Web Technologies</h3>
              <p class="text-stone-400">We leverage cutting-edge frameworks and tools to build fast, secure, and
                scalable websites that perform exceptionally across all devices and browsers.</p>
            </div>

            <!-- Row 1 - Box 1 -->
            <div class="bg-stone-900/50 border border-stone-500/50 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-3">Frontend Excellence</h3>
              <p class="text-stone-400">React, Vue.js, and modern JavaScript frameworks for dynamic, interactive user
                experiences.</p>
            </div>

            <!-- Row 1 - Box 2 -->
            <div class="bg-stone-900/50 border border-stone-500/50 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-3">Backend Power</h3>
              <p class="text-stone-400">Node.js, Python, and robust server architectures for reliable performance and
                data management.</p>
            </div>

            <!-- Row 2 - Box 1 -->
            <div class="bg-stone-900/50 border border-stone-500/50 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-3">Database Solutions</h3>
              <p class="text-stone-400">SQL and NoSQL databases optimized for your specific data requirements and
                scaling needs.</p>
            </div>

            <!-- Row 2 - Box 2 -->
            <div class="bg-stone-900/50 border border-stone-500/50 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-3">Cloud & Deployment</h3>
              <p class="text-stone-400">AWS, Vercel, and modern hosting solutions with CI/CD pipelines for seamless
                deployment.</p>
            </div>
          </div>
        </div>

        <ServicesCTA />
      </SharedPageWrapper>
    </main>
  </div>
</template>

<style scoped></style>
