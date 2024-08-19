<script lang="ts" setup>
defineProps<{ link: string }>()
</script>

<template>
  <NuxtLink
    target="_blank"
    class="button mt-5"
    :to="link"
  >
    <NuxtImg
      src="/img/play-icon.svg"
      width="20"
    />
    <span>Play Now</span>
  </NuxtLink>
</template>
