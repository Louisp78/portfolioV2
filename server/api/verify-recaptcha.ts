export default defineEventHandler(async (event): Promise<RecaptchaResponse> => {
  const runtimeConfig = useRuntimeConfig()
  const body = await readBody(event)

  const formData = new URLSearchParams({
    secret: runtimeConfig.recaptchaSecretKey,
    response: body.token,
  })

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    },
  )

  const data = await response.json()
  return data
})
