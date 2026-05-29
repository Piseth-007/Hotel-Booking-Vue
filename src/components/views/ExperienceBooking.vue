<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import BookingForm from "../ExperienceBooking/BookingForm.vue";
import BookingSummary from "../common/BookingSummary.vue";
import GuaranteeBanner from "../ExperienceBooking/GuaranteeBanner.vue";
import GuestInformation from "../ExperienceBooking/GuestInformation.vue";
import TourHighlights from "../ExperienceBooking/TourHighlights.vue";
import { experiences } from "@/data/experience";

const router = useRouter();
const route = useRoute();

const experience = computed(() => {
  return experiences.find((item) => item.slug === route.params.slug);
});

const bookingData = ref({
  guests: 2,
  date: "",
  time: "",
  fullName: "",
  email: "",
  phone: "",
  requests: "",
});

const updateBooking = (data) => {
  bookingData.value = {
    ...bookingData.value,
    ...data,
  };
};

const totalPrice = computed(() => {
  return (
    Number(experience.value?.price || 0) * Number(bookingData.value.guests)
  );
});

const gotoPayment = () => {
  router.push({
    path: "/paymentlayout",
    query: {
      type: "experience",
      title: experience.value.title,
      image: experience.value.image,
      location:
        `${experience.value.location.city}, ` +
        `${experience.value.location.country}`,
      price: experience.value.price,
      total: totalPrice.value,
      guests: bookingData.value.guests,
      date: bookingData.value.date,
      time: bookingData.value.time,
      guestName: bookingData.value.fullName,
      email: bookingData.value.email,
      phone: bookingData.value.phone,
      requests: bookingData.value.requests,
    },
  });
};
</script>

<template>
  <section v-if="experience" class="pt-25 py-14 bg-[#F7F7F5]">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        <div class="lg:col-span-2 space-y-8">
          <BookingForm
            :experience="experience"
            @update-booking="updateBooking"
          />

          <TourHighlights :experience="experience" />
          <GuestInformation @update-guest="updateBooking" />
          <GuaranteeBanner />
        </div>

        <div>
          <BookingSummary
            :image="experience.image"
            :title="experience.title"
            :location="`${experience.location.city}, ${experience.location.country}`"
            type="experience"
            :price="experience.price"
            :guests="bookingData.guests"
            :date="bookingData.date || bookingData.time"
            :total="totalPrice"
            :onContinue="gotoPayment"
          />
        </div>
      </div>
    </div>
  </section>

  <div v-else class="py-40 text-center text-2xl font-bold text-[#0A1B47]">
    Experience not found
  </div>
</template>
