<script lang="ts" setup>
defineProps({
  radioShow: Object
});
</script>

<template>
  <NuxtLink :to="`/radio-show/${radioShow.attributes.slug}`">
    <div
      class="bg-gray-600 bg-opacity-25 hover:bg-gray-400 hover:border-green-400 hover:bg-opacity-25 rounded-lg border border-gray-500 shadow-lg hover:shadow-green-500 dark:bg-gray-800 dark:border-gray-700 text-center h-400px w-316px">
      <img class="border-top object-cover rounded-lg rounded-b-none w-full h-4/5"
        :src="radioShow.attributes.image.data.attributes.url" :alt="radioShow.attributes.image.data.attributes.name" />
      <div class="h-1/5 flex flex-col place-content-evenly">
        <p>{{ radioShow.attributes.shortTitle }}</p>
        <small>
          <UtilTagDivider :array="radioShow.attributes.music_styles.data" child-name="style" tag="/" />
        </small>
      </div>
    </div>
  </NuxtLink>
</template>
