<script setup>
import { FileText, SquarePen, Globe, Mail, SendHorizontal } from "@lucide/vue";
</script>
<template>
  <footer
    class="bg-[#2D2415] block right-0 left-0 text-white rounded-t-[30px] mt-20"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand -->
        <div>
          <h2 class="text-3xl font-bold text-[#C89B3C] mb-5">KhmerStay</h2>

          <p class="text-gray-300 leading-7 mb-6">
            Redefining luxury travel in the Kingdom of Wonder. Authentic,
            immersive, and unforgettable.
          </p>

          <div class="flex items-center gap-4">
            <FileText
              class="w-5 h-5 hover:text-[#C89B3C] cursor-pointer transition"
            />

            <SquarePen
              class="w-5 h-5 hover:text-[#C89B3C] cursor-pointer transition"
            />

            <Globe
              class="w-5 h-5 hover:text-[#C89B3C] cursor-pointer transition"
            />

            <Mail
              class="w-5 h-5 hover:text-[#C89B3C] cursor-pointer transition"
            />
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="uppercase font-bold tracking-wide mb-5 text-[#E5D3A1]">
            Quick Links
          </h3>

          <ul class="space-y-3 text-gray-300">
            <li class="hover:text-[#C89B3C] cursor-pointer transition">
              Explore Angkor
            </li>

            <li class="hover:text-[#C89B3C] cursor-pointer transition">
              Phnom Penh Guide
            </li>

            <li class="hover:text-[#C89B3C] cursor-pointer transition">
              Island Escapes
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h3 class="uppercase font-bold tracking-wide mb-5 text-[#E5D3A1]">
            Support
          </h3>

          <ul class="space-y-3 text-gray-300">
            <li class="hover:text-[#C89B3C] cursor-pointer transition">
              Booking Terms
            </li>

            <li class="hover:text-[#C89B3C] cursor-pointer transition">
              Privacy Policy
            </li>

            <li class="hover:text-[#C89B3C] cursor-pointer transition">
              Contact Support
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="uppercase font-bold tracking-wide mb-5 text-[#E5D3A1]">
            Newsletter
          </h3>

          <p class="text-gray-300 mb-5 leading-6">
            Subscribe for exclusive offers and hidden travel tips.
          </p>

          <div class="flex overflow-hidden rounded-xl bg-[#4A3B23]">
            <input
              type="email"
              placeholder="Email address"
              class="w-full px-4 py-3 bg-transparent outline-none text-white placeholder:text-gray-400"
            />

            <button class="bg-[#B8860B] px-5 hover:bg-[#C89B3C] transition">
              <SendHorizontal class="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="border-t border-[#4A3B23] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400"
      >
        <p>
          © 2024 KhmerStay. All rights reserved. A luxury travel experience.
        </p>

        <div class="flex items-center gap-5">
          <span class="hover:text-[#C89B3C] cursor-pointer transition">
            English
          </span>

          <span class="hover:text-[#C89B3C] cursor-pointer transition">
            USD $
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
