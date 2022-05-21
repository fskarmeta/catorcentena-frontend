<script lang="ts" setup>
const { data } = await useAsyncData('artists', () => GqlArtists({}));
</script>


<template>
    <div>
        <Head>
            <Title>Catorcentena Artistas</Title>
            <Meta name="description" content="Catorcentena Artistas" />
        </Head>
        <ArtistCards v-if="data.artists.data.length" :artists="data.artists.data" />
    </div>
</template>