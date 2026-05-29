<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import Navbar from "@/components/Layout/Navbar.vue";
import Footers from "./components/Layout/Footers.vue";

const route = useRoute();

const hideLayout = computed(() => {
  return [
    "/login",
    "/signup",
  ].includes(route.path);
});
</script>

<template>
  <div>
    <!-- Navbar -->

    <Navbar />

    <!-- Page -->

    <RouterView />

    <!-- Footer -->

    <Footers v-if="!hideLayout" />
  </div>
</template>