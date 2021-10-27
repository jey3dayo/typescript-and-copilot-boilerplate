module.exports = {
  env: {
    browser: false,
    node: true,
    jest: true,
  },
  settings: {
    ecmascript: 6,
    'import/resolver': {
      typescript: {},
    },
  },
  plugins: ['@typescript-eslint'],
  extends: ['plugin:prettier/recommended', 'airbnb-base', 'airbnb-typescript/base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'class-methods-use-this': 0,
    'global-require': 0,
    'no-await-in-loop': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'import/no-dynamic-require': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
      },
    ],
  },
};
