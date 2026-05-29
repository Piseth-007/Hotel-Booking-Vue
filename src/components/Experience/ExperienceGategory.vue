<script setup>
import { Search, X } from "@lucide/vue";
import { ref, watch, onMounted } from "vue";

const emit = defineEmits(["filter"]);

const categories = [
  "All Experiences",
  "Culture",
  "Adventure",
  "Food & Dining",
  "Wellness",
  "Water Sports",
];

const selectedCategory = ref("All Experiences");

const searchText = ref("");

let timeout = null;

const applyFilter = () => {
  emit("filter", {
    category: selectedCategory.value,
    search: searchText.value.trim(),
  });
};

const selectCategory = (category) => {
  selectedCategory.value = category;

  applyFilter();
};

/* debounce search */

watch(searchText, () => {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    applyFilter();
  }, 300);
});

const clearSearch = () => {
  searchText.value = "";

  applyFilter();
};

/* initial load */

onMounted(() => {
  applyFilter();
});
</script>

<template>
  <section class="relative z-20 -mt-10">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div
        class="bg-white rounded-4xl shadow-xl border border-gray-100 p-5 flex flex-col lg:flex-row gap-6 items-center justify-between"
      >
        <!-- Categories -->

        <div class="flex gap-3 overflow-x-auto w-full scrollbar-hide pb-1">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectCategory(category)"
            :class="
              selectedCategory === category
                ? 'bg-[#0A1B47] text-white shadow-md'
                : 'bg-[#F3F4F6] text-gray-600 hover:bg-gray-200'
            "
            class="px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all"
          >
            {{ category }}
          </button>
        </div>

        <!-- Search -->

        <div
          class="flex items-center gap-3 bg-[#F3F4F6] rounded-full px-5 py-3 w-full lg:w-85"
        >
          <Search class="w-5 h-5 text-gray-500" />

          <input
            v-model="searchText"
            placeholder="Search experiences..."
            class="bg-transparent outline-none w-full text-gray-700"
          />

          <button v-if="searchText" @click="clearSearch">
            <X class="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
