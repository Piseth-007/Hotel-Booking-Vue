<script setup>
const currentStep = 2;

const steps = [
  {
    id: 1,
    title: "Review",
  },

  {
    id: 2,
    title: "Payment",
  },

  {
    id: 3,
    title: "Confirm",
  },
];
</script>

<template>
  <section class="mb-14">
    <div
      class="flex items-center justify-center"
    >
      <div
        v-for="(step, index) in steps"
        :key="step.id"
        class="flex items-center"
      >
        <!-- Circle -->
        <div
          class="flex flex-col items-center"
        >
          <div
            :class="
              currentStep === step.id
                ? 'bg-[#0A1B47] text-white'
                : currentStep > step.id
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-500'
            "
            class="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg transition"
          >
            <span v-if="currentStep > step.id">
              ✓
            </span>

            <span v-else>
              {{ step.id }}
            </span>
          </div>

          <span
            class="mt-4 font-semibold text-[#0A1B47]"
          >
            {{ step.title }}
          </span>
        </div>

        <!-- Line -->
        <div
          v-if="index !== steps.length - 1"
          class="w-32 h-0.5 bg-gray-200 mx-5"
        ></div>
      </div>
    </div>
  </section>
</template>