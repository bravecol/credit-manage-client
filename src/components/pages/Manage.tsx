import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import { CustomDataGrid } from '../atoms/grid/CustomDataGrid';
import { AxiosResponse } from 'axios';
import { doPost } from '../../lib/httpRequest';

/**
 * 明細管理画面
 * @author col
 */
export const Manage: React.FC = () => {
  const columns: GridColDef[] = [
    // チェックボックス
    {
      field: 'check',
      headerName: '',
      disableColumnMenu: true,
    },
    //  利用日
    {
      field: 'useDate',
      headerName: '利用日',
    },
    // 利用先
    {
      field: 'useDestination',
      headerName: '利用先',
    },
    // 金額
    {
      field: 'amount',
      headerName: '金額',
    },
    // 備考
    {
      field: 'remarks',
      headerName: '備考',
    },
    // カテゴリ
    {
      field: 'category',
      headerName: 'カテゴリ',
    },
  ];

  const [cardName, setCardName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event: SelectChangeEvent): void => {
    setCardName(event.target.value);
  };

  // 検索処理
  const handleSearch = (): void => {
    const data = {
      id: 1,
      dueDate: new Date(),
    };

    const onSearchComplete = (res: AxiosResponse): void => {
      console.log(res);
    };
    // 検索処理
    doPost('/manage/search', data, onSearchComplete);
  };
  // リセット処理
  const handleReset = (): void => {};

  return (
    <Container component="main">
      <Typography variant="h2" align="center">
        明細管理画面
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* 明細一覧検索条件 */}
        <Box m={2} sx={{ width: '100%' }}>
          <FormControl required sx={{ minWidth: 150 }} size="small">
            <InputLabel id="card-name">カード名</InputLabel>
            <Select
              labelId="card-name"
              id="select-card-name"
              value={cardName}
              label="カード名 *"
              onChange={handleChange}
            >
              <MenuItem value={10}>JQセゾンカード</MenuItem>
              <MenuItem value={20}>au Payカード</MenuItem>
              <MenuItem value={30}>JCBカード</MenuItem>
            </Select>
            <FormHelperText>カード会社選択</FormHelperText>
          </FormControl>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="contained" component="span" sx={{ m: 1 }} onClick={handleSearch}>
              検索
            </Button>
            <Button variant="contained" color="primary" sx={{ m: 1 }} onClick={handleReset}>
              アップロード
            </Button>
          </Box>
        </Box>

        {/* 明細一覧 */}
        <Typography variant="h4" align="center">
          明細一覧
        </Typography>
        <Box sx={{ width: '100%' }}>
          <CustomDataGrid columns={columns}></CustomDataGrid>
        </Box>
      </Box>
    </Container>
  );
};
