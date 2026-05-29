<script setup>
import { reactive, watch } from "vue";
import {
  User,
  Mail,
  Phone,
  Clock3,
  MessageSquare,
  ArrowRight,
} from "@lucide/vue";
const emit = defineEmits(["continue-payment", "update-guest"]);

const form = reactive({
  fullName: "",
  email: "",
  phone: "",
  arrival: "I don't know yet",
  requests: "",
});

watch(
  form,
  () => {
    emit("update-guest", form);
  },
  { deep: true },
);
</script>

<template>
  <div
    class="bg-white rounded-4xl p-8 lg:p-10 shadow-sm border border-gray-100"
  >
    <!-- Header -->
    <div class="mb-10">
      <h2 class="text-3xl font-bold text-[#0B1F4D]">Guest Details</h2>

      <p class="mt-2 text-gray-500">
        Tell us who is traveling so we can personalize your stay.
      </p>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Name -->
      <div class="space-y-2">
        <label class="text-sm font-semibold"> Full Name </label>

        <div
          class="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-4 focus-within:border-[#0B1F4D]"
        >
          <User class="w-5 h-5 text-gray-400" />

          <input
            v-model="form.fullName"
            type="text"
            placeholder="John Doe"
            class="w-full outline-none"
          />
        </div>
      </div>

      <!-- Email -->
      <div class="space-y-2">
        <label class="text-sm font-semibold"> Email Address </label>

        <div
          class="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-4"
        >
          <Mail class="w-5 h-5 text-gray-400" />

          <input
            v-model="form.email"
            type="email"
            placeholder="john@example.com"
            class="w-full outline-none"
          />
        </div>
      </div>

      <!-- Phone -->
      <div class="space-y-2">
        <label class="text-sm font-semibold"> Phone Number </label>

        <div
          class="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-4"
        >
          <Phone class="w-5 h-5 text-gray-400" />

          <input
            v-model="form.phone"
            type="text"
            placeholder="+855 xx xxx xxx"
            class="w-full outline-none"
          />
        </div>
      </div>

      <!-- Arrival -->
      <div class="space-y-2">
        <label class="text-sm font-semibold"> Arrival Time </label>

        <div
          class="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-4"
        >
          <Clock3 class="w-5 h-5 text-gray-400" />

          <select
            v-model="form.arrival"
            class="w-full outline-none bg-transparent"
          >
            <option>I don't know yet</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Requests -->
    <div class="mt-8 space-y-2">
      <label class="text-sm font-semibold"> Special Requests </label>

      <div class="border border-gray-200 rounded-2xl p-4">
        <div class="flex gap-3">
          <MessageSquare class="w-5 h-5 text-gray-400 mt-1" />

          <textarea
            v-model="form.requests"
            rows="5"
            placeholder="Dietary requirements, celebrations, accessibility needs..."
            class="w-full outline-none resize-none"
          />
        </div>
      </div>
    </div>

    <!-- Trust -->
    <div class="mt-8 bg-[#F7F7F5] rounded-2xl p-5 text-sm text-gray-600">
      🔒 Your information is encrypted and securely processed.
    </div>

    <!-- CTA -->
    <div class="flex justify-end mt-10">
      
    </div>
  </div>
</template>
