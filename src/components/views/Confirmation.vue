<script setup>
import { BadgeCheck, MapPin, Download } from "@lucide/vue";
import { ref } from "vue";
import { useRoute, RouterLink } from "vue-router";
import StepPayment from "../Payments/StepPayment.vue";

const route = useRoute();

const showPaymentModal = ref(false);

const booking = {
  id: route.query.id || "KS-984210",
  type: route.query.type?.toLowerCase() || "hotel",
  title: route.query.title || "KhmerStay",
  image:
    route.query.image ||
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  location: route.query.location || "",
  price: Number(route.query.price) || 0,
  room: route.query.room || "No Room Selected",
  guests: route.query.guests || "1",
  checkIn: route.query.checkIn || "",
  checkOut: route.query.checkOut || "",
  date: route.query.date || "",
  time: route.query.time || "",
  guestName: route.query.guestName || "Guest",
  email: route.query.email || "",
  phone: route.query.phone || "",
  arrival: route.query.arrival || "",
  requests: route.query.requests || "",
};
</script>

<template>
  <section class="min-h-screen bg-[#F8F6F2] pt-28 pb-20">
    <div class="max-w-7xl mx-auto px-5">
      <StepPayment :currentStep="3" />

      <!-- Banner -->

      <div
        class="bg-linear-to-r from-[#0A1B47] to-[#122B66] rounded-[36px] p-8 lg:p-10 text-center text-white shadow-xl mt-8"
      >
        <div
          class="w-24 h-24 rounded-full bg-[#B8860B] mx-auto flex items-center justify-center"
        >
          <BadgeCheck class="w-12 h-12" />
        </div>

        <h1 class="text-4xl lg:text-5xl font-bold mt-6">
          Booking Confirmed 🎉
        </h1>

        <p class="mt-4 text-white/80">
          Your booking at
          {{ booking.title }}
          has been confirmed.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8 mt-10">
        <!-- LEFT -->

        <div class="lg:col-span-2 space-y-8">
          <div class="bg-white rounded-4xl p-8 shadow-sm">
            <img
              :src="booking.image"
              class="rounded-3xl h-80 w-full object-cover"
            />
            <div class="mt-8">
              <div class="flex justify-between flex-wrap gap-4">
                <div>
                  <h2 class="text-4xl font-bold">
                    {{ booking.title }}
                  </h2>
                  <p class="flex gap-2 mt-3 text-gray-500">
                    <MapPin class="w-5" />

                    {{ booking.location }}
                  </p>
                </div>
                <span
                  class="bg-green-100 text-green-700 px-5 py-3 rounded-full"
                >
                  Confirmed
                </span>
              </div>

              <!-- Dynamic Grid -->
              <div
                class="grid gap-4 mt-8"
                :class="
                  booking.type === 'experience'
                    ? 'grid-cols-1 md:grid-cols-3'
                    : 'grid-cols-1 md:grid-cols-4'
                "
              >
                <!-- HOTEL -->

                <template v-if="booking.type !== 'experience'">
                  <div class="bg-[#F7F7F5] p-5 rounded-2xl">
                    <p class="text-gray-400">Check In</p>

                    <h3 class="font-bold text-xl">
                      {{ booking.checkIn || "Not Selected" }}
                    </h3>
                  </div>

                  <div class="bg-[#F7F7F5] p-5 rounded-2xl">
                    <p class="text-gray-400">Check Out</p>

                    <h3 class="font-bold text-xl">
                      {{ booking.checkOut || "Not Selected" }}
                    </h3>
                  </div>

                  <div class="bg-[#F7F7F5] p-5 rounded-2xl">
                    <p class="text-gray-400">Guests</p>

                    <h3 class="font-bold text-xl">
                      {{ booking.guests }}
                    </h3>
                  </div>

                  <div class="bg-[#F7F7F5] p-5 rounded-2xl">
                    <p class="text-gray-400">Room</p>

                    <h3 class="font-bold text-xl">
                      {{ booking.room }}
                    </h3>
                  </div>
                </template>

                <!-- EXPERIENCE -->

                <template v-else>
                  <div class="bg-[#F7F7F5] p-5 rounded-2xl">
                    <p class="text-gray-400">Date</p>

                    <h3 class="font-bold text-xl">
                      {{ booking.date }}
                    </h3>
                  </div>

                  <div class="bg-[#F7F7F5] p-5 rounded-2xl">
                    <p class="text-gray-400">Time Slot</p>

                    <h3 class="font-bold text-xl">
                      {{ booking.time }}
                    </h3>
                  </div>

                  <div class="bg-[#F7F7F5] p-5 rounded-2xl">
                    <p class="text-gray-400">Participants</p>

                    <h3 class="font-bold text-xl">
                      {{ booking.guests }}
                    </h3>
                  </div>
                </template>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-5">
            <button
              @click="showPaymentModal = true"
              class="bg-[#0A1B47] text-white py-5 rounded-2xl flex items-center justify-center gap-3"
            >
              <Download class="w-5 h-5" />

              Download Receipt
            </button>

            <RouterLink
              to="/"
              class="border-2 border-[#0A1B47] rounded-2xl py-5 text-center"
            >
              Explore More
            </RouterLink>
          </div>
        </div>

        <!-- RIGHT -->

        <div>
          <div class="bg-white p-8 rounded-4xl shadow-sm sticky top-28">
            <h2 class="font-bold text-2xl">Booking Summary</h2>

            <div class="space-y-5 mt-6">
              <div>
                <p class="text-gray-400">Booking ID</p>

                <h3>
                  {{ booking.id }}
                </h3>
              </div>

              <div>
                <p class="text-gray-400">Guest</p>

                <h3>
                  {{ booking.guestName }}
                </h3>
              </div>

              <div>
                <p class="text-gray-400">Email</p>

                <h3>
                  {{ booking.email }}
                </h3>
              </div>

              <div>
                <p class="text-gray-400">Phone</p>

                <h3>
                  {{ booking.phone }}
                </h3>
              </div>
            </div>

            <div class="border-t my-6"></div>

            <div class="flex justify-between">
              <span> Total Paid </span>

              <span class="font-bold text-2xl">
                ${{ Number(booking.price).toLocaleString() }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal -->

  <transition name="fade">
    <div
      v-if="showPaymentModal"
      class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-5"
    >
      <div class="bg-white rounded-4xl p-8 max-w-md w-full">
        <div
          class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto"
        >
          <BadgeCheck class="w-10 h-10 text-green-600" />
        </div>

        <h2 class="text-center text-3xl font-bold mt-6">Payment Successful</h2>

        <button
          class="w-full mt-8 bg-[#0A1B47] text-white py-4 rounded-2xl"
          @click="showPaymentModal = false"
        >
          Continue
        </button>
      </div>
    </div>
  </transition>
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
