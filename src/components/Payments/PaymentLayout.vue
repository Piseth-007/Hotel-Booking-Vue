<script setup>
import { useRoute, useRouter } from "vue-router";
import BookingSummary from "../common/BookingSummary.vue";
import CardForm from "./CardForm.vue";
import PaymentMethod from "./PaymentMethod.vue";
import StepPayment from "./StepPayment.vue";
const route = useRoute();
const router = useRouter();
const hotel = {
  image: route.query.image || "",
  title: route.query.title || "",
  location: route.query.location || "",
  price: Number(route.query.price) || 0,

  room: route.query.room || "",

  guests: route.query.guests || "",

  checkIn: route.query.checkIn || "",

  checkOut: route.query.checkOut || "",

  guestName: route.query.guestName || "",

  email: route.query.email || "",

  phone: route.query.phone || "",

  arrival: route.query.arrival || "",

  requests: route.query.requests || "",
};
import { ref } from "vue";

const paymentMethod = ref("card");
const gotoConfirmation = () => {
  router.push({
    path: "/confirmation",

    query: {
      id: "KS-" + Math.floor(Math.random() * 999999),

      title: hotel.title,

      image: hotel.image,

      location: hotel.location,

      price: hotel.price,

      room: hotel.room,

      guests: hotel.guests,

      checkIn: hotel.checkIn,

      checkOut: hotel.checkOut,

      guestName: hotel.guestName,

      email: hotel.email,

      phone: hotel.phone,

      arrival: hotel.arrival,

      requests: hotel.requests,
    },
  });
};
</script>

<template>
  <section
    class="py-14 pt-28 bg-linear-to-b from-[#F7F7F5] to-[#EFECE6] min-h-screen"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <StepPayment />

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        <!-- LEFT -->
        <div class="lg:col-span-2 space-y-8">
          <PaymentMethod @select-method="paymentMethod = $event" />

          <!-- Credit Card -->
          <CardForm :method="paymentMethod" />
        </div>

        <!-- RIGHT -->
        <div>
          <BookingSummary
            :image="hotel.image"
            :title="hotel.title"
            :location="hotel.location"
            type="hotel"
            :price="hotel.price"
            :total="hotel.price + 45"
            :onContinue="gotoConfirmation"
          />
        </div>
      </div>
    </div>
  </section>
</template>
