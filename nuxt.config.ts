import { defineNuxtConfig } from "nuxt";
import { resolve } from "pathe";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  preset: "node-server",
  modules: ["nuxt-windicss", "nuxt-graphql-client", "@kevinmarrec/nuxt-pwa"],
  alias: {
    images: resolve(__dirname, "./assets/images"),
  },
  pwa: {
    meta: {
      name: "Catorcentena Radio",
      author: "Catorcentena Radio",
      description: "Worldwide DJ Community",
      theme_color: "#000000",
      lang: "es",
    },
    manifest: {
      name: "Catorcentena Radio",
      short_name: "Catorcentena Radio",
      description: "Worldwide DJ Community",
    },
    workbox: {
      enabled: true,
    },
  },
  typescript: {
    strict: true,
    tsConfig: {
      typeCheck: true,
    },
  },
  runtimeConfig: {
    public: {
      GQL_HOST: "https://catorcentena-graphql.herokuapp.com/graphql",
      RADIO_HOST:
        "//Fps2.listen2myradio.com:2199/listen.php?ip=109.169.23.17&port=9090&type=ice&mount=1440radio",
    },
  },
  app: {
    head: {
      script: [{ src: "//widget.mixcloud.com/media/js/widgetApi.js" }],
    },
  },
});
