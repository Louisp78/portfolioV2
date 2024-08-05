<script lang="ts" setup>
import type Experience from '~/types/Experience'

defineProps<{
  vModel: Experience
}>()
</script>

<template>
  <li>
    <article class="flex flex-col gap-3">
      <h3>{{ vModel.title }}</h3>
      <div class="flex justify-center gap-3 lg:justify-start">
        <p class="companieAndLocation">
          {{ vModel.companie }}, {{ vModel.location }}
        </p>
      </div>
      <p class="text-lg">
        {{ vModel.description }}
      </p>
      <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
        <SkillLabel
          v-for="skill in vModel.skills"
          :key="skill.title"
          :v-model="skill"
        />
      </div>
    </article>
  </li>
</template>
