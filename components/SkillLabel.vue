<script lang="ts" setup>
import type Skill from '~/types/Skill'

defineProps<{ vModel: Skill }>()
</script>

<template>
  <div
    class="rounded-full bg-softSand text-black border-burnedSand border-2 font-inconsolata font-medium px-3"
    @click="vModel.onPress"
  >
    {{ vModel.title }}
  </div>
</template>
