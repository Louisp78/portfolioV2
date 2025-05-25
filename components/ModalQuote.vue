<script lang="ts" setup>
import { z } from 'zod'
import SpinnerComponent from './SpinnerComponent.vue'
import QuoteItem from '~/types/QuoteItem'
import { ICON_SIZE } from '~/constants'

const { execute: executeRecaptcha } = useRecaptcha()

const isLoading = ref(false)
const clientEmail = ref<string>('')
const clientName = ref<string>('')
const projectName = ref<string>('')
const projectDescription = ref<string>('')
const itemList = ref<QuoteItem[]>([])
const errors = ref<Record<string, string>>({})
const textareaRefs = ref<HTMLTextAreaElement[]>([])

const formSchema = z.object({
  clientName: z.string().nonempty({ message: 'Le nom du client est requis.' }),
  clientEmail: z.string().email({ message: 'Email invalide.' }),
  projectName: z.string().nonempty({ message: 'Le nom du projet est requis.' }),
  projectDescription: z.string(),
  itemList: z
    .array(
      z.object({
        description: z
          .string()
          .nonempty({ message: 'Préciser une description.' }),
        duration: z
          .number()
          .gt(0, { message: 'Renseigner une durée valide (>0).' }),
        quantity: z
          .number()
          .gt(0, { message: 'Renseigner une quantité valide (>0).' }),
      }),
    ),
})

type FormData = z.infer<typeof formSchema>

const isError = computed(() => {
  console.log(errors.value)
  return Object.values(errors.value).filter(elt => elt !== '').length > 0
})

function validateField<T extends keyof FormData>(field: T, value: unknown) {
  try {
    formSchema.shape[field].parse(value)
    errors.value[field] = '' // Clear error if valid
  }
  catch (err) {
    if (err instanceof z.ZodError) {
      errors.value[field] = err.issues[0].message // Set error message if invalid
    }
  }
}

function validateItemField(index: number, field: keyof QuoteItem, value: unknown) {
  try {
    // Dynamically validate the field based on the index and field name
    const schema = formSchema.shape.itemList.element as z.ZodObject<{
      [K in keyof QuoteItem]: z.ZodTypeAny
    }>
    schema.shape[field].parse(value)
    errors.value[`itemList.${index}.${field}`] = '' // Clear error if valid
  }
  catch (err) {
    if (err instanceof z.ZodError) {
      errors.value[`itemList.${index}.${field}`] = err.issues[0].message
    }
  }
}

async function validateForm() {
  validateField('clientName', clientName.value)
  validateField('clientEmail', clientEmail.value)
  validateField('projectName', projectName.value)
  validateField('projectDescription', projectDescription.value)
  validateField('clientEmail', clientEmail.value)
  itemList.value.forEach((elt: QuoteItem, index: number) => {
    validateItemField(index, 'description', elt.description)
    validateItemField(index, 'duration', elt.duration)
    validateItemField(index, 'quantity', elt.quantity)
  })
}

