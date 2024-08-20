<script lang="ts" setup>
import type Education from '~/types/Education'

defineProps<{
  vModel: Education
}>()
const nuxtLink = resolveComponent('NuxtLink')
const div = resolveComponent('div')
</script>

<template>
  <li>
    <h3>{{ vModel.title }}</h3>
    <component
      :is="vModel.companieLink ? nuxtLink : div"
      :to="vModel.companieLink"
      class="companieAndLocation"
    >
      {{ vModel.companie }}
      <Icon
        v-if="vModel.companieLink"
        name="clarity:link-line"
        size="24"
      />
    </component>
    <p
      v-if="vModel.description"
      class="text-md md:text-lg"
    >
      {{ vModel.description }}
    </p>
  </li>
</template>
