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
            <small v-for="(artist, index) in mix.artists">
                {{ artist.artistName + `${mix.artists.length - 1 !== index ? ', ' : ''}` }}</small>
        </div>
        <small>
            <span v-for="(style, index) in mix.music_styles">
                {{ style.style + `${mix.music_styles.length - 1 !== index ? ' / ' : ''}` }}
            </span>
        </small>
        <iframe title="mix" width="100%" height="120" frameBorder="0" :src="mixCloudURI" />
    </div>
</template>