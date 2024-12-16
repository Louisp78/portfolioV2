<script lang="ts" setup>
import type Experience from '~/types/Experience'
import type Education from '~/types/Education'
import type Project from '~/types/Project'

const { t } = useI18n()

const contactEmail = 'placelouis@gmail.com'

definePageMeta({
  title: 'seo.index-title',
})

const experiencesList: Experience[] = [
  {
    title: t('lehibou.job-title'),
    companie: 'LeHibou',
    location: t('mauritius'),
    description: t('lehibou.description'),
    skills: [
      {
        title: 'React Native',
      },
      {
        title: 'Expo',
      },
      {
        title: 'Nuxt.js',
      },
      {
        title: 'Typescript',
      },
      {
        title: 'Swift',
      },
    ],
  },
  {
    title: t('spliit.job-title'),
    location: 'Paris',
    companie: 'Spliit',
    description: t('spliit.description'),
    skills: [
      {
        title: 'Excel',
      },
      {
        title: 'Google App Script',
      },
      {
        title: 'PostgreSQL',
      },
      {
        title: 'Typescript',
      },
      {
        title: 'Google Data Studio',
      },
      {
        title: 'React.js',
      },
    ],
  },
]
const educationList: Education[] = [
  {
    title: t('master-of-computer-science'),
    companie: 'EPITA, FR',
    companieLink: 'https://www.epita.fr',
    description: t('epita-mti'),
  },
  {
    title: t('upec-dual-bachelor'),
    companie: t('upec'),
    companieLink: 'https://www.u-pec.fr',
  },
  {
    title: t('cmas-one-star-diver'),
    companie: t('blue-water-diving-center-mau'),
    companieLink: 'https://maps.app.goo.gl/6uhak8rajU8MWnm68',
  },
  {
    title: t('python-basics-for-data-science'),
    companie: 'Edx certificate PY0101EN: Python Basics for Data Science',
    companieLink: 'https://courses.edx.org/certificates/692e878ca8584309a7f9b3e31d36445a',
  },
  {
    title: t('bac-s'),
    companie: t('school'),
  },
]
const projectList: Project[] = [
  {
    title: t('projects.maconsigne.title'),
    link: 'https://maconsigne.com/',
    btnTitle: t('visit-the-website'),
    imgSrc: '/img/maconsigne.png',
    target: '_blank',
    imgAlt: t('projects.maconsigne.img-alt'),
    description: t('projects.maconsigne.description'),
    skills: [
      {
        title: 'React Native',
      },
      {
        title: 'Expo & Co',
      },
      {
        title: 'Tailwind',
      },
      {
        title: 'Redux',
      },
      {
        title: 'EAS',
      },
      {
        title: 'CI/CD',
      },

    ],
  },
  {
    title: t('projects.lehibou-app.title'),
    link: 'https://apps.apple.com/fr/app/lehibou-freelance-it/id6468558589',
    btnTitle: t('download-on-app-store'),
    imgSrc: '/img/lehibou.png',
    target: '_blank',
    imgAlt: 'Two screenshots of the Lehibou App: the first shows the login screen, and the second displays the iOS widget for freelance availability.',
    description: t('projects.lehibou-app.description'),
    skills: [
      {
        title: 'React Native',
      },
      {
        title: 'Expo',
      },
      {
        title: 'Swift',
      },
      {
        title: 'Typescript',
      },
    ],
  },
  {
    title: '🍜 SudoSumo',
    link: '/sudosumo',
    btnTitle: t('more-details'),
    imgSrc: '/img/sudosumo.png',
    imgAlt: 'Desktop screenshot of the SudoSumo app displaying a sudoku puzzle on the screen.',
    description: t('projects.sudosumo.description'),
    skills: [
      {
        title: 'Next.js',
      },
      {
        title: 'React.js',
      },
      {
        title: 'Typescript',
      },
      {
        title: 'TailwindCSS',
      },
      {
        title: 'Java',
      },
      {
        title: 'Spring boot',
      },
      {
        title: 'AWS EC2',
      },
      {
        title: 'AWS RDS',
      },
      {
        title: 'Docker',
      },
      {
        title: 'OAuth2',
      },

      {
        title: 'Sudoku solver algorithms',
      },
    ],
  },
  {
    title: 'LivLink',
    link: '',
    imgSrc: '/img/livlink2.png',
    imgAlt: 'Three screenshots of the LivLink App: the first shows the contacts list, and the second and third display the \'Circle Call\' feature.',
    description: t('projects.livlink.description'),
    skills: [
      {
        title: 'Android',
      },
      {
        title: 'Kotlin',
      },
      {
        title: 'Java Spring Boot',
      },
    ],
  },
  {
    title: 'Studeam',
    description: t('projects.studeam.description'),
    link: '',
    imgSrc: '/img/studeam1.png',
    imgAlt: t('projects.studeam.img-alt'),
    skills: [
      {
        title: 'React Native',
      },
      {
        title: 'Typescript',
      },
      {
        title: 'Java Spring Boot',
      },
      {
        title: 'Neo4j',
      },

    ],
  },
]

