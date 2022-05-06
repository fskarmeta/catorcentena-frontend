<script lang="ts" setup>
const { data } = await useAsyncData('artist', () => GqlArtists({}));
</script>


<template>
    <ArtistCards v-if="data.artists.length" :artists="data.artists"/>
</template>