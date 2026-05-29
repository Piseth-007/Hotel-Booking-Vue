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
  <div class="bg-white rounded-4xl p-6 shadow-sm sticky top-24">
    <img :src="image" class="w-full h-56 object-cover rounded-3xl" />
    <h2 class="text-3xl font-bold text-[#0A1B47] mt-6">
      {{ title }}
    </h2>
    <!-- HOTEL -->
    <div v-if="type === 'hotel'">
      <p class="text-gray-500 mt-3">
        {{ location }}
      </p>
      <div class="border-t border-gray-100 my-6"></div>
      <div class="space-y-4">
        <div class="flex justify-between">
          <span> Price </span>
          <span class="font-semibold"> ${{ price }}/night </span>
        </div>
      </div>
    </div>
    <!-- EXPERIENCE -->
    <div v-if="type === 'experience'">
      <p class="text-gray-500 mt-3">
        {{ location }}
      </p>
      <div class="border-t border-gray-100 my-6"></div>
      <div class="space-y-4">
        <div class="flex justify-between">
          <span> Guests </span>
          <span class="font-semibold">
            {{ guests }}
          </span>
        </div>
        <div class="flex justify-between">
          <span> Time </span>
          <span class="font-semibold">
            {{ date }}
          </span>
        </div>
        <div class="flex justify-between">
          <span> Price </span>
          <span class="font-semibold"> ${{ price }}/person </span>
        </div>
      </div>
    </div>
    <!-- PAYMENT -->
    <div v-if="type === 'payment'">
      <div class="border-t border-gray-100 my-6"></div>

      <div class="space-y-4">
        <div class="flex justify-between">
          <span> Subtotal </span>

          <span class="font-semibold"> ${{ price }} </span>
        </div>

        <div class="flex justify-between">
          <span> Service Fee </span>

          <span class="font-semibold"> $45 </span>
        </div>
      </div>
    </div>
    <div
      class="border-t border-gray-100 mt-7 pt-6 flex justify-between items-center"
    >
      <span class="text-lg font-semibold"> Total </span>
      <span class="text-3xl font-bold text-[#0A1B47]"> ${{ total }} </span>
    </div>

    <button
      @click="onContinue"
      type="button"
      class="w-full mt-6 bg-[#0A1B47] hover:bg-[#132B66] transition text-white py-4 rounded-2xl font-semibold"
    >
      {{ type === "payment" ? "Confirm Booking" : "Continue to Payment" }}
    </button>
  </div>
</template>
