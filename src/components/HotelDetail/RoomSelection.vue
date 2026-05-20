<script setup>
const rooms = [
  {
    id: 1,
    title: "Garden Heritage Suite",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    oldPrice: "$320",
    price: "$285",
    badges: ["Free Breakfast", "Free Cancellation"],
    details: "1 King Bed • 2 Adults • 65 m²",
    buttonColor: "bg-[#B8860B]",
  },

  {
    id: 2,
    title: "Royal Pool Sanctuary",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
    oldPrice: "$549",
    price: "$495",
    badges: ["Best Seller", "Late Check-out"],
    details: "1 King Bed • 2 Adults • Private Pool",
    buttonColor: "bg-[#0A1B47]",
  },
];
</script>

<template>
  <section>
    <h2 class="text-4xl font-bold text-[#0A1B47]">Select Your Sanctuary</h2>

    <div class="space-y-6 mt-10">
      <!-- Room -->
      <div
        v-for="room in rooms"
        :key="room.id"
        class="bg-white rounded-[28px] p-5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition"
      >
        <div class="flex gap-5">
          <!-- Image -->
          <img
            :src="room.image"
            class="w-35 h-30 rounded-[20px] object-cover"
          />
          <div>
            <h3 class="text-2xl font-bold text-[#0A1B47]">
              {{ room.title }}
            </h3>

            <p class="mt-2 text-gray-500 text-sm">
              {{ room.details }}
            </p>

            <div class="flex gap-3 mt-4 flex-wrap">
              <span
                v-for="badge in room.badges"
                :key="badge"
                class="bg-[#F5F5F5] px-3 py-2 rounded-full text-xs text-gray-600"
              >
                {{ badge }}
              </span>
            </div>

            <!-- Price -->
            <div class="mt-5">
              <span class="text-sm text-gray-400 line-through">
                {{ room.oldPrice }}
              </span>

              <div>
                <span class="text-4xl font-bold text-[#0A1B47]">
                  {{ room.price }}
                </span>

                <span class="text-gray-500"> /night </span>
              </div>
            </div>
          </div>
        </div>

        <button
          :class="room.buttonColor"
          class="text-white px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
        >
          Select Room
        </button>
      </div>
    </div>
  </section>
</template>
