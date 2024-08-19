<script lang="ts" setup>
import type Project from '~~/types/Project'

defineProps<{ vModel: Project }>()
</script>

<template>
  <NuxtLink
    v-if="vModel.isGame"
    target="_blank"
    class="button mt-5"
    :to="vModel.link"
  >
    <NuxtImg
      src="/img/play-icon.svg"
      width="20"
    />
    <span>Play Now</span>
  </NuxtLink>
</template>
