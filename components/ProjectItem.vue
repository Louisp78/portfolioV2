<script lang="ts" setup>
import type Project from '~~/types/Project'

defineProps<{ vModel: Project }>()
</script>

<template>
  <section class="md:flex md:flex-row-reverse md:justify-between md:text-left md:items-start md:min-h-[60vh]">
    <div class="md:max-w-[50%] md:pl-15">
      <header class="flex flex-col gap-3 justify-center items-center md:justify-start md:items-start">
        <h3>{{ vModel.title }}</h3>
        <div class="hidden">
          <NuxtImg src="/img/email-logo.svg" />
          <NuxtImg src="/img/email-logo.svg" />
          <NuxtImg src="/img/email-logo.svg" />
        </div>
        <div class="skillContainer">
          <SkillLabel
            v-for="skill in vModel.skills"
            :key="skill.title"
            :v-model="skill"
          />
        </div>
      </header>
      <p class="hidden md:block">
        {{ vModel.description }}
      </p>
    </div>
    <div class="flex justify-center py-10 md:py-0 md:max-w-[40%]">
      <NuxtImg
        :src="vModel.imgSrc"
      />
    </div>
    <p class="md:hidden">
      {{ vModel.description }}
    </p>
    <div class="flex justify-center md:hidden">
      <NuxtLink
        v-if="vModel.isGame"
        target="_blank"
        class="button mt-5"
        :to="vModel.link"
      >
        Play Now
      </NuxtLink>
    </div>
  </section>
</template>
