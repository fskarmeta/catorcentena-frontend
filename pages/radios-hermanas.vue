<script lang="ts" setup>
const { data, pending } = await useAsyncGql('sisterRadios')
</script>

<template>
  <UtilSpinner v-if="pending" />

  <Head>
    <Title>Radios hermanas | 14.40 Radio</Title>
    <Meta name="description" content="Radios hermanas de catorcentena radio" />
  </Head>
  <h1 class="mx-auto w-full text-3xl mb-15">Radios hermanas</h1>
  <SisterRadio
    v-for="radio in data?.sisterRadios?.data"
    :key="radio.id!"
    class="mb-20"
    :title="radio?.attributes?.title!"
    :description="radio?.attributes?.description || ''"
    :image-url="radio?.attributes?.image?.data?.attributes?.formats?.small?.url || radio?.attributes?.image?.data?.attributes?.url!"
    :link="radio?.attributes?.link!"
  />
</template>
