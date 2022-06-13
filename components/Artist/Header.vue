<script setup lang="ts">
const props = defineProps({
  inGridDisplay: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: '',
  },
  socialMedia: {
    type: Object,
    default: () => ({}),
  },
  musicStyles: {
    type: Object,
    default: () => ({}),
  },
  image: {
    type: String,
    default: '',
  },
  slug: {
    type: String,
    default: '',
  },
})

const { socialMedia } = toRefs(props)

const availableSocialMedia = computed(() =>
  Object.keys(socialMedia.value).filter((media) => socialMedia.value[media])
)
</script>

<template>
  <div
    class="flex flex-col place-items-center gap-20px w-300px"
    :class="{ 'text-center': inGridDisplay }"
  >
    <NuxtLink v-if="inGridDisplay" :to="`/artista/${slug}`"
      ><img
        v-if="inGridDisplay"
        class="object-cover w-24 h-24 rounded-full shadow-lg"
        :src="image"
        :alt="`${name} image`"
    /></NuxtLink>
    <NuxtLink v-if="inGridDisplay" :to="`/artista/${slug}`">
      <h1 class="text-3xl">{{ name }}</h1>
    </NuxtLink>
    <h1 v-else class="text-3xl">{{ name }}</h1>
    <div
      class="flex gap-x-2 text-xs"
      :class="[
        inGridDisplay
          ? 'justify-center'
          : 'justify-center md:justify-start mt-2',
      ]"
    >
      <NuxtLink
        v-for="(media, index) in availableSocialMedia"
        :key="index"
        :to="socialMedia[media]"
        target="_blank"
        class="cursor-pointer hover:text-green-200"
        external
      >
        <span>
          {{ media }}
          {{ availableSocialMedia.length !== index + 1 ? '·' : '' }}</span
        >
      </NuxtLink>
    </div>
    <small class="d-block">
      <UtilTagDivider :array="musicStyles.data" child-name="style" tag="/" />
    </small>
  </div>
</template>
