import {
  Box,
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

/**
 * 明細アップロード画面
 * @author col
 */
export const Upload: React.FC = () => {
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

  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Container component="main">
      <Typography variant="h2">明細アップロード画面</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* アップロード条件設定 */}
        <Box sx={{ width: '100%' }}>
          <FormControl required sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="card-name">カード名</InputLabel>
            <Select
              labelId="card-name"
              id="select-card-name"
              value={age}
              label="Age *"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>カード会社選択</FormHelperText>
          </FormControl>
        </Box>
        {/* アップロードファイル詳細 */}

        <Box sx={{ width: '100%' }}>
          <CustomDataGrid columns={columns}></CustomDataGrid>
        </Box>
      </Box>
    </Container>
  );
};
