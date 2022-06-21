<script lang="ts" setup>
const route = useRoute()

const { data, pending } = await useAsyncData(
  route.params.artista as string,
  () => GqlArtist({ slug: route.params.artista as string })
)
</script>

<template>
  <div>
    <UtilSpinner v-if="pending" />

    <Head>
      <Title>{{
        `${data.artists.data[0].attributes.artistName} | 14.40 Radio`
      }}</Title>
      <Meta
        name="description"
        :content="`${data.artists.data[0].attributes.artistName} en catorcentena radio`"
      />
    </Head>
    <ArtistCard
      v-if="data.artists.data.length"
      :artist="data.artists.data[0]"
    />
  </div>
</template>
