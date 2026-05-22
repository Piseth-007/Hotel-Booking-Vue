<script setup>
import StayListingCard from "./StayListingCard.vue";
import { stay } from "@/data/stay";
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-3xl font-bold text-[#0A1B47]">34 Stays in Siem Reap</h1>

      <div class="flex gap-3">
        <button class="bg-white px-5 py-3 rounded-xl font-medium">Price</button>

        <button class="bg-white px-5 py-3 rounded-xl font-medium">
          Rating
        </button>
      </div>
    </div>

    <div class="space-y-8">
      <StayListingCard v-for="hotel in stay" :key="hotel.id" :hotel="hotel" />
    </div>
  </div>
</template>
