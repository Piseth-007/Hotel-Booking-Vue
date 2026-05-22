<script setup>
const props = defineProps({
  policies: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <section class="pt-10 border-t border-gray-200">
    <h2 class="text-4xl font-bold text-[#0A1B47]">Essential Policies</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
      <div v-for="policy in props.policies" :key="policy.title">
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
