<script lang="ts" setup>
const props = defineProps({
    links: Array,
});

const { links } = toRefs(props);
const showMobileMenu = inject('showMobileMenu')
</script>

<template>
    <NuxtLink v-for="(link, index) in links" :key="index" @click="showMobileMenu" :to="link.url"
        class="block my-5 ml-2 text-lg hover:bg-gray-700 opacity-100">{{ link.name }}</NuxtLink>
</template>
