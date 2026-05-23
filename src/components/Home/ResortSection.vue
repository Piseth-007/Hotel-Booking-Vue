<script setup>
import { ChevronLeft, ChevronRight } from "@lucide/vue";

import { ref } from "vue";

import { siemreap } from "@/data/siemreap";

import ResortCard from "./ResortCard.vue";

const scrollContainer = ref(null);

const scrollLeft = () => {
  scrollContainer.value.scrollBy({
    left: -350,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  scrollContainer.value.scrollBy({
    left: 350,
    behavior: "smooth",
  });
};
</script>

<template>
  <section class="py-24 bg-[#F7F7F5] overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">

      <div class="flex items-center justify-between mb-12">
        <div>
          <h2 class="text-4xl md:text-5xl font-bold text-[#0A1B47]">
            Luxury Resorts
          </h2>

          <p class="mt-3 text-gray-500">
            Unmatched comfort in the heart of serenity.
          </p>
        </div>


        <div class="hidden md:flex items-center gap-3">
          <button
            @click="scrollLeft"
            class="w-12 h-12 rounded-full border border-gray-300 hover:bg-[#0A1B47] hover:text-white transition flex items-center justify-center"
          >
            <ChevronLeft class="w-5 h-5" />
          </button>

          <button
            @click="scrollRight"
            class="w-12 h-12 rounded-full border border-gray-300 hover:bg-[#0A1B47] hover:text-white transition flex items-center justify-center"
          >
            <ChevronRight class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Scroll -->
      <div
        ref="scrollContainer"
        class="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >
        <ResortCard
          v-for="resort in siemreap"
          :key="resort.id"
          :resort="resort"
        />
      </div>
    </div>
  </section>
</template>
