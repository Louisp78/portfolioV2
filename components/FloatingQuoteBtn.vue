<script setup lang="ts">
const isOpen = ref<boolean>(false)
const isModalOpen = ref<boolean>(false)
let intervalId: NodeJS.Timer | null = null

const bodyWidth = ref('0px')
const floatingBtnBody = ref<HTMLElement | null>(null)

const switchModalOpen = () => {
  isModalOpen.value = !isModalOpen.value
}

const switchOpen = async () => {
  isOpen.value = !isOpen.value

  await nextTick()

  if (floatingBtnBody.value) {
    if (isOpen.value) {
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
  <div>
    <button
      ref="floatingBtnBody"
      class="z-10 fixed right-5 bottom-5 rounded-full bg-softSand border-2 border-sand flex flex-row items-center p-3 text-black shadow h-12"
      @click="() => switchModalOpen()"
    >
      <p
        class="font-inconsolata font-medium transition-all ease-in-out duration-1000 whitespace-nowrap opacity-100"
        :style="{ width: isOpen ? bodyWidth : '0px', opacity: isOpen ? 1 : 0 }"
      >
        Obtenir un devis en moins de 24h
      </p>
      <Icon
        class="text-black"
        name="material-symbols:request-quote-outline-rounded"
        :size="ICON_SIZE"
      />
    </button>
    <ModalQuote
      v-if="isModalOpen"
      @close="() => (isModalOpen = false)"
    />
  </div>
</template>
