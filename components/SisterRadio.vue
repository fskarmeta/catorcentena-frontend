<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="mx-auto w-full flex justify-center">
    <div class="w-full min-h-200px md:w-1000px flex flex-col md:flex-row">
      <a :href="link" target="_blank" class="md:min-w-1/4 max-h-360px">
        <img
          class="h-50 object-contain"
          :src="imageUrl"
          :alt="title + ' logo'"
        />
      </a>
      <div class="mt-4 md:mt-0 md:p-5 w-full">
        <a
          target="_blank"
          :href="link"
          class="cursor-pointer hover:text-green-200"
          ><h3 class="text-2xl">{{ title }}</h3></a
        >
        <p class="mt-2">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>
