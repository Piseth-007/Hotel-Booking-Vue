<script setup>
import BookingSummary from "../common/BookingSummary.vue";
import AboutSanctuary from "../HotelDetail/AboutSanctuary.vue";
import AmenitySection from "../HotelDetail/AmenitySection.vue";
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
          <BookingSummary
            image="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop"
            title="Angkor Serenity Boutique"
            location="Siem Reap, Cambodia"
            type="Luxury Hotel"
            price="$450"
            priceLabel="night"
            startDate="Dec 12, 2024"
            endDate="Dec 15, 2024"
            :features="['Pool Villa', 'Breakfast', 'Airport Pickup']"
            :pricing="[
              { label: '3 Nights × $450', price: '$1,350.00' },
              { label: 'Resort Fee', price: '$45.00' },
              { label: 'Taxes & Service', price: '$139.50' },
            ]"
            total="$1,534.50"
          />
        </div>
      </div>
    </div>
  </section>
</template>
