<script setup>
import { Star } from "@lucide/vue";

defineProps({
  experience: Object,
});
</script>

<template>
  <div
    class="bg-white rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group"
  >
    <!-- Image -->
    <div class="relative overflow-hidden">
      <img
        :src="experience.image"
        :alt="experience.title"
        class="w-full h-62.5 object-cover group-hover:scale-110 transition duration-700"
      />

      <!-- Category -->
      <div
        class="absolute top-4 left-4 bg-white text-[#0A1B47] text-xs font-semibold px-4 py-2 rounded-full"
      >
        {{ experience.category }}
      </div>

      <!-- Price -->
      <div
        class="absolute top-4 right-4 bg-[#E0B84C] text-[#0A1B47] text-xs font-bold px-4 py-2 rounded-full"
      >
        {{ experience.price }}
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <div class="flex items-center gap-2 text-sm text-gray-500">
        <Star class="w-4 h-4 fill-[#E0B84C] text-[#E0B84C]" />

        <span>{{ experience.rating }}</span>

        <span>({{ experience.reviews }})</span>
      </div>

      <h3 class="mt-4 text-2xl font-bold text-[#0A1B47] leading-snug">
        {{ experience.title }}
      </h3>

      <button
        class="mt-6 w-full bg-[#0A1B47] hover:bg-[#132B66] transition text-white py-3 rounded-xl font-semibold"
      >
        Book Experience
      </button>
    </div>
  </div>
</template>
