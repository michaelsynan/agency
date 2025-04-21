<template>
    <div class="bg-dino-950 p-6 md:p-9 !py-40 border-y-2 border-white">
        <!-- Two-column layout for philosophy content -->
        <div class="flex flex-col md:flex-row">
            <!-- First column (1/3 width) with title -->
            <div class="w-full md:w-1/3 pr-0 md:pr-12 mb-10 md:mb-0">
                <h2 class="text-3xl md:text-5xl font-delight font-bold text-stone-100 sticky top-24">Our Philosophy</h2>
                <!-- <p class="text-sm md:text-base font-delight mt-10 text-stone-100/20 sticky top-24">SOME
                    PARAGRAPH GOES
                    HERE SOME PARAGRAPH GOES HERE</p> -->
            </div>

            <!-- Second column (2/3 width) with philosophy content -->
            <div class="w-full md:w-2/3">
                <div class=" border-stone-800">
                    <p class="text-stone-400 switzer font-switzer leading-14 text-4xl tracking-wide">
                        We approach every challenge through the lens of systems thinking—recognizing that digital
                        products exist within complex ecosystems of users, business objectives, and technological
                        constraints. Our philosophy centers on understanding these interconnections to create solutions
                        that address root causes rather than symptoms. We prioritize human needs and values, ensuring
                        our solutions enhance capabilities rather than creating barriers. This human-centered approach
                        is balanced with strategic minimalism—doing more with less and focusing on maximum impact with
                        minimum complexity. We don't just build products; we transform systems through thoughtful,
                        intentional design that respects both the technical possibilities and human realities.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// No data needed for this component
</script>

<style scoped>
/* Add any additional custom styles here */
</style>