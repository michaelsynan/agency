<script setup lang="ts">
function kebabCase(str: string) {
    return str.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()
}
import { neighborhoods } from '../../data/neighborhoods'
import { services } from '../../data/services'
</script>

<template>
    <UContainer class="py-12 px-4 text-white">
        <h1 class="text-4xl font-bold mb-10 font-delight">Neighborhoods & Services Index</h1>
        <section>
            <h2 class="text-2xl font-bold mb-6 font-delight">All Neighborhoods & Services</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="n in neighborhoods" :key="n.id" class="bg-stone-900 rounded-lg p-6">
                    <div class="mb-2">
                        <b>{{ n.name }}</b> <span class="text-stone-400">({{ n.region }})</span>
                    </div>
                    <div class="flex flex-col gap-2">
                        <NuxtLink v-for="s in services" :key="s.id"
                            :to="`/neighborhoods/${kebabCase(n.region)}/${kebabCase(n.name)}/${s.id}`"
                            class="text-dino-500 hover:underline">
                            {{ s.title }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </UContainer>
</template>
