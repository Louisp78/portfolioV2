<script lang="ts" setup>
import type Experience from '~/types/Experience'
import type Education from '~/types/Education'

definePageMeta({
  title: 'Louis Place Mobile Software Engineer',
})

const experiencesList: Experience[] = [
  {
    title: 'Mobile Lead Developer',
    companie: 'LeHibou',
    location: 'Mauritius',
    description: 'Development of a Google App Script tool using Excel as an advanced tool. Database analysis with Google Data Studio using PostgreSQL. Team testing and development of a web application in ReactJs. Lead developer of an automated data collection tool.',
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
    description: 'Maintainer and lead developer of the mobile application in React Native using Expo, Maestro, and tests with Jest, MSW, including full deployment to the iOS and Android stores. Agile environment applying the SCRUM methodology. Team development of the web application in NuxtJs.',
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
  },
  {
    title: 'Scientific General Baccalaureate',
    companie: 'High School Blanche de Castille, Versailles FRA',
  },
]
</script>

<template>
  <!-- TODO: fix logo nuxt img for responsivity -->
  <div>
    <div class="flex flex-col lg:flex-row-reverse lg:justify-between pb-20">
      <section class="flex flex-col items-center mt-12 min-w-fit">
        <NuxtImg
          src="/img/me.png"
          class="rounded-full mb-7"
          sizes="200px lg:300px"
          :modifiers="{ rotate: null }"
          alt="Photo of me"
        />
        <nav>
          <ul>
            <li>
              <NuxtLink
                to="https://www.linkedin.com/in/louis-place"
                target="_blank"
                class="nav-item"
              >
                <NuxtImg
                  src="/img/linkedin-logo.svg"
                  alt="Linkedin"
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
                <NuxtImg
                  src="/img/github-logo.svg"
                  alt="Github"
                />
                <span>Louisp78</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </section>
      <section class="mt-10 text-center lg:text-left lg:max-w-3xl">
        <header class="pb-5">
          <h2>👋 Hello, I'm Louis</h2>
          <h3>a mobile Software engineer & a marine biology enthusiast</h3>
        </header>
        <article class="flex flex-col gap-5 mb-5 lg:mb-10 lg:w-fit">
          <p class="lg:text-black">
            This whole story begins at the age of 13, the day I got my first computer. I started developing, taking my first steps with Python by creating calculator programs and branching games. Finally, after obtaining my science high school diploma, I logically ended up at EPITA.
          </p>
          <p>
            I quickly understand that regardless of the language, what I love is the creation that comes from it. My goal is to continuously push the limits of my skills to be able to solve problems that have an impact on the world. During my studies and through my early experiences, I became captivated by native and cross-platform mobile development. Mobile development offers me a great freedom of interaction with the user, which I particularly appreciate.
          </p>
          <p class="lg:text-black">
            Outside of computing, I live for the Ocean. Driven by a growing passion for marine life, my readings turn into scientific articles about manta rays. I love scuba diving or just snorkeling to observe the unparalleled calm and serenity of the Ocean!
          </p>
        </article>
        <div class="flex flex-col items-center gap-3 text-center lg:text-left lg:items-start">
          <p class="font-inconsolata font-medium text-white lg:text-black">
            To contact me, please reach out here...
          </p>
          <!-- TODO : Add a tooltip for the btn with my email adress -->
          <NuxtLink
            to="mailto:louis.place@epita.fr"
            class="flex gap-2 p-3 font-inconsolata font-medium bg-sand rounded-md w-fit hover:text-burnedSand hover:border hover:border-burnedSand duration-100"
          >
            <NuxtImg src="/img/email-logo.svg" />
            <span>
              Send me an email
            </span>
          </NuxtLink>
        </div>
      </section>
    </div>
    <div
      id="exp-and-edu"
      class="flex flex-col justify-between text-white 2xl:text-black gap-10 lg:flex-row pb-20"
    >
      <section class="text-center lg:text-left lg:w-full">
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
  <!-- TODO : Afficher un bouton "me contacter" lorsque l'utilisateur arrive à la dernière section de lecture -->
</template>

<style scoped lang="postcss">
.nav-item {
    @apply flex gap-3 p-2 font-inconsolata font-medium border rounded-md hover:bg-sand hover:text-burnedSand;
  }
.expList {
  @apply flex flex-col items-center gap-10 md:px-20 lg:px-0 lg:pl-12 pb-10;
}
.eduList {
  @apply flex flex-col items-center lg:items-end lg:text-right gap-10 md:px-20 lg:px-0;
}

ul {
    @apply flex flex-row gap-3;
}
</style>
