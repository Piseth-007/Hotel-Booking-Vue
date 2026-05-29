<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import router from "../router";
const menuOpen = ref(false);
const gotoStays = () => {
  router.push("/stays");
};
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div>
        <h1 class="text-2xl md:text-3xl font-bold text-[#0A1B47]">KhmerStay</h1>
      </div>

      <!-- Desktop Nav -->
      <nav
        class="hidden lg:flex items-center gap-10 text-sm font-medium text-gray-700"
      >
        <RouterLink to="/" class="hover:text-[#0A1B47]">
          Destinations
        </RouterLink>

        <RouterLink to="/experience" class="hover:text-[#0A1B47]">
          Experiences
        </RouterLink>

        <RouterLink to="/stays" class="hover:text-[#0A1B47]">
          Stays
        </RouterLink>

        <RouterLink to="/about" class="hover:text-[#0A1B47]">
          About Us
        </RouterLink>
      </nav>

      <!-- Desktop Buttons -->
      <div class="hidden lg:flex items-center gap-4">
        <button
          class="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:bg-gray-100"
        >
          🌐
        </button>

        <button
          class="bg-white hover:bg-[#cf5e21] text-[#cf5321] hover:text-[#132B66] px-5 py-2 rounded-xl text-sm font-semibold border border-[#cf5e21]"
        >
          Sign In
        </button>

        <button
          @click="gotoStays"
          class="bg-[#0A1B47] hover:bg-[#132B66] text-white px-5 py-2 rounded-xl text-sm font-semibold"
        >
          Book Now
        </button>
      </div>
      <button class="lg:hidden text-3xl" @click="menuOpen = !menuOpen">
        ☰
      </button>
    </div>
    <!-- Mobile Menu -->
    <div
      v-if="menuOpen"
      class="lg:hidden bg-white border-t px-6 py-5 flex flex-col gap-5 shadow-md"
    >
      <RouterLink to="/" @click="menuOpen = false"> Destinations </RouterLink>

      <RouterLink to="/experience" @click="menuOpen = false">
        Experiences
      </RouterLink>

      <RouterLink to="/stays" @click="menuOpen = false"> Stays </RouterLink>

      <RouterLink to="/about" @click="menuOpen = false"> About Us </RouterLink>

      <button class="border border-[#cf5e21] text-[#cf5321] py-2 rounded-xl">
        Sign In
      </button>

      <button
        @click="gotoStays"
        class="bg-[#0A1B47] text-white py-3 rounded-xl"
      >
        Book Now
      </button>
    </div>
  </header>
</template>
