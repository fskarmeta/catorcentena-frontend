<script lang="ts" setup>
const { data, pending } = await useAsyncGql('radioShows')
</script>

<template>
  <div>
    <UtilSpinner v-if="pending" />

    <Head>
      <Title>Radioshows | 14.40 Radio</Title>
      <Meta name="description" content="Radio shows en catorcentena radio" />
    </Head>
    <h1 class="mx-auto w-full text-3xl mb-15">Radio Shows</h1>
    <RadioShowCards
      v-if="data.radioShows"
      :radio-shows="data.radioShows.data"
    />
  </div>
</template>
