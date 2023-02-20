<script setup>
const props = defineProps({
  mix: {
    type: Object,
    default: () => {},
  },
})
const { mix } = toRefs(props)

const mixCloudURI = computed(() => {
  const mixCloudLink = encodeURIComponent(mix.value.mixcloudUrl)
  return (
    'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=' + mixCloudLink
  )
})
</script>

<template>
  <div
    class="w-full md:px-0 md:w-100 max-w-800px md:w-600px lg:w-1000px border-b border-gray-500 border-dashed py-5"
  >
    <small>{{ mix.date }}</small>
    <h3 class="text-2xl mb-2">{{ mix.title }}</h3>
    <p v-if="mix.description" class="mb-2">{{ mix.description }}</p>
    <div class="flex gap-10px"></div>
    <small>
      <UtilTagDivider
        :array="mix.music_styles.data"
        child-name="style"
        tag="/"
      />
    </small>
    <iframe
      :id="`mixcloud-widget-${mix.id}`"
      title="mix"
      width="100%"
      height="120"
      frameBorder="0"
      :src="mixCloudURI"
    />
  </div>
</template>
