<template>
    <div :class="{ 'text-center': centered }">
        <NuxtLink v-if="linked" to="/artista/bafian">
            <h1 class="text-3xl">Bafian</h1>
        </NuxtLink>
        <h1 v-else class="text-3xl">Bafian</h1>
        <div
            class="flex gap-x-2 text-3xl"
            :class="[centered ? 'justify-center' : 'justify-center md:justify-start']"
        >
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-mixcloud"></i>
            <i class="fa-brands fa-soundcloud"></i>
        </div>
        <small class="d-block">Ambient / Spoken Word / Meditation</small>
    </div>
</template>

<script setup>
const props = defineProps({
    centered: Boolean,
    linked: Boolean,
});

const { centered, linked } = toRefs(props);
</script>