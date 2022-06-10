<script lang="ts" setup>
const { data, pending } = await useAsyncData('artists', async () => {
  const arr = await GqlArtists({})
  return arr.artists.data.sort(() => (Math.random() > 0.5 ? 1 : -1))
})
</script>

<template>
  <div>
    <UtilSpinner v-if="pending" />

    <Head>
      <Title>Catorcentena Artistas</Title>
      <Meta name="description" content="Catorcentena Artistas" />
    </Head>
    <ArtistCards v-if="data.length" :artists="data" />
  </div>
</template>
