<script setup>
const policies = [
  {
    title: "Check-in / Check-out",
    items: [
      "Check-in: 3:00 PM",
      "Check-out: 12:00 PM",
      "Express check-in available via App",
    ],
  },

  {
    title: "Children & Extra Beds",
    items: [
      "Children under 12 stay free",
      "Cribs available on request",
      "Babysitting services offered",
    ],
  },

  {
    title: "Luxury Etiquette",
    items: [
      "No pets allowed in suites",
      "Smoking only in designated areas",
      "Quiet hours: 10:00 PM - 7:00 AM",
    ],
  },
];
</script>

<template>
  <section class="pt-10 border-t border-gray-200">
    <h2 class="text-4xl font-bold text-[#0A1B47]">Essential Policies</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
      <div v-for="policy in policies" :key="policy.title">
        <h3 class="text-xl font-semibold text-[#0A1B47]">
          {{ policy.title }}
        </h3>

        <ul class="mt-5 space-y-4">
          <li
            v-for="item in policy.items"
            :key="item"
            class="text-gray-500 leading-7"
          >
            • {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
