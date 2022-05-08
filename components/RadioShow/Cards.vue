<script lang="ts" setup>
defineProps({
    radioShows: Array,
});
</script>

<template>
    <div class="flex justify-center gap-30px flex-wrap">
        <RadioShowCard v-for="radioShow in radioShows" :radio-show="radioShow" />
    </div>
</template>
