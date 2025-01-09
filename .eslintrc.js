module.exports = {
  extends: ['next/core-web-vitals'],
  plugins: ['simple-import-sort', '@typescript-eslint', 'unused-imports'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'unused-imports/no-unused-imports': 'error'
  }
} 