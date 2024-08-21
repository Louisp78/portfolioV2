<script setup lang="ts">
// TODO: find implement OG with the corresponding plugin
// TODO: Get the robots.txt file
useSeoMeta({
  title: 'Louis Place - Mobile Software Engineer & Marine Biology Enthusiast Portfolio',
  ogTitle: 'Louis Place - Mobile Software Engineer & Marine Biology Enthusiast Portfolio',
  description: 'Welcome to Louis Place\'s portfolio. I am a Mobile Software Engineer and Marine Biology Enthusiast. Explore my projects, skills, and contact information to learn more about my work and passions.',
  ogDescription: 'Explore the portfolio of Louis Place, a skilled Mobile Software Engineer with a passion for Marine Biology. Check out my projects and learn more about my work.',
  ogType: 'website',
  ogUrl: 'https://localhost:3000/',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
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
    @apply text-4xl
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

/* Custom classes */
.companieAndLocation {
  @apply italic text-xl flex justify-center md:justify-end gap-2;
}
.skillContainer {
 @apply flex flex-wrap gap-3 justify-center;
}
.button {
  @apply flex gap-2 p-3 font-inconsolata font-medium bg-sand rounded-md w-fit hover:text-burnedSand hover:border hover:border-burnedSand duration-100;
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
</style>
