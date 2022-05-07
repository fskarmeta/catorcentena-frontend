<script lang="ts" setup>
defineProps({
  radioShow: Object
});

const config = useRuntimeConfig()
const { strapiUrl } = config.public
</script>

<template>
  <NuxtLink :to="`/radio-show/${radioShow.Slug}`">
    <div
      class="bg-gray-600 bg-opacity-25 hover:bg-gray-400 hover:border-green-400 hover:bg-opacity-25 rounded-lg border border-gray-500 shadow-lg hover:shadow-green-500 dark:bg-gray-800 dark:border-gray-700 text-center h-400px w-316px">
      <img class="border-top rounded-lg rounded-b-none w-full h-4/5" :src="strapiUrl + radioShow.image.url"
        alt="projecto" />
      <div class="h-1/5 flex flex-col place-content-evenly">
        <p>{{ radioShow.shortTitle }}</p>
        <small>
          <UtilTagDivider :object="radioShow.music_styles" child-name="style" tag="/" />
        </small>
      </div>
    </div>
  </NuxtLink>
</template>
