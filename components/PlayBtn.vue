<script lang="ts" setup>
defineProps<{ link: string }>()
</script>

<template>
  <NuxtLink
    target="_blank"
    class="button mt-5"
    :to="link"
  >
    <Icon
      name="solar:play-line-duotone"
      size="24"
    />
    <span>Play Now</span>
  </NuxtLink>
</template>
