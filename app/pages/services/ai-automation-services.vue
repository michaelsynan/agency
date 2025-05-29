<script setup lang="ts"></script>

<template>
  <div>
    <main class="text-white">
      <ServicesHeader title="AI Automation Services"
        description="Leveraging artificial intelligence to streamline and optimize your business processes." />
      <SharedPageWrapper>
        <div>
          <!-- AI Automation Technology Icons -->
          <div class="border-y border-stone-500/50 py-8 mb-8">
            <div class="grid grid-cols-3 md:flex md:justify-between items-center gap-4 md:gap-0">
              <UIcon name="i-mdi-robot" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-brain" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-cog-sync" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-api" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-chart-timeline-variant"
                class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-cloud-sync" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-lightning-bolt" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
              <UIcon name="i-mdi-auto-fix" class="text-4xl md:text-5xl text-stone-400 justify-self-center" />
            </div>
          </div>

          <!-- Info Sections -->
          <div class="space-y-8">
            <!-- Intelligent Automation Solutions -->
            <div class="pt-8">
              <h3 class="text-2xl font-bold mb-4">Intelligent Automation Solutions</h3>
              <p class="text-stone-400 text-lg">We harness the power of artificial intelligence to automate repetitive
                tasks, streamline workflows, and optimize business processes for maximum efficiency and productivity.
              </p>
            </div>

            <!-- Process Automation -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Process Automation</h3>
              <p class="text-stone-400 text-lg">Custom automation workflows that eliminate manual tasks, reduce errors,
                and free up your team to focus on high-value strategic activities.</p>
            </div>

            <!-- AI Integration & MCP -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">AI Integration & MCP</h3>
              <p class="text-stone-400 text-lg">Seamless integration of machine learning models, Model Context Protocol
                (MCP) implementations, and AI APIs to enhance your existing systems and applications with intelligent
                capabilities.</p>
            </div>

            <!-- AI Agents & Automation -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">AI Agents & Automation</h3>
              <p class="text-stone-400 text-lg">Intelligent AI agents that can perform complex tasks, make decisions,
                and interact with your systems autonomously, reducing manual work and improving operational efficiency.
              </p>
            </div>

            <!-- Data Analytics & Insights -->
            <div class="border-t border-stone-500/50 pt-8">
              <h3 class="text-2xl font-bold mb-4">Data Analytics & Insights</h3>
              <p class="text-stone-400 text-lg">Advanced analytics and predictive modeling to transform your data into
                actionable insights that drive informed business decisions.</p>
            </div>

            <!-- Custom AI Solutions -->
            <div class="border-t border-stone-500/50 border-b border-stone-500/50 pt-8 pb-8">
              <h3 class="text-2xl font-bold mb-4">Custom AI Solutions</h3>
              <p class="text-stone-400 text-lg">Tailored artificial intelligence solutions designed specifically for
                your industry and business needs, from chatbots to intelligent document processing and MCP server
                development.</p>
            </div>
          </div>
        </div>

        <ServicesCTA />
      </SharedPageWrapper>
    </main>
  </div>
</template>

<style scoped></style>
