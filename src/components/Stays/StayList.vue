<script setup>
import StayListingCard from "./StayListingCard.vue";

const hotels = [
  {
    id: 1,
    title: "Viroth's Hotel & Resort",
    location: "2.5km from Angkor Wat, Siem Reap",
    rating: "Very Good 8.9",
    price: "$245 / night",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Heritage Suites Boutique",
    location: "City Center, Siem Reap",
    rating: "Excellent 9.2",
    price: "$120 / night",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
  },
];
</script>

<template>
  <div>
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-3xl font-bold text-[#0A1B47]">34 Stays in Siem Reap</h1>

      <div class="flex gap-3">
        <button class="bg-white px-5 py-3 rounded-xl font-medium">Price</button>

        <button class="bg-white px-5 py-3 rounded-xl font-medium">
          Rating
        </button>
      </div>
    </div>

    <!-- Cards -->
    <div class="space-y-8">
      <StayListingCard v-for="hotel in hotels" :key="hotel.id" :hotel="hotel" />
    </div>
  </div>
</template>
