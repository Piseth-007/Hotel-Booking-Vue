<script setup>
import { Search } from "@lucide/vue";

const categories = [
  "All Experiences",
  "Culture",
  "Adventure",
  "Food & Dining",
  "Wellness",
  "Water Sports",
];
</script>

<template>
  <section class="relative z-20 -mt-10">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div
        class="bg-white rounded-[28px] shadow-xl border border-gray-100 p-5 flex flex-col lg:flex-row gap-5 items-center justify-between"
      >
        <!-- Categories -->
        <div class="flex flex-wrap gap-3">
          <button
            v-for="(category, index) in categories"
            :key="index"
            :class="
              index === 0
                ? 'bg-[#0A1B47] text-white'
                : 'bg-[#F3F4F6] text-gray-600 hover:bg-gray-200'
            "
            class="px-5 py-3 rounded-full text-sm font-medium transition"
          >
            {{ category }}
          </button>
        </div>

        <!-- Search -->
        <div
          class="flex items-center gap-3 bg-[#F3F4F6] rounded-full px-5 py-3 w-full lg:w-[320px]"
        >
          <Search class="w-5 h-5 text-gray-500" />

          <input
            type="text"
            placeholder="Search experiences..."
            class="bg-transparent outline-none w-full text-gray-700"
          />
        </div>
      </div>
    </div>
  </section>
</template>
