<script lang="ts" setup>
const route = useRoute()

useHead({
  meta: [{ property: 'og:title', content: `Portfolio - ${route.meta.title}` }],
})

const menuOpened = ref<boolean>(false)

function handleBurgerMenu() {
  menuOpened.value = !menuOpened.value
}
</script>

<template>
  <div>
    <nav>
      <ul class="flex justify-center lg:justify-between items-center">
        <li class="z-10 ">
          <h1 class="text-3xl lg:text-5xl pt-3 lg:pl-3 ">
            Portfolio
          </h1>
        </li>
        <li>
          <ul class="hidden lg:flex menu-item lg:pt-3">
            <li><NuxtLink>About me</NuxtLink></li>
            <li><NuxtLink>Experiences</NuxtLink></li>
            <li><NuxtLink>Educations</NuxtLink></li>
            <li><NuxtLink>Projects</NuxtLink></li>
          </ul>
        </li>
      </ul>
      <a
        class="absolute top-0 left-0 p-3 mt-2 z-10 hover:cursor-pointer lg:hidden"
        @click="handleBurgerMenu"
      >
        <Icon :name="menuOpened ? 'material-symbols:close-rounded' : 'material-symbols:menu-rounded'" />
      </a>
      <ul
        v-if="menuOpened"
        class="menu-item absolute top-0 left-0 bg-sand w-screen h-screen flex flex-col justify-center items-center gap-10 lg:hidden"
      >
        <li>
          <NuxtLink>
            About me
          </NuxtLink>
        </li>
        <li>
          <NuxtLink>
            Experiences
          </NuxtLink>
        </li>
        <li><NuxtLink>Educations</NuxtLink></li>
        <li><NuxtLink>Projects</NuxtLink></li>
      </ul>
    </nav>
    <div class="border-red-800 border-3">
      <slot />
    </div>
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
