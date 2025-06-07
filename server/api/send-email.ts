import path from "path"
import { readFile } from "fs/promises"
import type QuoteItem from "~/types/QuoteItem"
import { CONTACT_EMAIL } from "~/constants"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const recaptchaCheck = await validateRecaptcha(body.recaptchaResponse)
  if (!recaptchaCheck.success) {
    return sendError(
      event,
      createError({
        statusCode: 403,
        statusMessage: `reCAPTCHA validation failed : ${recaptchaCheck["error-codes"]?.join(", ")}`,
      }),
    )
  }

  const { sendMail } = useNodeMailer()

  // Charger le fichier de template
  const templatePath = path.resolve("templates/quote-email.html")
  let htmlContent = await readFile(templatePath, "utf-8")

  // Injecter les données dans le template
  const itemListHtml = body.itemList
    .map(
      (item: QuoteItem) => `
    <li style='margin-bottom: 20px;'>
      <p><strong>Détail de l'élément :</strong> ${item.description}</p>
      <p><strong>Durée :</strong> ${item.duration} heure(s)</p>
      <p><strong>Quantité :</strong> ${item.quantity}</p>
    </li>
  `,
    )
    .join("")

  htmlContent = htmlContent
    .replace("{{clientName}}", body.clientName)
    .replace("{{clientEmail}}", body.clientEmail)
    .replace("{{projectName}}", body.projectName)
    .replace(
      "{{projectDescription}}",
      body.projectDescription || "Aucune description fournie.",
    )
    .replace("{{itemList}}", itemListHtml)
    .replace("{{total}}", body.total.toString())

  // Texte brut pour les emails non HTML
  const textContent = `
    Nouvelle Demande de Devis

    Informations Projet :
    Nom du projet : ${body.projectName}
    Description : ${body.projectDescription || "Aucune description fournie."}

    Détails de la Mission :
    ${body.itemList
      .map(
        (item: QuoteItem, index: number) => `
      - Élément ${index + 1} :
        - Description : ${item.description}
        - Durée : ${item.duration} heure(s)
        - Quantité : ${item.quantity}
    `,
      )
      .join("")}

    Estimation Totale : ${body.total} €

    Note : Cette estimation est indicative et non contractuelle.
  `

  return sendMail({
    subject: body.projectName,
    text: textContent,
    html: htmlContent,
    to: CONTACT_EMAIL,
  })
})

async function validateRecaptcha(
  token: string,
): Promise<Partial<RecaptchaResponse>> {
  try {
    const response: RecaptchaResponse = await $fetch("/api/verify-recaptcha", {
      method: "POST",
      body: { token },
    })
    return response
  } catch (error: any) {
    console.error("reCAPTCHA error:", error)
    return {
      success: false,
      "error-codes": error?.message ? [error?.message] : [],
    }
  }
}
