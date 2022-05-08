<script lang="ts" setup>
defineProps({
    array: Array,
    childName: String,
    tag: String,
});

</script>


<template>
    <span v-for="(child, index) in array">
        {{ child.attributes[childName] + `${array.length - 1 !== index ? ` ${tag} ` : ''}` }}
    </span>
</template>