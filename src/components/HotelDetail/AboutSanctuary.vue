<script setup>
defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <section>
    <h2
      class="text-4xl font-bold text-[#0A1B47]"
    >
      {{ title }}
    </h2>

    <p
      class="mt-6 text-gray-600 leading-8 text-lg"
    >
      {{ description }}
    </p>
  </section>
</template>