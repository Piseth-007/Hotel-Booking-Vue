<script setup>
import { ref } from "vue";
import ExperienceCard from "./ExperienceCard.vue";
import ExperienceFilter from "./ExperienceGategory.vue";
import { experiences } from "@/data/experience.js";
const filteredExperiences = ref(experiences);
const handleFilter = ({ category, search }) => {
  filteredExperiences.value = experiences.filter((item) => {
    const categoryMatch =
      category === "All Experiences" || item.category === category;

    const searchMatch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.location.city.toLowerCase().includes(search.toLowerCase()) ||
      item.tags?.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase()),
      );

    return categoryMatch && searchMatch;
  });
};
</script>

<template>
  <!-- FILTER -->
  <ExperienceFilter @filter="handleFilter" />
  <section class="py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- Empty State -->

      <div v-if="filteredExperiences.length === 0" class="text-center py-20">
        <h2 class="text-3xl font-bold text-[#0A1B47]">No experiences found</h2>

        <p class="text-gray-500 mt-4">Try another category or search keyword</p>
      </div>
      <!-- Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ExperienceCard
          v-for="experience in filteredExperiences"
          :key="experience.id"
          :experience="experience"
        />
      </div>
    </div>
  </section>
</template>
