<template>
    <div class="overflow-hidden bg-black self-center">
        <div
            class="h-screen bg-repeat stars z-100"
            :style="`background-image: url(${backgroundImage})`"
        ></div>
        <div class="absolute container mx-auto h-auto inset-0 z-0">
            <NavbarMain />
            <NuxtLink to="/">
                <div class="flex justify-center">
                    <img
                        class="my-20 w-50 md:w-auto md:h-auto"
                        :src="logoImage"
                        alt="Catorcentena logo"
                    />
                </div>
            </NuxtLink>
            <!-- All pages beeing rendered here -->
            <slot />
        </div>
    </div>
</template>

<script setup>
import logoImage from 'images/logo.png'
import backgroundImage from 'images/stars.jpg'
</script>

<style>
.stars {
    width: 200%;
    animation: move-stars 100s linear infinite;
}
@keyframes move-stars {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

body {
    background-image: url("images/stars.jpg");
    background-repeat: repeat-y;
    background-color: black;
}
</style>