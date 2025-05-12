<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  title: { type: String, required: false, default: "title" },
  description: { type: String, required: false, default: "description" },
  headline: { type: String, required: false, default: "headline" }
});

const title = computed(() => (props.title || "").slice(0, 60));
const description = computed(() => (props.description || "").slice(0, 200));
</script>

nr