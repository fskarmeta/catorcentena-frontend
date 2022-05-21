<script lang="ts" setup>

defineProps({
    artist: Object
});

</script>

<template>
    <div class="w-full flex flex-col gap-x-10 text-center md:text-left md:flex-row items-center md:items-start">
        <ArtistHeader class="md:hidden" :name="artist.attributes.artistName"
            :social-media="artist.attributes.socialMedia" :music-styles="artist.attributes.music_styles"
            :slug="artist.attributes.slug" />
        <img class="border object-cover rounded-lg border-gray-900 h-400px w-316px mb-2"
            :src="artist.attributes.image.data.attributes.formats.medium.url" alt="projecto" />
        <div class="mx-5 md:mx-0">
            <ArtistHeader class="hidden md:block" :name="artist.attributes.artistName"
                :social-media="artist.attributes.socialMedia" :music-styles="artist.attributes.music_styles"
                :slug="artist.attributes.slug" />
            <p class="my-4">{{ artist.attributes.description }}</p>
            <h2 class="text-2xl mb-4">Radio Shows</h2>
            <NuxtLink v-for="radioShow in artist.attributes.radio_shows.data"
                :to="`/radio-show/${radioShow.attributes.slug}`">
                <p class="underline">{{ radioShow.attributes.longTitle }}</p>
            </NuxtLink>
        </div>
    </div>
</template>