<script lang="ts" setup>
import type Experience from '~/types/Experience'
import type Education from '~/types/Education'
import type Project from '~/types/Project'

const contactEmail = 'placelouis@gmail.com'

definePageMeta({
  title: 'Louis Place Mobile / Web Software Engineer',
})

const experiencesList: Experience[] = [
  {
    title: 'Mobile Lead Engineer Intern',
    companie: 'LeHibou',
    location: 'Mauritius',
    description: 'Maintainer and Lead Developer of a mobile application built with React Native using Expo, Maestro, and Jest for testing, with full deployment to both iOS and Android stores. Operated in an international team based in Mauritius, collaborating with colleagues from diverse cultural backgrounds. Worked in an Agile environment, following SCRUM methodology. Additionally, played a key role in the development of a web application using Nuxt.js.',
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
    title: 'Data Analyst Intern',
    location: 'Paris',
    companie: 'Spliit',
    description: 'Development of a Google App Script tool using Excel as an advanced tool. Database analysis with Google Data Studio using PostgreSQL. Team testing and development of a web application in React.js. Lead developer of an automated data collection tool.',
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
    title: 'Master of Computer Science',
    companie: 'EPITA, FR',
    companieLink: 'https://www.epita.fr',
    description: 'Major MTI, Multimedia and Information Technologies.',
  },
  {
    title: 'Dual Bachelor\'s Degree in Computer Science',
    companie: 'University of Paris-Est Créteil, FR',
    companieLink: 'https://www.u-pec.fr',
  },
  {
    title: 'CMAS One Star Diver',
    companie: 'Blue Water Diving Center, MAU',
    companieLink: 'https://maps.app.goo.gl/6uhak8rajU8MWnm68',
  },
  {
    title: 'Python Basics for Data Science',
    companie: 'Edx certificate PY0101EN: Python Basics for Data Science',
    companieLink: 'https://courses.edx.org/certificates/692e878ca8584309a7f9b3e31d36445a',
  },
  {
    title: 'Scientific General Baccalaureate',
    companie: 'High School Blanche de Castille, Versailles FR',
  },
]
const projectList: Project[] = [
  {
    title: 'MaConsigne Apps - an Expo migration story',
    link: 'https://maconsigne.com/',
    btnTitle: 'Visit the website',
    imgSrc: '/img/maconsigne.png',
    target: '_blank',
    imgAlt: 'Three screenshots of the MaConsigne App',
    description: 'Imagine taking two bare React Native old apps, dusting them off, and giving them a shiny new home in Expo SDK 51—this was my mission with MaConsigne. From wrangling dependencies to ensuring everything ran smoothly in its new Expo-powered environment, it was like moving houses but for apps (and with fewer boxes to unpack).To top it off, I set up a sleek CI/CD pipeline with EAS, automating builds and deployments so releases now glide out effortlessly. The result? Two modernized apps ready to conquer the mobile world, all while keeping things snappy and stress-free for the devs. 🚀',
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
    title: 'LeHibou App',
    link: 'https://apps.apple.com/fr/app/lehibou-freelance-it/id6468558589',
    btnTitle: 'Download on App Store',
    imgSrc: '/img/lehibou.png',
    target: '_blank',
    imgAlt: 'Two screenshots of the Lehibou App: the first shows the login screen, and the second displays the iOS widget for freelance availability.',
    description: 'Developed a mobile application in React Native using Expo, with comprehensive testing through Jest and Maestro. The project included full deployment on both iOS and Android app stores, as well as the creation of a native iOS widget written in Swift. Additionally, I implemented DevOps practices using GitLab CI for continuous integration and deployment. Worked in an Agile environment, adhering to the SCRUM methodology.',
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
    btnTitle: 'More details',
    imgSrc: '/img/sudosumo.png',
    imgAlt: 'Desktop screenshot of the SudoSumo app displaying a sudoku puzzle on the screen.',
    description: 'SudoSumo is a full-stack Sudoku app that combines a Next.js frontend with a Java Spring Boot backend. Styled with TailwindCSS and secured using OAuth2, the app benefits from server-side rendering for enhanced security. The backend, organized with Domain-Driven Design (DDD), communicates with a PostgreSQL database hosted on AWS. The app is deployed using AWS EC2 and a serverless provider for scalability and high availability.',
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
    description: 'Developed an Android application in Kotlin focused on telephony and communication for isolated individuals, designed to enhance connectivity in remote areas. The back-end was built using Java Spring Boot, ensuring robust and scalable server-side functionality. This was a year-long client project, executed within an Agile framework, with progress regularly assessed through presentations and deliverables.',
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
    description: 'Developed a mobile application designed for collaborative work and the organization of group sessions, leveraging React Native for the front end and Java Spring Boot for the back end. This year-long project, executed as part of a team of four, included regular deliverables and presentations to track progress and ensure alignment with client requirements.',
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
              <span>Get my resume</span>
            </NuxtLink>
          </nav>
        </section>
        <section class="mt-10 text-center lg:text-left lg:max-w-3xl">
          <header class="pb-5">
            <h2>👋 Hello, I'm Louis</h2>
            <h3>a junior full-stack software engineer</h3>
          </header>
          <article class="flex flex-col gap-5 mb-5 lg:mb-10 lg:w-fit">
            <p>
              This whole story begins at the age of 13, the day I got my first computer. I started developing, taking my first steps with Python by creating calculator programs and branching games. Finally, after obtaining my science high school diploma, I logically ended up at EPITA.
            </p>
            <p>
              I quickly understand that regardless of the language, what I love is the creation that comes from it. My goal is to continuously push the limits of my skills to be able to solve problems that have an impact on the world. During my studies and through my early experiences, I became captivated by native and cross-platform mobile development. Mobile development offers me a great freedom of interaction with the user, which I particularly appreciate.
            </p>
            <p>
              Outside of computing, I live for the Ocean. Driven by a growing passion for marine life and oceanography, my readings turn into scientific articles about manta rays. I love scuba diving or just snorkeling to observe the unparalleled calm and serenity of the Ocean!
            </p>
          </article>
          <div class="flex flex-col items-center gap-3 text-center lg:text-left lg:items-start">
            <p class="hidden md:block font-inconsolata font-medium">
              To contact me, please reach out here...
            </p>
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
                  Send me an email
                </span>
              </NuxtLink>
              <span class="font-inconsolata font-medium">
                or
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
                <span class="font-inconsolata font-medium">Hire me on </span>
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
