<template>
  <section class="w-full mb-5 px-3">
    <section class="border-b-2 border-gray-100 pb-4 flex">
      <section>
        <!-- header -->
        <section>
          <p class="text-sm px-3 py-1 inline-block border border-gray-300 text-gray-800 font-semibold mr-1">{{ props.category }}</p>
          <p class="text-sm px-3 py-2 inline-block text-gray-600">{{ props.date }}</p>
        </section>
        <!-- body -->
        <section>
          <h1 :class="props.useSlot ? 'text-lg leading-5' : 'text-2xl leading-7'" 
            class="my-3 font-semibold text-gray-800">{{ props.title }}</h1>
          <p v-if="!props.useSlot" class="leading-5 text-gray-600">{{ props.description.substring(0, 100) }} ...</p>
        </section>
        <!-- footer -->
        <NuxtLink to="/" class="mb-2 mt-1 inline-block text-blue-800 font-semibold underline underline-offset-2">Continue Reading</NuxtLink>
      </section>
      <section class="w-5/12">
        <slot></slot>
      </section>
    </section>
  </section>
</template>

<script setup>

const props = defineProps({
  category: {
    type: String,
    default: 'Category'
  },
  date: {
    type: String,
    default: 'April 17, 2022'
  },
  title: {
    type: String,
    default: 'Nisi ex non Lorem consectetur consectetur.'
  },
  description: {
    type: String,
    default: 'Amet sit commodo laboris occaecat culpa. Adipisicing aliquip pariatur sit dolore enim ex qui culpa sunt esse. Laborum elit et enim consectetur commodo id sunt consectetur ut quis cupidatat. Id elit ullamco aliquip cillum exercitation. Deserunt sint eu nostrud pariatur. Reprehenderit non quis sit mollit non aute non laboris occaecat voluptate.'
  },
  useSlot: {
    type: Boolean, 
    default: false
  }
})

</script>