export const useRecaptcha = () => {
  const execute = async (action = 'submit'): Promise<string> => {
    if (typeof window === 'undefined') {
      throw new Error('reCAPTCHA can only be executed on client-side')
    }

    return new Promise((resolve, reject) => {
      window.grecaptcha?.ready(async () => {
        const runtimeConfig = useRuntimeConfig()

        try {
          if (!runtimeConfig.public.recaptchaSiteKey) {
            throw new Error('reCAPTCHA site key is not defined')
          }
          const token = await window.grecaptcha.execute(
            runtimeConfig.public.recaptchaSiteKey,
            { action },
          )
          resolve(token)
        }
        catch (error) {
          reject(error)
        }
      })
    })
  }

  return {
    execute,
  }
}
