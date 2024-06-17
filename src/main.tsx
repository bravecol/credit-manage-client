import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './router/Router.tsx';
import { createTheme, ThemeProvider } from '@mui/material';
import './assets/style/style.css';

/**
 * MUIコンポーネントに対する全画面統一CSSを定義
 * (classセレクターでstyle.cssに定義後当ててもMUIコンポーネントのCSS上書きができないため一元管理のために設定)
 */
const muiTheme = createTheme({
  typography: {
    h2: {
      fontSize: '2rem',
    },
  },
});

/**
 * メインファイル
 * @author col
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
