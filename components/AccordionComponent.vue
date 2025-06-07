<script lang="ts" setup>
const isOpen = ref(false)

const bodyHeight = ref(0)
const accordionBody = ref<HTMLElement | null>(null)

const toggle = async () => {
  isOpen.value = !isOpen.value

  await nextTick()

  if (accordionBody.value) {
    bodyHeight.value = isOpen.value ? accordionBody.value.scrollHeight : 0
  }
}
</script>

<template>
  <div
    class="bg-softSand bg-opacity-80 hover:bg-opacity-100 cursor-pointer rounded"
    @click="toggle"
  >
    <div class="overflow-hidden mb-3">
      <div
        class="flex flex-row justify-between items-center pt-3 px-5 font-semibold hover:text-burnedSand"
      >
        <slot name="title"> Default Title </slot>
        <Icon
          :name="
            isOpen
              ? 'ic:baseline-keyboard-arrow-up'
              : 'ic:baseline-keyboard-arrow-down'
          "
          size="32"
        />
      </div>
      <div
        ref="accordionBody"
        class="transition-[height] duration-300 ease-in-out overflow-hidden pl-3 pr-3"
        :class="{
          'py-4 md:py-0': isOpen,
        }"
        :style="{ height: `${bodyHeight}px` }"
      >
        <slot name="body" />
      </div>
    </div>
  </div>
</template>
