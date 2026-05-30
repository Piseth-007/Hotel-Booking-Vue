<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { stay } from "@/data/province";
import FilterSidebar from "@/components/Stays/FilterSidebar.vue";
import StayList from "@/components/Stays/StayList.vue";
const route = useRoute();
const selectedStars = ref([]);
const selectedAmenities = ref([]);
const maxPrice = ref(4000);
const destination = computed(() => {
  return (
    route.query.destination?.trim().replace(/\s+/g, " ").toLowerCase() || ""
  );
});

const baseHotels = computed(() => {
  let hotels = [...stay];

  const slug = route.params.slug;

  if (slug) {
    hotels = hotels.filter((hotel) => hotel.destination === slug);
  }

  if (destination.value) {
    hotels = hotels.filter((hotel) => {
      const city = hotel.location.city?.trim().toLowerCase() || "";
      const country = hotel.location.country?.trim().toLowerCase() || "";
      const title = hotel.title?.trim().toLowerCase() || "";
      const search = destination.value;

      return (
        city.includes(search) ||
        country.includes(search) ||
        title.includes(search)
      );
    });
  }

  return hotels;
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
    <div class="w-[80vw] mx-auto px-6">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12 lg:col-span-3">
          <FilterSidebar
            v-model:stars="selectedStars"
            v-model:amenities="selectedAmenities"
            v-model:price="maxPrice"
          />
        </div>

        <div class="col-span-12 lg:col-span-9">
          <StayList :hotels="filteredHotels" />
        </div>
      </div>
    </div>
  </section>
</template>
