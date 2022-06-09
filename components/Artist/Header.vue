<script setup lang="ts">
defineProps({
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
</script>

<template>
  <div
    class="flex flex-col place-items-center gap-20px max-w-250px"
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
      class="flex gap-x-2 text-3xl"
      :class="[
        inGridDisplay ? 'justify-center' : 'justify-center md:justify-start',
      ]"
    >
      <NuxtLink
        v-if="socialMedia.instagram"
        :to="socialMedia.instagram"
        external
      >
        <i class="fa-brands fa-instagram"></i
      ></NuxtLink>
      <NuxtLink v-if="socialMedia.mixcloud" :to="socialMedia.mixcloud" external>
        <i class="fa-brands fa-mixcloud"></i
      ></NuxtLink>
      <NuxtLink
        v-if="socialMedia.soundcloud"
        :to="socialMedia.soundcloud"
        external
      >
        <i class="fa-brands fa-soundcloud"></i
      ></NuxtLink>
    </div>
    <small class="d-block">
      <UtilTagDivider :array="musicStyles.data" child-name="style" tag="/" />
    </small>
  </div>
</template>
