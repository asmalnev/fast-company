module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2], // Отступ количество пробелов
    semi: [2, 'always'], // Точка с запятой в конце строки

    // Ошибка при наличии пробела при обозночении функции, уберём её
    'space-before-function-paren': ['error', 'never'],

    // Использование двойных кавычек
    quotes: ['error', 'single', { allowTemplateLiterals: true }]
  }
};
