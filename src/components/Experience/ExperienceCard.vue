<script setup>
import { Star, MapPin } from "@lucide/vue";

import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  experience: Object,
});

const gotoDetail = () => {
  router.push(`/experiencedetail/${props.experience.slug}`);
};
</script>

<template>
  <div
    class="group bg-white rounded-[36px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
  >
    <div class="relative h-80 overflow-hidden">
      <img
        :src="experience.image"
        :alt="experience.title"
        class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />

      <div
        class="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"
      ></div>

      <div
        class="absolute top-5 left-5 right-5 flex items-center justify-between"
      >
        <div
          class="bg-white/95 backdrop-blur-md text-[#0A1B47] px-5 py-2 rounded-full text-sm font-semibold shadow"
        >
          {{ experience.category }}
        </div>

        <div
          class="bg-[#E0B84C] text-[#0A1B47] px-5 py-2 rounded-full font-bold shadow"
        >
          ${{ experience.price }}
        </div>
      </div>

      <div class="absolute bottom-6 left-6 right-6">
        <div class="flex items-center gap-2 text-white">
          <Star class="w-5 h-5 fill-[#E0B84C] text-[#E0B84C]" />

          <span class="font-semibold">
            {{ experience.rating }}
          </span>

          <span class="text-white/80">
            ({{ experience.reviews }}
            reviews)
          </span>
        </div>

        <h2 class="mt-3 text-3xl font-bold text-[#E0B84C] leading-tight">
          {{ experience.title }}
        </h2>

        <div class="flex items-center gap-2 mt-4 text-white/90">
          <MapPin class="w-4 h-4" />

          <span>
            {{ experience.location.city }},
            {{ experience.location.country }}
          </span>
        </div>
      </div>
    </div>

    <div class="p-7 flex flex-col flex-1">
      <p class="text-gray-500 leading-relaxed">
        {{
          experience.description.length > 20
            ? experience.description.slice(0, 35) + "..."
            : experience.description
        }}
      </p>

      <div class="mt-8 flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-400">Starting From</p>

          <h3 class="text-3xl font-bold text-[#0A1B47]">
            ${{ experience.price }}
          </h3>
        </div>

        <button
          @click="gotoDetail"
          class="bg-[#0A1B47] hover:bg-[#132B66] transition text-white px-7 py-4 rounded-2xl font-semibold"
        >
          Explore
        </button>
      </div>
    </div>
  </div>
</template>
