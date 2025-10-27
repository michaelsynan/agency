import VueGtag, { trackRouter } from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-74XJ1CYD7P', // Replace with your GA Measurement ID
    },
  })
  trackRouter(useRouter())
})
