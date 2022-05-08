<script lang="ts" setup>
const { data } = await useAsyncData('artists', () => GqlArtists({}));
</script>


<template>
    <ArtistCards v-if="data.artists.data.length" :artists="data.artists.data"/>
</template>