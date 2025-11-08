<script
  setup
  lang="ts"
>
const route = useRoute()
const menuOpen = ref(false)
const show = ref(true)
let lastScrollTop = 0

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

watch(route, () => {
  menuOpen.value = false
})

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  if (scrollTop > lastScrollTop && scrollTop > 200) {
    // Downscroll
    show.value = false
  }
  else {
    // Upscroll
    show.value = true
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop // For Mobile or negative scrolling
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="w-full flex flex-col items-center text-white mb-4 shadow-sm !z-100 fixed zfix backdrop-blur transition-transform duration-300 ease-in-out"
    aria-label="Main navigation"
    :class="[
      route.path === '/' ? 'bg-transparent' : route.path.startsWith('/posts') ? 'bg-juju-950' : 'bg-stone-900',
      { 'navbar-hidden': !show },
    ]"
  >
    <div class="w-full bg-gradient-to-r from-dino-700 to-dino-900 text-center py-2.5 md:py-1 text-sm font-bold">
      <a
        href="tel:18006576893"
        class="text-white hover:underline"
      >
        Call Now: 1-800-657-6893
      </a>
    </div>
    <div class="w-full flex flex-col md:flex-row justify-between text-lg">
      <div class="flex justify-between items-center w-full md:mb-0 ml-1">
        <ULink
          :to="'/'"
          class="font-medium zfix text-xl tracking-wider p-2"
        >
          <NuxtImg
            src="/logo.png"
            width="20"
            fit="cover"
            alt="Formwork Studios"
          />
        </ULink>

        <button
          class="hamburger md:hidden zfix my-1 mr-4"
          aria-label="Open menu"
          @click="toggleMenu"
        >
          <span :class="['hamburger-line', menuOpen ? 'transform' : 'ml-auto mt-0.5']" />
          <span :class="['hamburger-line', menuOpen ? 'transform' : 'ml-auto !w-4']" />
          <span :class="['hamburger-line', menuOpen ? 'transform' : 'ml-auto !w-3']" />
        </button>
      </div>
      <div class="hidden md:flex">
        <ULink
          to="/"
          active-class="!bg-zinc-700"
          d
          class="!font-inter px-4 py-2 text-base font-medium tracking-widest text-stone-300 hover:text-stone-100 transition-colors hover:bg-zinc-800 justify-center items-center flex"
        >
          Home
        </ULink>

        <ULink
          to="/about"
          prefetch
          active-class="!bg-zinc-700"
          class="!font-inter px-4 py-2 text-base font-medium tracking-widest text-stone-300 hover:text-stone-100 transition-colors hover:bg-zinc-800 justify-center items-center flex"
        >
          About
        </ULink>
        <ULink
          to="/services"
          prefetch
          active-class="!bg-zinc-700"
          class="!font-inter px-4 py-2 text-base font-medium tracking-widest text-stone-300 hover:text-stone-100 transition-colors hover:bg-zinc-800 justify-center items-center flex"
        >
          Services
        </ULink>
        <ULink
          to="/posts"
          prefetch
          active-class="!bg-zinc-700"
          class="!font-inter px-4 py-2 text-base font-medium tracking-widest text-stone-300 hover:text-stone-100 transition-colors hover:bg-zinc-800 justify-center items-center flex"
        >
          Blog
        </ULink>
        <ULink
          to="/get-in-touch"
          active-class="!bg-zinc-700"
          class="!font-inter px-4 py-2 text-base font-medium tracking-widest text-stone-300 hover:text-stone-100 transition-colors hover:bg-juju-500 bg-juju-700 justify-center items-center flex min-w-max booking-button font-bold"
        >
          Contact Us
        </ULink>
      </div>
      <div
        id="mobile-nav"
        :class="{ 'opacity-0 pointer-events-none': !menuOpen, 'opacity-100 pointer-events-auto': menuOpen }"
        class="fixed inset-0 transition-opacity duration-300 ease-in-out z-40"
      >
        <div class="w-screen h-screen bg-stone-950 flex flex-col px-6 py-8 text-2xl">
          <div
            id="mobile-items"
            class="flex flex-col items-start gap-8 mt-20"
          >
            <ULink
              to="/"
              active-class="!text-stone-50 underline"
              class="hover:underline transition-all duration-100 text-left tracking-wide text-stone-300 hover:text-stone-100"
            >
              Home
            </ULink>

            <ULink
              to="/about"
              active-class="!text-stone-50 underline"
              class="hover:underline transition-all duration-100 text-left tracking-wide text-stone-300 hover:text-stone-100"
              prefetch
            >
              About
            </ULink>
            <ULink
              to="/services"
              active-class="!text-stone-50 underline"
              class="hover:underline transition-all duration-100 text-left tracking-wide text-stone-300 hover:text-stone-100"
              prefetch
            >
              Services
            </ULink>
            <ULink
              to="/posts"
              active-class="!text-stone-50 underline"
              class="hover:underline transition-all duration-100 text-left tracking-wide text-stone-300 hover:text-stone-100"
              prefetch
            >
              Blog
            </ULink>
            <ULink
              to="/get-in-touch"
              active-class="!text-stone-50"
              class="hover:underline transition-all duration-100 text-left tracking-wide text-stone-300 hover:text-stone-100"
            >
              Contact Us
            </ULink>
          </div>

          <FooterSocials class="w-full pt-6 mt-8 border-t border-stone-500/20" />

          <div class="mt-auto pb-safe-bottom pb-8">
            <a
              href="tel:18006576893"
              class="hover:underline transition-all duration-100 text-left tracking-wide text-stone-300 hover:text-stone-100"
            >
              (800) 657-6893
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-hidden {
  transform: translateY(-100%);
}

@keyframes colorShift {

  0%,
  10% {
    background-color: #0f766b;
    /* original color */
  }

  5% {
    background-color: #29bfb0;
    /* slightly darker */
  }

  95%,
  100% {
    background-color: #0f766b;
    /* returns to original */
  }
}

.booking-button {
  animation: colorShift 35s infinite;
}

.zfix {
  z-index: 100000 !important;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .hamburger {
    display: none;
  }
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background: white;
  border-radius: 10px;
  transition: all 0.25s linear;
}

.transform:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.transform:nth-child(2) {
  opacity: 0;
  transform: translateX(20px) translateY(2px);
}

.transform:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
</style>
