<script lang="ts" setup>
const route = useRoute()
const { data, pending } = await useAsyncData(route.params.show as string, () =>
  GqlRadioShow({ slug: route.params.show as string })
)
</script>

<template>
  <div>
    <UtilSpinner v-if="pending" />

    <Head>
      <Title>{{
        `${data.radioShows.data[0].attributes.longTitle} | 14.40 Radio`
      }}</Title>
      <Meta
        name="description"
        :content="`${data.radioShows.data[0].attributes.longTitle} show en catorcentena radio`"
      />
    </Head>
    <div v-if="data.radioShows.data[0]">
      <RadioShowHead
        :title="data.radioShows.data[0].attributes.longTitle"
        :description="data.radioShows.data[0].attributes.description"
        :artists="data.radioShows.data[0].attributes.artists.data"
      />
      <div
        v-if="data.radioShows.data[0].attributes.childShow.length"
        class="flex flex-col md:place-items-center mt-10"
      >
        <RadioShowChildShow
          v-for="(mix, index) in data.radioShows.data[0].attributes.childShow"
          :key="index"
          :mix="mix"
        />
      </div>
    </div>
  </div>
</template>
