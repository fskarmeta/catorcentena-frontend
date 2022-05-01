<script lang="ts" setup>
import { ref } from 'vue'
const player = ref()
const isPlaying = ref(false)
const currentVolume = ref('100')


const play = () => {
  player.value.src = '//Fps2.listen2myradio.com:2199/listen.php?ip=109.169.23.17&port=9090&type=ice&mount=1440radio'
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

const volume = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  const currentValue: number = +target.value
  player.value.volume = currentValue / 100
  currentVolume.value = target.value
}
</script>


<template>
  <div class="place-self-center">
    <audio ref="player"
      src="//Fps2.listen2myradio.com:2199/listen.php?ip=109.169.23.17&port=9090&type=ice&mount=1440radio"
      type="audio/mp3">Your browser does not support the audio element.</audio>

    <div class="flex pt-5 px-5 sm:pt-0 sm:px-0 items-center">
      <i class="fa fa-2x mx-2" :class="[isPlaying ? 'fa-pause' : 'fa-play']" @click="isPlaying ? pause() : play()"></i>
      <input class="w-full ml-3" type="range" min="0" max="100" @change="volume" :value="currentVolume" />
    </div>
  </div>
</template>

<style scoped>
input[type="range"] {
  accent-color: white;
  background-color: black;
}
</style>