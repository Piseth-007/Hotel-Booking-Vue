<script setup>
import LoginForm from "@/components/Auth/LoginForm.vue";
import AuthBanner from "@/components/Auth/AuthBanner.vue";
</script>

<template>
  <section class="min-h-screen bg-[#F7F7F5] p-6">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
      <AuthBanner />

      <LoginForm />
    </div>
  </section>
</template>
