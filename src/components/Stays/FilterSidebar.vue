<script setup>
import { Wifi, UtensilsCrossed, Waves } from "@lucide/vue";
</script>

<template>
  <div class="sticky top-24">
    <div class="bg-white rounded-[28px] p-8">
      <h2 class="text-4xl font-bold text-[#0A1B47]">Filters</h2>

      <!-- Price -->
      <div class="mt-12">
        <h3
          class="uppercase text-sm tracking-wider font-semibold text-gray-400"
        >
          Price Range
        </h3>

        <input type="range" class="w-full mt-6 accent-[#0A1B47]" />

        <div class="flex justify-between mt-4 text-sm text-gray-500">
          <span>$50</span>
          <span>$4000</span>
        </div>
      </div>

      <!-- Star -->
      <div class="mt-12">
        <h3
          class="uppercase text-sm tracking-wider font-semibold text-gray-400"
        >
          Star Rating
        </h3>

        <div class="space-y-4 mt-6">
          <label class="flex items-center gap-4">
            <input type="checkbox" />

            <span class="text-[#E0B84C]"> ★★★★★ </span>
          </label>

          <label class="flex items-center gap-4">
            <input type="checkbox" />

            <span class="text-[#E0B84C]"> ★★★★ </span>
          </label>
        </div>
      </div>

      <!-- Amenities -->
      <div class="mt-12">
        <h3
          class="uppercase text-sm tracking-wider font-semibold text-gray-400"
        >
          Amenities
        </h3>

        <div class="space-y-5 mt-6">
          <label class="flex items-center gap-4">
            <input type="checkbox" />

            <Waves class="w-5 h-5 text-[#0A1B47]" />

            Swimming Pool
          </label>

          <label class="flex items-center gap-4">
            <input type="checkbox" />

            <UtensilsCrossed class="w-5 h-5 text-[#0A1B47]" />

            Free Breakfast
          </label>

          <label class="flex items-center gap-4">
            <input type="checkbox" />

            <Wifi class="w-5 h-5 text-[#0A1B47]" />

            Free WiFi
          </label>
        </div>
      </div>

      <!-- Landmarks -->
      <div class="mt-12">
        <h3
          class="uppercase text-sm tracking-wider font-semibold text-gray-400"
        >
          Nearby Landmarks
        </h3>

        <div class="flex flex-wrap gap-3 mt-6">
          <button
            class="px-4 py-2 rounded-full border border-gray-200 hover:bg-[#0A1B47] hover:text-white transition"
          >
            Angkor Wat
          </button>

          <button
            class="px-4 py-2 rounded-full border border-gray-200 hover:bg-[#0A1B47] hover:text-white transition"
          >
            Old Market
          </button>

          <button
            class="px-4 py-2 rounded-full border border-gray-200 hover:bg-[#0A1B47] hover:text-white transition"
          >
            Pub Street
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
