<template>
  <div>
    <div v-for="(step, index) in processSteps" :key="index" class="mb-6 flex flex-row">
      <h3 class="text-xl font-bold w-[300px]">{{ step.title }}</h3>
      <p class="text-stone-700">{{ step.description }}</p>
    </div>
  </div>
</template>

<script setup>
const processSteps = [
  {
    title: 'Discovery and Analysis',
    description: 'We begin by gaining a deep understanding of your business, goals, and the system in which it operates. Through stakeholder interviews, data analysis, and mapping out key interactions, we create a comprehensive picture of the challenges and opportunities that exist.'
  },
  {
    title: 'System Mapping and Strategy Development',
    description: 'We map the entire system, identifying key components, feedback loops, and potential points of leverage. Using this map, we collaboratively develop a strategy that takes into account both immediate needs and long-term sustainability.'
  },
  {
    title: 'Design and Prototyping',
    description: 'Based on the strategic framework, we design solutions that address multiple aspects of the system. We prototype and iterate, ensuring every design choice aligns with both user needs and the larger system’s objectives.'
  },
  {
    title: 'Implementation and Integration',
    description: 'We take a systems approach to ensure that all components of the project integrate seamlessly, avoiding isolated solutions. This phase includes testing, refining, and aligning new systems with existing structures to enhance efficiency and cohesion.'
  },
  {
    title: 'Feedback and Continuous Improvement',
    description: 'Systems thinking is a continuous process. We collect feedback, monitor outcomes, and adapt as necessary to improve the system over time. Our commitment to iterative refinement ensures that your project continues to evolve and thrive.'
  }
]
</script>
