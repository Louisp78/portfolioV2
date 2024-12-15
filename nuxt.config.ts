// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image', '@nuxtjs/sitemap', '@nuxtjs/seo', '@nuxtjs/i18n'],
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
  site: {
    url: 'https://louisplace.com',
    name: 'Louis Place Louis Place - Mobile Software Engineer & Marine Biology Enthusiast Portfolio',
    indexable: true,
  },
  seo: {
    redirectToCanonicalSiteUrl: true,
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'fr', language: 'fr-FR' },
    ],
    vueI18n: './i18n.config.ts',
    defaultLocale: 'en',
  },
})
