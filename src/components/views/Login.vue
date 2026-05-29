<script setup>
import { useAuthStore } from "@/Store/auth";
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const auth = useAuthStore();
const form = reactive({
  email: "",
  password: "",
});

const errors = reactive({
  email: "",
  password: "",
});

const login = () => {
  errors.email = "";
  errors.password = "";

  if (!form.email) {
    errors.email = "Email required";
  }

  if (!form.password) {
    errors.password = "Password required";
  }

  if (errors.email || errors.password) {
    return;
  }

  const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

  if (
    !savedUser ||
    savedUser.email !== form.email ||
    savedUser.password !== form.password
  ) {
    alert("Invalid credentials");

    return;
  }

  auth.login(savedUser);

  router.push("/");
};
</script>

<template>
  <section
    class="min-h-screen bg-[#F7F7F5] flex items-center justify-center px-6"
  >
    <div class="bg-white rounded-[40px] shadow-xl p-10 max-w-xl w-full">
      <h1 class="text-4xl font-bold text-[#0A1B47]">Welcome Back</h1>

      <div class="space-y-5 mt-8">
        <input
          v-model="form.email"
          placeholder="Email"
          class="w-full border p-4 rounded-2xl"
        />

        <p class="text-red-500">
          {{ errors.email }}
        </p>

        <input
          v-model="form.password"
          type="password"
          placeholder="Password"
          class="w-full border p-4 rounded-2xl"
        />

        <p class="text-red-500">
          {{ errors.password }}
        </p>

        <button
          @click="login"
          class="w-full bg-[#0A1B47] text-white py-4 rounded-2xl"
        >
          Login
        </button>

        <RouterLink to="/signup" class="block text-center mt-5">
          Create Account
        </RouterLink>
      </div>
    </div>
  </section>
</template>
