// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  css: [
      'devextreme/dist/css/dx.light.css'
  ],

  modules: ['@nuxtjs/tailwindcss']
},)