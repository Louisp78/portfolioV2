import { plugin } from "postcss"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: Boolean(process.env.NUXT_DEV_TOOLS_ENABLE) },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@nuxtjs/seo",
    "@nuxtjs/i18n",
    "nuxt-nodemailer",
  ],
  css: ["~/assets/css/main.css"],
  typescript: {
    typeCheck: true,
  },
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
    url: "https://louisplace.com",
    name: "Louis Place Louis Place - Mobile Software Engineer Portfolio",
    indexable: true,
  },
  seo: {
    redirectToCanonicalSiteUrl: true,
  },
  i18n: {
    locales: [
      { code: "en", language: "en-US", file: "en.json" },
      { code: "fr", language: "fr-FR", file: "fr.json" },
    ],
    baseUrl: "https://louisplace.com",
    vueI18n: "./i18n.config.ts",
    compilation: {
      strictMessage: false,
    },
    defaultLocale: "en",
    strategy: "prefix",
  },
  nodemailer: {
    from: '"Quote Bot" <quote@louisplace.com>',
    host: process.env.NUXT_MAILTRAP_HOST,
    port: 2525,
    auth: {
      user: process.env.NUXT_MAILTRAP_USER,
      pass: process.env.NUXT_MAILTRAP_PASS,
    },
  },
  runtimeConfig: {
    recaptchaSecretKey: process.env.NUXT_RECAPTCHA_SECRET_KEY,
    public: {
      recaptchaSiteKey: process.env.NUXT_RECAPTCHA_SITE_KEY,
    },
  },
})
