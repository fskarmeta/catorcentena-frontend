<script lang="ts" setup>
defineProps({
    artist: Object
});

const strapiUrl: string = 'http://localhost:1337'
</script>

<template>
    <div class="w-full flex flex-col gap-x-10 text-center md:text-left md:flex-row items-center md:items-start">
        <ArtistHeader class="md:hidden" :name="artist.artistName" :social-media="artist.socialMedia"
            :music-styles="artist.music_styles" :image="artist.image.url" :slug="artist.linkSlug" />
        <img class="border rounded-lg border-gray-900 h-400px w-316px mb-2" :src="strapiUrl + artist.image.url"
            alt="projecto" />
        <div class="mx-5 md:mx-0">
            <ArtistHeader class="hidden md:block" :name="artist.artistName" :social-media="artist.socialMedia"
                :music-styles="artist.music_styles" :image="artist.image.url" :slug="artist.linkSlug" />
            <p class="my-4">{{ artist.description }}</p>
            <h2 class="text-2xl mb-4">Radio Shows</h2>
            <NuxtLink v-for="radioShow in artist.radio_shows" :to="`/radio-show/${radioShow.Slug}`">
                <p class="underline">{{ radioShow.longTitle }}</p>
            </NuxtLink>
        </div>
    </div>
</template>