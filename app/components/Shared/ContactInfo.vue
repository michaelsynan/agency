<template>
  <div class="contact-container border-stone-500 border-y py-2 md:py-6 px-4 md:px-12 bg-stone-900/20 hidden md:flex">
    <div class="max-w-md flex flex-col gap-6 md:gap-10">
      <div>
        <h2 class="font-switzer text-lg font-bold">Contact Information</h2>
      </div>
      <div class="contact-item gap-4 !flex-row font-mono" v-for="item in contactInfo" :key="item.label">
        <div class="flex-row gap-2 ">
          <div class="label font-mono">{{ item.label }}:</div>
          <div class="censored-content" @click="copyToClipboard(item.value, item.label)">
            <div class="censored-text font-mono">{{ generateCensoredText(item.value) }}</div>
            <div class="actual-text font-mono">
              <span>{{ item.value }}</span>
              <UIcon name="i-mdi-content-copy" class="copy-icon ml-1 !text-dino-500 !text-xs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const toast = useToast()

const contactInfo = [
  { label: 'Email', value: 'hello@formworkstudios.com' },
  { label: 'Phone', value: '+1 (800) 657-6893' }
];

const generateCensoredText = (text) => {
  return '█'.repeat(text.length);
};

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
  color: #f5f5f5;
}

.contact-item {
  position: relative;
  cursor: pointer;
}



.flex-row {
  display: flex;
  align-items: flex-end;
  /* Changed from baseline to flex-end for true bottom alignment */
}

.label {
  display: block;
  /* Changed from inline-block */
  font-family: switzer, sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 0.875rem;
  color: #f5f5f5;
  margin-right: 0.5rem;
  padding-bottom: 0;
  /* Ensure no padding at bottom */
  margin-bottom: 0;
  /* Ensure no margin at bottom */
}

.censored-content {
  position: relative;
  display: block;
  /* Changed from inline-block */
  text-align: left;
  padding-bottom: 0;
  /* Ensure no padding at bottom */
  margin-bottom: 0;
  /* Ensure no margin at bottom */
}

.censored-text,
.actual-text {
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 0.875rem;
  /* Match line-height to font-size */
  font-weight: normal;
  letter-spacing: 0.3px;
  color: #f5f5f5;
  text-align: left;
  padding-bottom: 0;
  /* Ensure no padding at bottom */
  margin-bottom: 0;
  /* Ensure no margin at bottom */
}

.actual-text {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-flex;
  align-items: baseline;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.censored-content:hover .actual-text {
  opacity: 1;
}

.censored-content:hover .censored-text {
  opacity: 0;
}

.copy-icon {
  opacity: 0.7;
}

.censored-content:hover .copy-icon {
  opacity: 1;
}

@media (min-width: 768px) {

  .label,
  .censored-text,
  .actual-text {
    font-size: 0.875rem;
  }
}

@media (max-width: 767px) {

  .label,
  .censored-text,
  .actual-text {
    font-size: 0.75rem;
  }


}
</style>
