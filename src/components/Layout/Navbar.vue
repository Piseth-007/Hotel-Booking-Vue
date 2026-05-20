<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div>
        <h1 class="text-3xl font-bold text-[#0A1B47]">KhmerStay</h1>
      </div>

      <!-- Navigation -->
      <nav
        class="hidden lg:flex items-center gap-10 text-sm font-medium text-gray-700"
      >
        <RouterLink to="/" class="hover:text-[#0A1B47] transition"
          >Destinations</RouterLink
        >
        <RouterLink to="/experience" class="hover:text-[#0A1B47] transition"
          >Experiences</RouterLink
        >
        <RouterLink to="stays" class="hover:text-[#0A1B47] transition"
          >Stays</RouterLink
        >
        <RouterLink to="/about" class="hover:text-[#0A1B47] transition"
          >About Us</RouterLink
        >
      </nav>
      <!-- Actions -->
      <div class="flex items-center gap-4">
        <button
          class="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:bg-gray-100 transition"
        >
          🌐
        </button>

        <button class="hidden md:block text-sm font-medium text-[#0A1B47]">
          Sign In
        </button>

        <button
          class="bg-[#0A1B47] hover:bg-[#132B66] text-white px-6 py-3 rounded-xl text-sm font-semibold transition shadow-lg"
        >
          Book Now
        </button>
      </div>
    </div>
  </header>
</template>
