# Frontend Design Patterns

TypeScript/Reactを使用したデザインパターンの学習環境です。

## 起動方法

```bash
npm run dev
```

## ディレクトリ構成

```
src/
├── patterns/
│   ├── singleton/      # Singletonパターン
│   ├── provider/       # Providerパターン
│   └── prototype/      # Prototypeパターン
├── components/         # 共通コンポーネント
│   └── Layout.tsx      # サイドバー付きレイアウト
└── pages/             # ページコンポーネント
    └── Home.tsx       # ホームページ
```

## 実装方法

各パターンのディレクトリ内にコンポーネントやロジックを実装してください。
ページコンポーネント（例：SingletonPage.tsx）が既に用意されています。

## ESLint設定の拡張

本番アプリケーションを開発する場合は、型認識リントルールを有効にするために設定を更新することをお勧めします：

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

React固有のリントルールのために、[eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)と[eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)をインストールすることもできます：

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
