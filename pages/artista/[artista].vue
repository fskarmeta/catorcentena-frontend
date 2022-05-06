<script lang="ts" setup>
const route = useRoute()

const { data, refresh } = await useAsyncData('artist', () => GqlArtist({ slug: route.params.artista as string }));

onMounted(() => refresh())
</script>

<template>
    <ArtistCard v-if="data.artists[0]" :artist="data.artists[0]"/>
</template>