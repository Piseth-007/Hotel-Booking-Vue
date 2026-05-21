<!-- BookingPage.vue -->
<template>
  <div class="min-h-screen bg-[#f6f6f4]">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <BookingSteps />

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <!-- Left -->
        <div class="lg:col-span-2">
          <GuestForm />

          <SecurityNotice class="mt-8" />
        </div>

        <!-- Right -->
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
</template>

<script setup>
import BookingSteps from "@/components/GuestDetail/BookingSteps.vue";
import GuestForm from "@/components/GuestDetail/GuestForm.vue";
import BookingSummary from "../common/BookingSummary.vue";
import SecurityNotice from "@/components/GuestDetail/SecurityNotice.vue";
</script>
