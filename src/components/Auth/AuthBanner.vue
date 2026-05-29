<template>
  <div
    class="hidden lg:flex relative overflow-hidden rounded-[40px] min-h-187.5"
  >
    <!-- Background -->

    <img
      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Overlay -->

    <div
      class="absolute inset-0 bg-linear-to-t from-[#0A1B47]/95 via-[#0A1B47]/40 to-black/20"
    ></div>

    <!-- Content -->

    <div class="relative z-10 flex flex-col justify-between p-12 text-white">
      <div>
        <span
          class="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm"
        >
          KhmerStay
        </span>

        <h1 class="text-5xl font-bold leading-tight mt-8">
          Explore Cambodia
          <br />

          Stay in Luxury
        </h1>

        <p class="mt-6 text-gray-200 text-lg max-w-md">
          Discover curated stays, unforgettable experiences, and premium
          destinations.
        </p>
      </div>

      <!-- Bottom Card -->

      <div class="bg-white/15 backdrop-blur-md rounded-3xl p-6">
        <p class="text-sm text-gray-200">Trusted by travelers</p>

        <h3 class="text-4xl font-bold mt-2">15K+</h3>

        <p class="text-gray-300">bookings across Cambodia</p>
      </div>
    </div>
  </div>
</template>
