<script lang="ts" setup>
const route = useRoute()

const { data, refresh } = await useAsyncData('radioShow', () => GqlRadioShow({ slug: route.params.show as string }));

onMounted(() => refresh())
</script>


<template>
    <div v-if="data.radioShows[0]">
        <RadioShowHead :title="data.radioShows[0].longTitle" :description="data.radioShows[0].description" />
        <div v-if="data.radioShows[0].childShow.length" class="flex flex-col md:place-items-center mt-10">
            <RadioShowChildShow v-for="mix in data.radioShows[0].childShow" :mix="mix" />
        </div>
    </div>
</template>