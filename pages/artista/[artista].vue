<script lang="ts" setup>
const route = useRoute()

const { data } = await useAsyncData(route.params.artista as string, () => GqlArtist({ slug: route.params.artista as string }));

</script>

<template>
    <ArtistCard v-if="data.artists[0]" :artist="data.artists[0]"/>
</template>