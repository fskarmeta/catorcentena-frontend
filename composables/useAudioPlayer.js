import { ref } from 'vue'

const isPlaying = ref(false)
const currentVolume = ref('100')
let player = null

export const useAudioPlayer = (playerRef) => {
  player = playerRef
  const play = () => {
    player.value.src =
      '//Fps3.listen2myradio.com:2199/listen.php?ip=109.169.23.124&port=8288&type=ice&mount=1440radio'
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
    const target = e.target
    const currentValue = +target.value
    player.value.volume = currentValue / 100
    currentVolume.value = target.value
  }

  return { isPlaying, currentVolume, play, pause, volume }
}

export const stopAudioPlayer = () => {
  if (player) {
    player.value.pause()
    player.value.src = ''
    player.value.load()
    isPlaying.value = false
  }
}
