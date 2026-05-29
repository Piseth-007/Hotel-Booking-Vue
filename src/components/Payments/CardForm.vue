<script setup>
defineProps({
  method: String,
});
</script>
<template>
  <!-- CARD FORM -->
  <section
    v-if="method === 'card'"
    class="bg-white rounded-4xl p-8 shadow-sm"
  >
    <h2 class="text-3xl font-bold text-[#0A1B47]">Card Details</h2>
    <div class="space-y-8 mt-10">
      <!-- Cardholder -->
      <div>
        <label class="font-semibold block"> Name on Card </label>
        <input
          type="text"
          placeholder="John Doe"
          class="w-full mt-3 border border-gray-200 rounded-2xl px-5 py-5 outline-none focus:border-[#0A1B47] focus:ring-2 focus:ring-[#0A1B47]/20"
        />
      </div>
      <!-- Number -->
      <div>
        <label class="font-semibold block"> Card Number </label>
        <input
          type="text"
          placeholder="1234 5678 9012 3456"
          class="w-full mt-3 border border-gray-200 rounded-2xl px-5 py-5 outline-none focus:border-[#0A1B47] focus:ring-2 focus:ring-[#0A1B47]/20"
        />
      </div>
      <!-- Expiry + CVV -->
      <div class="grid grid-cols-2 gap-5">
        <div>
          <label class="font-semibold block"> Expiry Date </label>
          <input
            type="text"
            placeholder="MM/YY"
            class="w-full mt-3 border border-gray-200 rounded-2xl px-5 py-5"
          />
        </div>
        <div>
          <label class="font-semibold block"> CVV </label>
          <input
            type="password"
            placeholder="***"
            class="w-full mt-3 border border-gray-200 rounded-2xl px-5 py-5"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- BANK PAYMENT INFO -->
  <section v-else class="bg-white rounded-4xl p-10 text-center shadow-sm">
    <h2 class="text-3xl font-bold text-[#0A1B47]">
      {{ method === "aba" ? "ABA Payment" : "ACLEDA Payment" }}
    </h2>

    <p class="text-gray-500 mt-4">Click Continue Payment to open QR payment.</p>

    <div class="mt-8 bg-[#F7F7F5] rounded-3xl p-8">
      <p class="font-semibold text-[#0A1B47]">Secure QR Checkout</p>
    </div>
  </section>
</template>
