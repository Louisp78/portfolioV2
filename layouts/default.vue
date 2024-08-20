<script lang="ts" setup>
const route = useRoute()

useHead({
  meta: [{ property: 'og:title', content: `Portfolio - ${route.meta.title}` }],
})

const menuOpened = ref<boolean>(false)

function handleBurgerMenu() {
  menuOpened.value = !menuOpened.value
}

interface MenuItem {
  title: string
  link: string
}

const navList: MenuItem[] = [
  {
    title: 'About me',
    link: '/#about-me',
  },
  {
    title: 'Experiences',
    link: '/#exp',
  },
  {
    title: 'Educations',
    link: '/#edu',

  },
  {
    title: 'Projects',
    link: '/#projects',
  },
]
</script>

<template>
  <div>
    <nav class="fixed w-full bg-softSand z-10">
      <ul class="flex justify-center lg:justify-between items-center">
        <li class="z-10">
          <h1 class="text-3xl lg:text-5xl pt-3 lg:pl-3 ">
            Portfolio
          </h1>
        </li>
        <li>
          <ul class="hidden lg:flex menu-item lg:pt-3">
            <li
              v-for="navItem in navList"
              :key="navItem.title"
            >
              <NuxtLink
                :to="navItem.link"
              >
                {{ navItem.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
      <div
        class="absolute top-0 left-0 p-3 mt-2 z-10 hover:cursor-pointer lg:hidden"
        @click="handleBurgerMenu"
      >
        <Icon
          :name="menuOpened ? 'material-symbols:close-rounded' : 'material-symbols:menu-rounded'"
          size="20"
        />
      </div>
      <ul
        v-if="menuOpened"
        class="menu-item absolute top-0 left-0 bg-softSand w-screen h-screen flex flex-col justify-center items-center gap-10 lg:hidden"
      >
        <li
          v-for="navItem in navList"
          :key="navItem.title"
        >
          <NuxtLink
            :to="navItem.link"
            @click="handleBurgerMenu"
          >
            {{ navItem.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <slot />
    <footer class="bg-softSand border-t-2 flex items-center py-3 flex-col gap-2">
      <span class="text-sm">A website made with 💚 and a pinch of Nuxt.js</span>
      <NuxtLink
        to="https://github.com/Louisp78/portfolioV2"
        target="_blank"
        class="text-sm underline hover:text-burnedSand"
      >
        View project on Github
      </NuxtLink>
      <span class="hidden">{{ 'Thank you Raph for what you teach me ;)' }}</span>
    </footer>
  </div>
</template>

<style scoped lang="postcss">
.menu-item {
  a {
    @apply text-2xl duration-100 select-none flex px-10 py-3 items-center text-moon hover:text-burnedSand hover:cursor-pointer;
  }
}
nav {
  @apply border-b-2;
}
</style>
