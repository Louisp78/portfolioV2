// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // Your custom configs here
  rules: {
    'vue/block-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'vue/no-empty-component-block': 'error',
  },
})
