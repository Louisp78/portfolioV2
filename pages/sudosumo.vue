<script lang="ts" setup>
const backRepoUrl: string = 'https://github.com/Louisp78/sudosumo-api'
const frontRepoUrl: string = 'https://github.com/Louisp78/sudosumo-v2'
</script>

<!-- TODO: fix spacing between texts -->
<template>
  <main
    class="flex flex-grow flex-col gap-3 items-center text-center w-full pt-20 px-5 pb-20"
  >
    <h1 class="text-2xl md:text-3xl md:pt-5">
      {{ $t('sudosumo.title') }}
    </h1>
    <div class="px-0 md:px-5 lg:px-7">
      <NuxtImg
        src="/img/sudosumo_arch_diagram.svg"
        :alt="$t('sudosumo-architecture-diagram')"
      />
      <p class="text-moon">
        {{ $t('sudosumo-architecture-diagram') }}
      </p>
    </div>

    <ol class="flex flex-col gap-12 text-left pt-12">
      <li>
        <h3 class="text-xl md:text-2xl">
          {{ $t('sudosumo-tech.frontend.title') }}
        </h3>
        <NuxtLink
          :to="frontRepoUrl"
          target="_blank"
          class="nav-item md:w-fit md:my-2"
        >
          <Icon
            name="carbon:logo-github"
            size="24"
          />
          {{ $t('sudosumo-tech.frontend.explore-repo') }}
        </NuxtLink>
        <ul class="flex flex-col gap-3 pl-4 pt-2">
          <li><span class="font-semibold">{{ $t('sudosumo-tech.frontend.framework.label') }}</span>{{ $t('sudosumo-tech.frontend.framework.value') }}</li>
          <li><span class="font-semibold">{{ $t('sudosumo-tech.frontend.conception.label') }}</span>{{ $t('sudosumo-tech.frontend.conception.value') }}</li>
          <li><span class="font-semibold">{{ $t('sudosumo-tech.frontend.styling.label') }}</span>{{ $t('sudosumo-tech.frontend.styling.value') }}</li>
          <li><span class="font-semibold">{{ $t('sudosumo-tech.frontend.rendering.label') }}</span>{{ $t('sudosumo-tech.frontend.rendering.value') }}</li>
          <li><span class="font-semibold">{{ $t('sudosumo-tech.frontend.auth.label') }}</span>{{ $t('sudosumo-tech.frontend.auth.value') }}</li>
          <li><span class="font-semibold">{{ $t('sudosumo-tech.frontend.deployment.label') }}</span>{{ $t('sudosumo-tech.frontend.deployment.value') }}</li>
          <li><span class="font-semibold">{{ $t('sudosumo-tech.frontend.security.label') }}</span>{{ $t('sudosumo-tech.frontend.security.value') }}</li>
        </ul>
      </li>
      <li>
        <h3 class="text-xl md:text-2xl">
          {{ $t('sudosumo-tech.backend.title') }}
        </h3>
        <NuxtLink
          :to="backRepoUrl"
          target="_blank"
          class="nav-item md:w-fit md:my-2"
        >
          <Icon
            name="carbon:logo-github"
            size="24"
          />
          {{ $t('sudosumo-tech.backend.explore-repo') }}
        </NuxtLink>
        <ul class="flex flex-col gap-3 pl-4 pt-2">
          <li><span class="font-semibold">{{ $t('sudosumo-tech.backend.technology.label') }}</span>{{ $t('sudosumo-tech.backend.technology.value') }}</li>
          <li>
            <span class="font-semibold">{{ $t('sudosumo-tech.backend.architecture.label') }}</span>
            <ul class="pl-4">
              <li>{{ $t('sudosumo-tech.backend.architecture.details.ddd') }}</li>
              <li>{{ $t('sudosumo-tech.backend.architecture.details.jakarta') }}</li>
            </ul>
          </li>
          <li><span class="font-semibold">{{ $t('sudosumo-tech.backend.security.label') }}</span>{{ $t('sudosumo-tech.backend.security.value') }}</li>
          <li><span class="font-semibold">{{ $t('sudosumo-tech.backend.db-interaction.label') }}</span>{{ $t('sudosumo-tech.backend.db-interaction.value') }}</li>
          <li><span class="font-semibold">{{ $t('sudosumo-tech.backend.hosting.label') }}</span>{{ $t('sudosumo-tech.backend.hosting.value') }}</li>
          <li><span class="font-semibold">{{ $t('sudosumo-tech.backend.load-balancer.label') }}</span>{{ $t('sudosumo-tech.backend.load-balancer.value') }}</li>
          <li><span class="font-semibold">{{ $t('sudosumo-tech.backend.tls.label') }}</span>{{ $t('sudosumo-tech.backend.tls.value') }}</li>
          <li><span class="font-semibold">{{ $t('sudosumo-tech.backend.data-update.label') }}</span>{{ $t('sudosumo-tech.backend.data-update.value') }}</li>
        </ul>
      </li>
      <li>
        <h3 class="text-xl md:text-2xl">
          {{ $t('sudosumo-tech.database.title') }}
        </h3>
        <ul class="flex flex-col gap-3 pl-4 pt-2">
          <li><span class="font-semibold">{{ $t('sudosumo-tech.database.technology.label') }}</span>{{ $t('sudosumo-tech.database.technology.value') }}</li>
          <li><span class="font-semibold">{{ $t('sudosumo-tech.database.management.label') }}</span>{{ $t('sudosumo-tech.database.management.value') }}</li>
        </ul>
      </li>
      <li>
        <h3 class="text-xl md:text-2xl">
          {{ $t('sudosumo-tech.security.title') }}
        </h3>
        <ul class="flex flex-col gap-3 pl-4 pt-2">
          <li><span class="font-semibold">{{ $t('sudosumo-tech.security.ssl.label') }}</span>{{ $t('sudosumo-tech.security.ssl.value') }}</li>
          <li><span class="font-semibold">{{ $t('sudosumo-tech.security.security-group.label') }}</span>{{ $t('sudosumo-tech.security.security-group.value') }}</li>
        </ul>
      </li>
    </ol>
  </main>
</template>

<style lang="postcss">
  .nav-item {
    @apply flex justify-center items-center gap-3 p-2 font-inconsolata font-medium border rounded-md hover:bg-sand hover:text-burnedSand;
  }
</style>
