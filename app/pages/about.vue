<template>
  <div>
    <main class="text-white h-screen flex flex-col">
      <div id="top-row" class="h-2/3 bg-stone-950 flex pt-10 flex-col md:flex-row">
        <div class="flex-1 text-3xl bg-dino-950 font-delight flex flex-col justify-end p-10">
          <h1 class="mb-4 text-5xl font-delight text-left font-bold">Our Team</h1>
        </div>

        <div style="background-image: url(/michael_synan.webp)"
          class="w-1/3 bg-cover bg-top flex flex-col justify-end p-4">
          <TeamSocials team="michael" class="p-4 bg-black/50" />
        </div>

        <div style="background-image: url(/cecily.webp)" class="w-1/3 bg-cover bg-top flex flex-col justify-end p-4">
          <TeamSocials team="cecily" class="p-4 bg-black/50" />
        </div>
      </div>

      <div id="bottom-row" class="h-1/3 bg-stone-900 p-10 flex flex-col border-b border-stone-500/50">
        <div class="flex-1 lora text-7xl text-stone-600">Time to get to work...</div>
        <div class="ml-auto max-w-lg leading-loose">Lorem ipsum dolor sit amet consectetur adipiscing elit Sed do
          eiusmod tempor
          incididunt ut
          labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
          aliquip
          ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur Excepteur</div>
      </div>
    </main>
    <AboutProcess class="bg-stone-900 text-white p-10" />
  </div>
</template>
