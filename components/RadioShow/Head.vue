<script lang="ts" setup>
defineProps({
    title: String,
    description: String,
});

</script>

<template>
    <div class="text-center">
        <h1 class="text-4xl mb-5 text-cyan-300 font-bold">{{ title }}</h1>
        <h2>{{ description }}</h2>
    </div>
</template>