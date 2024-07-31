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

interface UploadSearchCondition {
  /** カード名 */
  cardName: string;
  /** アップロード日 */
  uploadDate: string;
  /** 支払日 */
  dueDate: string;
}

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

  const [cardName, setCardName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event: SelectChangeEvent): void => {
    setCardName(event.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // ファイルアップロード時のテキストボックス変更
    if (e.target?.files) {
      console.log(e.target?.files[0]);
    }

    // setSelectedFile(e.target?.files[0]);
  };

  const handleUploadClick = (): void => {
    // アップロード処理
  };

  return (
    <Container component="main">
      <Typography variant="h2">明細アップロード画面</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* アップロード条件設定 */}
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

          <Button variant="contained" sx={{ marginLeft: 1 }} onClick={handleUploadClick}>
            アップロード
          </Button>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="raised-button-file"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="raised-button-file">
              <Button variant="contained" component="span">
                ファイルを選択
              </Button>
            </label>
            {selectedFile && (
              <Typography variant="body1" sx={{ mt: 2 }}>
                選択されたファイル: {selectedFile}
              </Typography>
            )}
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={handleUploadClick}
              disabled={!selectedFile}
            >
              アップロード
            </Button>
          </Box>
        </Box>

        {/* アップロードファイル詳細 */}
        <Box sx={{ width: '100%' }}>
          <CustomDataGrid columns={columns}></CustomDataGrid>
        </Box>
      </Box>
    </Container>
  );
};
