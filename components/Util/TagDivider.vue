<script setup>
const router = useRouter()

const props = defineProps({
  array: {
    type: Array,
    default: () => [],
  },
  childName: {
    type: String,
    default: '',
  },
  tag: {
    type: String,
    default: '',
  },
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
})

const { link, url, routeAttr } = toRefs(props)

const navigateTo = (attr) => {
  if (!link.value) {
    return
  }
  router.push(url.value + attr[routeAttr.value])
}
</script>

<template>
  <span
    v-for="(child, index) in array"
    :key="index"
    :class="{ 'hover:cursor-pointer hover:text-green-200': link }"
    @click="navigateTo(child.attributes)"
  >
    {{
      child.attributes[childName] +
      `${array.length - 1 !== index ? ` ${tag} ` : ''}`
    }}
  </span>
</template>
