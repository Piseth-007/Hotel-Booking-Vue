<template>
  <div class="sticky top-24">
    <div
      class="bg-white rounded-[28px] overflow-hidden shadow-sm"
    >
      <!-- Map -->
      <div class="relative">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
          class="w-full h-180 object-cover"
        />

        <!-- Floating Card -->
        <div
          class="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-5 shadow-xl"
        >
          <h3
            class="text-2xl font-bold text-[#0A1B47]"
          >
            Quick View
          </h3>

          <p class="mt-2 text-gray-500">
            Explore interactive map features
          </p>

          <button
            class="mt-5 w-full bg-[#0A1B47] hover:bg-[#132B66] transition text-white py-4 rounded-xl font-semibold"
          >
            Expand Map
          </button>
        </div>
      </div>
    </div>
  </div>
</template>