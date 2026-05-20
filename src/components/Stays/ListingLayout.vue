<script setup>
import FilterSidebar from "./FilterSidebar.vue";
import StayList from "./StayList.vue";
import MapPreview from "./MapPreview.vue";
</script>

<template>
  <section class="py-10">
    <div class="max-w-400 mx-auto px-6">
      <div class="grid grid-cols-12 gap-8">
        <!-- Sidebar -->
        <div class="col-span-12 lg:col-span-3">
          <FilterSidebar />
        </div>

        <!-- Center -->
        <div class="col-span-12 lg:col-span-6">
          <StayList />
        </div>

        <!-- Map -->
        <div class="col-span-12 lg:col-span-3">
          <MapPreview />
        </div>
      </div>
    </div>
  </section>
</template>