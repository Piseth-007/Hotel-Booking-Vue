<script setup>
const destinations = [
  {
    id: 1,
    title: "Siem Reap",
    description: "Ancient temples & luxury escapes",
    image:
      "https://images.unsplash.com/photo-1608037521244-f1c6c7635194?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Koh Rong",
    description: "Crystal beaches & island vibes",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Phnom Penh",
    description: "Culture, cuisine & city life",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop",
  },
];
</script>

<template>
  <section class="py-24 bg-[#F7F7F5]">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- Header -->
      <div class="flex items-end justify-between mb-14">
        <div>
          <p
            class="uppercase tracking-[0.3em] text-sm text-[#B8860B] font-semibold"
          >
            Destinations
          </p>

          <h2 class="mt-3 text-4xl md:text-5xl font-bold text-[#0A1B47]">
            Explore Cambodia
          </h2>
        </div>

        <button
          class="hidden md:block border border-[#0A1B47] text-[#0A1B47] hover:bg-[#0A1B47] hover:text-white transition px-6 py-3 rounded-full font-medium"
        >
          View All
        </button>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="destination in destinations"
          :key="destination.id"
          class="relative h-125 overflow-hidden rounded-4xl group cursor-pointer"
        >
          <!-- Image -->
          <img
            :src="destination.image"
            :alt="destination.title"
            class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"
          ></div>

          <!-- Content -->
          <div class="absolute bottom-8 left-8 text-white">
            <h3 class="text-3xl font-bold">
              {{ destination.title }}
            </h3>

            <p class="mt-2 text-gray-200">
              {{ destination.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
