<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const form = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const signup = () => {
  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  localStorage.setItem(
    "registeredUser",
    JSON.stringify({
      name: form.name,
      email: form.email,
      password: form.password,
    }),
  );

  alert("Account created");
  router.push("/login");
};
</script>

<template>
  <section
    class="min-h-screen bg-[#F7F7F5] flex items-center justify-center px-6"
  >
    <div class="bg-white rounded-[40px] shadow-xl p-10 max-w-xl w-full">
      <h1 class="text-4xl font-bold text-[#0A1B47]">Create Account</h1>

      <div class="space-y-5 mt-8">
        <input
          v-model="form.name"
          placeholder="Full Name"
          class="w-full border p-4 rounded-2xl"
        />

        <input
          v-model="form.email"
          placeholder="Email"
          class="w-full border p-4 rounded-2xl"
        />

        <input
          v-model="form.password"
          type="password"
          placeholder="Password"
          class="w-full border p-4 rounded-2xl"
        />

        <input
          v-model="form.confirmPassword"
          type="password"
          placeholder="Confirm Password"
          class="w-full border p-4 rounded-2xl"
        />

        <button
          @click="signup"
          class="w-full bg-[#B8860B] text-white py-4 rounded-2xl"
        >
          Create Account
        </button>
      </div>
    </div>
  </section>
</template>
