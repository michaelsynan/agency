<script setup>
useSeoMeta({
  title: 'About Us',
  description: 'Meet the creative team behind Formwork Studios. We believe hard work, creativity, and imagination lead the way. Your goals are our goals, your success is our success.',
})
</script>

<template>
  <div>
    <main class="text-white h-auto md:h-screen flex flex-col">
      <div id="top-row"
        class="bg-stone-950 overflow-hidden flex flex-col md:flex-row h-screen md:h-2/3 border-b border-stone-500">
        <!-- About Header - Half screen on mobile -->
        <div id="about-header"
          class="flex-none md:flex-1 text-3xl font-delight flex flex-col justify-end p-6 md:p-10 h-1/2 md:h-auto"
          style="background-image: url('grid.svg'); background-size: 100px 100px; background-repeat: repeat;">
          <h1 class="mb-4 text-5xl font-delight text-left font-bold">Our Team</h1>
        </div>

        <!-- About Team - Other half on mobile -->
        <div id="about-team" class="flex-none md:w-2/3 h-1/2 md:h-auto flex flex-row">
          <div class="w-1/2 flex flex-col justify-end p-4 relative michael-team-box">
            <img src="/michael_synan_web_design.png" alt="Michael Synan"
              class="absolute inset-0 w-full h-full object-cover object-top z-10">
            <TeamSocials team="michael" class="p-4 relative z-20" />
          </div>
          <div class="w-1/2 flex flex-col justify-end p-4 relative cecily-team-box">
            <img src="/cecily-digital-marketing.png" alt="Cecily"
              class="absolute inset-0 w-full h-full object-cover object-top z-10">
            <TeamSocials team="cecily" class="p-4 relative z-20" />
          </div>
        </div>
      </div>

      <div id="bottom-row"
        class="h-1/3 bg-stone-950 p-6 md:p-8 flex flex-col border-b border-stone-500/50 gap-4 md:gap-0">
        <div class="flex-1 lora text-3xl md:text-6xl text-stone-800 flex flex-row">
          <!-- Every Detail Matters -->
        </div>
        <div class="ml-auto max-w-lg leading-8 text-stone-100 text-justify text-justify-inter-word">
          Underlying all change and uncertainty are a few things you can count on—Hard work, Creativity & Imagination
          will lead the way, even when the destination unclear. When we work together, we're on the same team. Your
          goals are our goals — <b>Your success is our success</b>.
        </div>
      </div>
    </main>
    <AboutScroll class="text-white" />
    <AboutProcess class="bg-stone-950 border-b border-stone-500/50" />
    <AboutPhilosophy />
  </div>
</template>

<style scoped>
.michael-team-box::before {
  content: '';
  position: absolute;
  top: 20%;
  right: 20%;
  width: 480px;
  height: 300px;
  background: linear-gradient(135deg, #10b981, #06d6a0);
  border-radius: 0px;
  transform: rotate(0deg) scale(1);
  z-index: 5;
  box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3);
  transition: transform 0.6s ease-out;
  animation: zoomOnScroll 1s ease-out forwards;
}

.cecily-team-box::before {
  content: '';
  position: absolute;
  top: 30%;
  left: 15%;
  width: 400px;
  height: 250px;
  background: linear-gradient(45deg, #ba7baf, #9d5c90);
  border-radius: 0px;
  transform: rotate(0deg) scale(1);
  z-index: 5;
  box-shadow: 0 20px 40px rgba(186, 123, 175, 0.3);
  transition: transform 0.6s ease-out;
  animation: zoomOnScroll 1s ease-out 0.2s forwards;
}

.michael-team-box img,
.cecily-team-box img {
  transition: transform 0.3s ease-out;
}

.michael-team-box:hover img,
.cecily-team-box:hover img {
  transform: scale(1.05);
}

@keyframes zoomOnScroll {
  from {
    transform: rotate(0deg) scale(0.8);
    opacity: 0;
  }

  to {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
}

/* White crosses positioned around the page */
#top-row {
  position: relative;
}

#top-row::before {
  content: '';
  position: absolute;
  top: 80px;
  left: 40px;
  width: 30px;
  height: 30px;
  background:
    linear-gradient(white, white) center/2px 100% no-repeat,
    linear-gradient(white, white) center/100% 2px no-repeat;
  z-index: 30;
}

#top-row::after {
  content: '';
  position: absolute;
  top: 80px;
  right: 40px;
  width: 30px;
  height: 30px;
  background:
    linear-gradient(white, white) center/2px 100% no-repeat,
    linear-gradient(white, white) center/100% 2px no-repeat;
  z-index: 30;
}

#bottom-row {
  position: relative;
}

#bottom-row::before {
  content: '';
  position: absolute;
  bottom: 40px;
  left: 40px;
  width: 30px;
  height: 30px;
  background:
    linear-gradient(white, white) center/2px 100% no-repeat,
    linear-gradient(white, white) center/100% 2px no-repeat;
  z-index: 30;
}

@keyframes dotCycle {
  0% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  33.33% {
    opacity: 1;
  }

  43.33% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

#one-dot,
#two-dots,
#three-dots {
  opacity: 0;
  animation: dotCycle 3s infinite;
}

#one-dot {
  animation-delay: 0s;
}

#two-dots {
  animation-delay: 1s;
}

#three-dots {
  animation-delay: 2s;
}
</style>
