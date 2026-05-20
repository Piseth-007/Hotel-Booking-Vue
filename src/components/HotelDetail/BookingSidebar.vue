<template>
  <div class="sticky top-24 space-y-5">
    <!-- Card -->
    <div class="bg-white rounded-[28px] overflow-hidden shadow-sm">
      <!-- Image -->
      <div class="relative">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
          class="w-full h-55 object-cover"
        />

        <div
          class="absolute top-5 right-5 bg-[#FFF5DE] px-4 py-2 rounded-full text-[#B8860B] font-semibold"
        >
          ★ 4.9
        </div>
      </div>

      <!-- Content -->
      <div class="p-7">
        <!-- Price -->
        <div>
          <p class="text-sm text-gray-400">Starting from</p>

          <h2 class="text-5xl font-bold text-[#0A1B47]">
            $285
            <span class="text-lg text-gray-400 font-normal"> /night </span>
          </h2>
        </div>

        <!-- Inputs -->
        <div class="space-y-5 mt-8">
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-[#F5F5F5] rounded-2xl p-4">
              <p class="text-xs text-gray-400">CHECK IN</p>

              <h4 class="mt-2 font-semibold">Oct 24</h4>
            </div>

            <div class="bg-[#F5F5F5] rounded-2xl p-4">
              <p class="text-xs text-gray-400">CHECK OUT</p>

              <h4 class="mt-2 font-semibold">Oct 28</h4>
            </div>
          </div>

          <div class="bg-[#F5F5F5] rounded-2xl p-4">
            <p class="text-xs text-gray-400">GUESTS</p>

            <h4 class="mt-2 font-semibold">2 Adults</h4>
          </div>
        </div>

        <!-- Price -->
        <div class="border-t border-gray-100 mt-8 pt-8 space-y-4">
          <div class="flex justify-between">
            <span class="text-gray-500"> $285 x 4 nights </span>

            <span>$1140</span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500"> Service Fee </span>

            <span>$57</span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500"> Luxury Tax </span>

            <span>$114</span>
          </div>

          <div
            class="flex justify-between text-2xl font-bold text-[#0A1B47] pt-4"
          >
            <span>Total</span>

            <span>$1,311</span>
          </div>
        </div>

        <!-- Button -->
        <button
          class="mt-8 w-full bg-[#0A1B47] hover:bg-[#132B66] transition text-white py-5 rounded-2xl font-semibold text-lg"
        >
          Book Your Serenity Now
        </button>

        <p class="text-center text-sm text-gray-400 mt-4">
          You won't be charged yet
        </p>
      </div>
    </div>

    <!-- Guarantee -->
    <div class="bg-[#FFF5DE] rounded-3xl p-6">
      <h3 class="font-semibold text-[#B8860B]">✨ Best Price Guaranteed</h3>

      <p class="mt-3 text-sm text-gray-600 leading-6">
        Find a lower price elsewhere and we’ll match it plus give you a
        complimentary spa credit.
      </p>
    </div>
  </div>
</template>
