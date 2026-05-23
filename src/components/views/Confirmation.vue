<script setup>
import {
  BadgeCheck,
  MapPin,
  BedDouble,
  Users,
  CalendarDays,
  Download,
  ArrowRight,
} from "@lucide/vue";

import { useRoute, RouterLink } from "vue-router";

const route = useRoute();

const booking = {
  id: route.query.id || "KS-984210",

  title: route.query.title || "KhmerStay Resort",

  image:
    route.query.image ||
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop",

  location: route.query.location || "Siem Reap, Cambodia",

  price: Number(route.query.price) || 0,

  room: route.query.room || "Royal Suite",

  guests: route.query.guests || "2 Adults",

  checkIn: route.query.checkIn || "Dec 12, 2024",

  checkOut: route.query.checkOut || "Dec 15, 2024",

  guestName: route.query.guestName || "Guest",

  email: route.query.email || "",

  phone: route.query.phone || "",

  arrival: route.query.arrival || "",

  requests: route.query.requests || "",
};
</script>

<template>
  <section
    class="min-h-screen bg-linear-to-b from-[#F7F7F5] to-[#EFECE6] pt-28 pb-24"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- Steps -->
      <div class="flex items-center justify-center mb-20">
        <!-- Step 1 -->
        <div class="flex flex-col items-center">
          <div
            class="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xl"
          >
            ✓
          </div>

          <span class="mt-4 font-semibold text-[#0A1B47]"> Details </span>
        </div>

        <div class="w-20 md:w-36 h-0.5 bg-green-600 mx-4"></div>

        <!-- Step 2 -->
        <div class="flex flex-col items-center">
          <div
            class="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xl"
          >
            ✓
          </div>

          <span class="mt-4 font-semibold text-[#0A1B47]"> Payment </span>
        </div>

        <div class="w-20 md:w-36 h-0.5 bg-[#B8860B] mx-4"></div>

        <!-- Step 3 -->
        <div class="flex flex-col items-center">
          <div
            class="w-16 h-16 rounded-full bg-[#B8860B] text-white flex items-center justify-center font-bold text-xl shadow-lg"
          >
            3
          </div>

          <span class="mt-4 font-semibold text-[#B8860B]"> Confirm </span>
        </div>
      </div>

      <!-- Hero Card -->
      <div class="bg-white rounded-[40px] overflow-hidden shadow-sm">
        <!-- Image -->
        <div class="relative h-105">
          <img :src="booking.image" class="w-full h-full object-cover" />

          <div class="absolute inset-0 bg-black/55"></div>

          <div
            class="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >
            <div
              class="w-28 h-28 rounded-full bg-[#B8860B] flex items-center justify-center shadow-2xl"
            >
              <BadgeCheck class="w-14 h-14 text-white" />
            </div>

            <h1 class="mt-8 text-6xl md:text-7xl font-bold text-white">
              Booking Confirmed
            </h1>

            <p class="mt-6 text-xl leading-9 text-gray-200 max-w-3xl">
              Your luxury escape at
              {{ booking.title }}
              has been reserved successfully.
            </p>
          </div>
        </div>

        <!-- Content -->
        <div class="p-10 lg:p-14">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <!-- LEFT -->
            <div class="lg:col-span-2 space-y-8">
              <!-- Booking ID -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-[#F7F7F5] rounded-4xl p-8">
                  <p class="uppercase text-sm tracking-[0.3em] text-gray-400">
                    Booking ID
                  </p>

                  <h2 class="mt-5 text-5xl font-bold text-[#0A1B47]">
                    {{ booking.id }}
                  </h2>
                </div>

                <div class="bg-[#0A1B47] rounded-4xl p-8 text-white">
                  <p class="uppercase text-sm tracking-[0.3em] text-white/60">
                    Total Paid
                  </p>

                  <h2 class="mt-5 text-5xl font-bold">${{ booking.price }}</h2>

                  <p class="mt-4 text-white/60">Taxes included</p>
                </div>
              </div>

              <!-- Main Card -->
              <div class="bg-[#F7F7F5] rounded-[36px] p-8">
                <!-- Hotel -->
                <div class="flex items-start justify-between gap-6">
                  <div>
                    <h2 class="text-4xl font-bold text-[#0A1B47]">
                      {{ booking.title }}
                    </h2>

                    <div class="flex items-center gap-3 mt-4 text-gray-500">
                      <MapPin class="w-5 h-5" />

                      {{ booking.location }}
                    </div>
                  </div>

                  <div
                    class="bg-[#B8860B] text-white px-5 py-3 rounded-full font-semibold"
                  >
                    Confirmed
                  </div>
                </div>

                <!-- Divider -->
                <div class="border-t border-gray-200 my-8"></div>

                <!-- Dates -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Check In -->
                  <div class="bg-white rounded-3xl p-6">
                    <p class="text-sm uppercase tracking-widest text-gray-400">
                      Check-In
                    </p>

                    <h3 class="mt-4 text-2xl font-bold text-[#0A1B47]">
                      {{ booking.checkIn }}
                    </h3>
                  </div>

                  <!-- Check Out -->
                  <div class="bg-white rounded-3xl p-6">
                    <p class="text-sm uppercase tracking-widest text-gray-400">
                      Check-Out
                    </p>

                    <h3 class="mt-4 text-2xl font-bold text-[#0A1B47]">
                      {{ booking.checkOut }}
                    </h3>
                  </div>
                </div>

                <!-- Tags -->
                <div class="flex flex-wrap gap-4 mt-8">
                  <div
                    class="bg-white px-5 py-4 rounded-full flex items-center gap-3"
                  >
                    <BedDouble class="w-5 h-5 text-[#0A1B47]" />

                    {{ booking.room }}
                  </div>

                  <div
                    class="bg-white px-5 py-4 rounded-full flex items-center gap-3"
                  >
                    <Users class="w-5 h-5 text-[#0A1B47]" />

                    {{ booking.guests }}
                  </div>

                  <div
                    class="bg-white px-5 py-4 rounded-full flex items-center gap-3"
                  >
                    <CalendarDays class="w-5 h-5 text-[#0A1B47]" />

                    3 Nights
                  </div>
                </div>
              </div>

              <!-- Actions -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button
                  class="bg-[#0A1B47] hover:bg-[#132B66] transition text-white py-5 rounded-2xl font-semibold flex items-center justify-center gap-3"
                >
                  <Download class="w-5 h-5" />

                  Download Receipt
                </button>

                <RouterLink
                  to="/"
                  class="border-2 border-[#0A1B47] text-[#0A1B47] hover:bg-[#0A1B47] hover:text-white transition py-5 rounded-2xl font-semibold flex items-center justify-center gap-3"
                >
                  Explore More

                  <ArrowRight class="w-5 h-5" />
                </RouterLink>
              </div>
            </div>

            <!-- RIGHT -->
            <div class="space-y-8">
              <!-- Guest -->
              <div class="bg-[#F7F7F5] rounded-[36px] p-8">
                <p class="uppercase text-sm tracking-[0.3em] text-gray-400">
                  Guest Information
                </p>

                <h2 class="mt-5 text-4xl font-bold text-[#0A1B47]">
                  {{ booking.guestName }}
                </h2>

                <div class="border-t border-gray-200 my-8"></div>

                <div class="space-y-5">
                  <div>
                    <p class="text-sm text-gray-400">Email</p>

                    <h3 class="mt-1 font-semibold text-[#0A1B47]">
                      {{ booking.email }}
                    </h3>
                  </div>

                  <div>
                    <p class="text-sm text-gray-400">Phone</p>

                    <h3 class="mt-1 font-semibold text-[#0A1B47]">
                      {{ booking.phone }}
                    </h3>
                  </div>

                  <div>
                    <p class="text-sm text-gray-400">Arrival Time</p>

                    <h3 class="mt-1 font-semibold text-[#0A1B47]">
                      {{ booking.arrival }}
                    </h3>
                  </div>

                  <div v-if="booking.requests">
                    <p class="text-sm text-gray-400">Special Requests</p>

                    <p class="mt-2 leading-7 text-gray-600">
                      {{ booking.requests }}
                    </p>
                  </div>
                </div>

                <div class="border-t border-gray-200 my-8"></div>

                <div class="flex items-center justify-between">
                  <span class="text-gray-500"> Status </span>

                  <div
                    class="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    Confirmed
                  </div>
                </div>
              </div>

              <!-- QR -->
              <div
                class="bg-[#0A1B47] rounded-[36px] p-8 text-center text-white"
              >
                <h2 class="text-4xl font-bold">Digital Check-In</h2>

                <div
                  class="w-60 h-60 mx-auto mt-8 bg-white rounded-[28px] flex items-center justify-center"
                >
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=KhmerStay"
                    class="w-44 h-44"
                  />
                </div>

                <p class="mt-8 text-white/70 leading-8">
                  Scan this code at reception for a seamless arrival experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
