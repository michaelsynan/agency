<template>
  <div class="bg-stone-950 p-6 md:p-9 !py-40">
    <!-- Introduction paragraph - 1/3 width, left-aligned with bottom border -->
    <!-- <div class="mb-16 pb-8">
      <p class="text-stone-100 text-base leading-8 switzer max-w-md border-stone-700 pb-8 h-40">
        Each step in our methodology is integral to delivering exceptional results. We approach every phase with
        meticulous attention to detail, ensuring no aspect is overlooked.
      </p>
    </div> -->

    <!-- Two-column layout for process steps -->
    <div class="flex flex-col md:flex-row">
      <!-- First column (1/3 width) with title -->
      <div class="w-full md:w-1/3 pr-0 md:pr-12 mb-10 md:mb-0">
        <h2 class="text-3xl md:text-5xl font-delight font-bold text-stone-100 sticky top-24">Our Process</h2>
      </div>

      <!-- Second column (2/3 width) with process steps -->
      <div class="w-full md:w-2/3">
        <div class="space-y-24">
          <div v-for="(step, index) in processSteps" :key="step.title" class="border-t border-stone-800 pt-8">
            <div class="flex flex-row items-start gap-6">
              <div class="text-xl font-mono text-stone-500 min-w-[3rem] mt-1">0{{ index + 1 }}.</div>
              <div class="flex flex-col">
                <h3 class="text-2xl md:text-3xl font-bold mb-4 text-stone-200 font-delight">{{ step.title }}</h3>
                <p class="text-stone-400 max-w-xl switzer font-switzer leading-loose md:leading-10">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const processSteps = [
  {
    title: 'Discovery & Analysis',
    description: 'We begin by gaining a deep understanding of your business, goals, and the system in which it operates. Through stakeholder interviews, data analysis, and mapping out key interactions, we create a comprehensive picture of the challenges and opportunities that exist.'
  },
  {
    title: 'System Mapping',
    description: 'We map the entire system, identifying key components, feedback loops, and potential points of leverage. Using this map, we collaboratively develop a strategy that takes into account both immediate needs and long-term sustainability.'
  },
  {
    title: 'Design & Prototyping',
    description: 'Based on the strategic framework, we design solutions that address multiple aspects of the system. We prototype and iterate, ensuring every design choice aligns with both user needs and the larger system’s objectives.'
  },
  {
    title: 'Implementation & Integration',
    description: 'We take a systems approach to ensure that all components of the project integrate seamlessly, avoiding isolated solutions. This phase includes testing, refining, and aligning new systems with existing structures to enhance efficiency and cohesion.'
  },
  {
    title: 'Feedback & Improvement',
    description: 'Systems thinking is a continuous process. We collect feedback, monitor outcomes, and adapt as necessary to improve the system over time. Our commitment to iterative refinement ensures that your project continues to evolve and thrive.'
  },
  {
    title: 'Launch & Monitoring',
    description: 'After integration, we launch with a full monitoring plan in place. We continuously analyze performance data and optimize the system, ensuring a smooth transition and sustained improvements over time.'
  },
]
</script>

<style scoped>
/* Add any additional custom styles here */
</style>