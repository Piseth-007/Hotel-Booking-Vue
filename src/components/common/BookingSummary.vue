<script setup>
defineProps({
  type: String,
  image: String,
  title: String,
  location: String,
  date: String,
  guests: Number,
  price: Number,
  total: Number,
  onContinue: Function,
});
</script>

<template>
  <div class="bg-white rounded-[28px] p-6 shadow-sm sticky top-24">
    <img :src="image" class="w-full h-52 object-cover rounded-2xl" />

    <h2 class="text-2xl font-bold text-[#0A1B47] mt-5">
      {{ title }}
    </h2>

    <div v-if="type === 'hotel'">
      <p class="text-gray-500 mt-2">
        {{ location }}
      </p>

      <div class="border-t border-gray-100 my-5"></div>

      <div class="space-y-3">
        <div class="flex justify-between">
          <span>Guests</span>

          <span>{{ guests }}</span>
        </div>

        <div class="flex justify-between">
          <span>Price</span>

          <span> ${{ price }}/night </span>
        </div>
      </div>
    </div>

    <div v-if="type === 'payment'">
      <div class="border-t border-gray-100 my-5"></div>

      <div class="space-y-3">
        <div class="flex justify-between">
          <span>Subtotal</span>

          <span> ${{ price }} </span>
        </div>

        <div class="flex justify-between">
          <span>Taxes</span>

          <span>$45</span>
        </div>
      </div>
    </div>

    <div
      class="border-t border-gray-100 mt-6 pt-5 flex justify-between items-center"
    >
      <span class="text-lg font-semibold"> Total </span>

      <span class="text-2xl font-bold text-[#0A1B47]"> ${{ total }} </span>
    </div>

    <button
      v-if="type === 'hotel'"
      @click="onContinue"
      type="button"
      class="w-full mt-5 bg-[#0A1B47] text-white py-4 rounded-2xl font-semibold hover:bg-[#132B66] transition"
    >
      Continue to Payment
    </button>
  </div>
</template>
