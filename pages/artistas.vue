<script lang="ts" setup>
const { data } = await useAsyncData('artists', () => GqlArtists({}));
</script>


<template>
    <ArtistCards v-if="data.artists.length" :artists="data.artists"/>
</template>