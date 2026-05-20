<script setup>
import ExperienceCard from "./ExperienceCard.vue";

const experiences = [
  {
    id: 1,
    title: "Angkor Wat Sunrise Photography Tour",
    category: "Culture",
    price: "$45",
    rating: "4.9",
    reviews: "120 reviews",
    image:
      "https://images.unsplash.com/photo-1608037521244-f1c6c7635194?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Traditional Khmer Cooking Class",
    category: "Food & Dining",
    price: "$35",
    rating: "4.8",
    reviews: "85 reviews",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Mekong River Sunset Cruise",
    category: "Adventure",
    price: "$25",
    rating: "4.7",
    reviews: "210 reviews",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    title: "Phnom Kulen Waterfall Adventure",
    category: "Adventure",
    price: "$60",
    rating: "4.9",
    reviews: "56 reviews",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
];
</script>

<template>
  <section class="py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ExperienceCard
          v-for="experience in experiences"
          :key="experience.id"
          :experience="experience"
        />
      </div>
    </div>
  </section>
</template>
