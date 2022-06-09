<script setup>
const isLive = ref(false)

onMounted(async () => {
  try {
    const data = await GqlAudioplayer()
    const { live } = data.audioPlayer.data.attributes
    isLive.value = live
  } catch {}
})
</script>

<template>
  <div v-if="isLive" class="flex ml-2">
    <div class="livenow">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="live-text">LIVE MIX NOW</div>
  </div>
</template>

<style lang="scss" scoped>
.live-text {
  font-size: 10px;
  white-space: nowrap;
  // margin: 4px 0 0 4px;
  font-weight: 600;
}

.livenow {
  width: 20px;
  margin: 0 auto;
  display: inline-block;
  // margin-bottom: 12px;
  // margin-left: 10px;
}

.livenow > div {
  vertical-align: middle;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  position: absolute;
  margin: 0 auto;
  border: 3px solid rgba(255, 255, 255, 1);
  -webkit-animation: live 1.4s infinite ease-in-out;
  animation: live 1.4s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  &:nth-child(1) {
    background-color: rgba(255, 255, 255, 0.3);
    background-color: #7eff70;
    -webkit-animation-delay: -0.1s;
    animation-delay: -0.1s;
  }

  &:nth-child(2) {
    -webkit-animation-delay: 0.16s;
    animation-delay: 0.16s;
  }

  &:nth-child(3) {
    -webkit-animation-delay: 0.42s;
    animation-delay: 0.42s;
    border: 3px solid rgba(255, 255, 255, 0.5);
  }

  &:nth-child(4) {
    border: 3px solid #7eff70;
    -webkit-animation-delay: -0.42s;
    animation-delay: -0.42s;
  }
}

@-webkit-keyframes live {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0.6);
  }

  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes live {
  0%,
  80%,
  100% {
    transform: scale(0.6);
    -webkit-transform: scale(0.6);
  }

  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
