<template>
    <a
        v-for="(link, index) in links"
        :key="index"
        href="#"
        class="block my-5 text-lg hover:bg-gray-800 opacity-100"
    >{{ link.name }}</a>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    links: Array,
});

const { links } = toRefs(props);
</script>