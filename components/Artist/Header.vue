
<script setup>
const props = defineProps({
    inGridDisplay: Boolean,
});

const { inGridDisplay } = toRefs(props);
</script>

<template>
    <div class="flex flex-col place-items-center gap-20px max-w-250px" :class="{ 'text-center': inGridDisplay }">
        <img v-if="inGridDisplay" class="w-24 h-24 rounded-full shadow-lg" src="@/assets/images/imagen.jpg"
            alt="projecto" />
        <NuxtLink v-if="inGridDisplay" to="/artista/bafian">
            <h1 class="text-3xl">velociratop2321</h1>
        </NuxtLink>
        <h1 v-else class="text-3xl">Bafian</h1>
        <div class="flex gap-x-2 text-3xl"
            :class="[inGridDisplay ? 'justify-center' : 'justify-center md:justify-start']">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-mixcloud"></i>
            <i class="fa-brands fa-soundcloud"></i>
        </div>
        <small class="d-block">Ambient / Spoken Word / Meditation / test / test</small>
    </div>
</template>