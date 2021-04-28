module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'standard-with-typescript',
    'eslint-config-prettier'
  ],
  ignorePatterns: ['./node_modules/*', './android/*', './ios/*'],
  rules: {
    semi: 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-native/no-inline-styles': 'off'
  },
  parserOptions: {
    project: './tsconfig.json'
  }
}
