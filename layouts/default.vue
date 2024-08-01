<template>
  <div>
    <nav>
      <ul class="flex flex-row justify-center items-center">
        <li class="z-10">
          <h1 class="pt-3">
            Portfolio
          </h1>
        </li>
        <ul class="hidden flex-row">
          <li>About me</li>
          <li>Experiences</li>
          <li>Educations</li>
          <li>projects</li>
        </ul>
      </ul>
      <a
        class="absolute top-0 left-0 p-3 mt-2 z-10 hover:cursor-pointer"
        @click="handleBurgerMenu"
      >
        <Icon :name="menuOpened ? 'material-symbols:close-rounded' : 'material-symbols:menu-rounded'" />
      </a>
      <div
        v-if="menuOpened"
        class="menu-item absolute top-0 left-0 bg-sand w-screen h-screen flex flex-col justify-center items-center gap-10"
      >
        <NuxtLink><h1>About me</h1></NuxtLink>
        <NuxtLink><h1>Experiences</h1></NuxtLink>
        <NuxtLink><h1>Educations</h1></NuxtLink>
        <NuxtLink><h1>Projects</h1></NuxtLink>
      </div>
    </nav>
    <div class="border-red-800 border-3">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const menuOpened = ref<boolean>(false)

function handleBurgerMenu() {
  menuOpened.value = !menuOpened.value
}
</script>

<style scoped lang="postcss">
li {
  @apply flex px-10 items-center;
}

h1 {
  @apply text-3xl;

}
.menu-item {
  h1 {
    @apply hover:cursor-pointer duration-100 hover:text-burnedSand select-none;
  }
}
</style>
