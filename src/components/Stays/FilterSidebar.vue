<script setup>
import { Wifi, UtensilsCrossed, Waves } from "@lucide/vue";

const stars = defineModel("stars");

const amenitiesModel = defineModel("amenities");

const price = defineModel("price");

const starRatings = [5, 4];

const amenities = [
  {
    name: "Swimming Pool",
    icon: Waves,
  },

  {
    name: "Free Breakfast",
    icon: UtensilsCrossed,
  },

  {
    name: "Free WiFi",
    icon: Wifi,
  },
];

const toggleStar = (star) => {
  if (stars.value.includes(star)) {
    stars.value = stars.value.filter((s) => s !== star);
  } else {
    stars.value.push(star);
  }
};

const toggleAmenity = (amenity) => {
  if (amenitiesModel.value.includes(amenity)) {
    amenitiesModel.value = amenitiesModel.value.filter((a) => a !== amenity);
  } else {
    amenitiesModel.value.push(amenity);
  }
};
</script>

<template>
  <div class="sticky top-24 max-h-[85vh] overflow-y-auto">
    <div class="bg-white rounded-[28px] p-8">
      <h2 class="text-3xl font-bold text-[#0A1B47]">Filters</h2>

      <!-- PRICE -->
      <div class="mt-12">
        <h3
          class="uppercase text-sm tracking-wider font-semibold text-gray-400"
        >
          Price Range
        </h3>

        <input
          v-model="price"
          type="range"
          min="50"
          max="4000"
          class="w-full mt-6 accent-[#0A1B47]"
        />

        <div class="flex justify-between mt-4 text-sm text-gray-500">
          <span>$50</span>

          <span> ${{ price }} </span>
        </div>
      </div>

      <!-- STARS -->
      <div class="mt-12">
        <h3
          class="uppercase text-sm tracking-wider font-semibold text-gray-400"
        >
          Star Rating
        </h3>

        <div class="space-y-4 mt-6">
          <label
            v-for="star in starRatings"
            :key="star"
            class="flex items-center gap-4 cursor-pointer"
          >
            <input
              type="checkbox"
              :checked="stars.includes(star)"
              @change="toggleStar(star)"
              class="w-4 h-4 accent-[#0A1B47]"
            />

            <span class="text-[#E0B84C]">
              {{ "★".repeat(star) }}
            </span>
          </label>
        </div>
      </div>

      <!-- AMENITIES -->
      <div class="mt-12">
        <h3
          class="uppercase text-sm tracking-wider font-semibold text-gray-400"
        >
          Amenities
        </h3>

        <div class="space-y-5 mt-6">
          <label
            v-for="amenity in amenities"
            :key="amenity.name"
            class="flex items-center gap-4 cursor-pointer"
          >
            <input
              type="checkbox"
              :checked="amenitiesModel.includes(amenity.name)"
              @change="toggleAmenity(amenity.name)"
              class="w-4 h-4 accent-[#0A1B47]"
            />

            <component :is="amenity.icon" class="w-5 h-5 text-[#0A1B47]" />

            {{ amenity.name }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
