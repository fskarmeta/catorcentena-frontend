<script lang="ts" setup>
defineProps({
    title: String,
    description: String,
    artists: Array,
});

</script>

<template>
    <div class="text-center">
        <h1 class="text-4xl my-5 text-cyan-300 font-bold">{{ title }}</h1>
        <h2>{{ description }}</h2>
        <small class="mt-50px" v-if="artists.length">
           <span>Artistas:</span> <UtilTagDivider :array="artists" child-name="artistName" tag="," :link="true" url="/artista/"/>
        </small>
    </div>
</template>