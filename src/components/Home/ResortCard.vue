<script setup>
import { Star } from "@lucide/vue";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  resort: Object,
});

const gotoViewDetail = () => {
  router.push(`/stay/${props.resort.slug}`);
};
console.log(props.resort)
</script>

<template>  
  <div
    @click="gotoViewDetail"
    class="min-w-[320px] bg-white rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group cursor-pointer"
  >
    <div class="relative overflow-hidden">
      <img
        :src="props.resort.image"
        :alt="props.resort.title"
        class="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
      />
      <div
        class="absolute top-4 right-4 bg-[#E0B84C] text-[#0A1B47] text-sm font-bold px-4 py-2 rounded-full shadow-lg"
      >
        $ {{ props.resort.price }}/night
      </div>
    </div>

    <div class="p-6">
      <div class="flex items-start justify-between">
        <div>
          <h3 class="text-2xl font-bold text-[#0A1B47]">
            {{ props.resort.title }}
          </h3>

          <p class="mt-1 text-gray-500">
            {{ props.resort.location.city }}
          </p>
        </div>

        <div class="flex items-center gap-1">
          <Star class="w-4 h-4 fill-[#E0B84C] text-[#E0B84C]" />

          <span class="text-sm font-semibold text-[#0A1B47]">
            {{ props.resort.rating }}
          </span>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 mt-6">
        <span class="bg-[#F4F4F4] text-gray-600 text-xs px-3 py-2 rounded-full">
          Spa
        </span>

        <span class="bg-[#F4F4F4] text-gray-600 text-xs px-3 py-2 rounded-full">
          Fine Dining
        </span>

        <span class="bg-[#F4F4F4] text-gray-600 text-xs px-3 py-2 rounded-full">
          Ocean View
        </span>
      </div>
    </div>
  </div>
</template>
