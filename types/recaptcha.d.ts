declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }

  type RecaptchaResponse = {
    'success': boolean
    'challenge_ts': string
    'hostname': string
    'score': number
    'action': string
    'error-codes'?: string[]
  }
}

export {}
