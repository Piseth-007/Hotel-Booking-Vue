<script setup>
const team = [
  {
    name: "LEANG PISETH",
    role: "Chief Executive Officer",
    description:
      "A Phnom Penh native with 15 years in luxury tourism development across Southeast Asia.",
    image:
      "/Profile2.jpg",
  },

  {
    name: "SRENG KIMHEANG",
    role: "Director of Experience",
    description:
      "Passionate about preserving Khmer arts, Serey curates our exclusive cultural partnerships.",
    image: "/Profile_Company.png",
  },

  {
    name: "LEANG PISETH",
    role: "Chief Technology Officer",
    description:
      "Ensuring our digital platform remains as smooth and intuitive as luxury hotel check-ins.",
    image: "/Profile2.jpg",
  },
];
</script>

<template>
  <section class="py-20 bg-[#F7F7F5]">
    <div class="max-w-6xl mx-auto px-6 lg:px-10">
      <!-- Heading -->
      <div class="flex items-end justify-between">
        <div>
          <h2 class="text-4xl font-bold text-[#0A1B47]">
            Meet Our Visionaries
          </h2>

          <p class="mt-3 text-sm text-gray-500 max-w-md leading-6">
            Combining local Cambodian wisdom with international hospitality
            standards.
          </p>
        </div>

        <div class="hidden lg:block w-70 h-px bg-gray-300"></div>
      </div>
      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        <div v-for="member in team" :key="member.name">
          <!-- Image -->
          <div class="overflow-hidden rounded-[20px]">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-80 object-cover hover:scale-105 transition duration-700"
            />
          </div>
          <!-- Content -->
          <div class="mt-5">
            <h3 class="text-xl font-semibold text-[#0A1B47]">
              {{ member.name }}
            </h3>
            <p class="mt-1 text-[#B8860B] text-sm font-medium">
              {{ member.role }}
            </p>
            <p class="mt-3 text-sm text-gray-500 leading-6">
              {{ member.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
