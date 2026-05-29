<script setup>
import { useRoute } from "vue-router";
import ExperienceHero from "../Experience/ExperienceHero.vue";
import ExperienceGrid from "../Experience/ExperienceGrid.vue";

const route = useRoute();
</script>

<template>
  <div>
    <ExperienceHero />

    <ExperienceGrid
      :destination="route.query.destination"
      :date="route.query.date"
      :guests="route.query.guests"
    />
  </div>
</template>
