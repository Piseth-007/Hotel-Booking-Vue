<template>
  <section class="relative py-24 overflow-hidden">
    <!-- Background -->
    <img
      src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1600&auto=format&fit=crop"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-[#0A1B47]/75"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-5xl mx-auto px-6">
      <div
        class="bg-white/90 backdrop-blur-xl rounded-[30px] px-8 md:px-14 py-14 text-center shadow-2xl"
      >
        <!-- Badge -->
        <span
          class="bg-[#DFF5E8] text-[#0B7A45] px-4 py-2 rounded-full text-xs font-semibold"
        >
          Community First
        </span>

        <!-- Title -->
        <h2 class="mt-6 text-4xl font-bold text-[#0A1B47]">
          Our Commitment to Cambodia
        </h2>

        <!-- Description -->
        <p
          class="mt-6 text-gray-600 leading-7 max-w-3xl mx-auto text-sm md:text-base"
        >
          KhmerStay isn't just about bookings; it's about belonging. 5% of every
          reservation goes directly to the Angkor Heritage Fund, supporting
          local education and the restoration of rural heritage infrastructure.
        </p>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14">
          <div>
            <h3 class="text-3xl font-bold text-[#0A1B47]">120+</h3>

            <p class="mt-2 text-sm text-gray-500">Villages Supported</p>
          </div>

          <div>
            <h3 class="text-3xl font-bold text-[#0A1B47]">$450K</h3>

            <p class="mt-2 text-sm text-gray-500">Donated to Date</p>
          </div>

          <div>
            <h3 class="text-3xl font-bold text-[#0A1B47]">15</h3>

            <p class="mt-2 text-sm text-gray-500">Culture Hubs</p>
          </div>

          <div>
            <h3 class="text-3xl font-bold text-[#0A1B47]">100%</h3>

            <p class="mt-2 text-sm text-gray-500">Ethical Partners</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
