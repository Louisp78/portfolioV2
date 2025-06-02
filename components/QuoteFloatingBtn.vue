<script setup lang="ts">
import { ICON_SIZE } from '~/constants'

const emit = defineEmits<{
  (e: 'click'): void
}>()

let intervalId: ReturnType<typeof setInterval> | null = null

const bodyWidth = ref('0px')
const showTextBtn = ref(false)

const floatingBtnBody = ref<HTMLElement | null>(null)

const switchOpen = async () => {
  showTextBtn.value = !showTextBtn.value
  await nextTick()

  if (floatingBtnBody.value) {
    if (showTextBtn.value) {
      bodyWidth.value = `${floatingBtnBody.value.scrollWidth}px`
    }
    else {
      bodyWidth.value = '0px'
    }
  }
}

onMounted(() => {
  intervalId = setInterval(switchOpen, 3000)
})
onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <button
    ref="floatingBtnBody"
    class="z-10 fixed right-5 bottom-5 rounded-full bg-softSand border-2 border-sand flex flex-row items-center p-3 text-black shadow h-12"
    @click="emit('click')"
  >
    <p
      class="font-inconsolata font-medium transition-all ease-in-out duration-1000 whitespace-nowrap opacity-100"
      :style="{ width: showTextBtn ? bodyWidth : '0px', opacity: showTextBtn ? 1 : 0 }"
    >
      {{ $t('get-a-quote') }}
    </p>
    <Icon
      class="text-black"
      name="material-symbols:request-quote-outline-rounded"
      :size="ICON_SIZE"
    />
  </button>
</template>
