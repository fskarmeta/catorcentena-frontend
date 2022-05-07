<script setup>

const props = defineProps({
    mix: Object,
});
const { mix } = toRefs(props);


const mixCloudURI = computed(() => {
    const mixCloudLink = encodeURIComponent(mix.value.mixcloudUrl)
    return 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=0' + mixCloudLink
})

</script> 

<template>
    <div class="max-w-800px sm:w-500px lg:w-800px border-b border-gray-500 border-dashed py-5">
        <small>{{ mix.date }}</small>
        <h3 class="text-2xl mb-2">{{ mix.title }}
        </h3>
        <p v-if="mix.description" class="mb-2">{{ mix.description }}</p>
        <div class="flex gap-10px">
            <small>
                <UtilTagDivider :object="mix.artists" child-name="artistName" tag="," />
            </small>
        </div>
        <small>
            <UtilTagDivider :object="mix.music_styles" child-name="style" tag="/" />
        </small>
        <iframe title="mix" width="100%" height="120" frameBorder="0" :src="mixCloudURI" />
    </div>
</template>