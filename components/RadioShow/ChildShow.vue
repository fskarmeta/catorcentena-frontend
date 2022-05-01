<script lang="ts" setup>
const mixCloudURI = computed(() => {
    const mixCloudLink = encodeURIComponent('https://www.mixcloud.com/catorcentenaradio/lagest-night-con-t-fried-1er-aniversario-21032021/')
    return 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=0' + mixCloudLink
})

</script> 

<template>
    <div class="max-w-800px border-b border-gray-500 border-dashed py-5">
        <small>02/04/2022</small>
        <h3 class="text-2xl mb-2">Canciones para el fin del mundo #19 con The Mugris: 1er Aniversario
            Catorcentena
        </h3>
        <p class="mb-2">Sed gravida fermentum nisl sed eleifend. Mauris et eros nec orci posuere condimentum in quis
            odio.
            Nunc enim enim, commodo ut rutrum sed, vehicula eget magna. Fusce ornare orci mattis purus rhoncus,
            et sollicitudin felis scelerisque. Duis eleifend dolor sit amet odio venenatis, sed vulputate nunc
            tincidunt. </p>
        <div class="flex gap-10px"><small>Bafian,</small><small>Franco Saini,</small><small>Sebastian
                Rambach</small></div>
        <small>Slow Tempo / Meditation / Spoken Word</small>
        <iframe title="mix" width="100%" height="120" frameBorder="0" :src="mixCloudURI" />
    </div>
</template>