
<script lang="ts" setup>
defineProps({
    artists: Array,
});
</script>

<template>
    <div class="flex justify-center gap-30px flex-wrap">
        <ArtistHeader v-for="artist in artists" :name="artist.attributes.artistName"
            :social-media="artist.attributes.socialMedia" :music-styles="artist.attributes.music_styles"
            :image="artist.attributes.image.data.attributes.formats.thumbnail.url" :slug="artist.attributes.slug" inGridDisplay
            class="m-5" />
    </div>
</template>