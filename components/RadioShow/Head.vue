<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  artists: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="text-center">
    <h1 class="text-4xl my-5 text-cyan-300 font-bold">{{ title }}</h1>
    <h2>{{ description }}</h2>
    <small v-if="artists.length" class="mt-2 block">
      <span>Artistas: </span>
      <UtilTagDivider
        :array="artists"
        child-name="artistName"
        tag=","
        :link="true"
        url="/artista/"
      />
    </small>
  </div>
</template>