const allSkillList = computed(() => {
  let allSkill = projectList.map(elt => elt.skills).flat()
  allSkill = allSkill.concat(experiencesList.map(elt => elt.skills).flat())
  allSkill = allSkill.concat([
    {
      title: 'Python',
    },
  ])
  allSkill = Array.from(new Map(allSkill.map(item => [item.title, item])).values())
  return allSkill
})
</script>

<template>
  <!-- TODO: fix logo nuxt img for responsivity -->
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
                  class="nav-item"
                >
                  <Icon
                    name="entypo-social:linkedin-with-circle"
                    size="24"
                  />
                  <span>louis-place</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="https://github.com/louisp78/"
                  target="_blank"
                  class="nav-item"
                >
                  <Icon
                    name="carbon:logo-github"
                    size="24"
                  />
                  <span>Louisp78</span>
                </NuxtLink>
              </li>
            </ul>
            <NuxtLink
              to="/cv.pdf"
              target="_blank"
              class="nav-item w-fit"
              external
            >
              <Icon
                name="mdi:resume"
                size="24"
              />
              <span>{{ $t('get-my-resume') }}</span>
            </NuxtLink>
          </nav>
        </section>
        <section class="mt-10 text-center lg:text-left lg:max-w-3xl">
          <header class="pb-5">
            <h2>{{ $t('hello-im-louis') }}</h2>
            <h3>{{ $t('job-title') }}</h3>
          </header>
          <article class="flex flex-col gap-5 mb-5 lg:mb-10 lg:w-fit">
            <div>
              <p>
                👋 <b>Ingénieur mobile passionné</b>, je conçoit des applications mobiles complète, performante et durable afin quels puisse être facilement évoluer vers le concept que vous avez imaginez 💡
              </p>
              <p>
                Expérimenté en <b>React Native</b>, je maîtrise également les environnements natifs iOS (<b>Swift</b>) et Android (<b>Kotlin</b>) pour répondre à des besoins techniques pointus et garantir des expériences utilisateur optimales.
              </p>
            </div>
            <AccordionComponent>
              <template #title>
                <h4>
                  🌟 Comment je peux vous être utile ?
                </h4>
              </template>
              <template #body>
                <ol
                  class="flex flex-col gap-1 pl-10 list-disc "
                >
                  <li>
                    Développement mobile Android/iOS avec React Native, Swift ou Kotlin.
                  </li>
                  <li>
                    Développement de back-ends robustes (Java Spring Boot, Node.js, Express).
                  </li>
                  <li>Mise en place de pipelines CI/CD fiables pour automatiser les déploiements.</li>
                  <li>Conception de design UI / UX d'écrans.</li>
                  <li>Audits techniques et optimisations de codebases existantes.</li>
                </ol>
              </template>
            </AccordionComponent>
            <AccordionComponent>
              <template #title>
                <h4>
                  🚀 Exemples de réalisations
                </h4>
              </template>
              <template #body>
                <div class="flex flex-col gap-5 pb-3">
                  <ol class="flex flex-col gap-1 pl-10 list-disc">
                    <li>
                      Migration de deux applications Bare React Native vers l’environnement Expo SDK avec automatisation des builds et déploiements.
                    </li>
                    <li>
                      Développement d’une application de téléphonie et communication pour des populations isolées, avec un back-end sécurisé en Java Spring Boot.
                    </li>
                    <li>
                      Conception, design et création d'un widget natif iOS pour une application React Native.
                    </li>
                  </ol>
                  <div class="flex flex-row justify-center">
                    <NuxtLink
                      to="#projects"
                      class="nav-item w-fit text-sm"
                    >
                      Voir plus
                    </NuxtLink>
                  </div>
                </div>
              </template>
            </AccordionComponent>
            <AccordionComponent>
              <template #title>
                <h4>
                  🫵 Pourquoi travailler avec moi ?
                </h4>
              </template>
              <template #body>
                <ol class="flex flex-col gap-1 list-disc pl-10">
                  <li>
                    <b>Passion et expertise :</b> Mon intérêt constant pour l’innovation et les nouvelles technologies me permet de proposer des solutions modernes et performantes. Je veille quotidiennement à me tenir informé des évolutions des technologies que j’utilise.
                  </li>
                  <li>
                    <b>Design et conception :</b> Grâce à une solide maîtrise des principes de design UI et UX, je suis en mesure d’apporter une valeur ajoutée significative à la création et à l’optimisation de votre application.
                  </li>
                  <li>
                    <b>Flexibilité et pragmatisme :</b> J’adapte mes approches selon vos priorités, en allouant les ressources et le temps de manière proportionnée à l’importance de chaque fonctionnalité.
                  </li>
                  <li><b>Expérience internationale :</b> Habitué à travailler avec des équipes dispersées, je maîtrise les outils et méthodologies pour un remote efficace.</li>
                </ol>
              </template>
            </AccordionComponent>
          </article>
          <div class="flex flex-col items-center gap-3 text-center lg:text-left lg:items-start">
            <div class="flex flex-col md:flex-row items-center gap-3">
              <!-- TODO : Add a tooltip for the btn with my email adress -->
              <NuxtLink
                :to="`mailto:${contactEmail}`"
                class="button"
              >
                <Icon
                  name="ic:outline-email"
                  size="24"
                />
                <span>
                  {{ $t('send-me-an-email') }}
                </span>
              </NuxtLink>
              <span class="font-inconsolata font-medium">
                {{ $t('or') }}
              </span>
              <NuxtLink
                to="https://www.malt.fr/profile/louisplace"
                target="_blank"
                class="flex flex-row items-center gap-2 px-3 border-2 rounded-md bg-softSand border-burnedSand"
              >
                <span class="relative w-3">
                  <span class="animate-ping absolute -top-1 inline-flex h-3 w-3 rounded-full bg-darkGreen opacity-80" />
                  <span class="absolute -top-1 inline-flex h-3 w-3 rounded-full bg-darkGreen" />
                </span>
                <span class="font-inconsolata font-medium">{{ $t('hire-me-on') }} </span>
                <Icon
                  name="simple-icons:malt"
                  size="45"
                />
              </NuxtLink>
            </div>
          </div>
        </section>
      </div>
      <div class="flex flex-col justify-between text-white gap-10 lg:flex-row pb-20 bg-custom-gradient">
        <section class="text-center lg:text-left lg:w-full">
          <div
            id="exp"
            class="relative -top-20"
          />
          <h2 class="pb-5 lg:pb-10">
            {{ $t('experiences-title') }}
          </h2>
          <ul class="expList">
            <ExperienceItem
              v-for="expItem in experiencesList"
              :key="expItem.title"
              :v-model="expItem"
            />
          </ul>
        </section>
        <section class="lg:w-full">
          <div
            id="edu"
            class="relative -top-20"
          />
          <h2 class="pb-5 text-center lg:pb-10 lg:text-right">
            {{ $t('education-title') }}
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
    <section
      id="projects"
      class="bg-white text-center pb-28 md:pb-20"
    >
      <h2 class="py-16">
        {{ $t('projects-title') }}
      </h2>
      <ul class="projectList">
        <li
          v-for="project in projectList"
          :key="project.title"
        >
          <ProjectItem :v-model="project" />
        </li>
      </ul>
    </section>
    <section class="text-center pb-10">
      <h2 class="pb-5">
        {{ $t('my-toolkit') }}
      </h2>
      <div class="skillContainer">
        <SkillLabel
          v-for="skill in allSkillList"
          :key="skill.title"
          :v-model="skill"
        />
      </div>
    </section>
  </div>
  <!-- TODO : Afficher un bouton "me contacter" lorsque l'utilisateur arrive à la dernière section de lecture -->
</template>

<style scoped lang="postcss">
.nav-item {
    @apply flex justify-center items-center gap-3 p-2 font-inconsolata font-medium border rounded-md hover:bg-sand hover:text-burnedSand;
  }
.expList {
  @apply flex flex-col items-center gap-10 md:px-20 lg:px-0 lg:pl-12 pb-10;
}
.eduList {
  @apply flex flex-col items-center lg:items-end lg:text-right gap-10 md:px-20 lg:px-0;
}
.projectList {
  @apply flex flex-col gap-24 md:gap-10;
}

ul {
    @apply flex flex-row gap-3;
}
</style>
