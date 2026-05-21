<script setup>
import BookingSummary from '../common/BookingSummary.vue';
import CardForm from './CardForm.vue';
import PaymentMethod from './PaymentMethod.vue';
import StepPayment from './StepPayment.vue';

</script>
<template>
    <section class="py-14">
        <div class="max-w-7xl mx-auto px-6 lg:px-10">
            <StepPayment/>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

                <div class="lg:col-span-2 space-y-8">
                    <PaymentMethod/>
                    <CardForm/>

                </div>

                <div>
                    <BookingSummary/>
                </div>
            </div>
        </div>
    </section>
</template>