<script setup>
import {
  Heart,
  MapPin,
  Wifi,
  Waves,
  UtensilsCrossed,
  Flower2,
} from "@lucide/vue";

defineProps({
  hotel: Object,
});
</script>

<template>
  <div
    class="bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition"
  >
    <!-- Image -->
    <div class="relative">
      <img
        :src="hotel.image"
        class="w-full h-75 object-cover"
      />

      <!-- Rating -->
      <div
        class="absolute top-5 left-5 bg-[#169B62] text-white px-4 py-2 rounded-full text-sm font-semibold"
      >
        ★ {{ hotel.rating }}
      </div>

      <!-- Price -->
      <div
        class="absolute top-5 right-5 bg-[#B8860B] text-white px-5 py-2 rounded-full font-semibold"
      >
        {{ hotel.price }}
      </div>
    </div>

    <!-- Content -->
    <div class="p-7">
      <!-- Top -->
      <div class="flex justify-between items-start">
        <div>
          <h2
            class="text-3xl font-bold text-[#0A1B47]"
          >
            {{ hotel.title }}
          </h2>

          <div
            class="flex items-center gap-2 mt-3 text-gray-500"
          >
            <MapPin class="w-4 h-4" />

            {{ hotel.location }}
          </div>
        </div>

        <Heart
          class="w-7 h-7 text-gray-400 hover:text-red-500 cursor-pointer"
        />
      </div>

      <!-- Divider -->
      <div
        class="border-t border-gray-100 my-6"
      ></div>

      <!-- Bottom -->
      <div class="flex items-center justify-between">
        <!-- Amenities -->
        <div class="flex items-center gap-5">
          <Waves class="w-5 h-5 text-[#0A1B47]" />

          <Wifi class="w-5 h-5 text-[#0A1B47]" />

          <Flower2 class="w-5 h-5 text-[#0A1B47]" />

          <UtensilsCrossed
            class="w-5 h-5 text-[#0A1B47]"
          />
        </div>

        <!-- Button -->
        <button
          class="bg-[#0A1B47] hover:bg-[#132B66] transition text-white px-8 py-4 rounded-2xl font-semibold"
        >
          View Details
        </button>
      </div>
    </div>
  </div>
</template>