<script setup>
import BookingForm from '../ExperienceBooking/BookingForm.vue';
import BookingHero from '../ExperienceBooking/BookingHero.vue';
import BookingSummary from '../ExperienceBooking/BookingSummary.vue';
import GuaranteeBanner from '../ExperienceBooking/GuaranteeBanner.vue';
import GuestInformation from '../ExperienceBooking/GuestInformation.vue';
import TourHighlights from '../ExperienceBooking/TourHighlights.vue';

</script>
<template>
    <section class="pt-25 py-14">
        <div  class="max-w-7xl mx-auto px-6 lg:px-10">
            <BookingHero/>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
                <div class="lg:col-span-2 space-y-8">
                    <BookingForm/>
                    <TourHighlights/>
                    <GuestInformation/>
                    <GuaranteeBanner/>
                </div>

                <div>
                    <BookingSummary/>
                </div>
            </div>
        </div>
    </section>
</template>