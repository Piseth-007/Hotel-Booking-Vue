<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const destinations = [
  {
    title: "Siem Reap",
    slug: "siem-reap",

    description: "The gateway to the Angkor ruins and vibrant Khmer culture.",

    image:
      "https://rootsabroadtravel.com/wp-content/uploads/2024/03/Wonderful-Things-to-Do-in-Siem-Reap-Cambodia-Beyond-Angkor-Wat.jpg",

    className: "lg:col-span-2 h-90",

    trending: true,
  },

  {
    title: "Koh Rong",
    slug: "koh-rong",

    description: "Island escapes and azure waters.",

    image:
      "https://www.i-escape.com/image/hotel/the-royal-sands/overview/323118.jpg",

    className: "h-90",
  },

  {
    title: "Kampot",
    slug: "kampot",

    description: "Colonial charm and pepper plantations.",

    image: "https://www.khmertimeskh.com/wp-content/uploads/2024/09/88558.jpg",

    className: "h-55",
  },

  {
    title: "Kep",
    slug: "kep",

    description: "Seaside elegance and world-famous crab markets.",

    image: "https://www.asiakingtravel.com/cuploads/files/Kep-2(1).jpg",

    className: "lg:col-span-2 h-55",
  },
];

const gotoDestination = (slug) => {
  router.push(`/destination/${slug}`);
};
</script>

<template>
  <section class="py-24 bg-[#F7F7F5]">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- Header -->
      <div class="mb-14">
        <h2 class="text-4xl md:text-5xl font-bold text-[#0A1B47]">
          Explore the Kingdom
        </h2>

        <p class="mt-4 text-lg text-gray-500 max-w-2xl leading-8">
          From ancient temples to pristine islands, discover Cambodia's hidden
          gems.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div
          v-for="destination in destinations"
          :key="destination.slug"
          @click="gotoDestination(destination.slug)"
          :class="destination.className"
          class="relative overflow-hidden rounded-[28px] group cursor-pointer"
        >
          <img
            :src="destination.image"
            class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div
            class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"
          ></div>
          <div
            v-if="destination.trending"
            class="absolute top-5 right-5 bg-[#E0B84C] text-[#0A1B47] text-xs font-bold px-4 py-2 rounded-full"
          >
            Trending
          </div>
          <div class="absolute bottom-6 left-6 text-white">
            <h3 class="text-3xl font-bold">
              {{ destination.title }}
            </h3>

            <p class="mt-2 text-gray-200 max-w-lg">
              {{ destination.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
