  <script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useEventListener } from '@vueuse/core'

  const props = defineProps<{
    items: Array;
    direction: 'left' | 'right'
  }>()

  const el = ref<HTMLElement | null>(null)

  onMounted(() => {
    useEventListener(window, 'scroll', () => {
      if (el.value) {
        const maxScrollLeft = el.value.scrollWidth - el.value.clientWidth;
        if (props.direction === 'left') {
          el.value.scrollLeft = window.scrollY * 0.7;
        } else {
          el.value.scrollLeft = maxScrollLeft - (window.scrollY * 0.7);
        }
      }
    })
  })
</script>

  <template>
    <div ref="el" class="scroll-container flex flex-nowrap overflow-x-scroll gap-8">
      <div v-for="item in props.items" :key="item" class="shrink-0">
        <img :src="item" class="h-64 object-contain rounded-sm" style="width: auto;">
      </div>
    </div>
  </template>

<style scoped>
.scroll-container {
  scroll-behavior: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>