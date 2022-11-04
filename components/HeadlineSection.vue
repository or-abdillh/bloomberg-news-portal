<template>
  <section class="flex items-center justify-between">
    <span class="flex items-center gap-2">
      <h1 class="text-xl font-semibold text-gray-900">{{ props.text }}</h1>
      <button class="w-5 h-5 grid place-items-center border border-gray-300 rounded-full">
        <i class="text-[.5rem] fa-solid fa-chevron-right"></i>
      </button>
    </span>
    <slot></slot>
  </section>
</template>

<script setup>

const props = defineProps({
  text: {
    type: String,
    default: 'Text here ...'
  }
})

</script>