<script setup lang="ts">
// TODO: add SEO
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
  @apply text-xl;
}
section {
  @apply px-5;
}
</style>
