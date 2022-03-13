<template>
    <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        @click="showMobileMenu"
        :to="link.url"
        class="block my-5 text-lg hover:bg-gray-800 opacity-100"
    >{{ link.name }}</NuxtLink>
</template>

<script setup>
const props = defineProps({
    links: Array,
});

const { links } = toRefs(props);
const showMobileMenu = inject('showMobileMenu')
</script>