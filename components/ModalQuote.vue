<script lang="ts" setup>
import { z } from 'zod'
import QuoteItem from '~/types/QuoteItem'

const runtimeConfig = useRuntimeConfig()

const TOKEN = runtimeConfig.mailtrapToken
const SENDER_EMAIL = 'quote@louisplace.com'
const RECIPIENT_EMAIL = 'louis.place@epita.fr'

const clientEmail = ref<string>('')
const projectName = ref<string>('')
const projectDescription = ref<string>('')
const itemList = ref<QuoteItem[]>([new QuoteItem()])
const errors = ref<Record<string, string>>({})

const formSchema = z.object({
  clientEmail: z.string().email({ message: 'Email invalide.' }),
  projectName: z.string().nonempty({ message: 'Le nom du projet est requis.' }),
  projectDescription: z.string(),
  itemList: z.array(z.object({
    description: z.string().nonempty({ message: 'Préciser une description.' }),
    duration: z.number().gt(0, { message: 'Renseigner une durée valide (>0).' }),
    quantity: z.number().gt(0, { message: 'Renseigner une quantité valide (>0).' }),
  })).nonempty({ message: 'Au moins un élément est requis.' }),
})

type FormData = z.infer<typeof formSchema>

const isError = computed(() => {
  return Object.values(errors.value).filter(elt => elt !== '').length > 0
})

function validateField<T extends keyof FormData>(field: T, value: any) {
  try {
    formSchema.shape[field].parse(value)
    errors.value[field] = '' // Clear error if valid
  }
  catch (err: any) {
    errors.value[field] = err.issues[0].message // Set error message if invalid
  }
  console.log(Object.values(errors.value).filter(elt => elt !== ''))
}

function validateItemField(index: number, field: keyof QuoteItem, value: any) {
  try {
    // Dynamically validate the field based on the index and field name
    formSchema.shape.itemList.element.shape[field].parse(value)
    errors.value[`itemList.${index}.${field}`] = '' // Clear error if valid
  }
  catch (err: any) {
    errors.value[`itemList.${index}.${field}`] = err.issues[0].message // Set error message if invalid
  }
}

function handleAddItem() {
  itemList.value.push(new QuoteItem())
}
function handleClose() {
  emit('close')
}
async function handleSubmit() {
  validateField('projectName', projectName.value)
  validateField('projectDescription', projectDescription.value)
  validateField('clientEmail', clientEmail.value)
  itemList.value.forEach((elt: QuoteItem, index: number) => {
    validateItemField(index, 'description', elt.description)
    validateItemField(index, 'duration', elt.duration)
    validateItemField(index, 'quantity', elt.quantity)
  })

  console.log('Sending an email : ', process.env.MAILTRAP_TOKEN)

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouvelle Demande de Devis</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h1 style="color: #4CAF50;">Nouvelle Demande de Devis</h1>
      <p>Une nouvelle demande de devis a été soumise via votre portfolio :</p>

      <h2>Informations Projet</h2>
      <p><strong>Nom du projet :</strong> ${projectName.value}</p>
      <p><strong>Description :</strong> ${projectDescription.value || 'Aucune description fournie.'}</p>

      <h2>Détails de la Mission</h2>
      <ul style="list-style: none; padding: 0;">
        ${itemList.value.map((item: QuoteItem) => `
          <li style="margin-bottom: 20px;">
            <p><strong>Détail de l'élément :</strong> ${item.description}</p>
            <p><strong>Durée :</strong> ${item.duration} heure(s)</p>
            <p><strong>Quantité :</strong> ${item.quantity}</p>
          </li>
        `).join('')}
      </ul>

      <h3>Estimation Totale : ${total.value} €</h3>
      <p style="font-size: 12px; color: #999;">Note : Cette estimation est indicative et non contractuelle.</p>
    </body>
    </html>
  `
  const textContent = `
    Nouvelle Demande de Devis

    Informations Projet :
    Nom du projet : ${projectName.value}
    Description : ${projectDescription.value || 'Aucune description fournie.'}

    Détails de la Mission :
    ${itemList.value.map((item: QuoteItem, index: number) => `
      - Élément ${index + 1} :
        - Description : ${item.description}
        - Durée : ${item.duration} heure(s)
        - Quantité : ${item.quantity}
    `).join('')}

    Estimation Totale : ${total.value} €

    Note : Cette estimation est indicative et non contractuelle.
  `

  try {
    await fetch('https://send.api.mailtrap.io/api/send', {
      method: 'POST',
      headers: {
        'Api-Token': TOKEN,
      },
      body: JSON.stringify({
        from: {
          email: SENDER_EMAIL,
          name: 'Quote Bot',
        },
        to: [
          {
            email: RECIPIENT_EMAIL,
            name: 'Louis Place',
          },
        ],
        subject: projectName.value,
        text: textContent,
        html: htmlContent,
      }),
    }).catch(e => console.error(e))
  }
  catch (e) {
    console.error(e)
  }
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
                    :class="errors[`itemList.${index}.description`] ? 'border-red-500 border-2' : ''"
                    @blur="validateItemField(index, 'description', item.description)"
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
                        :class="errors[`itemList.${index}.duration`] ? 'border-red-500 border-2' : ''"
                        @blur="validateItemField(index, 'duration', item.duration)"
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
                        :class="errors[`itemList.${index}.quantity`] ? 'border-red-500 border-2' : ''"
                        @blur="validateItemField(index, 'quantity', item.quantity)"
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
            <div class="flex flex-col gap-1">
              <h3>Estimation :</h3>
              <span>Total : {{ total }}€</span>
              <span class="text-xs text-gray-500">Important : Les estimations générées via cet outil sont fournies à titre indicatif et n’ont aucune valeur contractuelle. Le devis final, incluant les éventuelles spécificités de votre projet, sera établi après discussion et validation mutuelle.</span>
            </div>
            <div class="w-full flex flex-row justify-center">
              <button
                class="btn-primary disabled:bg-slate-300 disabled:text-gray-700 disabled:hover:bg-slate-300 disabled:hover:text-gray-700"
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
  @apply block mb-2 text-sm font-medium text-gray-900 dark:text-white;
}
</style>
