// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // Your custom configs here
  rules: {
    'vue/block-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'vue/no-empty-component-block': 'error',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        }, // Forces single-line tags to have only one attribute per line
        multiline: {
          max: 1, // Forces multiline tags to have only one attribute per line
        },
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
  },
})
