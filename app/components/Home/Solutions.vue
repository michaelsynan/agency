<script setup>
import { ref, reactive } from 'vue'

const cards = [
  { header: 'Elegant & Modern Design', content: 'We use cutting-edge technology and custom design systems to ensure our products are both visually appealing and highly functional, setting new industry standards.', buttonLabel: 'Learn More', buttonLink: 'https://link1.com', icon: 'i-heroicons-computer-desktop' },
  { header: 'Targeted Marketing', content: 'We use the latest systems and strategies to deliver ads to your ideal user, enhancing the precision and efficiency of your campaigns to boost conversion rates.', buttonLabel: 'Learn More', buttonLink: 'https://link2.com', icon: 'i-streamline-target' },
  { header: 'AI-Driven Solutions', content: 'Cut costs, increase leads, and optimize workflows with our AI Tool Kit, which leverages advanced analytics to streamline operations and drive business growth.', buttonLabel: 'Learn More', buttonLink: 'https://link3.com', icon: 'i-healthicons-artificial-intelligence' },
]

const hoverPositions = reactive(cards.map(() => ({ x: 0, y: 0, visible: false })))

const updateHoverPosition = (event, index) => {
  const cardRect = event.currentTarget.getBoundingClientRect()
  hoverPositions[index].x = event.clientX - cardRect.left - 100
  hoverPositions[index].y = event.clientY - cardRect.top - 100
  hoverPositions[index].visible = true
}

const resetHoverPosition = (index) => {
  hoverPositions[index].x = 0
  hoverPositions[index].y = 0
  hoverPositions[index].visible = false
}
</script>


<template>
  <div id="solution" class="relative bg-juju-950">
    <UContainer class="flex justify-center items-stretch gap-10 flex-col relative py-48 overflow-hidden">
      <div class="text-8xl font-black">SOLUTIONS YOU NEED</div>
      <div style="position: relative; width: 100%; height: 100%; overflow: hidden;">
        <div class="flex flex-col gap-6" style="position: relative; z-index: 1; width: 100%; height: 100%;">
          <div class="flex flex-col md:flex-row items-start justify-between pb-10 w-full">
            <SharedAnimatedHeader class="mb-4 md:mb-0" :text="`Solutions You Need`" />

            <p class="max-w-lg text-right text-stone-300 text-2xl">
              We help you cancel out the noise and focus on how to reach your goal as quickly and efficiently as
              possible.
            </p>
          </div>
          <div class="flex flex-col md:flex-row justify-center items-stretch gap-10 mx-0">
            <div v-for="(card, index) in cards" :key="index" class="p-0.5 rounded-none relative overflow-hidden turtles"
              style="position: relative; z-index: 0;" @mousemove="updateHoverPosition($event, index)"
              @mouseleave="resetHoverPosition(index)">
              <transition name="fade" mode="out-in">
                <div v-if="hoverPositions[index].visible" class="absolute bg-dino-500/40 rounded-full" :style="{
                  left: `${hoverPositions[index].x}px`,
                  top: `${hoverPositions[index].y}px`,
                  width: `275px`,
                  height: `275px`,
                  zIndex: -1,
                  filter: 'blur(30px)'
                }"></div>
              </transition>
              <UCard
                class="flex-1 basis-1/3 bg-stone-900 !hover:bg-stone-500 text-white mx-auto transition-all relative h-[300px] cursor-pointer group"
                :ui="{
                  background: 'bg-white dark:bg-stone-900 dark:hover:bg-stone-800',
                  divide: 'divide-y divide-stone-200 dark:divide-stone-700',
                  ring: 'ring-0',
                  rounded: 'rounded-none',
                }" :class="{
                  'hover:bg-stone-800': true,
                }" style="transition: background-color 0.2s ease-in-out;">

                <template #header>
                  <h3 class="h-8 p-2 rounded flex items-center gap-4 text-lg">
                    <UIcon :name="card.icon" class="w-6 h-6" />
                    {{ card.header }}
                  </h3>
                </template>
                <div :data-text="card.content"
                  class="card-text m-4 mb-4 break-words leading-relaxed text-stone-500 relative group group-hover:text-stone-100">
                  {{ card.content }}
                </div>
              </UCard>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style>
#solution::before {
  content: '';
  /* Required for display */
  position: absolute;
  /* Position relative to the container */
  top: -60px;
  /* Align to the top of the container */
  right: 0;
  /* Align to the right of the container */
  width: 200px;
  /* Width of the pseudo-element */
  height: 60px;
  /* Height of the pseudo-element */
  background-color: #042f2a;
  /* Background color for visibility */
}

#solution::after {
  content: '';
  /* Required for display */
  position: absolute;
  /* Position relative to the container */
  bottom: -60px;
  /* Align to the top of the container */
  left: 0;
  /* Align to the right of the container */
  width: 200px;
  /* Width of the pseudo-element */
  height: 60px;
  /* Height of the pseudo-element */
  background-color: #042f2a;
  /* Background color for visibility */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.card-text {
  position: relative;
  display: inline-block;
  /* Adjust width/height or wrapping if needed */
}

/* .card-text::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: white;
  white-space: pre-wrap;
  overflow: hidden;
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.3s ease;
  z-index: 100;
}

.group:hover .card-text::before {
  clip-path: inset(0 0 0 0);
}

*/
</style>
