<script lang="ts" setup>
const props = defineProps({
  links: {
    type: Array,
    default: () => [],
  },
})

const { links } = toRefs(props)
</script>

<template>
  <div class="flex space-x-4">
    <!-- primary nav -->
    <div class="hidden sm:flex items-center space-x-1 gap-x-5">
      <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        :to="link.url"
        class="cursor-pointer hover:text-green-200"
        >{{ link.name }}</NuxtLink
      >
    </div>
  </div>
</template>
