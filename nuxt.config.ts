import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'pathe'
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config

// https://fpsnew2.listen2myradio.com:2199/listen.php?ip=212.84.160.3&port=8830&type=ice&mount=1440radio

const RADIO_CONFIG = {
  HOST: 'fpsnew2.listen2myradio.com',
  HOST_PORT: '2199',
  RADIO_IP: '212.84.160.3',
  RADIO_PORT: '6240',
  RADIO_MOUNT: '1440radio',
  RADIO_TYPE: 'ice',
}

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
      RADIO_HOST_IP: `${RADIO_CONFIG.RADIO_IP}:${RADIO_CONFIG.RADIO_PORT}`,
      GQL_HOST: 'https://catorcentena-graphql.herokuapp.com/graphql',
      RADIO_HOST_URL: `${RADIO_CONFIG.HOST}:${RADIO_CONFIG.HOST_PORT}/listen.php?ip=${RADIO_CONFIG.RADIO_IP}&port=${RADIO_CONFIG.RADIO_PORT}&type=${RADIO_CONFIG.RADIO_TYPE}&mount=${RADIO_CONFIG.RADIO_MOUNT}`,
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
