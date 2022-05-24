<script setup>
import { ref } from 'vue'
import { useAudioPlayer } from '~~/composables/useAudioPlayer';

const config = useRuntimeConfig()

const player = ref()

const songTitle = ref('')

const { isPlaying, currentVolume, play, pause, volume } = useAudioPlayer(player)

onMounted(async () => {
  try {
    const data = await $fetch('/api/getSongTitle')
    const { title } = data
    if (title) songTitle.value = title

  } catch (e) {
    console.log(e)
  }
  setInterval(async () => {
    try {
      const data = await $fetch('/api/getSongTitle')
      const { title } = data
      if (title) songTitle.value = title
    } catch (e) {
      console.log(e)
    }
  }, 10000)
}
)
</script>


<template>
  <div class="place-self-center mt-10 sm:mt-0 flex">
    <audio ref="player" :src="config.public.RADIO_HOST" type="audio/mp3">Your browser does not support the audio
      element.</audio>

    <div class="flex pt-5 px-5 sm:pt-0 sm:px-0 items-center">
      <i class="fa fa-2x mx-2" :class="[isPlaying ? 'fa-pause' : 'fa-play']" @click="isPlaying ? pause() : play()"></i>
      <input class="w-full ml-3" type="range" min="0" max="100" @change="volume" :value="currentVolume" />
      <NavbarLiveNow />
    </div>
    <div class="wrapper absolute">
      <p class="target">{{ songTitle }}</p>
    </div>
  </div>
</template>

<style scoped>
input[type="range"] {
  accent-color: white;
  background-color: black;
}

.wrapper {
  width: 200px;
  margin: auto;
  overflow-x: hidden;
}

.target {
  font-weight: bold;
  white-space: nowrap;
  color: #fbfbfb;
  animation-name: rightToLeft;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  /* animation: rightToLeft 4.5s linear infinite; */
}

@keyframes rightToLeft {
  0% {
    transform: translateX(200px);
  }

  100% {
    transform: translateX(-500px);
  }
}
</style>