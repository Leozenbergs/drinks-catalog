// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  build: {
    transpile: ['vuetify'],
  },
  typescript: {
    shim: false
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" }
      ]
    }
  }
})
