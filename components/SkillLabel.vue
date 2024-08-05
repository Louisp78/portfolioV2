<script lang="ts" setup>
import type Skill from '~/types/Skill'

defineProps<{ vModel: Skill }>()
</script>

<template>
  <NuxtLink
    class="rounded-full bg-sand text-burnedSand font-inconsolata font-medium px-3"
    @click="() => console.info('YOO')"
  >{{ vModel.title }}</NuxtLink>
</template>

<style>

</style>
