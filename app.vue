<script setup lang="ts">
const { t } = useI18n()

const meJobTarget: string = t('job-title-only')
useSeoMeta({
  title: `Louis Place - ${meJobTarget} Portfolio`,
  ogTitle: `Louis Place - ${meJobTarget} Portfolio`,
  description: t('seo.description'),
  ogDescription: t('seo.description'),
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

const i18nHead = useLocaleHead()

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="postcss">
  /* Global style */
  .menu-item {
    h1 {
      @apply text-4xl;
    }
  }
  h1 {
    @apply text-3xl;
  }
  h2 {
    @apply text-3xl;
  }
  h3 {
    @apply text-2xl;
  }
  section {
    @apply px-5 lg:px-14;
  }

  textarea {
    @apply block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
  }
  input {
    @apply block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
  }

  /* Custom classes */
  .companieAndLocation {
    @apply italic text-xl flex justify-center md:justify-end gap-2;
  }
  .skillContainer {
    @apply flex flex-wrap gap-3 justify-center;
  }
  .btn-primary {
    @apply flex justify-center items-center gap-3 p-2 font-inconsolata font-medium border border-black rounded-md hover:bg-sand hover:text-burnedSand;
  }
  .button {
    @apply flex gap-2 p-3 font-inconsolata font-medium bg-sand rounded-md w-fit hover:text-burnedSand hover:bg-opacity-0 hover:border hover:border-burnedSand duration-100;
  }

  /* Animation classes */
  .animElt-slideRight {
    @apply opacity-0 -translate-x-[100%] animate-slideRight;
  }
  .animElt-slideLeft {
    @apply opacity-0 translate-x-[100%] animate-slideLeft;
  }
  .animElt-slideBottom {
    @apply opacity-0 -translate-y-[50%] animate-slideBottom;
  }

  .grecaptcha-badge {
      visibility: hidden;
  }
</style>
