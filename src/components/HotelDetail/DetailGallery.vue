<script setup>
const gallery = [
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
];
</script>

<template>
  <section>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <!-- Main Image -->
      <div class="lg:col-span-2 relative overflow-hidden rounded-[28px]">
        <img
          :src="gallery[0]"
          alt=""
          class="w-full h-155 object-cover hover:scale-105 transition duration-700"
        />

        <!-- Photos Button -->
        <button
          class="absolute bottom-5 left-5 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium"
        >
          1 / 12 Photos
        </button>
      </div>

      <!-- Side Images -->
      <div class="space-y-5">
        <!-- Top -->
        <div class="overflow-hidden rounded-[28px]">
          <img
            :src="gallery[1]"
            alt=""
            class="w-full h-75 object-cover hover:scale-105 transition duration-700"
          />
        </div>

        <!-- Bottom -->
        <div class="relative overflow-hidden rounded-[28px]">
          <img
            :src="gallery[2]"
            alt=""
            class="w-full h-75 object-cover hover:scale-105 transition duration-700"
          />

          <!-- Floating Card -->
          <div
            class="absolute bottom-0 left-0 right-0 bg-white p-5 rounded-t-3xl"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-400">Starting from</p>

                <h3 class="text-4xl font-bold text-[#0A1B47]">
                  $285
                  <span class="text-base font-normal text-gray-400">
                    /night
                  </span>
                </h3>
              </div>

              <div
                class="bg-[#FFF5DE] px-4 py-2 rounded-full text-[#B8860B] font-semibold text-sm"
              >
                ★ 4.9
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Info -->
    <div class="flex items-center gap-6 mt-4 text-sm text-gray-500">
      <span> Siem Reap, Cambodia</span>

      <span class="hover:text-[#0A1B47] cursor-pointer"> View on Map </span>
    </div>
  </section>
</template>
