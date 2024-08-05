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
        <p>🏢 {{ vModel.companie }}</p>
        <p>📍 {{ vModel.location }}</p>
      </div>
      <p>{{ vModel.description }}</p>
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

<style>

</style>
