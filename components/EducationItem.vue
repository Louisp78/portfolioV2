<script lang="ts" setup>
import type Education from "~/types/Education"

defineProps<{
  vModel: Education
}>()
</script>

<template>
  <li>
    <h3>{{ vModel.title }}</h3>
    <template v-if="vModel.companieLink">
      <NuxtLink
        :to="vModel.companieLink"
        target="_blank"
        class="companieAndLocation"
      >
        {{ vModel.companie }}
        <Icon name="clarity:link-line" size="24" />
      </NuxtLink>
    </template>
    <template v-else>
      <div class="companieAndLocation">
        {{ vModel.companie }}
      </div>
    </template>
    <p v-if="vModel.description" class="text-md md:text-lg">
      {{ vModel.description }}
    </p>
  </li>
</template>
