<script setup>
import AboutSanctuary from "../HotelDetail/AboutSanctuary.vue";
import AmenitySection from "../HotelDetail/AmenitySection.vue";
import BookingSidebar from "../HotelDetail/BookingSidebar.vue";
import DetailGallery from "../HotelDetail/DetailGallery.vue";
import PolicySection from "../HotelDetail/PolicySection.vue";
import RoomSelection from "../HotelDetail/RoomSelection.vue";
</script>
<template>
  <section class="py-10 pt-25">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-10">
          <DetailGallery />
          <AboutSanctuary />
          <AmenitySection />
          <RoomSelection />
          <PolicySection />
        </div>
        <div>
          <BookingSidebar />
        </div>
      </div>
    </div>
  </section>
</template>
