<script setup>
import { inject } from 'vue'
const showMobileMenu = inject('showMobileMenu')
</script>

<template>
  <button class="sm:hidden" label="Mobiel Navbar" @click="showMobileMenu">
    <svg
      class="w-10 h-10"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
</template>
