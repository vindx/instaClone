module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['prettier', 'airbnb-base'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'linebreak-style': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-plusplus': 'off',
    'object-curly-newline': 'off',
    'semi': 'off',
    'no-console': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'space-before-function-paren': 'off',
    'func-names': 'off',
  },
};
