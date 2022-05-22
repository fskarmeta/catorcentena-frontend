<script lang="ts" setup>
const { data, pending } = await useAsyncData('radioShows', () => GqlRadioShows({}));


</script>

<template>
    <div>
        <UtilSpinner v-if="pending" />

        <Head>
            <Title>Catorcentena Radioshows</Title>
            <Meta name="description" content="Catorcentena Radioshows" />
        </Head>
        <RadioShowCards v-if="data.radioShows" :radio-shows="data.radioShows.data" />
    </div>
</template>