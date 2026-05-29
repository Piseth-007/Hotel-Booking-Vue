<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { stay } from "@/data/province";
import BookingSummary from "../common/BookingSummary.vue";
import AboutSanctuary from "../HotelDetail/AboutSanctuary.vue";
import AmenitySection from "../HotelDetail/AmenitySection.vue";
import DetailGallery from "../HotelDetail/DetailGallery.vue";
import PolicySection from "../HotelDetail/PolicySection.vue";
import RoomSelection from "../HotelDetail/RoomSelection.vue";
import DateSelection from "../HotelDetail/DateSelection.vue";

const checkIn = ref("");
const checkOut = ref("");
const route = useRoute();
const router = useRouter();
const hotel = computed(() => {
  return stay.find((item) => item.slug === route.params.slug);
});

const selectedRoom = ref(null);

const selectRoom = (room) => {
  selectedRoom.value = room;
};

const totalPrice = computed(() => {
  if (!selectedRoom.value) {
    return hotel.value.price;
  }

  return selectedRoom.value.price;
});
const gotoReview = () => {
  router.push({
    path: "/guestdetail",

    query: {
      title: hotel.value.title,
      image: hotel.value.image,
      location: `${hotel.value.location.city},
        ${hotel.value.location.country}`,
      price: selectedRoom.value?.price || hotel.value.price,
      room:
        selectedRoom.value?.name ||
        selectedRoom.value?.title ||
        selectedRoom.value?.roomType ||
        "No Room Selected",
      guests:
        selectedRoom.value?.capacity ||
        selectedRoom.value?.guests ||
        "2 Guests",
      checkIn: checkIn.value,
      checkOut: checkOut.value,
    },
  });
};
</script>

<template>
  <section v-if="hotel" class="py-10 pt-25 bg-[#F7F7F5]">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

          <DateSelection
            v-model:checkIn="checkIn"
            v-model:checkOut="checkOut"
          />

          <RoomSelection
            :rooms="hotel.rooms"
            :selectedRoom="selectedRoom"
            @select-room="selectRoom"
          />

          <PolicySection :policies="hotel.policies" />
        </div>

        <div>
          <BookingSummary
            :image="hotel.image"
            :title="hotel.title"
            :location="`${hotel.location.city},
                        ${hotel.location.country}`"
            type="hotel"
            :price="totalPrice"
            :room="selectedRoom?.name || selectedRoom?.title || 'Select Room'"
            :guests="selectedRoom?.capacity || '2 Guests'"
            :date="`${checkIn || 'Check In'}
               -
              ${checkOut || 'Check Out'}`"
            :total="totalPrice"
            :onContinue="gotoReview"
          />
        </div>
      </div>
    </div>
  </section>

  <div v-else class="py-40 text-center">Hotel not found</div>
</template>
