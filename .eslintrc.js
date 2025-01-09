module.exports = {
  extends: ['next/core-web-vitals'],
  plugins: ['simple-import-sort', '@typescript-eslint', 'unused-imports'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-unused-vars': ['error', {
      varsIgnorePattern: '^JSX$',
      ignoreRestSiblings: true,
    }],
    'unused-imports/no-unused-imports': 'error'
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  ]
} 