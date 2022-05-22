<script setup>
import { stopAudioPlayer } from '~~/composables/useAudioPlayer';
const props = defineProps({
    mix: Object,
});
const { mix } = toRefs(props);


const mixCloudURI = computed(() => {
    const mixCloudLink = encodeURIComponent(mix.value.mixcloudUrl)
    return 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=0' + mixCloudLink
})

// const playWidget = () => console.log('le dio play')

onMounted(() => {
    if (process.client) {
        setTimeout(() => {
            const widget = Mixcloud.PlayerWidget(document.getElementById(`mixcloud-widget-${mix.value.id}`));
            widget.ready.then(function () {
                widget.events.play.on(stopAudioPlayer);
            });
        }, 1500)
    }
})

</script> 

<template>
    <div class="max-w-800px sm:w-500px lg:w-800px border-b border-gray-500 border-dashed py-5">
        <small>{{ mix.date }}</small>
        <h3 class="text-2xl mb-2">{{ mix.title }}
        </h3>
        <p v-if="mix.description" class="mb-2">{{ mix.description }}</p>
        <div class="flex gap-10px">
        </div>
        <small>
            <UtilTagDivider :array="mix.music_styles.data" child-name="style" tag="/" />
        </small>
        <iframe :id="`mixcloud-widget-${mix.id}`" title="mix" width="100%" height="120" frameBorder="0"
            :src="mixCloudURI" />
    </div>
</template>