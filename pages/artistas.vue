<script setup>
const { data, pending } = await useAsyncData('artists', async () => {
  const arr = await GqlArtists({})
  return arr.artists.data.sort(() => (Math.random() > 0.5 ? 1 : -1))
})
</script>

<template>
  <div>
    <UtilSpinner v-if="pending" />

    <Head>
      <Title>Artistas | 14.40 Radio</Title>
      <Meta name="description" content="Artistas en catorcentena radio" />
    </Head>
    <ArtistCards v-if="data.length" :artists="data" />
  </div>
</template>
