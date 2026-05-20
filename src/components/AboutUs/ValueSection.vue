<script setup>
import { Globe, ShieldCheck, Sparkles, Headphones } from "@lucide/vue";

const values = [
  {
    title: "Localized Expertise",
    description:
      "Deep-rooted insights from locals who know every hidden temple.",
    icon: Globe,
  },

  {
    title: "Sustainable Tourism",
    description: "Eco-conscious stays that support Cambodia's environment.",
    icon: Sparkles,
  },

  {
    title: "Verified Luxury Stays",
    description: "Personally inspected properties meeting our standards.",
    icon: ShieldCheck,
  },

  {
    title: "24/7 Local Support",
    description: "Dedicated concierge assistance for every journey.",
    icon: Headphones,
  },
];
</script>

<template>
  <section class="py-20 bg-[#F3EFE7]">
    <div class="max-w-6xl mx-auto px-6 lg:px-10">
      <!-- Heading -->
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-4xl font-bold text-[#0A1B47]">
          The KhmerStay Difference
        </h2>

        <p class="mt-3 text-gray-500 text-sm">
          Why travelers choose us for their most precious memories in the
          Kingdom.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        <div
          v-for="(value, index) in values"
          :key="index"
          class="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition duration-300"
        >
          <!-- Icon -->
          <div
            class="w-11 h-11 rounded-xl bg-[#FFF5DE] flex items-center justify-center"
          >
            <component :is="value.icon" class="w-5 h-5 text-[#B8860B]" />
          </div>

          <!-- Content -->
          <h3 class="mt-6 text-xl font-semibold text-[#0A1B47] leading-snug">
            {{ value.title }}
          </h3>

          <p class="mt-3 text-gray-500 text-sm leading-6">
            {{ value.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
