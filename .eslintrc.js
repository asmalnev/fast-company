module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: [0, 2],
    semi: [2, "always"],
    // "space-before-function-paren": ["error", "never"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "multiline-ternary": "off",
    "space-before-function-paren": 0
  }
};
