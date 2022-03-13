<template>
  <div class="flex space-x-4">
    <!-- primary nav -->
    <div class="hidden sm:flex items-center space-x-1">
      <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        :to="link.url"
        class="text-white font-mono nav-btn px-5 py-5 box-content hover:border border-white cursor-pointer"
      >{{ link.name }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  links: Array,
});

const { links } = toRefs(props);
</script>
