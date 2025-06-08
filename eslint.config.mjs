import { defineConfig } from "eslint/config"
import prettier from "eslint-plugin-prettier"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

//TODO: Make it work
//TODO: Add rules about scss format : organise tailwind classes logically + unauthorize style on tag element
export default defineConfig([
  {
    extends: compat.extends("eslint:recommended", "prettier"),

    plugins: {
      prettier,
    },

    ignores: ["dist", "node_modules"],

    rules: {
      "prettier/prettier": [
        "error",
        {
          semi: false,
        },
      ],
      "no-console": "error",
    },
  },
])
