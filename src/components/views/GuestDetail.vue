<script setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import BookingSummary from "../common/BookingSummary.vue";
import GuestForm from "../GuestDetail/GuestForm.vue";
import StepPayment from "../Payments/StepPayment.vue";

const route = useRoute();
const router = useRouter();

const booking = {
  image: route.query.image || "",
  title: route.query.title || "",
  location: route.query.location || "",
  price: Number(route.query.price) || 0,
  room: route.query.room || "No Room Selected",
  guests: route.query.guests || "2 Guests",
  checkIn: route.query.checkIn || "Not Selected",
  checkOut: route.query.checkOut || "Not Selected",
};

const guest = reactive({
  fullName: "",
  email: "",
  phone: "",
  arrival: "",
  requests: "",
});
const updateGuest = (data) => {
  Object.assign(guest, data);
};

const gotoPayment = () => {
  router.push({
    path: "/paymentlayout",
    query: {
      image: booking.image,
      title: booking.title,
      location: booking.location,
      price: booking.price,
      room: booking.room,
      guests: booking.guests,
      checkIn: booking.checkIn,
      checkOut: booking.checkOut,
      guestName: guest.fullName,
      email: guest.email,
      phone: guest.phone,
      arrival: guest.arrival,
      requests: guest.requests,
    },
  });
};
</script>

<template>
  <section class="min-h-screen bg-[#F7F7F5] pt-28 pb-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <StepPayment :currentStep="1" />

      <div class="grid grid-cols-1 lg:grid-cols-[1.6fr_0.8fr] gap-10 mt-10">
        <!-- LEFT -->

        <div>
          <GuestForm
            @update-guest="updateGuest"
            @continue-payment="gotoPayment"
          />
        </div>

        <!-- RIGHT -->

        <div>
          <div class="sticky top-32">
            <BookingSummary
              type="hotel"
              :image="booking.image"
              :title="booking.title"
              :location="booking.location"
              :price="booking.price"
              :room="booking.room"
              :guests="booking.guests"
              :date="`${booking.checkIn}
                -
                ${booking.checkOut}`"
              :total="booking.price"
              :onContinue="gotoPayment"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
