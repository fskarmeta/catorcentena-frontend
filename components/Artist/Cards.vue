
<script lang="ts" setup>
defineProps({
    artists: Object,
});
</script>

<template>
    <div class="flex justify-center gap-30px flex-wrap">
        <ArtistHeader v-for="artist in artists" :name="artist.artistName" :social-media="artist.socialMedia"
            :music-styles="artist.music_styles" :image="artist.image.url" :slug="artist.linkSlug" inGridDisplay class="m-5" />
    </div>
</template>