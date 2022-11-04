<template>
  <section class="flex items-center gap-8">
    <!-- Date -->
    <section class="w-1/12">
      <p class="font-bold text-gray-700">Sunday</p>
      <p class="font-semibold text-gray-600">17 Apr, 2022</p>
    </section>
    <!-- Categories -->
    <section class="w-10/12 flex justify-between gap-4">
      <template v-for="category in categories">
        <p class="text-lg text-gray-500 font-semibold">{{ category }}</p>
      </template>
    </section>
    <!-- CTA's -->
    <section class="w-[5%]">
      <button class="px-3 py-5 w-full bg-gray-800 text-gray-100"><i class="fa-solid fa-ellipsis"></i></button>
    </section>
  </section>
</template>

<script setup>

const categories = [
  'World', 'Politics', 'Business', 'Opinion', 'Tech', 'Science', 'Sports', 'Arts', 'Books', 'Style', 'Food', 'Travel', 'Magazine'
]

</script>