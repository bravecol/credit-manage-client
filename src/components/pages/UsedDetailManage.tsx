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
import { CardName } from '../atoms/select/CardName';
import DateRangePicker from '../molcules/date/DateRangePicker';

/**
 * 利用明細管理検索条件
 */
interface ManageSearchCondition {
  /** カード名 */
  cardName: string;
  /** 利用日(from) */
  useStartDate: string;
  /** 利用日(To) */
  useEndDate: string;
  /** 利用先 */
  useTarget: string;
  /** 金額 */
  price: number;
  /** カテゴリ */
  category: number;
  /** 支払日(from) */
  dueStartDate: string;
  /** 支払日(To) */
  dueEndDate: string;
}

/**
 * 明細管理画面
 * @author col
 */
export const UsedDetailManage: React.FC = () => {
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
  const [searchCondition, setSearchCondition] = useState<ManageSearchCondition>();

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

  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  // 日付入力イベント
  const handleChangeDate = (event: Date, name?: string) => {
    console.log(name);
    if (name === 'startDate') {
      setStartDate(event);
    } else if (name === 'endDate') {
      setEndDate(event);
    }
  };

  return (
    <Container component="main">
      <Typography variant="h2" align="center">
        明細管理画面
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* 明細一覧検索条件 */}
        <Box m={2} sx={{ width: '100%' }}>
          <CardName required />
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onChangeDate={handleChangeDate}
          />

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
