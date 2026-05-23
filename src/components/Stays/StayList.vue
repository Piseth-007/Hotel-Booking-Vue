<script setup>
import StayListingCard from "./StayListingCard.vue";

defineProps({
  hotels: Array,
});
</script>

<template>
  <div class="space-y-8">
    <StayListingCard v-for="hotel in hotels" :key="hotel.id" :hotel="hotel" />
  </div>
</template>
