module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "unused-imports",
    "react-hooks",
    "sort-keys-fix",
  ],
  rules: {
    "@typescript-eslint/no-empty-interface": "warn",
    "linebreak-style": ["error", "unix"],
    "no-unused-vars": "off",
    quotes: ["error", "double"],
    "react-hooks/exhaustive-deps": "error",
    "react/react-in-jsx-scope": "off",
    semi: ["error", "always"],
    "sort-keys-fix/sort-keys-fix": "warn",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        vars: "all",
        varsIgnorePattern: "^_",
      },
    ],
  },
};
