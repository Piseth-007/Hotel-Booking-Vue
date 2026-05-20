<script setup>
import { Camera, Car, UtensilsCrossed, GlassWater } from "@lucide/vue";

const highlights = [
  {
    title: "Professional Photography Guide",
    icon: Camera,
  },

  {
    title: "Private Transportation",
    icon: Car,
  },

  {
    title: "Traditional Khmer Breakfast",
    icon: UtensilsCrossed,
  },

  {
    title: "Bottled Water & Cold Towels",
    icon: GlassWater,
  },
];
</script>

<template>
  <section class="bg-white rounded-4xl p-8">
    <h2 class="text-4xl font-bold text-[#0A1B47]">
      Tour Highlights & Inclusions
    </h2>

    <!-- Features -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
      <div v-for="item in highlights" :key="item.title" class="text-center">
        <component :is="item.icon" class="w-8 h-8 mx-auto text-[#B8860B]" />

        <p class="mt-4 text-sm text-[#0A1B47] font-medium">
          {{ item.title }}
        </p>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-200 my-10"></div>

    <!-- Inclusion -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Included -->
      <div>
        <h3 class="font-bold text-[#0A1B47]">INCLUSIONS</h3>

        <ul class="space-y-5 mt-6">
          <li class="text-gray-600">✓ Full-day expert local guide</li>

          <li class="text-gray-600">✓ Hotel pickup and drop-off</li>

          <li class="text-gray-600">
            ✓ Entry fees to Angkor Archaeological Park
          </li>

          <li class="text-gray-600">✓ High-quality photography tripod</li>
        </ul>
      </div>

      <!-- Excluded -->
      <div>
        <h3 class="font-bold text-[#0A1B47]">EXCLUSIONS</h3>

        <ul class="space-y-5 mt-6">
          <li class="text-gray-600">✕ Personal expenses</li>

          <li class="text-gray-600">✕ Guide gratuities</li>
        </ul>
      </div>
    </div>
  </section>
</template>
