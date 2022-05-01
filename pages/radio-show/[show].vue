<script lang="ts" setup>
const mixCloudURI = computed(() => {
    const mixCloudLink = encodeURIComponent('https://www.mixcloud.com/catorcentenaradio/lagest-night-con-t-fried-1er-aniversario-21032021/')
    return 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=0' + mixCloudLink
})

</script> 

<template>
    <div>
        <div class="text-center">
            <h1 class="text-4xl mb-5 text-cyan-300 font-bold">On the mix con Franco Saini</h1>
            <h2>A pocas horas del fin del mundo, the mugris nos presenta una selección de sus canciones favoritas para
                alcanzar la redención sonica. Encontraras los registros mas sucios del underground, mp3s de 128 kbp,
                perdidos entre atmósferas cargadas de reverb y delays. Aqui esta toda la basura rechazada por la
                sociedad y que pasara a la próxima vida. “THE MUGRIS - CANCIONES PARA EL FIN DEL MUNDO”</h2>
        </div>
        <div class="flex flex-col place-items-center mt-10">
            <div class="max-w-800px border-b border-gray-500 border-dashed py-5">
                <small>02/04/2022</small>
                <h3 class="text-2xl mb-2">Canciones para el fin del mundo #19 con The Mugris: 1er Aniversario
                    Catorcentena
                </h3>
                <div class="flex gap-10px"><small>Bafian,</small><small>Franco Saini,</small><small>Sebastian
                        Rambach</small></div>
                <small>Slow Tempo / Meditation / Spoken Word</small>
                <iframe title="mix" width="100%" height="120" frameBorder="0" :src="mixCloudURI" />
            </div>
            <div class="max-w-800px border-b border-gray-500 border-dashed py-5">
                <small>02/04/2022</small>
                <h3 class="text-2xl mb-2">Canciones para el fin del mundo #19 con The Mugris: 1er Aniversario
                    Catorcentena
                </h3>
                <div class="flex gap-10px"><small>Bafian,</small><small>Franco Saini,</small><small>Sebastian
                        Rambach</small></div>
                <small>Slow Tempo / Meditation / Spoken Word</small>
                <iframe title="mix" width="100%" height="120" frameBorder="0" :src="mixCloudURI" />
            </div>
            <div class="max-w-800px border-b border-gray-500 border-dashed py-5">
                <small>02/04/2022</small>
                <h3 class="text-2xl mb-2">Canciones para el fin del mundo #19 con The Mugris: 1er Aniversario
                    Catorcentena
                </h3>
                <div class="flex gap-10px"><small>Bafian,</small><small>Franco Saini,</small><small>Sebastian
                        Rambach</small></div>
                <small>Slow Tempo / Meditation / Spoken Word</small>
                <iframe title="mix" width="100%" height="120" frameBorder="0" :src="mixCloudURI" />
            </div>
        </div>
    </div>
</template>