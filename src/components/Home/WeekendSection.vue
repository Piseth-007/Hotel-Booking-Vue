<script setup>
import { Plane, Ticket, UtensilsCrossed } from "@lucide/vue";
</script>
<template>
  <section class="py-24 bg-[#F7F7F5] overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left Image -->
        <div class="relative">
          <!-- Background Card -->
          <div
            class="absolute -bottom-4 right-6 w-[90%] h-full rounded-4xl; border border-gray-200 bg-white"
          ></div>

          <!-- Main Image -->
          <div class="relative overflow-hidden rounded-4xl shadow-2xl">
            <img
              src="https://www.pixelstalk.net/wp-content/uploads/images5/4K-Beach-Wallpaper-HD-Free-download.jpg"
              alt="Luxury Weekend"
              class="w-full h-130 object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>

        <!-- Right Content -->
        <div class="max-w-xl">
          <!-- Heading -->
          <h2
            class="text-4xl md:text-5xl font-bold leading-tight text-[#0A1B47]"
          >
            Your Perfect Weekend is Just a Click Away
          </h2>

          <!-- Description -->
          <p class="mt-6 text-lg text-gray-500 leading-8">
            We've hand-picked the best deals for your short escapes. Experience
            the luxury you deserve without the long-term planning.
          </p>

          <!-- Feature Cards -->
          <div class="mt-10 space-y-5">
            <!-- Card -->
            <div
              class="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-5 hover:shadow-xl transition duration-300"
            >
              <!-- Icon -->
              <div
                class="w-14 h-14 rounded-2xl bg-[#E8F0FF] flex items-center justify-center shrink-0"
              >
                <Plane class="w-6 h-6 text-[#0A1B47]" />
              </div>

              <!-- Content -->
              <div>
                <h3 class="text-xl font-semibold text-[#0A1B47]">
                  Quick Getaways
                </h3>

                <p class="mt-2 text-gray-500 leading-7">
                  Seamless travel arrangements for 48-hour serenity.
                </p>
              </div>
            </div>

            <!-- Card -->
            <div
              class="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-5 hover:shadow-xl transition duration-300"
            >
              <!-- Icon -->
              <div
                class="w-14 h-14 rounded-2xl bg-[#FFF5DE] flex items-center justify-center shrink-0"
              >
                <Ticket class="w-6 h-6 text-[#B8860B]" />
              </div>

              <!-- Content -->
              <div>
                <h3 class="text-xl font-semibold text-[#0A1B47]">
                  Exclusive Passes
                </h3>

                <p class="mt-2 text-gray-500 leading-7">
                  VIP access to five-star resort amenities and private beaches.
                </p>
              </div>
            </div>

            <!-- Card -->
            <div
              class="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-5 hover:shadow-xl transition duration-300"
            >
              <!-- Icon -->
              <div
                class="w-14 h-14 rounded-2xl bg-[#FFF0EB] flex items-center justify-center shrink-0"
              >
                <UtensilsCrossed class="w-6 h-6 text-[#D97706]" />
              </div>

              <!-- Content -->
              <div>
                <h3 class="text-xl font-semibold text-[#0A1B47]">
                  Gourmet Escapes
                </h3>

                <p class="mt-2 text-gray-500 leading-7">
                  Stay & dine packages at Cambodia’s top culinary destinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
