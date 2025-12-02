// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxthub/core',
    '@nuxt/ui'
  ],

  runtimeConfig: {
    dbapi: process.env.Nuxt_POSTGRES_URL
  }
})