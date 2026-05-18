<script setup>
import { Star } from "@lucide/vue";

const resorts = [
  {
    id: 1,
    title: "Amansara Resort",
    location: "Siem Reap",
    price: "$420",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Royal Sands",
    location: "Koh Rong",
    price: "$390",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Plantation Urban",
    location: "Phnom Penh",
    price: "$240",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop",
  },
];
</script>

<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto">
        <p
          class="uppercase tracking-[0.3em] text-sm text-[#B8860B] font-semibold"
        >
          Luxury Stays
        </p>

        <h2 class="mt-4 text-4xl md:text-5xl font-bold text-[#0A1B47]">
          Handpicked Resorts
        </h2>

        <p class="mt-5 text-gray-600 leading-8">
          Experience world-class comfort and authentic Khmer hospitality across
          Cambodia's most breathtaking destinations.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <div
          v-for="resort in resorts"
          :key="resort.id"
          class="bg-white rounded-4xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group"
        >
          <!-- Image -->
          <div class="overflow-hidden">
            <img
              :src="resort.image"
              :alt="resort.title"
              class="h-80 w-full object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          <!-- Content -->
          <div class="p-7">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-2xl font-bold text-[#0A1B47]">
                  {{ resort.title }}
                </h3>

                <p class="mt-1 text-gray-500">
                  {{ resort.location }}
                </p>
              </div>

              <div
                class="flex items-center gap-1 bg-[#FFF7E2] px-3 py-1 rounded-full"
              >
                <Star class="w-4 h-4 text-[#B8860B]" />

                <span class="text-sm font-semibold text-[#B8860B]">
                  {{ resort.rating }}
                </span>
              </div>
            </div>

            <div class="mt-6 flex items-center justify-between">
              <div>
                <span class="text-3xl font-bold text-[#0A1B47]">
                  {{ resort.price }}
                </span>

                <span class="text-gray-500 text-sm"> /night</span>
              </div>

              <button
                class="bg-[#0A1B47] hover:bg-[#132B66] transition text-white px-5 py-3 rounded-full font-medium"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
