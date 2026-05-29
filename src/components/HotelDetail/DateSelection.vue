<script setup>
defineProps({
  checkIn: String,
  checkOut: String,
});

const emit = defineEmits(["update:checkIn", "update:checkOut"]);
</script>

<template>
  <section class="border-t border-gray-200 pt-10">
    <h2 class="text-4xl font-bold text-[#0A1B47] mb-8">Select Dates</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Check In -->
      <div>
        <label class="block text-sm font-semibold mb-2 text-gray-700">
          Check In
        </label>

        <input
          type="date"
          :value="checkIn"
          @input="emit('update:checkIn', $event.target.value)"
          class="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A1B47]"
        />
      </div>

      <!-- Check Out -->
      <div>
        <label class="block text-sm font-semibold mb-2 text-gray-700">
          Check Out
        </label>

        <input
          type="date"
          :value="checkOut"
          @input="emit('update:checkOut', $event.target.value)"
          class="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A1B47]"
        />
      </div>
    </div>
  </section>
</template>
