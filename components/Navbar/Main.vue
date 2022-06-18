<script lang="ts" setup>
import { ref, provide } from 'vue'

interface NavbarLinks {
  name: string
  url: string
}

const showMenu = ref(false)
const links: NavbarLinks[] = [
  { name: 'Radio Shows', url: '/' },
  { name: 'Artistas', url: '/artistas' },
  // { name: 'Radios Hermanas', url: '/artistas' },
]

const showMobileMenu = () => {
  showMenu.value = !showMenu.value
}

provide('showMobileMenu', showMobileMenu)
</script>

<template>
  <header class="w-full">
    <nav class="container mx-auto">
      <div class="flex flex-col sm:flex-row justify-between pt-0 sm:pt-5">
        <NavbarLinksDesktop :links="links" />
        <NavbarAudioplayer class="mr-5" />
        <NavbarMobileWidgetButton class="absolute" />
        <div
          class="absolute sm:hidden w-full bg-gray-800 sm:mr-0 md:hidden text-white"
          :class="!showMenu ? 'hidden' : ''"
        >
          <NavbarMobileWidgetButton />
          <NavbarLinksMobile :links="links" />
        </div>
      </div>
    </nav>
  </header>
</template>
