<script lang="ts" setup>
defineProps<{ link: string, title: string, target: string | undefined }>()
</script>

<template>
  <NuxtLink
    :target="target"
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
