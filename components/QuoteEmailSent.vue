<script setup lang="ts">
const { t } = useI18n()

defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div class="flex flex-col gap-10 items-center">
    <div class="flex flex-col items-center gap-4">
      <p class="text-3xl">
        {{ t('quote.email-sent.title') }}
      </p>
      <p class="text-gray-600 text-center max-w-md">
        {{ t('quote.email-sent.message') }}
      </p>
    </div>
    <button
      class="btn-primary disabled:bg-slate-300 disabled:text-gray-700 disabled:hover:bg-slate-300 disabled:hover:text-gray-700"
      @click="$emit('close')"
    >
      <span>{{ t('quote.email-sent.close') }}</span>
    </button>
  </div>
</template>
