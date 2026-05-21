<!-- components/booking/BookingSummary.vue -->
<template>
  <div
    class="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm sticky top-8"
  >
    <!-- Image -->
    <div class="relative">
      <img :src="image" :alt="title" class="w-full h-64 object-cover" />

      <!-- Price -->
      <div
        class="absolute top-4 right-4 bg-[#8C6A15] text-white px-5 py-2 rounded-full text-sm font-semibold shadow"
      >
        {{ price }} / {{ priceLabel }}
      </div>

      <!-- Type -->
      <div
        class="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-semibold text-[#0B1F4D]"
      >
        {{ type }}
      </div>
    </div>

    <!-- Content -->
    <div class="p-7">
      <!-- Title -->
      <h3 class="text-3xl font-bold text-[#0B1F4D] leading-tight">
        {{ title }}
      </h3>

      <!-- Location -->
      <div class="flex items-center gap-2 text-gray-500 mt-3">
        <span>📍</span>
        <span>{{ location }}</span>
      </div>

      <!-- Date -->
      <div class="grid grid-cols-2 gap-6 mt-8 border-y border-gray-200 py-6">
        <div>
          <p class="text-xs tracking-widest text-gray-400 mb-2">
            {{ startLabel }}
          </p>

          <p class="font-semibold text-[#0B1F4D]">
            {{ startDate }}
          </p>
        </div>

        <div>
          <p class="text-xs tracking-widest text-gray-400 mb-2">
            {{ endLabel }}
          </p>

          <p class="font-semibold text-[#0B1F4D]">
            {{ endDate }}
          </p>
        </div>
      </div>

      <!-- Features -->
      <div v-if="features.length" class="flex flex-wrap gap-3 mt-7">
        <span
          v-for="feature in features"
          :key="feature"
          class="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700"
        >
          {{ feature }}
        </span>
      </div>

      <!-- Pricing -->
      <div class="space-y-5 mt-8">
        <div
          v-for="item in pricing"
          :key="item.label"
          class="flex justify-between text-lg"
        >
          <span class="text-gray-600">
            {{ item.label }}
          </span>

          <span class="font-medium text-[#0B1F4D]">
            {{ item.price }}
          </span>
        </div>
      </div>

      <!-- Total -->
      <div
        class="flex justify-between items-center border-t border-gray-200 mt-8 pt-6"
      >
        <span class="text-3xl font-bold text-[#0B1F4D]"> Total </span>

        <span class="text-4xl font-bold text-[#0B1F4D]">
          {{ total }}
        </span>
      </div>

      <!-- Payment Status -->
      <div
        class="mt-6 rounded-2xl px-5 py-4 flex items-center justify-between"
        :class="
          isPaid
            ? 'bg-green-50 border border-green-200'
            : 'bg-yellow-50 border border-yellow-200'
        "
      >
        <div class="flex items-center gap-3">
          <span class="text-xl">
            {{ isPaid ? "✔" : "⏳" }}
          </span>

          <div>
            <p
              class="font-semibold"
              :class="isPaid ? 'text-green-700' : 'text-yellow-700'"
            >
              {{ isPaid ? "Payment Completed" : "Payment Pending" }}
            </p>

            <p class="text-sm text-gray-500">
              {{
                isPaid
                  ? "Your booking has been confirmed."
                  : "Complete your payment to confirm booking."
              }}
            </p>
          </div>
        </div>

        <!-- Button -->
        <button
          v-if="!isPaid && showPaymentButton"
          @click="$emit('payment')"
          class="bg-[#0B1F4D] hover:bg-[#10295f] transition text-white px-5 py-3 rounded-xl text-sm font-semibold"
        >
          Proceed Payment
        </button>
      </div>

      <!-- Bottom Notice -->
      <div
        class="mt-6 bg-[#F4F7F5] rounded-2xl px-5 py-4 flex items-center gap-3"
      >
        <span class="text-green-600 text-xl">✔</span>

        <span class="font-semibold text-gray-700">
          {{ guaranteeText }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(["payment"]);

defineProps({
  image: String,
  title: String,
  location: String,

  type: {
    type: String,
    default: "Boutique Stay",
  },

  price: {
    type: String,
    default: "$450",
  },

  priceLabel: {
    type: String,
    default: "night",
  },

  startLabel: {
    type: String,
    default: "CHECK IN",
  },

  endLabel: {
    type: String,
    default: "CHECK OUT",
  },

  startDate: String,
  endDate: String,

  features: {
    type: Array,
    default: () => [],
  },

  pricing: {
    type: Array,
    default: () => [],
  },

  total: String,

  guaranteeText: {
    type: String,
    default: "Best Price Guaranteed",
  },

  isPaid: {
    type: Boolean,
    default: false,
  },

  showPaymentButton: {
    type: Boolean,
    default: true,
  },
});
</script>
