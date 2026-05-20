<script setup>
const booking = {
  title: "Angkor Wat Sunrise Photography Tour",

  location: "Siem Reap, Cambodia",

  image:
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop",

  rating: 4.9,

  reviews: 124,

  date: "Thu, Oct 24, 2024",

  time: "04:30 AM (Sunrise)",

  guests: 2,

  price: 85,

  serviceFee: 12.5,
};

const total = booking.price * booking.guests + booking.serviceFee;
</script>

<template>
  <div class="sticky top-24">
    <div
      class="bg-white rounded-4xl overflow-hidden shadow-sm border border-gray-100"
    >
      <!-- Image -->
      <div class="relative">
        <img :src="booking.image" class="w-full h-60 object-cover" />

        <!-- Rating -->
        <div
          class="absolute top-5 right-5 bg-[#F6C453] text-[#3B2A00] px-4 py-2 rounded-full font-semibold text-sm"
        >
          ★ {{ booking.rating }} ({{ booking.reviews }} reviews)
        </div>
      </div>

      <!-- Content -->
      <div class="p-8">
        <!-- Title -->
        <h2 class="text-4xl leading-tight font-bold text-[#0A1B47]">
          {{ booking.title }}
        </h2>

        <p class="mt-4 text-gray-500 flex items-center gap-2">
          📍 {{ booking.location }}
        </p>

        <!-- Divider -->
        <div class="border-t border-gray-100 my-8"></div>

        <!-- Info -->
        <div class="space-y-5">
          <div class="flex items-center justify-between">
            <span class="text-gray-500"> Date </span>

            <span class="font-semibold text-[#0A1B47]">
              {{ booking.date }}
            </span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-gray-500"> Time </span>

            <span class="font-semibold text-[#0A1B47]">
              {{ booking.time }}
            </span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-gray-500"> Guests </span>

            <span class="font-semibold text-[#0A1B47]">
              {{ booking.guests }} Participants
            </span>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-gray-100 my-8"></div>

        <!-- Pricing -->
        <div class="space-y-5">
          <div class="flex items-center justify-between">
            <span class="text-gray-500">
              ${{ booking.price.toFixed(2) }} × {{ booking.guests }}
            </span>

            <span class="font-medium text-[#0A1B47]">
              ${{ (booking.price * booking.guests).toFixed(2) }}
            </span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-gray-500"> Service Fee </span>

            <span class="font-medium text-[#0A1B47]">
              ${{ booking.serviceFee.toFixed(2) }}
            </span>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-gray-100 my-8"></div>

        <!-- Total -->
        <div class="flex items-end justify-between">
          <div>
            <p class="uppercase tracking-wide text-sm text-gray-400">
              Total Amount
            </p>

            <h2 class="text-5xl font-bold text-[#0A1B47] mt-2">
              ${{ total.toFixed(2) }}
            </h2>
          </div>

          <span class="text-green-600 font-semibold"> VAT Included </span>
        </div>

        <!-- Button -->
        <button
          class="mt-8 w-full bg-[#0A1B47] hover:bg-[#132B66] transition text-white py-5 rounded-2xl font-semibold text-xl"
        >
          Continue to Payment →
        </button>

        <!-- Bottom -->
        <p class="text-center text-gray-400 text-sm mt-5">
          Secure checkout powered by SerenityPay
        </p>
      </div>
    </div>

    <!-- Security -->
    <div class="flex items-center justify-center gap-10 mt-8 text-gray-400">
      <div class="flex flex-col items-center gap-2">
        <span class="text-2xl">🔒</span>

        <span class="text-sm"> Secure </span>
      </div>

      <div class="flex flex-col items-center gap-2">
        <span class="text-2xl">🎧</span>

        <span class="text-sm"> Support </span>
      </div>

      <div class="flex flex-col items-center gap-2">
        <span class="text-2xl">🏆</span>

        <span class="text-sm"> Trusted </span>
      </div>
    </div>
  </div>
</template>
