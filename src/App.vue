<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Layout/Navbar.vue";
import Footers from "./components/Layout/Footers.vue";
</script>

<template>
  <Navbar />
  <RouterView />
  <Footers />
</template>
