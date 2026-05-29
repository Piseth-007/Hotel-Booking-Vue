<template>
  <section class="relative h-180 overflow-hidden">
    <!-- Background -->
    <img
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCThDhJXXqip5IxSAXxumCr-d-ws9NmUEMzHIDpjlp3oIwN5rDAa2WshM3D22yvFpwfmzgqeLgaBGzt4ZzGyE9mUY8Wdgst_1DISmUOx_aUBB3A-XpzuWLyVNQdX2nZzHbX-V_bNJZwE2pFdU0LzGHxVRzQ6D8n_0ImLcS4zpLjGrRw21DvUfUap0IphN-foF9t2Iw9qeYWIxeGqN7rub0MQBQ2dMZ8IJjysBo9nJyKPRWxgS33CaMsy0vCnR0yqgzgeG7QC6iL2fE"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-linear-to-b from-black/70 via-black/30 to-[#F7F7F5]"
    ></div>

    <!-- Content -->
    <div
      class="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
    >
      <h1
        class="typing-title text-5xl md:text-7xl font-bold text-white max-w-5xl leading-tight"
      >
        Unforgettable Khmer Experiences
      </h1>

      <p class="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl leading-8">
        Curated journeys into the heart of Cambodian culture, nature, and
        adventure.
      </p>
    </div>
  </section>
</template>
<style scoped>
.typing-title {
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  border-right: 4px solid white;
  animation:
    typing 4s steps(33, end) infinite,
    blink 0.8s step-end infinite;
}
@keyframes typing {
  0% {
    width: 0;
  }
  40% {
    width: 100%;
  }
  60% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}
@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
