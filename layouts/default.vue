<script lang="ts" setup>
const route = useRoute()
const { t, locale } = useI18n()
useHead({
  meta: [{ property: "og:title", content: `Portfolio - ${route.meta.title}` }],
})

const menuOpened = ref<boolean>(false)

function handleBurgerMenu() {
  menuOpened.value = !menuOpened.value
}

interface MenuItem {
  title: string
  link: string
}

const navList = computed<MenuItem[]>(() => [
  {
    title: t("menu.about-me"),
    link: `/${locale.value}#about-me`,
  },
  {
    title: t("menu.experiences"),
    link: `/${locale.value}#exp`,
  },
  {
    title: t("menu.education"),
    link: `/${locale.value}#edu`,
  },
  {
    title: t("menu.projects"),
    link: `/${locale.value}#projects`,
  },
])
</script>

<template>
  <div>
    <nav class="fixed w-full bg-softSand z-10 border-b-2 border-black">
      <ul class="flex justify-center lg:justify-between items-center">
        <li class="z-10">
          <NuxtLink to="/">
            <h1 class="text-3xl lg:text-5xl pt-3 lg:pl-3 animElt-slideLeft">
              Portfolio
            </h1>
          </NuxtLink>
        </li>
        <li>
          <ul class="hidden lg:flex menu-item lg:pt-3">
            <li
              v-for="navItem in navList"
              :key="navItem.title"
              class="animElt-slideRight"
            >
              <NuxtLink :to="navItem.link">
                {{ navItem.title }}
              </NuxtLink>
            </li>
            <li
              class="animElt-slideRight flex flex-row gap-3 pr-3 items-center"
            >
              <LocaleBtnComponent />
            </li>
          </ul>
        </li>
      </ul>
      <div
        class="absolute top-0 left-0 p-3 mt-2 z-10 hover:cursor-pointer lg:hidden"
        @click="handleBurgerMenu"
      >
        <Icon
          :name="
            menuOpened
              ? 'material-symbols:close-rounded'
              : 'material-symbols:menu-rounded'
          "
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
          class="animElt-slideBottom"
        >
          <NuxtLink :to="navItem.link" @click="handleBurgerMenu">
            {{ navItem.title }}
          </NuxtLink>
        </li>
        <li class="animElt-slideBottom">
          <LocaleBtnComponent />
        </li>
      </ul>
    </nav>
    <slot />
    <footer
      class="flex flex-col items-center gap-2 py-3 bg-softSand border-t-2"
    >
      <div class="flex items-center gap-3">
        <NuxtLink
          to="https://github.com/Louisp78/portfolioV2"
          target="_blank"
          class="underline hover:text-burnedSand"
        >
          {{ $t("footer.view-project-on-github") }}
        </NuxtLink>
        <span> | </span>
        <NuxtLink
          to="https://www.malt.fr/profile/louisplace"
          target="_blank"
          class="max-h-2 flex items-center gap-1 hover:text-burnedSand hover:cursor-pointer"
        >
          <span class="underline">
            {{ $t("footer.hire-me-on") }}
          </span>
          <Icon name="simple-icons:malt" size="45" />
        </NuxtLink>
      </div>
      <span class="text-sm">{{ $t("footer.credits") }}</span>
    </footer>
  </div>
</template>

<style scoped lang="postcss">
.menu-item {
  a {
    @apply flex
      items-center
      px-10 
      py-3 
      
      text-2xl
      select-none
      text-moon
      
      duration-100
      hover:cursor-pointer
      hover:text-burnedSand;
  }
}
</style>
