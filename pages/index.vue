<script lang="ts" setup>
definePageMeta({
  title: 'Louis Place Mobile Software Engineer',
})
</script>

<template>
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
    <section class="mt-10  text-center lg:text-left max-w-3xl">
      <header class="pb-5">
        <h2>👋 Hello, I'm Louis</h2>
        <h3>a mobile Software engineer & a marine biology enthusiast</h3>
      </header>
      <article class="flex flex-col gap-5 mb-5 lg:mb-10 w-fit">
        <p>This whole story begins at the age of 13, the day I got my first computer. I started developing, taking my first steps with Python by creating calculator programs and branching games. Finally, after obtaining my science high school diploma, I logically ended up at EPITA.</p>
        <p>I quickly understand that regardless of the language, what I love is the creation that comes from it. My goal is to continuously push the limits of my skills to be able to solve problems that have an impact on the world. During my studies and through my early experiences, I became captivated by native and cross-platform mobile development. Mobile development offers me a great freedom of interaction with the user, which I particularly appreciate.</p>
        <p>Outside of computing, I live for the Ocean. Driven by a growing passion for marine life, my readings turn into scientific articles about manta rays. I love scuba diving or just snorkeling to observe the unparalleled calm and serenity of the Ocean!</p>
      </article>
      <div class="flex flex-col items-center gap-3 text-center lg:text-left lg:items-start">
        <p class="font-inconsolata font-medium">
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
  <!-- TODO : Afficher un bouton "me contacter" lorsque l'utilisateur arrive à la dernière section de lecture -->
</template>

<style scoped lang="postcss">
.nav-item {
    @apply flex gap-3 p-2 font-inconsolata font-medium border rounded-md hover:bg-sand hover:text-burnedSand;
  }
ul {
    @apply flex flex-row gap-3;
}
h2 {
  @apply text-3xl;
}
h3 {
  @apply text-xl;
}
</style>
