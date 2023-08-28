// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@Components": "./components",
    "@": "./",
    "@layouts": "./layouts",
    "@pages": "./pages",
  },
  build: {
    transpile: ['vuetify'],
  },
  typescript: {
    shim: false
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.API_URL || 'www.thecocktaildb.com/api/json/v1/1',
    },
  },
})
