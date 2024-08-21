<script lang="ts" setup>
import type Experience from '~/types/Experience'
import type Education from '~/types/Education'
import type Project from '~/types/Project'

const contactEmail = 'placelouis@gmail.com'

definePageMeta({
  title: 'Louis Place Mobile Software Engineer',
})

const experiencesList: Experience[] = [
  {
    title: 'Mobile Lead Developer',
    companie: 'LeHibou',
    location: 'Mauritius',
    description: 'Maintainer and lead developer of the mobile application in React Native using Expo, Maestro, and tests with Jest, MSW, including full deployment to the iOS and Android stores. Agile environment applying the SCRUM methodology. Team development of the web application in NuxtJs.',
    skills: [
      {
        title: 'React Native',
        onPress: () => console.info('Yo'),
      },
      {
        title: 'Expo',
        onPress: () => console.info('Yolo'),
      },
      {
        title: 'Nuxt.js',
        onPress: () => console.info('Yolo'),
      },
      {
        title: 'Typescript',
        onPress: () => console.info('Yolo'),
      },
      {
        title: 'Swift',
        onPress: () => console.info('Yolo'),
      },
    ],
  },
  {
    title: 'Data Analyst',
    location: 'Paris',
    companie: 'Spliit',
    description: 'Development of a Google App Script tool using Excel as an advanced tool. Database analysis with Google Data Studio using PostgreSQL. Team testing and development of a web application in ReactJs. Lead developer of an automated data collection tool.',
    skills: [
      {
        title: 'Excel',
        onPress: () => console.info(),
      },
      {
        title: 'Google App Script',
        onPress: () => console.info(),
      },
      {
        title: 'PostgreSQL',
        onPress: () => console.info(),
      },
      {
        title: 'Typescript',
        onPress: () => {},
      },
      {
        title: 'Google Data Studio',
        onPress: () => {},
      },
      {
        title: 'React.js',
        onPress: () => {},
      },
    ],
  },
]
const educationList: Education[] = [
  {
    title: 'Master of Computer Science',
    companie: 'EPITA, FR',
    companieLink: 'https://www.epita.fr',
    description: 'Major MTI, Multimedia and Information Technologies.',
  },
  {
    title: 'Dual Bachelor\'s Degree in Computer Science',
    companie: 'University of Paris-Est Créteil, FRA',
    companieLink: 'https://www.u-pec.fr',
  },
  {
    title: 'CMAS One Star Diver',
    companie: 'Blue Water Diving Center, MAU',
    companieLink: 'https://maps.app.goo.gl/6uhak8rajU8MWnm68',
  },
  {
    title: 'Python Basics for Data Science',
    companie: 'Edx certificate PY0101EN: Python Basics for Data Science',
    companieLink: 'https://courses.edx.org/certificates/692e878ca8584309a7f9b3e31d36445a',
  },
  {
    title: 'Scientific General Baccalaureate',
    companie: 'High School Blanche de Castille, Versailles FRA',
  },
]
const projectList: Project[] = [
  {
    title: 'LeHibou App',
    link: '',
    imgSrc: '/img/lehibou.png',
    imgAlt: 'Two screenshots of the Lehibou App: the first shows the login screen, and the second displays the iOS widget for freelance availability.',
    description: 'Mobile application in React Native using Expo, Maestro, with testing through Jest and MSW, including full deployment on iOS and Android app stores. The application also includes a native iOS widget written in Swift. Agile environment implementing the SCRUM methodology.',
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
    title: 'LivLink',
    link: '',
    imgSrc: '/img/livlink2.png',
    imgAlt: 'Three screenshots of the LivLink App: the first shows the contacts list, and the second and third display the \'Circle Call\' feature.',
    description: 'Android Kotlin application for telephony and communication aimed at isolated individuals. Back-end developed with Java Spring Boot. One-year client project in an agile organization, evaluated through presentations and deliverables.',
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
    description: 'Mobile application for collaborative work and organization of group work sessions. Developed in React Native with a Java Spring Boot back-end. One-year project with deliverables and presentations. Group project involving 4 team members.',
    link: '',
    imgSrc: '/img/studeam1.png',
    imgAlt: 'Two screenshots of the Studeam App: the first shows a list of group working sessions, and the second displays the login screen.',
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
  {
    title: '🍜 SudoSumo',
    link: 'https://louisp78.github.io/sudosumo/',
    imgSrc: '/img/sudosumo.png',
    imgAlt: 'Desktop screenshot of the SudoSumo app displaying a sudoku puzzle on the screen.',
    description: 'Web application in React.js / Typescript for Sudoku with a hand-implemented solver using human solving techniques.',
    skills: [
      {
        title: 'React.js',
      },
      {
        title: 'Typescript',
      },
      {
        title: 'Sudoku solver algorithms',
      },
    ],
    isGame: true,
  },
]

const allSkillList = computed(() => {
  let allSkill = projectList.map(elt => elt.skills).flat()
  allSkill = allSkill.concat(experiencesList.map(elt => elt.skills).flat())
  allSkill = allSkill.concat([
    {
      title: 'R',
    },
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
              to="/cv-louis-place.pdf"
              target="_blank"
              class="nav-item w-fit"
              external
            >
              <Icon
                name="mdi:resume"
                size="24"
              />
              <span>Get my resume</span>
            </NuxtLink>
          </nav>
        </section>
        <section class="mt-10 text-center lg:text-left lg:max-w-3xl">
          <header class="pb-5">
            <h2>👋 Hello, I'm Louis</h2>
            <h3>a Mobile Software Engineer & a Marine Biology enthusiast</h3>
          </header>
          <article class="flex flex-col gap-5 mb-5 lg:mb-10 lg:w-fit">
            <p>
              This whole story begins at the age of 13, the day I got my first computer. I started developing, taking my first steps with Python by creating calculator programs and branching games. Finally, after obtaining my science high school diploma, I logically ended up at EPITA.
            </p>
            <p>
              I quickly understand that regardless of the language, what I love is the creation that comes from it. My goal is to continuously push the limits of my skills to be able to solve problems that have an impact on the world. During my studies and through my early experiences, I became captivated by native and cross-platform mobile development. Mobile development offers me a great freedom of interaction with the user, which I particularly appreciate.
            </p>
            <p>
              Outside of computing, I live for the Ocean. Driven by a growing passion for marine life, my readings turn into scientific articles about manta rays. I love scuba diving or just snorkeling to observe the unparalleled calm and serenity of the Ocean!
            </p>
          </article>
          <div class="flex flex-col items-center gap-3 text-center lg:text-left lg:items-start">
            <p class="hidden md:block font-inconsolata font-medium">
              To contact me, please reach out here...
            </p>
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
                Send me an email
              </span>
            </NuxtLink>
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
            Experiences
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
            Education
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
        Projects
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
        My Toolkit
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
