<script setup lang="ts">
import { ref } from 'vue';

// Define a reactive variable to track the current tab index
const currentTab = ref(0);

// Define an array of objects for the tabs, each with navName, heading, and bodyContent
const tabs = [
  { navName: 'Sustainable Growth', heading: 'Driving Sustainable Growth', bodyContent: 'Details about driving sustainable growth...' },
  { navName: 'Freedom Creation', heading: 'Creating Freedom', bodyContent: 'Insights into creating freedom...' },
  { navName: 'Data Leverage', heading: 'Leveraging Data', bodyContent: 'Strategies for leveraging data effectively...' }
];

// Function to change the current tab
const selectTab = (index: number) => {
  currentTab.value = index;
};
</script>

<template>
  <div>
    <UContainer class="justify-center text-center">
      <h1>{{ tabs[currentTab].heading }}</h1>
      <p>This is some tabs Stuff</p>
    </UContainer>
    <div class="my-10 pt-10 border-b w-full items-center flex flex-row justify-center gap-10">
      <!-- Add click event to each div to change tabs -->
      <div v-for="(tab, index) in tabs" :key="index" :class="{ 'text-blue-500': currentTab === index }"
        class="cursor-pointer" @click="selectTab(index)">
        {{ tab.navName }}
      </div>
    </div>
    <UContainer class="bg-juju-950 p-10">
      <!-- Display content based on the current tab -->
      {{ tabs[currentTab].bodyContent }}
    </UContainer>
  </div>
</template>

<style scoped>
/* Add styles for active tab */
.text-blue-500 {
  color: #3b82f6;
  /* Tailwind color for blue-500 */
}
</style>
