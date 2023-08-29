// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@Components": "./components",
    "@": "./",
    "@layouts": "./layouts",
    "@pages": "./pages",
  },
  ssr: false,
  build: {
    transpile: ['vuetify'],
  },
  typescript: {
    shim: false
  }
})
