import { defineNuxtConfig } from "nuxt3";
import { resolve } from "pathe";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ["nuxt-windicss"],
  alias: {
    images: resolve(__dirname, "./assets/images"),
    style: resolve(__dirname, "./assets/style"),
  },
  typescript: {
    strict: true,
    tsConfig: {
      typeCheck: true,
    },
  },
});
