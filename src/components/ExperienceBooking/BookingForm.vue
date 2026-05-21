<script setup>
import { Calendar, Minus, Plus } from "@lucide/vue";
</script>

<template>
  <section class="bg-white rounded-4xl p-8">
    <!-- Top -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Date -->
      <div>
        <h3 class="font-semibold text-[#0A1B47]">SELECT DATE</h3>

        <div
          class="mt-4 border border-gray-200 rounded-2xl px-5 py-5 flex items-center gap-4"
        >
          <Calendar class="w-6 h-6 text-[#0A1B47]" />

          <span>October 24, 2024</span>
        </div>
      </div>

      <!-- Participants -->
      <div>
        <h3 class="font-semibold text-[#0A1B47]">PARTICIPANTS</h3>

        <div
          class="mt-4 border border-gray-200 rounded-2xl px-3 py-3 flex items-center justify-between"
        >
          <div>
            <p class="text-gray-500">Total Guests</p>
          </div>

          <div class="flex items-center gap-5">
            <button
              class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <Minus class="w-5 h-5" />
            </button>

            <span class="text-3xl font-bold text-[#0A1B47]"> 02 </span>

            <button
              class="w-10 h-10 rounded-full bg-[#0A1B47] text-white flex items-center justify-center"
            >
              <Plus class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Time -->
    <div class="mt-10">
      <h3 class="font-semibold text-[#0A1B47]">SELECT TIME SLOT</h3>

      <div class="flex flex-wrap gap-4 mt-5">
        <button
          class="bg-[#0A1B47] text-white px-8 py-4 rounded-full font-semibold"
        >
          04:30 AM (Sunrise)
        </button>

        <button class="border border-gray-300 px-8 py-4 rounded-full">
          08:30 AM (Morning)
        </button>

        <button class="border border-gray-300 px-8 py-4 rounded-full">
          02:30 PM (Afternoon)
        </button>
      </div>
    </div>
  </section>
</template>
