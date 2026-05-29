<script setup>
import { Sparkles } from "@lucide/vue";
</script>
<template>
  <section class="bg-[#3D3425] border-y border-[#5A4B35] backdrop-blur-md">
    <div
      class="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-5"
    >
      <!-- Left Content -->
      <div class="flex items-start md:items-center gap-4 text-white">
        <!-- Icon -->
        <div
          class="w-12 h-12 rounded-full bg-[#E0B84C]/20 flex items-center justify-center shrink-0"
        >
          <Sparkles class="w-6 h-6 text-[#E0B84C]" />
        </div>

        <!-- Text -->
        <div>
          <h3
            class="text-sm md:text-base font-semibold uppercase tracking-wider text-[#E0B84C]"
          >
            Special Khmer New Year Offer
          </h3>

          <p class="mt-1 text-sm md:text-base text-gray-300 leading-relaxed">
            Enjoy up to 35% off on luxury stays during the Water Festival.
            Limited availability for selected resorts and villas.
          </p>
        </div>
      </div>

      <!-- Right Button -->
      <button
        class="bg-[#F4D58D] hover:bg-[#EAC46A] transition-all duration-300 text-[#3D3425] px-7 py-3 rounded-full font-semibold shadow-lg hover:scale-105"
      >
        Claim Offer
      </button>
    </div>
  </section>
</template>
