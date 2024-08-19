<script lang="ts" setup>
import type Project from '~~/types/Project'

defineProps<{ vModel: Project }>()
</script>

<template>
  <section class="md:flex md:flex-row-reverse md:justify-between md:text-left md:items-start md:min-h-[60vh]">
    <div class="md:max-w-[50%] md:pl-15">
      <header class="flex flex-col gap-3 justify-center items-center md:justify-start md:items-start">
        <h3>{{ vModel.title }}</h3>
        <div class="skillContainer md:!justify-start">
          <SkillLabel
            v-for="skill in vModel.skills"
            :key="skill.title"
            :v-model="skill"
          />
        </div>
      </header>
      <div class="hidden md:flex md:flex-col md:gap-5">
        <p class="md:pt-3">
          {{ vModel.description }}
        </p>
        <div class="flex justify-center">
          <PlayBtn
            v-if="vModel.isGame"
            :link="vModel.link"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-center py-10 md:py-0 md:max-w-[40%]">
      <NuxtImg
        :src="vModel.imgSrc"
        height="400"
      />
    </div>
    <div class="md:hidden">
      <p>
        {{ vModel.description }}
      </p>
      <div class="flex justify-center">
        <PlayBtn
          v-if="vModel.isGame"
          :link="vModel.link"
        />
      </div>
    </div>
  </section>
</template>
