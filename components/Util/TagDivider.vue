<script setup>

const router = useRouter()

const props = defineProps({
    array: Array,
    childName: String,
    tag: String,
    link: {
        type: Boolean,
        default: false,
    },
    url: {
        type: String,
        default: '',
    },
    routeAttr: {
        type: String,
        default: 'slug',
    },
});

const { link, url, routeAttr } = toRefs(props);

const navigateTo = (attr) => {
    if (!link.value) {
        return;
    }
    router.push(url.value + attr[routeAttr.value]);

}

</script>


<template>
    <span v-for="(child, index) in array" @click="navigateTo(child.attributes)" :class="{ 'hover:cursor-pointer hover:text-green-200': link }">
        {{ child.attributes[childName] + `${array.length - 1 !== index ? ` ${tag} ` : ''}` }}
    </span>
</template>