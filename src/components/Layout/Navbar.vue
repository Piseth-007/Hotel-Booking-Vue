<script setup>
import { ref } from "vue";
import { RouterLink, useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/Store/auth.js";
const menuOpen = ref(false);
const router = useRouter();
const route = useRoute();
const auth = useAuthStore();
const gotoStays = () => {
  router.push("/stays");
};
const logout = () => {
  auth.logout();
  menuOpen.value = false;
  router.push("/");
};

const isActive = (path) => {
  return route.path === path;
};
</script>
<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
  >
    <div
      class="max-w-7xl mx-auto px-6 py-4 grid grid-cols-[1fr_auto_1fr] items-center"
    >
      <div class="flex items-center">
        <RouterLink to="/">
          <h1 class="text-xl md:text-2xl font-bold text-[#0A1B47]">
            KhmerStay
          </h1>
        </RouterLink>
      </div>
      <nav
        class="hidden lg:flex items-center justify-center gap-10 text-sm font-medium"
      >
        <RouterLink
          to="/"
          :class="
            isActive('/')
              ? 'text-[#0A1B47] font-bold'
              : 'text-gray-700 hover:text-[#0A1B47]'
          "
        >
          Destinations
        </RouterLink>

        <RouterLink
          to="/experience"
          :class="
            isActive('/experience')
              ? 'text-[#0A1B47] font-bold'
              : 'text-gray-700 hover:text-[#0A1B47]'
          "
        >
          Experiences
        </RouterLink>

        <RouterLink
          to="/stays"
          :class="
            isActive('/stays')
              ? 'text-[#0A1B47] font-bold'
              : 'text-gray-700 hover:text-[#0A1B47]'
          "
        >
          Stays
        </RouterLink>

        <RouterLink
          to="/about"
          :class="
            isActive('/about')
              ? 'text-[#0A1B47] font-bold'
              : 'text-gray-700 hover:text-[#0A1B47]'
          "
        >
          About Us
        </RouterLink>
      </nav>

      <div class="hidden lg:flex items-center justify-end gap-4 min-w-62.5">
        <RouterLink
          v-if="!auth.user"
          to="/login"
          class="bg-white border border-[#cf5e21] text-[#cf5321] hover:bg-[#cf5e21] hover:text-white px-5 py-2 rounded-xl text-sm font-semibold transition"
        >
          Sign In
        </RouterLink>

        <!-- LOGIN -->

        <div v-else class="flex items-center gap-3">
          <span class="font-medium text-[#0A1B47] truncate max-w-27">
            Hi, {{ auth.user.name }}
          </span>

          <button
            @click="logout"
            class="border border-red-300 text-red-500 px-4 py-1.5 rounded-xl"
          >
            Logout
          </button>
        </div>

        <button
          @click="gotoStays"
          class="bg-[#0A1B47] hover:bg-[#132B66] text-white px-5 py-2 rounded-xl text-sm font-semibold"
        >
          Book Now
        </button>
      </div>
      <div class="lg:hidden flex justify-end col-start-3">
        <button class="text-3xl ml-auto" @click="menuOpen = !menuOpen">
          ☰
        </button>
      </div>
    </div>

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

      <RouterLink
        v-if="!auth.user"
        to="/login"
        @click="menuOpen = false"
        class="border border-[#cf5e21] text-[#cf5321] py-2 rounded-xl text-center"
      >
        Sign In
      </RouterLink>

      <button
        v-else
        @click="logout"
        class="border border-red-300 text-red-500 py-3 rounded-xl"
      >
        Logout
      </button>

      <button
        @click="gotoStays"
        class="bg-[#0A1B47] border border-[#0A1B47] text-white py-3 rounded-xl"
      >
        Book Now
      </button>
    </div>
  </header>
</template>
