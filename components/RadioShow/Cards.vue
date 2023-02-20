<script lang="ts" setup>
defineProps({
  radioShows: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="flex justify-center gap-30px flex-wrap">
    <RadioShowCard
      v-for="(radioShow, index) in radioShows"
      :key="index"
      :radio-show="radioShow || []"
    />
  </div>
</template>
