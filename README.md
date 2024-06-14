# プロジェクト名

credit-manage-client

## 概要

クレジットカード利用明細を管理する WEB アプリ
目的: 毎月の固定費, 食費, 外食費, その他などの使用する金額を決めている家庭において複数のクレジットカードを用いた場合の請求管理をしたい

- ログイン者によってクレジット会社のマスタ情報を登録する
- アップロードした CSV から利用明細をカテゴリ分けする
- カテゴリ分けしたデータを DB 保存しクレジットカード会社ごとに検索できるようにする
- DB 保存期間は 1 年間 1 ヶ月とする

## 技術

front: React + TypeScript + Vite
back: Java + Spring Boot

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
