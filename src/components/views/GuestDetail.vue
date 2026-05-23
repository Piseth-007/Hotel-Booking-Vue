<script setup>
import { ref } from "vue";

import { useRoute, useRouter } from "vue-router";

import BookingSummary from "../common/BookingSummary.vue";

const route = useRoute();

const router = useRouter();

const booking = {
  image: route.query.image,

  title: route.query.title,

  location: route.query.location,

  price: Number(route.query.price) || 0,
};

/* FORM */

const fullName = ref("");

const email = ref("");

const phone = ref("");

const arrival = ref("");

const requests = ref("");

const gotoPayment = () => {
  router.push({
    path: "/paymentlayout",

    query: {
      image: booking.image,

      title: booking.title,

      location: booking.location,

      price: booking.price,

      guestName: fullName.value,

      email: email.value,

      phone: phone.value,

      arrival: arrival.value,

      requests: requests.value,

      room: "Royal Suite",

      guests: "2 Adults",

      checkIn: "Dec 12, 2024",

      checkOut: "Dec 15, 2024",
    },
  });
};
</script>
<template>
  <section class="min-h-screen bg-[#F7F7F5] pt-28 pb-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- Steps -->
      <div class="flex items-center justify-center mb-20">
        <!-- Step 1 -->
        <div class="flex flex-col items-center">
          <div
            class="w-16 h-16 rounded-full bg-[#0A1B47] text-white flex items-center justify-center font-bold text-2xl"
          >
            1
          </div>

          <span class="mt-4 font-semibold text-[#0A1B47]"> Details </span>
        </div>

        <div class="w-20 md:w-36 h-0.5 bg-gray-300 mx-4"></div>

        <!-- Step 2 -->
        <div class="flex flex-col items-center">
          <div
            class="w-16 h-16 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold text-2xl"
          >
            2
          </div>

          <span class="mt-4 font-semibold text-gray-500"> Payment </span>
        </div>

        <div class="w-20 md:w-36 h-0.5 bg-gray-300 mx-4"></div>

        <!-- Step 3 -->
        <div class="flex flex-col items-center">
          <div
            class="w-16 h-16 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold text-2xl"
          >
            3
          </div>

          <span class="mt-4 font-semibold text-gray-500"> Confirm </span>
        </div>
      </div>

      <!-- Main Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <!-- LEFT -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-[36px] p-10 border border-gray-200">
            <!-- Header -->
            <div class="mb-14">
              <h1 class="text-6xl font-bold text-[#0A1B47]">Guest Details</h1>
            </div>

            <!-- Form -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
              <!-- Full Name -->
              <div>
                <label
                  class="block text-sm font-semibold tracking-wide text-[#0A1B47]"
                >
                  Full Name
                </label>

                <input
                  v-model="fullName"
                  type="text"
                  placeholder="John Doe"
                  class="w-full mt-4 border-b border-gray-300 bg-transparent py-4 outline-none placeholder:text-gray-400 focus:border-[#0A1B47]"
                  required
                />
              </div>

              <!-- Email -->
              <div>
                <label
                  class="block text-sm font-semibold tracking-wide text-[#0A1B47]"
                >
                  Email Address
                </label>

                <input
                  v-model="email"
                  type="email"
                  placeholder="john@example.com"
                  class="w-full mt-4 border-b border-gray-300 bg-transparent py-4 outline-none placeholder:text-gray-400 focus:border-[#0A1B47]"
                  required
                />
              </div>

              <!-- Phone -->
              <div>
                <label
                  class="block text-sm font-semibold tracking-wide text-[#0A1B47]"
                >
                  Phone Number
                </label>

                <input
                  v-model="phone"
                  type="text"
                  placeholder="+855 00 000 000"
                  class="w-full mt-4 border-b border-gray-300 bg-transparent py-4 outline-none placeholder:text-gray-400 focus:border-[#0A1B47]"
                  required
                />
              </div>

              <!-- Arrival -->
              <div>
                <label
                  class="block text-sm font-semibold tracking-wide text-[#0A1B47]"
                >
                  Estimated Arrival Time
                </label>

                <select
                  v-model="arrival"
                  class="w-full mt-4 border-b border-gray-300 bg-transparent py-4 outline-none text-gray-500 focus:border-[#0A1B47]"
                >
                  <option>I don't know yet</option>

                  <option>Morning</option>

                  <option>Afternoon</option>

                  <option>Evening</option>
                </select>
              </div>
            </div>

            <!-- Special Request -->
            <div class="mt-12">
              <label
                class="block text-sm font-semibold tracking-wide text-[#0A1B47]"
              >
                Special Requests
              </label>

              <textarea
                v-model="requests"
                rows="5"
                placeholder="Dietary requirements, accessibility needs, or celebrations..."
                class="w-full mt-4 border-b border-gray-300 bg-transparent py-4 outline-none resize-none placeholder:text-gray-400 focus:border-[#0A1B47]"
              ></textarea>
            </div>
          </div>

          <!-- Security -->
          <div
            class="mt-8 bg-[#F6EAC7] border border-[#E5D3A0] rounded-[28px] p-6 flex items-start gap-5"
          >
            <div class="text-2xl">🛡️</div>

            <div>
              <h3 class="font-bold text-[#8B6B00]">Peace of Mind Guarantee</h3>

              <p class="mt-2 text-gray-700 leading-7">
                Your personal information is encrypted and protected. We only
                share details necessary for your stay.
              </p>
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div>
          <BookingSummary
            type="hotel"
            :image="booking.image"
            :title="booking.title"
            :location="booking.location"
            :price="booking.price"
            :total="booking.price"
            :onContinue="gotoPayment"
          />
        </div>
      </div>
    </div>
  </section>
</template>
