<script lang="ts" setup>
defineProps<{ skill: string }>()
</script>

<template>
  <div
    class="rounded-full bg-softSand text-black border-burnedSand border-2 font-inconsolata font-medium px-3"
  >
    {{ skill }}
  </div>
</template>
