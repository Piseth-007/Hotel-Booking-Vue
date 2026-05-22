<script setup>
import { stay } from "@/data/stay";
import { useRoute } from "vue-router";
import BookingSummary from "../common/BookingSummary.vue";
import AboutSanctuary from "../HotelDetail/AboutSanctuary.vue";
import AmenitySection from "../HotelDetail/AmenitySection.vue";
import DetailGallery from "../HotelDetail/DetailGallery.vue";
import PolicySection from "../HotelDetail/PolicySection.vue";
import RoomSelection from "../HotelDetail/RoomSelection.vue";
const route = useRoute();
const hotel = stay.find((item) => item.slug === route.params.slug);
</script>

<template>
  <section v-if="hotel" class="py-10 pt-25 bg-[#F7F7F5]">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- LEFT -->
        <div class="lg:col-span-2 space-y-10">
          <DetailGallery
            :gallery="hotel.gallery"
            :price="hotel.price"
            :rating="hotel.rating"
            :location="`${hotel.location.city}, ${hotel.location.country}`"
          />

          <AboutSanctuary
            :title="hotel.title"
            :description="hotel.description"
          />

          <AmenitySection :amenities="hotel.amenities" />

          <RoomSelection :rooms="hotel.rooms" />

          <PolicySection :policies="hotel.policies" />
        </div>

        <!-- RIGHT -->
        <div>
          <BookingSummary
            :image="hotel.image"
            :title="hotel.title"
            :location="`${hotel.location.city}, ${hotel.location.country}`"
            :type="hotel.type"
            :price="hotel.price"
            :priceLabel="hotel.priceLabel"
            startDate="Dec 12, 2024"
            endDate="Dec 15, 2024"
            :features="['Pool Villa', 'Breakfast', 'Airport Pickup']"
            :pricing="[
              {
                label: `3 Nights × $${hotel.price}`,
                price: '$1,350.00',
              },

              {
                label: 'Resort Fee',
                price: '$45.00',
              },

              {
                label: 'Taxes & Service',
                price: '$139.50',
              },
            ]"
            total="$1,534.50"
          />
        </div>
      </div>
    </div>
  </section>
</template>
