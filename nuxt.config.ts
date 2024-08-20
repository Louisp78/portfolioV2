// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/seo',
    '@nuxtjs/robots',
  ],
  css: ['~/assets/css/main.css'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
})
