<script setup lang="ts">
const { setLocale, locale } = useI18n()

async function handleLocaleChange() {
  setLocale(locale.value === 'fr' ? 'en' : 'fr')
}
</script>

<template>
  <button
    class="w-fit h-fit rounded-full flex flex-row gap-2 items-center px-2 border-2 border-moon text-moon hover:bg-sand"
    @click="handleLocaleChange"
  >
    <p class="select-none">
      {{ $i18n.locale === 'fr' ? 'FR' : 'US' }}
    </p>
    <Icon
      :name="
        $i18n.locale === 'fr'
          ? 'circle-flags:fr'
          : 'circle-flags:us'
      "
    />
  </button>
</template>
