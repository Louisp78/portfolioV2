<script lang="ts" setup>
defineProps<{ link: string, title: string }>()
</script>

<template>
  <NuxtLink
    target="_blank"
    class="button mt-5"
    :to="link"
  >

    <span>{{ title }}</span>
    <Icon
      name="solar:arrow-right-linear"
      size="24"
    />
  </NuxtLink>
</template>
