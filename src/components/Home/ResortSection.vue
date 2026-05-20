<script setup>
import { ChevronLeft, ChevronRight, Star } from "@lucide/vue";
import { ref } from "vue";

const scrollContainer = ref(null);

const resorts = [
  {
    id: 1,
    title: "Phum Baitang Resort",
    location: "Siem Reap",
    price: "$450",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Song Saa Private Island",
    location: "Koh Rong",
    price: "$720",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Raffles Hotel Le Royal",
    location: "Phnom Penh",
    price: "$390",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    title: "Shinta Mani Wild",
    location: "Cardamom Mountains",
    price: "$980",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    title: "Six Senses Krabey Island",
    location: "Sihanoukville",
    price: "$850",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
  },
];

const scrollLeft = () => {
  scrollContainer.value.scrollBy({
    left: -350,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  scrollContainer.value.scrollBy({
    left: 350,
    behavior: "smooth",
  });
};
</script>

<template>
  <section class="py-24 bg-[#F7F7F5] overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- Header -->
      <div class="flex items-center justify-between mb-12">
        <!-- Left -->
        <div>
          <h2
            class="text-4xl md:text-5xl font-bold text-[#0A1B47]"
          >
            Luxury Resorts
          </h2>

          <p class="mt-3 text-gray-500">
            Unmatched comfort in the heart of serenity.
          </p>
        </div>

        <!-- Right Buttons -->
        <div class="hidden md:flex items-center gap-3">
          <button
            @click="scrollLeft"
            class="w-12 h-12 rounded-full border border-gray-300 hover:bg-[#0A1B47] hover:text-white transition flex items-center justify-center"
          >
            <ChevronLeft class="w-5 h-5" />
          </button>

          <button
            @click="scrollRight"
            class="w-12 h-12 rounded-full border border-gray-300 hover:bg-[#0A1B47] hover:text-white transition flex items-center justify-center"
          >
            <ChevronRight class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Scroll Container -->
      <div
        ref="scrollContainer"
        class="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >
        <!-- Card -->
        <div
          v-for="resort in resorts"
          :key="resort.id"
          class="min-w-[320px] bg-white rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group"
        >
          <!-- Image -->
          <div class="relative overflow-hidden">
            <img
              :src="resort.image"
              :alt="resort.title"
              class="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
            />

            <!-- Price -->
            <div
              class="absolute top-4 right-4 bg-[#E0B84C] text-[#0A1B47] text-sm font-bold px-4 py-2 rounded-full shadow-lg"
            >
              {{ resort.price }}/night
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <!-- Top -->
            <div class="flex items-start justify-between">
              <div>
                <h3
                  class="text-2xl font-bold text-[#0A1B47]"
                >
                  {{ resort.title }}
                </h3>

                <p class="mt-1 text-gray-500">
                  {{ resort.location }}
                </p>
              </div>

              <!-- Rating -->
              <div class="flex items-center gap-1">
                <Star
                  class="w-4 h-4 fill-[#E0B84C] text-[#E0B84C]"
                />

                <span
                  class="text-sm font-semibold text-[#0A1B47]"
                >
                  {{ resort.rating }}
                </span>
              </div>
            </div>

            <!-- Features -->
            <div class="flex flex-wrap gap-2 mt-6">
              <span
                class="bg-[#F4F4F4] text-gray-600 text-xs px-3 py-2 rounded-full"
              >
                Spa
              </span>

              <span
                class="bg-[#F4F4F4] text-gray-600 text-xs px-3 py-2 rounded-full"
              >
                Fine Dining
              </span>

              <span
                class="bg-[#F4F4F4] text-gray-600 text-xs px-3 py-2 rounded-full"
              >
                Ocean View
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>