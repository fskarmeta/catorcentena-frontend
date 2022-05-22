<script setup>
import logoImage from "images/logo.png";
import backgroundImage from "images/stars.jpg";
</script>

<template>
  <div class="bg-black self-center">
    <div class="stars" :style="`background-image: url(${backgroundImage})`"></div>
    <div class="relative container mx-auto">
      <NavbarMain />
      <div class="flex justify-center">
        <NuxtLink to="/">
          <img class="my-20 w-50 md:w-auto md:h-auto" :src="logoImage" alt="Catorcentena logo" />
        </NuxtLink>
      </div>
      <div class="mx-5 md:mx-0 mb-5">
        <!-- All pages beeing rendered here -->
        <slot />
      </div>
    </div>
  </div>
</template>


<style>
.stars {
  width: 200%;
  animation: move-stars 100s linear infinite;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
