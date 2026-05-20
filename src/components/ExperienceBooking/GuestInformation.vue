<template>
  <section class="bg-white rounded-4xl p-8">
    <h2 class="text-4xl font-bold text-[#0A1B47]">Guest Information</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      <!-- Name -->
      <div>
        <label class="font-semibold text-[#0A1B47]"> Full Name </label>

        <input
          type="text"
          placeholder="e.g. Somnang Chhay"
          class="w-full border-b border-gray-300 py-4 outline-none mt-3"
        />
      </div>

      <!-- Email -->
      <div>
        <label class="font-semibold text-[#0A1B47]"> Email Address </label>

        <input
          type="email"
          placeholder="email@serenity.com"
          class="w-full border-b border-gray-300 py-4 outline-none mt-3"
        />
      </div>

      <!-- Phone -->
      <div>
        <label class="font-semibold text-[#0A1B47]"> Phone Number </label>

        <input
          type="text"
          placeholder="+855 012 345 678"
          class="w-full border-b border-gray-300 py-4 outline-none mt-3"
        />
      </div>

      <!-- Request -->
      <div>
        <label class="font-semibold text-[#0A1B47]">
          Special Requests (Optional)
        </label>

        <input
          type="text"
          placeholder="Dietary needs, pickup notes..."
          class="w-full border-b border-gray-300 py-4 outline-none mt-3"
        />
      </div>
    </div>
  </section>
</template>
