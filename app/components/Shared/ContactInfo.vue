<template>
  <div
    class="contact-container border-stone-500 border-y py-10 md:py-20 px-2 md:px-20 flex flex-col md:flex-row gap-20 bg-stone-900/50">
    <div class="contact-item flex-col md:flex-row min-w-content w-full" v-for="item in contactInfo" :key="item.label">
      <div class="contact-content cursor-pointer">
        <div
          class="heading text-stone-100 switzer text-center text-uppercase uppercase !text-lg md:!text-2xl font-black">
          {{
            item.label
          }}
        </div>
        <div class="content text-stone-100 text-center switzer font-bold !text-lg md:!text-2xl font-bold"
          @click="copyToClipboard(item.value, item.label)">
          <UIcon name="i-mdi-content-copy"
            class="w-4 md:w-5 h-4 md:h-5 mr-2 mt-2 !text-dino-500 !text-lg md:!text-2xl" />{{
              item.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const toast = useToast()

const contactInfo = [
  { label: 'Email', value: 'hello@formworkstudios.com' },
  { label: 'Phone', value: '1-222-222-2222' },
  { label: 'Calendar', value: 'www.calendar.com' }
];

const copyToClipboard = async (text, label) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.add({ title: `${label} copied to clipboard!` });
  } catch (err) {
    toast.add({ title: 'Failed to copy', description: err.message });
  }
};

</script>


<style scoped>
.contact-container {
  display: flex;

  align-items: center;
}

.contact-item {
  flex: 1;
  overflow: hidden;
}

.contact-content {
  position: relative;
  height: 40px;
}

.heading,
.content {
  position: absolute;
  width: 100%;
  transition: transform 0.3s ease-in-out, visibility 0s linear 0.3s;
  will-change: transform, visibility;
}

.heading {
  transform: translateY(0);
  font-size: 24px;
}

.content {
  transform: translateY(100%);
  font-size: 24px;
  visibility: hidden;
}

.contact-item:hover .heading {
  transform: translateY(-100%);
  visibility: hidden;
}

.contact-item:hover .content {
  transform: translateY(0);
  visibility: visible;
  transition-delay: 0s;
}
</style>
