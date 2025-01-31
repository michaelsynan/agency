<script setup lang="ts">
interface Testimonial {
  name: string
  text: string
  image: string
  profession: string
  stars: number
}

const testimonials: Testimonial[] = [
  { name: 'Sergio Uzrin', text: 'Solid webdesigner, clearly has years of experience. Was up to date with current trends on functionality as well as design.', image: '/sergio.webp', profession: 'Videographer', stars: 5 },
  { name: 'Jill Johnson', text: 'Michael has really helped with our marketing and advertising operations! We are running ads on meta, Amazon, and google which have led to increased revenues.', image: '/jill.jpg', profession: 'Operations Manager', stars: 5 },
  { name: 'Lesley Frey', text: 'They were really informative and helpful, hard working and efficient.', image: '/lesley.jpg', profession: 'Actress', stars: 5 },
]
</script>

<template>
  <div class="w-full bg-juju-950">
    <UContainer class="relative flex flex-col gap-20 justify-center items-center w-full h-auto md:h-[600px] my-40">
      <SharedAnimatedHeader :text="`What They're Saying`" />
      <!-- Content -->
      <div class="relative w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-10">
        <HomeTestimonial v-for="(testimonial, index) in testimonials" :key="index" :name="testimonial.name"
          :text="testimonial.text" :image="testimonial.image" :profession="testimonial.profession"
          :stars="testimonial.stars" />
      </div>
    </UContainer>
  </div>
</template>
