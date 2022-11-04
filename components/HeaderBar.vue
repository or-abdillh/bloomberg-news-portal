<style scoped></style>

<template>
  <header class="px-8">
    <!-- main wrapper -->
    <section class="flex justify-between items-center border-b border-gray-10 py-5">
      <!-- buttons -->
      <section class="flex items-center gap-16 text-lg text-gray-700">
        <!-- toggler navbar -->
        <button><i class="fa-solid fa-bars"></i></button>
        <section class="flex items-center gap-8">
          <!-- search -->
          <button><i class="fa-solid fa-magnifying-glass"></i></button>
          <!-- notification -->
          <button><i class="fa-regular fa-bell"></i></button>
        </section>
      </section>

      <!-- brand -->
      <section><h1 class="text-center text-2xl font-bold text-gray-800">Bloomberg</h1></section>

      <!-- CTA's -->
      <section>
        <!-- sign in -->
        <button class="bg-gray-800 px-4 py-2 text-gray-100 mr-4">
          <i class="fa-regular fa-user mr-2"></i>
          Sign in
        </button>

        <!-- subscribe -->
        <button class="px-4 py-2 border border-gray-800">Subscribe</button>
      </section>
    </section>
  </header>
</template>


<script setup></script>