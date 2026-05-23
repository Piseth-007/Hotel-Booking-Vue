<!-- components/booking/GuestForm.vue -->
<template>
  <div class="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
    <h2 class="text-5xl font-bold text-[#0B1F4D] mb-12">Guest Details</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Name -->
      <div>
        <label class="block text-sm font-semibold mb-3"> Full Name </label>

        <input
          type="text"
          placeholder="John Doe"
          class="w-full border-b border-gray-300 bg-transparent py-3 outline-none placeholder:text-gray-400"
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block text-sm font-semibold mb-3"> Email Address </label>

        <input
          type="email"
          placeholder="john.doe@example.com"
          class="w-full border-b border-gray-300 bg-transparent py-3 outline-none placeholder:text-gray-400"
        />
      </div>

      <!-- Phone -->
      <div>
        <label class="block text-sm font-semibold mb-3"> Phone Number </label>

        <input
          type="text"
          placeholder="+855 00 000 000"
          class="w-full border-b border-gray-300 bg-transparent py-3 outline-none placeholder:text-gray-400"
        />
      </div>

      <!-- Arrival -->
      <div>
        <label class="block text-sm font-semibold mb-3">
          Estimated Arrival Time
        </label>

        <select
          class="w-full border-b border-gray-300 bg-transparent py-3 outline-none text-gray-600"
        >
          <option>I don't know yet</option>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>
      </div>
    </div>

    <!-- Special Request -->
    <div class="mt-10">
      <label class="block text-sm font-semibold mb-3"> Special Requests </label>

      <textarea
        rows="5"
        placeholder="Dietary requirements, accessibility needs, or celebrations..."
        class="w-full border-b border-gray-300 bg-transparent py-3 outline-none resize-none placeholder:text-gray-400"
      ></textarea>
    </div>

    <!-- Button -->
    <div class="flex justify-end mt-10">
      <button
        @click="emit('continue-payment')"
        class="bg-[#0B1F4D] hover:bg-[#10295f] transition text-white px-10 py-5 rounded-2xl text-lg font-semibold"
      >
        Continue to Payment →
      </button>
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(["continue-payment"]);
</script>
