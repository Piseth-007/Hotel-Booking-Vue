<script setup>
import { CreditCard, Wallet, Landmark } from "@lucide/vue";
import { ref, onMounted } from "vue";

const emit = defineEmits(["select-method"]);
const selectedMethod = ref("card");
const methods = [
  {
    id: "aba",
    title: "ABA Pay",
    description: "Instant QR booking",
    icon: Wallet,
  },

  {
    id: "card",
    title: "Credit Card",
    description: "Visa, MasterCard",
    icon: CreditCard,
  },

  {
    id: "acleda",
    title: "ACLEDA",
    description: "Local Bank Transfer",
    icon: Landmark,
  },
];

const selectMethod = (method) => {
  selectedMethod.value = method.id;
  emit("select-method", method.id);
};

onMounted(() => {
  emit("select-method", selectedMethod.value);
});
</script>

<template>
  <section class="bg-white rounded-4xl p-8 shadow-sm">
    <h2 class="text-4xl font-bold text-[#0A1B47]">Payment Method</h2>

    <div class="space-y-5 mt-10">
      <div
        v-for="method in methods"
        :key="method.id"
        @click="selectMethod(method)"
        @keyup.enter="selectMethod(method)"
        tabindex="0"
        role="button"
        :class="[
          selectedMethod === method.id
            ? 'border-[#0A1B47] bg-[#F8FAFF] scale-[1.01]'
            : 'border-gray-200',

          'border-2 rounded-2xl p-6 flex items-center justify-between cursor-pointer transition-all duration-200 hover:border-[#0A1B47] hover:shadow-sm',
        ]"
      >
        <div class="flex items-center gap-5">
          <div
            class="w-14 h-14 rounded-2xl bg-[#F5F5F5] flex items-center justify-center"
          >
            <component :is="method.icon" class="w-7 h-7 text-[#0A1B47]" />
          </div>

          <div>
            <h3 class="font-bold text-[#0A1B47]">
              {{ method.title }}
            </h3>

            <p class="text-gray-500 mt-1">
              {{ method.description }}
            </p>
          </div>
        </div>

        <div
          :class="
            selectedMethod === method.id
              ? 'border-[#0A1B47]'
              : 'border-gray-300'
          "
          class="w-6 h-6 rounded-full border-2 flex items-center justify-center"
        >
          <div
            v-if="selectedMethod === method.id"
            class="w-3 h-3 rounded-full bg-[#0A1B47]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
