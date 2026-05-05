import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

// הגדרת חוקי ESLint לפרויקט TypeScript ו-React.
export default defineConfig([
  // אין צורך לבדוק את תיקיית הבילד.
  globalIgnores(['dist']),
  {
    // החוקים חלים על כל קבצי TypeScript ו-TSX.
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      // תמיכה בתחביר מודרני ובמשתני דפדפן גלובליים.
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
