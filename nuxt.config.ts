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
      GQL_HOST: "http://localhost:1337/graphql",
      radioHost: "//Fps2.listen2myradio.com:2199/listen.php?ip=109.169.23.17&port=9090&type=ice&mount=1440radio",
      strapiUrl: "http://localhost:1337"
    }
  },
  baseUrl: "https://localhost:3000",
});
