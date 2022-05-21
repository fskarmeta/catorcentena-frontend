<script lang="ts" setup>
const route = useRoute()

const { data } = await useAsyncData(route.params.artista as string, () => GqlArtist({ slug: route.params.artista as string }));

</script>

<template>

    <Head>
        <Title>{{ `${data.artists.data[0].attributes.artistName} en catorcentena` }}</Title>
        <Meta name="description" :content="`${data.artists.data[0].attributes.artistName} en catorcentena`" />
    </Head>
    <ArtistCard v-if="data.artists.data.length" :artist="data.artists.data[0]" />
</template>