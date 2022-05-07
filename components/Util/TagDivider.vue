<script lang="ts" setup>
defineProps({
    object: Object,
    childName: String,
    tag: String,
});

</script>


<template>
    <span v-for="(child, index) in object">
        {{ child[childName] + `${object.length - 1 !== index ? ` ${tag} ` : ''}` }}
    </span>
</template>