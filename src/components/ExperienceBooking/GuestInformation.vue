<script setup>
import { reactive } from "vue";
const emit = defineEmits(["update-guest"]);
const guestForm = reactive({
  fullName: "",
  email: "",
  phone: "",
  requests: "",
});
const updateGuest = () => {
  emit("update-guest", guestForm);
};
</script>

<template>
  <section class="bg-white rounded-[36px] p-8 shadow-sm">
    <h2 class="text-4xl font-bold text-[#0A1B47]">Guest Information</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      <div>
        <label class="font-semibold text-[#0A1B47]"> Full Name </label>

        <input
          v-model="guestForm.fullName"
          @input="updateGuest"
          type="text"
          placeholder="e.g. Somnang Chhay"
          class="w-full border-b border-gray-300 py-4 outline-none mt-3 focus:border-[#0A1B47] transition"
        />
      </div>

      <div>
        <label class="font-semibold text-[#0A1B47]"> Email Address </label>

        <input
          v-model="guestForm.email"
          @input="updateGuest"
          type="email"
          placeholder="email@khmerstay.com"
          class="w-full border-b border-gray-300 py-4 outline-none mt-3 focus:border-[#0A1B47] transition"
        />
      </div>

      <div>
        <label class="font-semibold text-[#0A1B47]"> Phone Number </label>

        <input
          v-model="guestForm.phone"
          @input="updateGuest"
          type="text"
          placeholder="+855 012 345 678"
          class="w-full border-b border-gray-300 py-4 outline-none mt-3 focus:border-[#0A1B47] transition"
        />
      </div>

      <div>
        <label class="font-semibold text-[#0A1B47]">
          Special Requests (Optional)
        </label>

        <input
          v-model="guestForm.requests"
          @input="updateGuest"
          type="text"
          placeholder="Dietary needs, pickup notes..."
          class="w-full border-b border-gray-300 py-4 outline-none mt-3 focus:border-[#0A1B47] transition"
        />
      </div>
    </div>
  </section>
</template>
