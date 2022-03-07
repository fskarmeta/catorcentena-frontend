<template>
    <div class="flex space-x-4">
        <!-- primary nav -->
        <div class="hidden sm:flex items-center space-x-1">
            <a
                v-for="(link, index) in links"
                :key="index"
                href="#"
                class="text-white font-mono nav-btn px-5 py-5 box-content hover:border border-white cursor-pointer"
            >{{ link.name }}</a>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    links: Array,
});

const { links } = toRefs(props);
</script>