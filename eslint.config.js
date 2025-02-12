import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "react/jsx-no-target-blank": "off", // Разрешаем target="_blank"
      "react/prop-types": "off", // PropTypes не нужен в TS
      "no-console": ["warn", { allow: ["warn", "error"] }], // Запрещаем console.log()
      quotes: ["error", "single"], // Одинарные кавычки
      "no-unused-vars": "off", // Отключаем стандартное правило
      "@typescript-eslint/no-unused-vars": ["error"], // Предупреждаем о неиспользуемых переменных
      semi: ["error", "never"], // Без точки с запятой
      "no-var": ["error"], // Запрещаем var
      "no-restricted-syntax": [
        "warn",
        {
          selector: "MemberExpression[property.name='log']",
          message: "Убери - console.log()",
        },
      ],
      "jsx-quotes": ["warn", "prefer-single"],
      'react/jsx-indent': ['warn', 2], // Отступ 2 пробела
      'react/jsx-indent-props': ['error', 2], // Отступ 2 пробела для атрибутов
      "react/jsx-max-props-per-line": ["warn", { "maximum": 1, "when":"always" }], 
      "react/jsx-first-prop-new-line": ["warn", "multiline"],
      "react/jsx-closing-bracket-location": ["warn", "tag-aligned"], // Закрывающая `>` на новой строке
    },
  },
)
