<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { stay } from "@/data/province";
import FilterSidebar from "@/components/Stays/FilterSidebar.vue";

import StayList from "@/components/Stays/StayList.vue";

import MapPreview from "@/components/Stays/MapPreview.vue";

const route = useRoute();
const selectedStars = ref([]);
const selectedAmenities = ref([]);
const maxPrice = ref(4000);
const baseHotels = computed(() => {
  const slug = route.params.slug;
  if (!slug) {
    return stay;
  }

  return stay.filter((hotel) => hotel.destination === slug);
});

const filteredHotels = computed(() => {
  return baseHotels.value.filter((hotel) => {

    const priceMatch = hotel.price <= maxPrice.value;

    const starMatch =
      selectedStars.value.length === 0 ||
      selectedStars.value.includes(hotel.stars);

    const amenityMatch =
      selectedAmenities.value.length === 0 ||
      selectedAmenities.value.every((amenity) =>
        hotel.amenities.some((item) => item.name === amenity),
      );

    return priceMatch && starMatch && amenityMatch;
  });
});
</script>

<template>
  <section class="py-10 pt-28 bg-[#F7F7F5]">
    <div class="max-w-450 mx-auto px-6">
      <div class="grid grid-cols-12 gap-8">
        <!-- Sidebar -->
        <div class="col-span-12 lg:col-span-3">
          <FilterSidebar
            v-model:stars="selectedStars"
            v-model:amenities="selectedAmenities"
            v-model:price="maxPrice"
          />
        </div>

        <!-- List -->
        <div class="col-span-12 lg:col-span-6">
          <StayList :hotels="filteredHotels" />
        </div>

        <!-- Map -->
        <div class="col-span-12 lg:col-span-3">
          <MapPreview />
        </div>
      </div>
    </div>
  </section>
</template>
