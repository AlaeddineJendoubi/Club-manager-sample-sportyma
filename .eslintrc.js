module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    es6: true,
    jest: true,
    'react-native/react-native': true,
  },
  plugins: [
    'react-hooks',
    'testing-library',
    'jest',
    'react',
    'react-native',
    'import',
    'promise',
    'react-native-a11y',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-console': ['error', {allow: ['warn']}],
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/no-raw-text': 'error',
    'react-native/no-single-element-style-arrays': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-disabled-tests': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
  ],
};