// TODO: add focus on the newly created item
function handleAddItem(event: MouseEvent) {
  event.preventDefault()

  itemList.value.push(new QuoteItem())
  nextTick(() => {
    const lastItemIndex = itemList.value.length - 1
    if (textareaRefs.value[lastItemIndex]) {
      textareaRefs.value[lastItemIndex].focus()
      // Ensure the element is visible
      textareaRefs.value[lastItemIndex].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  })
}

function handleClose() {
  emit('close')
}

async function handleSubmit(event: Event) {
  event.preventDefault()
  isLoading.value = true
  try {
    validateForm()
    const token = await executeRecaptcha()

    await $fetch('/api/send-email', {
      method: 'POST',
      body: {
        recaptchaResponse: token,
        clientName: clientName.value,
        clientEmail: clientEmail.value,
        projectName: projectName.value,
        projectDescription: projectDescription.value,
        itemList: itemList.value,
        total: total.value,
      },
    })
  }
  catch (err) {
    console.error(err)
  }
  finally {
    isLoading.value = false
    handleClose()
  }
}

const total = computed(() => {
  return itemList.value.reduce(
    (prev: number, elt: QuoteItem) => prev + elt.duration * elt.quantity * 50,
    0,
  )
})

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <!-- TODO: Split the component into two smaller compoenent: one for the form and one for tell the user infos are well sent -->
  <!-- TODO: Add the possibility to delete an item + focus on the newly created item on create + items are not mandatory -->
  <div
    class="z-10 font-inconsolata"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-30 flex justify-center items-center"
    >
      <form
        class="bg-white w-[70%] h-[80%] overflow-scroll flex flex-col items-center px-5 pt-5 pb-10 rounded-xl shadow-lg"
      >
        <div class="sticky w-full flex justify-start left-5 top-0">
          <button
            @click="handleClose"
          >
            <Icon
              name="ic:round-close"
              size="24"
            />
          </button>
        </div>
        <div class="flex flex-col items-center -mt-5 mb-5">
          <h2>Obtenir mon devis</h2>
          <p class="text-gray-500">
            Obtenez votre devis en 24h et une estimation dès maintenant.
          </p>
        </div>
        <div class="flex flex-col items-start w-full mb-5">
          <section class="w-full pb-5">
            <h3 class="text-left pb-3">
              1. Informations projet
            </h3>
            <form class="flex flex-col gap-2">
              <div>
                <label for="client-name">Votre Nom</label>
                <input
                  v-model="clientName"
                  type="text"
                  placeholder="Jean Dupont"
                  :class="errors.clientName ? 'border-red-500 border-2' : ''"
                  @blur="validateField('clientName', clientName)"
                >
                <p
                  v-if="errors.clientName"
                  class="text-red-500"
                >
                  {{ errors.clientName }}
                </p>
              </div>
              <div>
                <label for="client-email">Votre Email</label>
                <input
                  id="client-email"
                  v-model="clientEmail"
                  type="email"
                  placeholder="example@domain.com"
                  :class="errors.clientEmail ? 'border-red-500 border-2' : ''"
                  @blur="validateField('clientEmail', clientEmail)"
                >
                <p
                  v-if="errors.clientEmail"
                  class="text-red-500"
                >
                  {{ errors.clientEmail }}
                </p>
              </div>
              <div>
                <label for="project-name">Nom du projet</label>
                <input
                  v-model="projectName"
                  name="project-name"
                  type="text"
                  placeholder="Migration d'application mobile sous Expo"
                  :class="errors.projectName ? 'border-red-500 border-2' : ''"
                  @blur="validateField('projectName', projectName)"
                >
                <p
                  v-if="errors.projectName"
                  class="text-red-500"
                >
                  {{ errors.projectName }}
                </p>
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
              type="button"
              class="w-full flex flex-row gap-2 items-center border rounded px-2 py-3 hover:bg-gray-100"
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
                v-for="(item, index) in [...itemList].reverse()"
                :key="index"
              >
                <form class="flex flex-col gap-2 border rounded p-3">
                  <div class="flex justify-between">
                    <label
                      for="message"
                      class="block mb-2 font-medium text-gray-900 dark:text-white"
                    >Détail de l'élément {{ index + 1 }}</label>
                    <button
                      type="button"
                      class="text-red-500 hover:text-red-700"
                      @click="itemList.splice(index, 1)"
                    >
                      <Icon
                        class="text-gray-500 hover:text-red-500"
                        name="ic:round-cancel"
                        :size="ICON_SIZE"
                      />
                    </button>
                  </div>

                  <!-- TODO: Change the ring focus color to burnedSand -->
                  <textarea
                    :ref="el => { if (el) textareaRefs[index] = el as HTMLTextAreaElement }"
                    v-model="item.description"
                    name="item-description"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-0 focus:border-burnedSand focus:border-2"
                    placeholder="Mise en place de l'architecture de l'application"
                    :class="
                      errors[`itemList.${index}.description`]
                        ? 'border-red-500 border-2'
                        : ''
                    "
                    @blur="
                      validateItemField(index, 'description', item.description)
                    "
                  />
                  <p
                    v-if="errors[`itemList.${index}.description`]"
                    class="text-red-500"
                  >
                    {{ errors[`itemList.${index}.description`] }}
                  </p>
                  <div class="flex flex-row justify-between items-center">
                    <div>
                      <label for="duration">Durée (heure)</label>
                      <input
                        v-model="item.duration"
                        type="number"
                        min="0"
                        max="10"
                        :class="
                          errors[`itemList.${index}.duration`]
                            ? 'border-red-500 border-2'
                            : ''
                        "
                        @blur="
                          validateItemField(index, 'duration', item.duration)
                        "
                      >
                      <p
                        v-if="errors[`itemList.${index}.duration`]"
                        class="text-red-500"
                      >
                        {{ errors[`itemList.${index}.duration`] }}
                      </p>
                    </div>
                    <div>
                      <label for="duration">Quantité</label>
                      <input
                        v-model="item.quantity"
                        type="number"
                        min="0"
                        max="1000"
                        :class="
                          errors[`itemList.${index}.quantity`]
                            ? 'border-red-500 border-2'
                            : ''
                        "
                        @blur="
                          validateItemField(index, 'quantity', item.quantity)
                        "
                      >
                      <p
                        v-if="errors[`itemList.${index}.quantity`]"
                        class="text-red-500"
                      >
                        {{ errors[`itemList.${index}.quantity`] }}
                      </p>
                    </div>
                  </div>
                </form>
              </li>
            </ul>
            <div
              v-if="itemList.length"
              class="flex flex-col gap-1"
            >
              <h3>Estimation :</h3>
              <span>Total : {{ total }}€</span>
              <span class="text-xs text-gray-500">Important : Les estimations générées via cet outil sont
                fournies à titre indicatif et n’ont aucune valeur contractuelle.
                Le devis final, incluant les éventuelles spécificités de votre
                projet, sera établi après discussion et validation
                mutuelle.</span>
            </div>
            <div class="w-full flex flex-row justify-center">
              <SpinnerComponent v-if="isLoading" />
              <button
                v-else
                class="g-recaptcha btn-primary disabled:bg-slate-300 disabled:text-gray-700 disabled:hover:bg-slate-300 disabled:hover:text-gray-700"
                :disabled="isError"
                @click="handleSubmit"
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
  @apply block mb-2 text-gray-900 ;
}
</style>
