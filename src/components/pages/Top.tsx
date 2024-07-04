import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import { AxiosResponse } from 'axios';
import { doPost } from '../../lib/httpRequest';

export const Top: React.FC = () => {
  const onClickLogin = () => {
    const success = (res: AxiosResponse): void => {
      console.log(res);
    };
    const data = {
      loginId: 'manage',
      password: 'passmanage',
    };
    // ログイン画面へ
    doPost('/login', data, success);
  };

  const onClickManage = () => {
    const success = (res: AxiosResponse): void => {
      console.log(res);
    };
    const data = {
      id: 1,
      dueDate: new Date(),
    };
    // 検索処理
    doPost('/manage/search', data, success);
  };

  return (
    <SContainer>
      <Typography variant="h2">TOPページです</Typography>
      <Box>クレジット明細管理WEBアプリ</Box>
      <Box>
        クレジットカード利用明細を管理するWEBアプリ
        <br />
        目的: 毎月の固定費, 食費, 外食費,
        その他などの使用する金額を決めている家庭において複数のクレジットカードを用いた場合の請求管理をしたい
        <br />
        <ul>
          <li>ログイン者によってクレジット会社のマスタ情報を登録する</li>
          <li>アップロードしたCSVから利用明細をカテゴリ分けする</li>
          <li>カテゴリ分けしたデータはクレジットカード会社ごとに検索可能</li>
          <li>保存期間は1年間1ヶ月とする</li>
        </ul>
      </Box>
      <Button onClick={onClickLogin}>ログイン</Button>
      <Button onClick={onClickManage}>検索</Button>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
