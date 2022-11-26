import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'pathe'
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  preset: 'node-server',
  modules: [
    'nuxt-windicss',
    'nuxt-graphql-client',
    '@kevinmarrec/nuxt-pwa',
    '@nuxtjs/eslint-module',
  ],
  alias: {
    images: resolve(__dirname, './assets/images'),
  },
  experimental: {
    reactivityTransform: true,
  },
  components: true,
  pwa: {
    meta: {
      name: 'Catorcentena Radio',
      author: 'Catorcentena Radio',
      description: 'Worldwide DJ Community',
      theme_color: '#000000',
      lang: 'es',
    },
    manifest: {
      name: 'Catorcentena Radio',
      short_name: 'Catorcentena Radio',
      description: 'Worldwide DJ Community',
      start_url: '/',
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
      GQL_HOST: 'https://catorcentena-graphql.herokuapp.com/graphql',
      RADIO_HOST:
        '//fps4.listen2myradio.com:2199/listen.php?ip=109.169.23.123&port=8237&type=ice&mount=1440radio',
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es',
      },
      meta: [
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:locale',
          content: 'es_CL',
        },
      ],
    },
  },
})
