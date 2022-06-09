<script lang="ts" setup>
defineProps({
  artists: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="flex justify-center gap-30px flex-wrap">
    <ArtistHeader
      v-for="(artist, index) in artists"
      :key="index"
      :name="artist.attributes.artistName"
      :social-media="artist.attributes.socialMedia"
      :music-styles="artist.attributes.music_styles"
      :image="artist.attributes.image.data.attributes.formats.thumbnail.url"
      :slug="artist.attributes.slug"
      in-grid-display
      class="m-5"
    />
  </div>
</template>
