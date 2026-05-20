<script setup>
const destinations = [
  {
    title: "Siem Reap",
    description: "The gateway to the Angkor ruins and vibrant Khmer culture.",
    image:
      "https://rootsabroadtravel.com/wp-content/uploads/2024/03/Wonderful-Things-to-Do-in-Siem-Reap-Cambodia-Beyond-Angkor-Wat.jpg",
  },

  {
    title: "Koh Rong",
    description: "Island escapes and azure waters.",
    image:
      "https://www.i-escape.com/image/hotel/the-royal-sands/overview/323118.jpg",
  },

  {
    title: "Kampot",
    description: "Colonial charm and pepper plantations.",
    image: "https://www.khmertimeskh.com/wp-content/uploads/2024/09/88558.jpg",
  },

  {
    title: "Kep",
    description: "Seaside elegance and world-famous crab markets.",
    image:
      "https://www.asiakingtravel.com/cuploads/files/Kep-2(1).jpg",
  },
];
</script>

<template>
  <section class="py-24 bg-[#F7F7F5]">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="mb-14">
        <h2 class="text-4xl md:text-5xl font-bold text-[#0A1B47]">
          Explore the Kingdom
        </h2>

        <p class="mt-4 text-lg text-gray-500 max-w-2xl leading-8">
          From ancient temples to pristine islands, discover Cambodia's hidden
          gems.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Siem Reap -->
        <div
          class="lg:col-span-2 relative h-90 overflow-hidden rounded-[28px] group"
        >
          <img
            :src="destinations[0].image"
            class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          <div
            class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"
          ></div>

          <!-- Badge -->
          <div
            class="absolute top-5 right-5 bg-[#E0B84C] text-[#0A1B47] text-xs font-bold px-4 py-2 rounded-full"
          >
            Trending
          </div>

          <div class="absolute bottom-6 left-6 text-white">
            <h3 class="text-3xl font-bold">
              {{ destinations[0].title }}
            </h3>

            <p class="mt-2 text-gray-200 max-w-lg">
              {{ destinations[0].description }}
            </p>
          </div>
        </div>

        <!-- Koh Rong -->
        <div class="relative h-90 overflow-hidden rounded-[28px] group">
          <img
            :src="destinations[1].image"
            class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          <div
            class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"
          ></div>

          <div class="absolute bottom-6 left-6 text-white">
            <h3 class="text-2xl font-bold">
              {{ destinations[1].title }}
            </h3>

            <p class="mt-2 text-sm text-gray-200">
              {{ destinations[1].description }}
            </p>
          </div>
        </div>

        <!-- Kampot -->
        <div class="relative h-55 overflow-hidden rounded-[28px] group">
          <img
            :src="destinations[2].image"
            class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          <div
            class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"
          ></div>

          <div class="absolute bottom-5 left-5 text-white">
            <h3 class="text-2xl font-bold">
              {{ destinations[2].title }}
            </h3>

            <p class="mt-1 text-sm text-gray-200">
              {{ destinations[2].description }}
            </p>
          </div>
        </div>

        <!-- Kep -->
        <div
          class="lg:col-span-2 relative h-55 overflow-hidden rounded-[28px] group"
        >
          <img
            :src="destinations[3].image"
            class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          <div
            class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"
          ></div>

          <div class="absolute bottom-5 left-5 text-white">
            <h3 class="text-3xl font-bold">
              {{ destinations[3].title }}
            </h3>

            <p class="mt-2 text-gray-200 max-w-lg">
              {{ destinations[3].description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
