import { defineNuxtConfig } from "nuxt";
import { resolve } from "pathe";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ["nuxt-windicss", "nuxt-graphql-client"],
  alias: {
    images: resolve(__dirname, "./assets/images"),
  },
  typescript: {
    strict: true,
    tsConfig: {
      typeCheck: true,
    },
  },
  runtimeConfig: {
    public: {
      GQL_HOST: process.env.GQL_HOST || "http://localhost:1337/graphql",
      RADIO_HOST: process.env.RADIO_HOST,
      BASE_URL: process.env.BASE_URL || "http://localhost:3000",
    }
  },
  baseUrl: process.env.BASE_URL || "http://localhost:3000",
});
