<script lang="ts" setup>
const { data } = await useAsyncData('radioShows', () => GqlRadioShows({}));
</script>

<template>
    <Head>
        <Title>Catorcentena Radioshows</Title>
        <Meta name="description" content="Catorcentena Radioshows" />
    </Head>
    <RadioShowCards v-if="data.radioShows" :radio-shows="data.radioShows.data" />
</template>