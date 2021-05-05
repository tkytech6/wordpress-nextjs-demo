module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:typescript-sort-keys/recommended",
    "prettier",
  ],
  ignorePatterns: ["data/**/*", "src/generated/*"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "sort-keys-fix"],
  rules: {
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "import/extensions": 0,
    "no-empty": ["error", { "allowEmptyCatch": true}],
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-props": 1,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off",
    "sort-keys-fix/sort-keys-fix": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
