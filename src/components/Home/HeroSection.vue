<script setup>
import {
  MapPin
} from "@lucide/vue";
</script>

<template>
  <section class="relative min-h-screen overflow-hidden pt-32">
    <div
      class="absolute inset-0 bg-cover bg-center scale-110"
      :style="{
        backgroundImage: `url('https://d37rmf1ynyg9aw.cloudfront.net/fit-in/1280x1280/data/v4/destinations/160af03f-fd62-4c45-a33f-d7b2167a0c01/resources/5138.jpg')`,
      }"
    ></div>
    <div
      class="absolute inset-0 bg-linear-to-b from-black/70 via-black/35 to-white"
    ></div>
    <div
      class="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24"
    >
      <div class="flex flex-col items-center text-center text-white">
        <h1
          class="max-w-5xl text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Discover Your Sanctuary in the Kingdom
        </h1>
        <p class="mt-5 max-w-3xl text-base md:text-lg text-gray-200 leading-8">
          Curated luxury stays and authentic Khmer experiences designed for the
          modern explorer.
        </p>
        <div
          class="w-full max-w-5xl mt-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-[30px] p-4 lg:p-5 shadow-2xl"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-white/10 rounded-2xl px-5 py-4 text-left">
              <p class="text-xs uppercase tracking-wide text-gray-300 mb-2">
                Destination
              </p>

              <div class="flex items-center gap-3">
                <MapPin class="w-5 h-5 text-gray-200" />

                <input
                  type="text"
                  placeholder="Where to?"
                  class="bg-transparent outline-none text-white placeholder:text-gray-300 w-full"
                />
              </div>
            </div>

            <!-- Dates -->
            <div class="bg-white/10 rounded-2xl px-5 py-4 text-left">
              <p class="text-xs uppercase tracking-wide text-gray-300 mb-2">
                Dates
              </p>

              <div class="flex items-center gap-3">
                <CalendarDays class="w-5 h-5 text-gray-200" />

                <input
                  type="text"
                  placeholder="Check-in – Check-out"
                  class="bg-transparent outline-none text-white placeholder:text-gray-300 w-full"
                />
              </div>
            </div>
            <div class="bg-white/10 rounded-2xl px-5 py-4 text-left">
              <p class="text-xs uppercase tracking-wide text-gray-300 mb-2">
                Guests
              </p>

              <div class="flex items-center gap-3">
                <Users class="w-5 h-5 text-gray-200" />

                <input
                  type="text"
                  placeholder="2 Adults"
                  class="bg-transparent outline-none text-white placeholder:text-gray-300 w-full"
                />
              </div>
            </div>
            <button
              class="bg-[#B8860B] hover:bg-[#D4A017] transition-all duration-300 rounded-2xl font-semibold flex items-center justify-center gap-2 text-white py-4 shadow-lg"
            >
              <Search class="w-5 h-5" />

              Explore
            </button>
          </div>
        </div>
      </div>
      <div class="hidden lg:flex justify-end mt-16">
        <div
          class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 flex items-center gap-4 text-white shadow-xl"
        >
          <div>
            <p class="text-sm text-gray-200">Siem Reap</p>

            <h3 class="text-3xl font-bold">28°C</h3>

            <p class="text-sm text-gray-300">Sunny & Clear</p>
          </div>

          <Sun class="w-10 h-10 text-yellow-300" />
        </div>
      </div>
    </div>
  </section>
</template>
