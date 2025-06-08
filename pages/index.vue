<script lang="ts" setup>
import { CONTACT_EMAIL, ICON_SIZE } from "~/constants"
import { educationListFactory } from "~/data/educations"
import { experiencesListFactory } from "~/data/experiences"
import { projectListFactory } from "~/data/projects"
import type Education from "~/types/Education"
import type { Project } from "~/types/Project"

const runtimeConfig = useRuntimeConfig()

useHead({
  script: [
    {
      src:
        "https://www.google.com/recaptcha/api.js?render=" +
        runtimeConfig.public.recaptchaSiteKey,
      async: true,
      defer: true,
    },
  ],
})

const { t } = useI18n()

definePageMeta({
  title: "seo.index-title",
})

const expList = experiencesListFactory(t)
const educationList: Education[] = educationListFactory(t)
const projectList: Project[] = projectListFactory(t)
const quoteModalOpen = ref<boolean>(false)

const allSkillList = [
  "React Native",
  "Expo",
  "SwiftUI",
  "Java",
  "Kotlin",
  "Spring Boot",
  "TypeScript",
]
</script>

<template>
  <div>
    <!-- TODO: fix logo nuxt img for responsivity -->
    <!-- TODO: Fix when switching language it jump to the top of the page -->
    <QuoteFloatingBtn
      v-if="!quoteModalOpen"
      @click="quoteModalOpen = !quoteModalOpen"
    />
    <QuoteActivity
      v-if="quoteModalOpen"
      :modal-open="quoteModalOpen"
      @close="quoteModalOpen = false"
    />

    <div id="about-me">
      <div class="bg-background-beach bg-cover bg-no-repeat pt-20">
        <div class="flex flex-col lg:flex-row-reverse lg:justify-between pb-20">
          <section class="flex flex-col items-center mt-12 min-w-fit">
            <NuxtImg
              format="webp"
              src="/img/me.png"
              class="rounded-full mb-7"
              sizes="200px lg:300px"
              :modifiers="{ rotate: null }"
              alt="Photo of me"
            />
            <nav class="flex flex-col items-center gap-3">
              <ul>
                <li>
                  <NuxtLink
                    to="https://www.linkedin.com/in/louis-place"
                    target="_blank"
                    class="btn-primary"
                  >
                    <Icon
                      name="entypo-social:linkedin-with-circle"
                      :size="ICON_SIZE"
                    />
                    <span>louis-place</span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="https://github.com/louisp78/"
                    target="_blank"
                    class="btn-primary"
                  >
                    <Icon name="carbon:logo-github" :size="ICON_SIZE" />
                    <span>Louisp78</span>
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </section>
          <section class="mt-10 text-center lg:text-left lg:max-w-3xl">
            <header class="pb-5">
              <h2>{{ $t("hello-im-louis") }}</h2>
              <h3>{{ $t("job-title") }}</h3>
            </header>
            <article class="flex flex-col gap-5 mb-5 lg:mb-10 lg:w-fit">
              <div>
                <p v-html="$t('intro-what-am-i-doing')" />
              </div>
              <AccordionComponent>
                <template #title>
                  <h4 class="introduce-section-title">
                    {{ $t("how-can-i-help") }}
                  </h4>
                </template>
                <template #body>
                  <ol class="flex flex-col gap-4 md:gap-1 pl-10 list-disc pr-5">
                    <li>{{ $t("how-can-i-help-list.item1") }}</li>
                    <li>{{ $t("how-can-i-help-list.item2") }}</li>
                    <li>{{ $t("how-can-i-help-list.item3") }}</li>
                    <li>{{ $t("how-can-i-help-list.item4") }}</li>
                    <li>{{ $t("how-can-i-help-list.item5") }}</li>
                  </ol>
                </template>
              </AccordionComponent>
              <AccordionComponent>
                <template #title>
                  <h4 class="introduce-section-title">
                    {{ $t("achievements-examples") }}
                  </h4>
                </template>
                <template #body>
                  <div class="flex flex-col gap-5 pb-3">
                    <ol class="flex flex-col gap-1 pl-10 pr-5 list-disc">
                      <li>{{ $t("achievements-list.item1") }}</li>
                      <li>{{ $t("achievements-list.item2") }}</li>
                      <li>{{ $t("achievements-list.item3") }}</li>
                    </ol>
                    <div class="flex flex-row justify-center">
                      <NuxtLink
                        to="#projects"
                        class="btn-primary w-fit text-sm"
                      >
                        {{ $t("see-more") }}
                      </NuxtLink>
                    </div>
                  </div>
                </template>
              </AccordionComponent>
              <AccordionComponent>
                <template #title>
                  <h4 class="introduce-section-title">
                    {{ $t("why-work-with-me") }}
                  </h4>
                </template>
                <template #body>
                  <ol class="flex flex-col gap-1 list-disc pl-10 pr-5">
                    <li>
                      <b>{{ $t("why-work-with-me-list.passion.title") }}:</b>
                      {{ $t("why-work-with-me-list.passion.description") }}
                    </li>
                    <li>
                      <b>{{ $t("why-work-with-me-list.design.title") }}:</b>
                      {{ $t("why-work-with-me-list.design.description") }}
                    </li>
                    <li>
                      <b
                        >{{ $t("why-work-with-me-list.flexibility.title") }}:</b
                      >
                      {{ $t("why-work-with-me-list.flexibility.description") }}
                    </li>
                    <li>
                      <b
                        >{{
                          $t("why-work-with-me-list.international.title")
                        }}:</b
                      >
                      {{
                        $t("why-work-with-me-list.international.description")
                      }}
                    </li>
                  </ol>
                </template>
              </AccordionComponent>
            </article>
            <div class="w-full md:w-auto flex justify-center md:justify-start">
              <button
                class="w-fit min-h-12 flex items-center gap-2 px-3 border-2 rounded-md bg-softSand border-burnedSand"
                @click="quoteModalOpen = !quoteModalOpen"
              >
                <div class="w-3 flex justify-center items-center relative">
                  <span
                    class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-darkGreen opacity-80"
                  />
                  <span
                    class="absolute inline-flex h-3 w-3 rounded-full bg-darkGreen"
                  />
                </div>
                <span class="font-inconsolata font-medium">
                  {{ t("lets-discuss-project") }}
                </span>
              </button>
            </div>
          </section>
        </div>
        <div
          class="flex flex-col justify-between text-white gap-10 lg:flex-row pb-20 bg-custom-gradient"
        >
          <section class="text-center lg:text-left lg:w-full">
            <div id="exp" class="relative -top-20" />
            <h2 class="pb-5 lg:pb-10">
              {{ $t("experiences-title") }}
            </h2>
            <ul class="expList">
              <ExperienceItem
                v-for="expItem in expList"
                :key="expItem.title"
                :v-model="expItem"
              />
            </ul>
          </section>
          <section class="lg:w-full">
            <div id="edu" class="relative -top-20" />
            <h2 class="pb-5 text-center lg:pb-10 lg:text-right">
              {{ $t("education-title") }}
            </h2>
            <ul class="eduList text-center">
              <EducationItem
                v-for="education in educationList"
                :key="education.title"
                :v-model="education"
              />
            </ul>
          </section>
        </div>
      </div>
      <section id="projects" class="bg-white text-center pb-28 md:pb-20">
        <h2 class="py-16">
          {{ $t("projects-title") }}
        </h2>
        <ul class="projectList">
          <li v-for="project in projectList" :key="project.title">
            <ProjectItem :v-model="project" />
          </li>
        </ul>
      </section>
      <section class="text-center pb-10">
        <h2 class="pb-5">
          {{ $t("my-toolkit") }}
        </h2>
        <div class="skillContainer">
          <SkillLabel
            v-for="skill in allSkillList"
            :key="skill"
            :skill="skill"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.introduce-section-title {
  @apply w-full
    md:w-auto
    text-center;
}

.btn-primary {
  @apply flex
    justify-center
    items-center
    gap-3
    p-2
    rounded-md
    border
    border-black
    font-inconsolata
    font-medium
    hover:bg-sand
    hover:text-burnedSand;
}

.expList {
  @apply flex
    flex-col
    items-center
    gap-10
    pb-10
    md:px-20
    lg:px-0
    lg:pl-12;
}

.eduList {
  @apply flex
    flex-col
    items-center
    gap-10
    text-center
    md:px-20
    lg:px-0
    lg:items-end
    lg:text-right;
}

.projectList {
  @apply flex
    flex-col
    gap-24
    md:gap-10;
}

ul {
  @apply flex
    flex-row
    gap-3;
}
</style>
