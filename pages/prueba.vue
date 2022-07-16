<script lang="ts" setup>
const { data, pending } = await useAsyncData('latestRadioShows', async () => {
  const data = await GqlLatestRadioShows({})
  const radioShows = data.radioShows?.data
  const childShows = []
  for (const show of radioShows!) {
    const { longTitle, slug, childShow } = show.attributes!
    for (const child of childShow!)
      childShows.push({
        showlongTitle: longTitle,
        showSlug: slug,
        ...child,
      })
  }
  return childShows
    .sort((a, b) =>
      new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1
    )
    .splice(0, 5)
})
</script>

<template>
  <div>
    <UtilSpinner v-if="pending" />

    <Head>
      <Title>Radioshows | 14.40 Radio</Title>
      <Meta name="description" content="Radio shows en catorcentena radio" />
    </Head>
    <!-- <pre>{{ data }}</pre> -->
    <div class="flex flex-col place-items-center">
      <RadioShowChildShow
        v-for="(mix, index) in data"
        :key="index"
        :mix="mix"
        class="w-full"
      >
        <h1 class="mt-2 text-cyan-300 font-bold text-3xl place-self-start">{{ mix.showlongTitle }}</h1>
      </RadioShowChildShow>
    </div>
    <!-- <RadioShowCards
      v-if="data.radioShows"
      :radio-shows="data.radioShows.data"
    /> -->
  </div>
</template>
