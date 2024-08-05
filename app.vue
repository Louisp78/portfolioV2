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
</script>

<template>
  <div>
    <NuxtLayout class="bg-background-beach bg-cover">
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
</style>
