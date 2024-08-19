<script lang="ts" setup>
import type Education from '~/types/Education'

defineProps<{
  vModel: Education
}>()
</script>

<template>
  <li>
    <h3>{{ vModel.title }}</h3>
    <NuxtLink
      :to="vModel.companieLink"
      class="companieAndLocation"
    >
      {{ vModel.companie }}
    </NuxtLink>
    <p
      v-if="vModel.description"
      class="text-md md:text-lg"
    >
      {{ vModel.description }}
    </p>
  </li>
</template>
