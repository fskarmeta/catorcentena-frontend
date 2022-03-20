<template>
  <div class="place-self-center">
    <audio
      ref="player"
      src="//streamingv2.shoutcast.com/catorcentena"
      type="audio/mp3"
    >Your browser does not support the audio element.</audio>

    <div class="flex pt-5 px-5 sm:pt-0 sm:px-0 items-center">
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
        @change="volume"
        :value="currentVolume"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const player = ref(null)
const isPlaying = ref(false)
const currentVolume = ref('100')

const play = () => {
  player.value.src = '//streamingv2.shoutcast.com/catorcentena'
  player.value.load()
  player.value.play()
  isPlaying.value = true
}
const pause = () => {
  player.value.pause()
  player.value.src = ''
  player.value.load()
  isPlaying.value = false
}


const volume = (e) => {
  player.value.volume = +e.target.value / 100
  currentVolume.value = e.target.value
}
</script>

<style scoped>
input[type="range"] {
  accent-color: white;
  background-color: black;
}
</style>