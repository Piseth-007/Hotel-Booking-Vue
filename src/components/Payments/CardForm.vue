<script setup>
defineProps({
  method: String,
});
</script>

<template>
  <!-- CREDIT CARD -->
  <section v-if="method === 'card'" class="bg-white rounded-4xl p-8">
    <h2 class="text-3xl font-bold text-[#0A1B47]">Card Details</h2>

    <div class="space-y-8 mt-10">
      <!-- Name -->
      <div>
        <label class="font-semibold"> Name on Card </label>

        <input
          type="text"
          placeholder="John Doe"
          class="w-full mt-3 border border-gray-200 rounded-2xl px-5 py-5 outline-none focus:border-[#0A1B47]"
        />
      </div>

      <!-- Number -->
      <div>
        <label class="font-semibold"> Card Number </label>

        <input
          type="text"
          placeholder="XXXX XXXX XXXX XXXX"
          class="w-full mt-3 border border-gray-200 rounded-2xl px-5 py-5 outline-none focus:border-[#0A1B47]"
        />
      </div>

      <!-- Bottom -->
      <div class="grid grid-cols-2 gap-5">
        <div>
          <label class="font-semibold"> Expiry Date </label>

          <input
            type="text"
            placeholder="MM/YY"
            class="w-full mt-3 border border-gray-200 rounded-2xl px-5 py-5 outline-none focus:border-[#0A1B47]"
          />
        </div>

        <div>
          <label class="font-semibold"> CVV </label>

          <input
            type="text"
            placeholder="***"
            class="w-full mt-3 border border-gray-200 rounded-2xl px-5 py-5 outline-none focus:border-[#0A1B47]"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- ABA -->
  <section
    v-if="method === 'aba'"
    class="bg-white rounded-4xl p-10 text-center"
  >
    <h2 class="text-4xl font-bold text-[#0A1B47]">ABA Pay</h2>

    <p class="mt-4 text-gray-500">Scan QR with ABA App</p>

    <div class="bg-[#F7F7F5] rounded-4xl p-8 mt-10 inline-block">
      <img
        src="/public/image.png"
        class="w-104 h-104"
      />
    </div>
  </section>

  <!-- ACLEDA -->
  <section
    v-if="method === 'acleda'"
    class="bg-white rounded-4xl p-10 text-center"
  >
    <h2 class="text-4xl font-bold text-[#0A1B47]">ACLEDA Pay</h2>

    <p class="mt-4 text-gray-500">Scan QR with ACLEDA App</p>

    <div class="bg-[#F7F7F5] rounded-4xl p-8 mt-10 inline-block">
      <img
        src="/public/image.png"
        class="w-104 h-104"
      />
    </div>
  </section>
</template>
