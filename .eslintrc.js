module.exports = {
  // 適用する環境
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    // jsx を使用
    ecmaFeatures: {
      jsx: true,
    },
    // import 文でモジュールを使用します
    sourceType: 'module',
  },
  // Reactバージョンは自動検出
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  // 基本的にルールは recommended に従う
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'some-other-config-you-use',
    // prettierは配列最後尾に指定(最終的にフォーマッターはprettierを有効にしたいため)
    'prettier',
  ],
  rules: {
    'react/prop-types': 'off', // TypeScirpt のため prop-types はoff
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn', //エフェクトの依存関係のチェック
  },
};
