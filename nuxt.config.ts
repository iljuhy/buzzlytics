// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          Outfit: [400]
        }
    }],
    '@pinia/nuxt',
  ],
})
