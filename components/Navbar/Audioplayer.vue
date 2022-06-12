<script setup>
import { ref } from 'vue'
import { useAudioPlayer } from '~~/composables/useAudioPlayer'

const config = useRuntimeConfig()

const player = ref()

const songTitle = ref('')

const { isPlaying, currentVolume, play, pause, volume } = useAudioPlayer(player)

const isLive = ref(false)
const text = ref('')

const strapiInterval = ref(null)

const getIcecastSongTitle = async () => {
  const data = await $fetch('/api/getSongTitle')
  const { title } = data
  if (title) songTitle.value = title
  setInterval(async () => {
    const data = await $fetch('/api/getSongTitle')
    const { title } = data
    if (title) songTitle.value = title
  }, 45000)
}

const getStrapiSongTitle = () => {
  strapiInterval.value = setInterval(async () => {
    const data = await GqlAudioplayer()
    const { live, liveText, liveMessage } = data.audioPlayer.data.attributes
    if (!live) {
      isLive.value = false
      getIcecastSongTitle()
      clearInterval(strapiInterval.value)
      return
    }
    text.value = liveText || 'LIVE MIX NOW'
    songTitle.value = liveMessage || ''
  }, 45000)
}

onMounted(async () => {
  try {
    const data = await GqlAudioplayer()
    const { live, liveText, liveMessage } = data.audioPlayer.data.attributes
    if (!live) {
      getIcecastSongTitle()
      return
    }
    isLive.value = true
    text.value = liveText || 'LIVE MIX NOW'
    songTitle.value = liveMessage || ''
    getStrapiSongTitle()
  } catch {}
})
</script>

<template>
  <div class="relative place-self-center mt-10 sm:mt-0">
    <audio ref="player" :src="config.public.RADIO_HOST" type="audio/mp3">
      Your browser does not support the audio element.
    </audio>

    <div class="flex flex-col sm:flex-row items-center">
      <div
        class="flex pt-5 px-5 sm:pt-0 sm:px-0 items-center order-2 sm:order-1"
      >
        <i
          class="fa fa-2x mx-2"
          :class="[isPlaying ? 'fa-pause' : 'fa-play']"
          @click="isPlaying ? pause() : play()"
        ></i>
        <input
          class="w-full ml-3"
          type="range"
          min="0"
          max="100"
          :value="currentVolume"
          @change="volume"
        />
      </div>
      <NavbarLiveNow
        class="order-1 sm:order-2"
        :is-live="isLive"
        :live-text="text"
      />
    </div>
    <div class="wrapper absolute w-200px">
      <p class="target">{{ songTitle }}</p>
    </div>
  </div>
</template>

<style scoped>
input[type='range'] {
  accent-color: white;
  background-color: black;
}

.wrapper {
  margin: auto;
  overflow-x: hidden;
}

.target {
  font-weight: bold;
  white-space: nowrap;
  color: #fbfbfb;
  animation-name: rightToLeft;
  animation-duration: 12s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  /* animation: rightToLeft 4.5s linear infinite; */
}

@keyframes rightToLeft {
  0% {
    transform: translateX(300px);
  }

  100% {
    transform: translateX(-500px);
  }
}
</style>
