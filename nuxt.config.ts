import { defineNuxtConfig } from "nuxt";
import { resolve } from "pathe";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ["nuxt-windicss", "nuxt-graphql-client"],
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
  runtimeConfig: {
    public: {
      GQL_HOST: "http://localhost:1337/graphql",
    }
  },
  baseUrl: "https://localhost:3000",
});
