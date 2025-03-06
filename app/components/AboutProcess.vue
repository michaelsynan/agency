<template>
  <div class="py-10 pb-16 bg-stone-950 border-b border-stone-500/50"
    style="background-image: url('grid.svg'); background-size: 300px 300px; background-repeat: repeat;">
    <h2 class="text-9xl font-delight font-black text-stone-800/50 mb-16 text-left">PROCESS</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      <div v-for="(step, index) in processSteps" :key="index"
        class="bg-stone-900 p-6 rounded shadow border-stone-900 hover:border-stone-500/50 border transition-all duration-300 group">
        <div class="text-2xl font-delight font-black mb-4 font-delight">{{ index + 1 }}.</div>
        <h3 class="text-xl font-bold mb-2 font-delight">{{ step.title }}</h3>
        <p
          class="text-stone-500 leading-relaxed switzer group-hover:text-stone-300 transition-colors duration-300 ease-in-out">
          {{ step.description }}</p>
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
    title: 'System Mapping & Strategy Development',
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
    title: 'Feedback & Continuous Improvement',
    description: 'Systems thinking is a continuous process. We collect feedback, monitor outcomes, and adapt as necessary to improve the system over time. Our commitment to iterative refinement ensures that your project continues to evolve and thrive.'
  },
  {
    title: 'Launch, Monitoring & Optimization',
    description: 'After integration, we launch with a full monitoring plan in place. We continuously analyze performance data and optimize the system, ensuring a smooth transition and sustained improvements over time.'
  }
]
</script>
