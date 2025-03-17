<template>
  <div class="bg-stone-950 border-b border-stone-500/50 p-4 md:p-6"
    style="background-image: url('grid.svg'); background-size: 300px 300px; background-repeat: repeat;">
    <div class="w-full">
      <div class="w-full">
        <InfiniteScroll message="OUR PROCESS OUR PROCESS OUR PROCESS OUR PROCESS OUR PROCESS" speed="20"
          class="font-bold tracking-widest" />
      </div>
    </div>
    <!-- Use a grid with 5 columns that ensures items start from 3rd column -->
    <div v-if="false" class="grid gap-6 mb-0 relative z-10">
      <!-- First row -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="col-span-0 md:col-span-1 hidden md:block"></div> <!-- Empty columns -->
        <div v-for="step in processSteps.slice(0, 3)" :key="step.title"
          class="bg-stone-900/80 backdrop-blur-sm p-6 rounded-sm shadow border-stone-900 hover:border-stone-500/50 border transition-all duration-300 group">
          <div class="text-2xl font-delight font-black mb-4 font-delight">
            {{ processSteps.indexOf(step) + 1 }}.
          </div>
          <h3 class="text-xl font-bold mb-2 font-delight">
            {{ step.title }}
          </h3>
          <p
            class="text-stone-500 leading-relaxed switzer group-hover:text-stone-300 transition-colors duration-300 ease-in-out text-base">
            {{ step.description }}
          </p>
        </div>
      </div>

      <!-- Second row -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div class="col-span-2 hidden md:block"></div> <!-- Empty columns -->
        <div v-for="step in processSteps.slice(3, 6)" :key="step.title"
          class="bg-stone-900/80 backdrop-blur-sm p-6 rounded-sm shadow border-stone-900 hover:border-stone-500/50 border transition-all duration-300 group">
          <div class="text-2xl font-delight font-black mb-4 font-delight">
            {{ processSteps.indexOf(step) + 1 }}.
          </div>
          <h3 class="text-xl font-bold mb-2 font-delight">
            {{ step.title }}
          </h3>
          <p
            class="text-stone-500 leading-relaxed switzer group-hover:text-stone-300 transition-colors duration-300 ease-in-out !text-base">
            {{ step.description }}
          </p>
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

<style scoped></style>