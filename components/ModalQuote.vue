<script lang="ts" setup>
import QuoteItem from '~/types/QuoteItem'

const projectName = ref<string>('')
const projectDescription = ref<string>('')
const itemList = ref<QuoteItem[]>([new QuoteItem()])

function handleAddItem() {
  itemList.value.push(new QuoteItem())
}
function handleClose() {
  emit('close')
}

const total = computed(() => {
  return itemList.value.reduce((prev: number, elt: QuoteItem) => prev + elt.duration * elt.quantity * 50, 0)
})

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div
    class="relative z-10 font-inconsolata"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-30 flex justify-center items-center">
      <form
        class="bg-white w-[50%] h-[70%] overflow-scroll flex flex-col gap-5 items-center px-5 py-10 rounded-xl shadow-lg relative"
      >
        <button
          class="absolute left-5 top-5"
          @click="handleClose"
        >
          <Icon
            name="ic:round-close"
            size="24"
          />
        </button>

        <div class="flex flex-col items-center">
          <h2>Obtenir mon devis</h2>
          <p class="text-gray-500">
            Obtenez votre devis en 24h et une estimation dès maintenant.
          </p>
        </div>
        <div class="flex flex-col items-start w-full">
          <section class="w-full pb-5">
            <h3 class="text-left pb-3">
              1. Informations projet
            </h3>
            <form class="flex flex-col gap-2">
              <div>
                <label for="project-name">Nom du projet</label>
                <input
                  v-model="projectName"
                  name="project-name"
                  type="text"
                  placeholder="Migration d'application mobile sous Expo"
                >
              </div>
              <div>
                <label for="project-description">Description (Optionnel)</label>
                <textarea
                  v-model="projectDescription"
                  name="project-description"
                  rows="4"
                  placeholder="Application mobile de gestion de tâches"
                />
              </div>
            </form>
          </section>
          <section class="w-full flex flex-col gap-5">
            <h3>2. Détailler la mission</h3>
            <button
              class="w-full flex flex-row gap-2 items-center border rounded px-2 py-3"
              @click="handleAddItem"
            >
              <Icon
                name="line-md:plus-circle"
                size="24"
              />
              <span>Ajouter un élément</span>
            </button>
            <ul class="flex flex-col gap-3">
              <li
                v-for="(item, index) in itemList"
                :key="index"
              >
                <form class="flex flex-col gap-2 border rounded p-3">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Détail de l'élément {{ index+1 }}</label>
                  <textarea
                    v-model="item.description"
                    name="item-description"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Mise en place de l'architecture de l'application"
                  />
                  <div class="flex flex-row justify-between items-center">
                    <div>
                      <label for="duration">Durée (heure)</label>
                      <input
                        v-model="item.duration"
                        type="number"
                        min="0"
                        max="10"
                      >
                    </div>
                    <div>
                      <label for="duration">Quantité<label>
                        <input
                          v-model="item.quantity"
                          type="number"
                          min="0"
                          max="1000"
                        >
                      </label></label>
                    </div>
                  </div>
                </form>
              </li>
            </ul>
            <div class="flex flex-col gap-1">
              <h3>Estimation :</h3>
              <span>Total : {{ total }}€</span>
              <span class="text-xs text-gray-500">Important : Les estimations générées via cet outil sont fournies à titre indicatif et n’ont aucune valeur contractuelle. Le devis final, incluant les éventuelles spécificités de votre projet, sera établi après discussion et validation mutuelle.</span>
            </div>
            <div class="w-full flex flex-row justify-center">
              <button
                class="btn-primary"
              >
                Enregister
              </button>
            </div>
          </section>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="postcss">
label {
  @apply block mb-2 text-sm font-medium text-gray-900 dark:text-white;
}
</style>
