<script lang="ts" setup>
const isOpen = ref(false)

const bodyHeight = ref('0px')
const accordionBody = ref<HTMLElement | null>(null)

const toggle = async () => {
  isOpen.value = !isOpen.value

  await nextTick()

  if (accordionBody.value) {
    if (isOpen.value) {
      bodyHeight.value = `${accordionBody.value.scrollHeight}px`
    }
    else {
      bodyHeight.value = '0px'
    }
  }
}
</script>

<template>
  <div
    class="bg-softSand cursor-pointer rounded"
    @click="toggle"
  >
    <div class="overflow-hidden mb-3">
      <div
        class="flex flex-row justify-between items-center pt-3 px-5 font-semibold hover:text-burnedSand"
      >
        <slot name="title">
          Default Title
        </slot>
        <Icon
          name="ic:baseline-keyboard-arrow-down"
          size="32"
        />
      </div>
      <!-- Body with dynamic height transition -->
      <div
        ref="accordionBody"
        class="transition-[height] duration-300 ease-in-out overflow-hidden pl-3 pr-3"
        :style="{ height: isOpen ? bodyHeight : '0px' }"
      >
        <slot name="body">
          Default Content
        </slot>
      </div>
    </div>
  </div>
</template>
