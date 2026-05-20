<script setup>
import { Waves, Wifi, UtensilsCrossed, Flower2 } from "@lucide/vue";

const amenities = [
  {
    title: "Infinity Pool",
    icon: Waves,
  },

  {
    title: "Khmer Spa",
    icon: Flower2,
  },

  {
    title: "Gourmet Dining",
    icon: UtensilsCrossed,
  },

  {
    title: "High-speed WiFi",
    icon: Wifi,
  },
];
</script>

<template>
  <section>
    <h2 class="text-4xl font-bold text-[#0A1B47]">Curated Amenities</h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
      <div
        v-for="item in amenities"
        :key="item.title"
        class="bg-white rounded-3xl p-6 text-center hover:shadow-lg transition"
      >
        <component :is="item.icon" class="w-7 h-7 mx-auto text-[#B8860B]" />

        <h3 class="mt-5 font-semibold text-[#0A1B47]">
          {{ item.title }}
        </h3>
      </div>
    </div>

    <button
      class="mt-8 text-[#0A1B47] font-medium hover:text-[#B8860B] transition"
    >
      Show all 42 amenities →
    </button>
  </section>
</template>
