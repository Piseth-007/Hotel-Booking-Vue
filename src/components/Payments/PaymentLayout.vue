<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import BookingSummary from "../common/BookingSummary.vue";
import PaymentMethod from "./PaymentMethod.vue";
import StepPayment from "./StepPayment.vue";

const route = useRoute();
const router = useRouter();

const paymentMethod = ref("card");
const showQRModal = ref(false);

const booking = {
  type: route.query.type || "hotel",
  image: route.query.image || "",
  title: route.query.title || "",
  location: route.query.location || "",
  price: Number(route.query.price) || 0,
  total: Number(route.query.total) || 0,
  room: route.query.room || "",
  guests: route.query.guests || "",
  checkIn: route.query.checkIn || "",
  checkOut: route.query.checkOut || "",
  date: route.query.date || "",
  time: route.query.time || "",
  guestName: route.query.guestName || "",
  email: route.query.email || "",
  phone: route.query.phone || "",
  arrival: route.query.arrival || "",
  requests: route.query.requests || "",
};

const gotoConfirmation = () => {
  router.push({
    path: "/confirmation",
    query: {
      id: "KS-" + Math.floor(100000 + Math.random() * 900000),
      type: booking.type,
      title: booking.title,
      image: booking.image,
      location: booking.location,
      price: booking.total || booking.price,
      room: booking.room,
      guests: booking.guests,
      checkIn: booking.checkIn,
      checkOut: booking.checkOut,
      date: booking.date,
      time: booking.time,
      guestName: booking.guestName,
      email: booking.email,
      phone: booking.phone,
      arrival: booking.arrival,
      requests: booking.requests,
    },
  });
};

const handlePayment = () => {
  showQRModal.value = true;
};

const confirmPayment = () => {
  showQRModal.value = false;

  gotoConfirmation();
};
</script>

<template>
  <section
    class="min-h-screen py-14 pt-28 bg-linear-to-b from-[#F7F7F5] to-[#EFECE6]"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <StepPayment :current-step="2" />

      <div class="grid lg:grid-cols-3 gap-10 mt-10">
        <!-- LEFT -->

        <div class="lg:col-span-2 space-y-8">
          <PaymentMethod @select-method="paymentMethod = $event" />
        </div>

        <!-- RIGHT -->

        <BookingSummary
          :image="booking.image"
          :title="booking.title"
          :location="booking.location"
          type="payment"
          :price="booking.price"
          :guests="booking.guests"
          :date="booking.time || `${booking.checkIn} - ${booking.checkOut}`"
          :total="booking.total || booking.price"
          :onContinue="handlePayment"
        />
      </div>
    </div>

    <!-- Modal -->

    <transition name="fade">
      <div
        v-if="showQRModal"
        class="fixed inset-0 z-50 bg-black/60 flex justify-center items-center px-5 py-10 overflow-y-auto"
      >
        <div class="bg-white rounded-[36px] p-8 max-w-lg w-full relative">
          <button
            @click="showQRModal = false"
            class="absolute right-6 top-5 text-2xl"
          >
            ×
          </button>

          <h2 class="text-3xl font-bold text-center text-[#0A1B47]">
            {{
              paymentMethod === "card"
                ? "Complete Card Payment"
                : "Scan QR Payment"
            }}
          </h2>

          <p class="text-center text-gray-500 mt-3">
            {{
              paymentMethod === "card"
                ? "Secure card checkout"
                : paymentMethod.toUpperCase()
            }}
          </p>

          <!-- Card Form -->

          <div v-if="paymentMethod === 'card'" class="space-y-6 mt-10">
            <input
              placeholder="Name on Card"
              class="w-full border rounded-2xl px-5 py-4"
            />

            <input
              placeholder="1234 5678 9012 3456"
              class="w-full border rounded-2xl px-5 py-4"
            />

            <div class="grid grid-cols-2 gap-5">
              <input placeholder="MM/YY" class="border rounded-2xl px-5 py-4" />

              <input placeholder="CVV" class="border rounded-2xl px-5 py-4" />
            </div>
          </div>

          <!-- QR -->

          <div v-else class="bg-[#F7F7F5] rounded-3xl p-4 mt-5">
            <img src="/image.png" class="w-64 mx-auto" />
          </div>

          <div class="text-center mt-8">
            <p class="text-gray-400">Total Payment</p>

            <h3 class="text-4xl font-bold text-[#0A1B47]">
              ${{ booking.total || booking.price }}
            </h3>
          </div>

          <button
            @click="confirmPayment"
            class="w-full mt-8 bg-[#0A1B47] text-white py-5 rounded-2xl"
          >
            {{ paymentMethod === "card" ? "Pay Now" : "I Have Paid" }}
          </button>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
