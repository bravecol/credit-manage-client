import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Top } from '../components/pages/Top';
import { DefaultLayout } from '../components/templates/DefaultLayout';
import { HeaderOnly } from '../components/templates/HeaderOnly';
import { Box } from '@mui/material';
import { Upload } from '../components/pages/Upload';
import { UsedDetailManage } from '../components/pages/UsedDetailManage';

/**
 * ルーティング(画面遷移)設定
 * @author col
 */
export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Top />
            </DefaultLayout>
          }
        />
        <Route
          path="/login"
          element={
            <DefaultLayout>
              {/* TODO:実装予定 モーダルでログインさせるかログインページを設けて転送するか考える */}
              <Box>ログイン画面</Box>
            </DefaultLayout>
          }
        />
        <Route
          path="/manage"
          element={
            <HeaderOnly>
              <UsedDetailManage />
            </HeaderOnly>
          }
        />
        <Route
          path="/upload"
          element={
            <HeaderOnly>
              <Upload />
            </HeaderOnly>
          }
        />
        <Route
          path="/categpry"
          element={
            <HeaderOnly>
              {/* TODO:実装予定 */}
              <Box>カテゴリマスタ画面</Box>
            </HeaderOnly>
          }
        />
        <Route
          path="/billing"
          element={
            <HeaderOnly>
              {/* TODO:実装予定 */}
              <Box>支払日設定画面</Box>
            </HeaderOnly>
          }
        />
        <Route
          path="/*"
          element={
            <DefaultLayout>
              {/* TODO:実装予定 */}
              <Box>404画面</Box>
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
