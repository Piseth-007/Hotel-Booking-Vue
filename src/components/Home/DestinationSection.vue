<script setup>
const destinations = [
  {
    title: "Siem Reap",
    description: "The gateway to the Angkor ruins and vibrant Khmer culture.",
    image:
      "https://images.unsplash.com/photo-1608037521244-f1c6c7635194?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Koh Rong",
    description: "Island escapes and azure waters.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Kampot",
    description: "Colonial charm and pepper plantations.",
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Kep",
    description: "Seaside elegance and world-famous crab markets.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
];
</script>

<template>
  <section class="py-24 bg-[#F7F7F5]">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- Heading -->
      <div class="mb-14">
        <h2 class="text-4xl md:text-5xl font-bold text-[#0A1B47]">
          Explore the Kingdom
        </h2>

        <p class="mt-4 text-lg text-gray-500 max-w-2xl leading-8">
          From ancient temples to pristine islands, discover Cambodia's hidden
          gems.
        </p>
      </div>

      <!-- REAL MATCHING GRID -->
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
