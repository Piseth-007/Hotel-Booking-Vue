<script setup>
import {
  Camera,
  Car,
  UtensilsCrossed,
  GlassWater,
  Ship,
  Mountain,
  User,
  Waves,
} from "@lucide/vue";

const props = defineProps({
  experience: Object,
});

const iconMap = {
  Camera,
  Car,
  Utensils: UtensilsCrossed,
  Coffee: GlassWater,
  Ship,
  Mountain,
  User,
  Waves,
};
</script>

<template>
  <section class="bg-white rounded-4xl p-8">
    <h2 class="text-4xl font-bold text-[#0A1B47]">
      Tour Highlights & Inclusions
    </h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
      <div
        v-for="item in experience.highlights"
        :key="item.title"
        class="text-center"
      >
        <component
          :is="iconMap[item.icon]"
          class="w-8 h-8 mx-auto text-[#B8860B]"
        />

        <p class="mt-4 text-sm text-[#0A1B47] font-medium">
          {{ item.title }}
        </p>
      </div>
    </div>

    <div class="border-t border-gray-200 my-10"></div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Included -->
      <div>
        <h3 class="font-bold text-[#0A1B47]">INCLUSIONS</h3>

        <ul class="space-y-5 mt-6">
          <li
            v-for="(item, index) in experience.inclusions"
            :key="index"
            class="text-gray-600"
          >
            ✓ {{ item }}
          </li>
        </ul>
      </div>

      <!-- Excluded -->
      <div>
        <h3 class="font-bold text-[#0A1B47]">EXCLUSIONS</h3>

        <ul class="space-y-5 mt-6">
          <li
            v-for="(item, index) in experience.exclusions"
            :key="index"
            class="text-gray-600"
          >
            ✕ {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
