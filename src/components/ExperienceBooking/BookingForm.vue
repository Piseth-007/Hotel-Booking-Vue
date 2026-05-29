<script setup>
import { Calendar, Minus, Plus } from "@lucide/vue";
import { ref, watch, onMounted } from "vue";
const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["update-booking"]);
const guests = ref(2);
const selectedTime = ref("");
const selectedDate = ref("");
const today = new Date().toISOString().split("T")[0];
const sendUpdate = () => {
  emit("update-booking", {
    guests: guests.value,
    time: selectedTime.value,
    date: selectedDate.value,
  });
};
watch(
  () => props.experience,
  (newExp) => {
    if (newExp?.timeSlots?.length) {
      selectedTime.value = newExp.timeSlots[0].label;
    }
    sendUpdate();
  },
  { immediate: true },
);
const increaseGuests = () => {
  guests.value++;

  sendUpdate();
};

const decreaseGuests = () => {
  if (guests.value > 1) {
    guests.value--;

    sendUpdate();
  }
};

const selectTime = (time) => {
  selectedTime.value = time;

  sendUpdate();
};

watch(selectedDate, () => {
  sendUpdate();
});

onMounted(() => {
  sendUpdate();
});
</script>
<template>
  <section class="bg-white rounded-4xl p-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- DATE -->
      <div>
        <h3 class="font-semibold text-[#0A1B47]">SELECT DATE</h3>
        <div
          class="mt-4 border border-gray-200 rounded-2xl px-5 py-5 flex items-center gap-4"
        >
          <Calendar class="w-6 h-6 text-[#0A1B47]" />
          <input
            type="date"
            v-model="selectedDate"
            :min="today"
            class="w-full outline-none bg-transparent"
          />
        </div>
      </div>
      <!-- GUESTS -->
      <div>
        <h3 class="font-semibold text-[#0A1B47]">PARTICIPANTS</h3>
        <div
          class="mt-4 border border-gray-200 rounded-2xl px-3 py-3 flex items-center justify-between"
        >
          <p class="text-gray-500">Total Guests</p>
          <div class="flex items-center gap-5">
            <button
              @click="decreaseGuests"
              class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <Minus class="w-5 h-5" />
            </button>
            <span class="text-3xl font-bold text-[#0A1B47]">
              {{ String(guests).padStart(2, "0") }}
            </span>
            <button
              @click="increaseGuests"
              class="w-10 h-10 rounded-full bg-[#0A1B47] text-white flex items-center justify-center"
            >
              <Plus class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- TIME SLOT -->
    <div class="mt-10">
      <h3 class="font-semibold text-[#0A1B47]">SELECT TIME SLOT</h3>
      <div class="flex flex-wrap gap-4 mt-5">
        <button
          v-for="slot in props.experience?.timeSlots || []"
          :key="slot.id"
          @click="selectTime(slot.label)"
          :class="
            selectedTime === slot.label
              ? 'bg-[#0A1B47] text-white'
              : 'border border-gray-300 text-gray-600'
          "
          class="px-8 py-4 rounded-full font-semibold transition"
        >
          {{ slot.label }}
        </button>
      </div>
    </div>
  </section>
</template>
