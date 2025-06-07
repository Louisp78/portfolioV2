<script lang="ts" setup>
import type Experience from "~/types/Experience"

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
      <p class="text-md md:text-lg">
        {{ vModel.description }}
      </p>
      <div class="skillContainer lg:justify-start">
        <SkillLabel
          v-for="skill in vModel.skills"
          :key="skill"
          :skill="skill"
        />
      </div>
    </article>
  </li>
</template>
