<script lang="ts" setup>
const route = useRoute()
const { data } = await useAsyncData(route.params.show as string, () => GqlRadioShow({ slug: route.params.show as string }));
</script>


<template>
    <div v-if="data.radioShows.data[0]">
        <RadioShowHead :title="data.radioShows.data[0].attributes.longTitle" :description="data.radioShows.data[0].attributes.description" :artists="data.radioShows.data[0].attributes.artists.data" />
        <div v-if="data.radioShows.data[0].attributes.childShow.length" class="flex flex-col md:place-items-center mt-10">
            <RadioShowChildShow v-for="mix in data.radioShows.data[0].attributes.childShow" :mix="mix" />
        </div>
    </div>
</template>