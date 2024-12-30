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
  <div class="relative">
    <UContainer class="flex justify-center items-stretch gap-10 flex-col relative py-20 overflow-hidden">
      <div class="h-[600px] my-auto max-h-[600px]"
        style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; background-image: url('grid.png'); background-size: contain; background-repeat: no-repeat; background-position: center; opacity: 0.5;">
      </div>
      <div style="position: relative; width: 100%; height: 100%; overflow: hidden;">
        <div class="" style="position: relative; z-index: 1; width: 100%; height: 100%;">
          <div class="flex flex-col items-center gap-8 justify-center pb-10">
            <h2 class="header">
              The Simple Solution You're Looking For
            </h2>
            <p class="max-w-xl text-left md:text-center text-stone-300">
              We help you cancel out the noise and focus on how to reach your goal as quickly and efficiently as
              possible.
            </p>
          </div>
          <div class="flex flex-col md:flex-row justify-center items-stretch gap-10 mx-0 md:mx-10">
            <div v-for="(card, index) in cards" :key="index" class="p-0.5 rounded-lg relative overflow-hidden"
              style="position: relative; z-index: 0;" @mousemove="updateHoverPosition($event, index)"
              @mouseleave="resetHoverPosition(index)">
              <transition name="fade" mode="out-in">
                <div v-if="hoverPositions[index].visible" class="absolute bg-dino-500/40 rounded-full" :style="{
                  left: `${hoverPositions[index].x}px`,
                  top: `${hoverPositions[index].y}px`,
                  width: `250px`,
                  height: `250px`,
                  zIndex: -1,
                  filter: 'blur(20px)'
                }"></div>
              </transition>
              <UCard class="flex-1 basis-1/3 bg-stone-900 !hover:bg-stone-500 text-white mx-auto transition-all" :ui="{
                background: 'bg-white dark:bg-stone-900 hover:bg-stone-600',
                divide: 'divide-y divide-stone-200 dark:divide-stone-700',
                ring: 'ring-0',
                rounded: 'rounded-lg',
              }" :class="{
                'hover:bg-stone-800': true,
              }" style="transition: background-color 0.2s ease-in-out;">

                <template #header>
                  <h3 class="h-8 p-2 rounded flex items-center gap-4 text-lg">
                    <UIcon :name="card.icon" class="w-6 h-6" />
                    {{ card.header }}
                  </h3>
                </template>
                <div class="h-32 p-4 mb-4 break-words leading-relaxed text-stone-300">
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
