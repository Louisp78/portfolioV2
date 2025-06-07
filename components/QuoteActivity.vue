<script setup lang="ts">
const { modalOpen } = defineProps<{ modalOpen: boolean }>()
const formValidated = ref(false)

function handleClose() {
  formValidated.value = false
  emit("close")
}

function handleSubmit() {
  formValidated.value = true
  console.log("Quote form submitted")
}

const emit = defineEmits<{
  (e: "close"): void
}>()
</script>

<template>
  <div
    v-if="modalOpen"
    class="z-10 font-inconsolata"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-30 flex justify-center items-center"
    >
      <div
        class="bg-white w-full max-h-full md:h-auto md:w-[70%] overflow-scroll flex flex-col items-center px-5 pt-5 pb-10 rounded-xl shadow-lg"
        :class="{
          'md:max-h-[80%]': !formValidated,
          'md:max-h-[40%]': formValidated,
        }"
      >
        <div
          v-if="!formValidated"
          class="sticky w-full flex justify-start left-5 top-0"
        >
          <button @click="handleClose">
            <Icon name="ic:round-close" size="24" />
          </button>
        </div>
        <QuoteForm
          v-if="!formValidated"
          @close="handleClose"
          @submit="handleSubmit"
        />
        <QuoteEmailSent v-else @close="handleClose" />
      </div>
    </div>
  </div>
</template>
