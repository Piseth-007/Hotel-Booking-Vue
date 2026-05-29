<script setup>
import { MapPin, CalendarDays, Users, Search, Sun } from "@lucide/vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const searchData = reactive({
  destination: "",
  date: "",
  guests: "",
  type: "stays",
});
const applySearch = () => {
  const normalizedDestination = searchData.destination
    .trim()
    .replace(/\s+/g, " ");
  router.push({
    path: searchData.type === "experience" ? "/experience" : "/stays",
    query: {
      destination: normalizedDestination,
      date: searchData.date,
      guests: searchData.guests,
    },
  });
};
</script>
<template>
  <section class="relative min-h-screen overflow-hidden pt-32">
    <!-- Background -->
    <div
      class="absolute inset-0 bg-cover bg-center scale-110"
      :style="{
        backgroundImage: `url('https://d37rmf1ynyg9aw.cloudfront.net/fit-in/1280x1280/data/v4/destinations/160af03f-fd62-4c45-a33f-d7b2167a0c01/resources/5138.jpg')`,
      }"
    ></div>
    <div
      class="absolute inset-0 bg-linear-to-b from-black/70 via-black/35 to-white"
    ></div>
    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24">
      <div class="text-center text-white">
        <h1
          class="hero-title max-w-5xl mx-auto text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Discover Your Sanctuary
          <br />
          <span class="gradient-text"> in the Kingdom </span>
        </h1>

        <p class="mt-5 max-w-3xl mx-auto text-base md:text-lg text-gray-200">
          Curated luxury stays and authentic Khmer experiences.
        </p>
        <!-- Search Card -->
        <div
          class="w-full max-w-6xl mx-auto mt-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-4xl p-5 lg:p-6 shadow-2xl"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            <!-- Type -->

            <div class="bg-white/10 rounded-2xl px-5 py-4 text-left">
              <p class="text-xs uppercase text-gray-300 mb-2">Type</p>

              <select
                v-model="searchData.type"
                class="bg-transparent text-white outline-none w-full"
              >
                <option value="stays" class="text-black">Stays</option>

                <option value="experience" class="text-black">
                  Experiences
                </option>
              </select>
            </div>

            <!-- Destination -->

            <div class="bg-white/10 rounded-2xl px-5 py-4 text-left">
              <p class="text-xs uppercase text-gray-300 mb-2">Destination</p>

              <div class="flex items-center gap-3">
                <MapPin class="w-5 h-5 text-gray-200" />

                <input
                  v-model="searchData.destination"
                  placeholder="Siem Reap"
                  class="bg-transparent outline-none text-white placeholder:text-gray-300 w-full"
                />
              </div>
            </div>

            <!-- Date -->

            <div class="bg-white/10 rounded-2xl px-5 py-4 text-left">
              <p class="text-xs uppercase text-gray-300 mb-2">Date</p>

              <div class="flex items-center gap-3">
                <CalendarDays class="w-5 h-5 text-gray-200" />

                <input
                  type="date"
                  v-model="searchData.date"
                  class="bg-transparent outline-none text-white w-full scheme-dark [&::-webkit-calendar-picker-indicator]:invert"
                />
              </div>
            </div>

            <!-- Guests -->

            <div class="bg-white/10 rounded-2xl px-5 py-4 text-left">
              <p class="text-xs uppercase text-gray-300 mb-2">Guests</p>

              <div class="flex items-center gap-3">
                <Users class="w-5 h-5 text-gray-200" />

                <input
                  v-model="searchData.guests"
                  placeholder="2 Guests"
                  class="bg-transparent outline-none text-white placeholder:text-gray-300 w-full"
                />
              </div>
            </div>

            <!-- Search -->

            <button
              @click="applySearch"
              class="bg-[#B8860B] hover:bg-[#D4A017] rounded-2xl min-h-19 font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Search class="w-5 h-5" />

              Explore
            </button>
          </div>
        </div>
      </div>

      <!-- Weather -->

      <div class="hidden lg:flex justify-end mt-16">
        <div
          class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 flex gap-4 text-white"
        >
          <div>
            <p class="text-sm text-gray-300">Siem Reap</p>

            <h3 class="text-3xl font-bold">28°C</h3>
            <p class="text-sm text-gray-300">Sunny & Clear</p>
          </div>

          <Sun class="w-10 h-10 text-yellow-300" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero-title {
  animation: floatText 4s ease-in-out infinite;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
}
.gradient-text {
  background: linear-gradient(90deg, #ffffff, #d4a017, #ffffff);
  background-size: 200% auto;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 4s linear infinite;
}
@keyframes floatText {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes shine {
  from {
    background-position: 0% center;
  }
  to {
    background-position: 200% center;
  }
}
</style>
