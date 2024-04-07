import { ref } from 'vue'

const isPlaying = ref(false)
const currentVolume = ref('100')
let player = null

export const useAudioPlayer = (playerRef) => {
  const config = useRuntimeConfig()

  player = playerRef
  const play = () => {
    player.value.src = `//${config.public.RADIO_HOST_URL}`
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
