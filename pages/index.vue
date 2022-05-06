<script lang="ts" setup>
const { data } = await useAsyncData('radioShows', () => GqlRadioShows({}));
</script>

<template>
    <RadioShowCards v-if="data.radioShows" :radio-shows="data.radioShows" />
</template>