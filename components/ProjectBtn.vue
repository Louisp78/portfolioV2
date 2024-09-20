<script lang="ts" setup>
defineProps<{ link: string, title: string }>()
</script>

<template>
  <NuxtLink
    target="_blank"
    class="button mt-5"
    :to="link"
  >
    <Icon
      name="solar:link-bold"
      size="24"
    />
    <span>{{ title }}</span>
  </NuxtLink>
</template>
