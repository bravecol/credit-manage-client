import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { ja } from 'date-fns/locale/ja';

/**
 * 日付の期間指定コンポーネント
 * @author col
 */
const DateRangePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSearch = () => {
    if (startDate && endDate) {
      // 検索処理をここに追加します
      console.log('Start Date:', startDate);
      console.log('End Date:', endDate);
    } else {
      console.log('Please select both start and end dates.');
    }
  };

  return (
    // date-fns V3以降は「@mui/x-date-pickers/AdapterDateFnsV3」を採用する
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <Box display="flex" alignItems="center" gap={1}>
        <DatePicker
          label="開始日"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          format="yyyy/MM/dd"
        />
        <Box>〜</Box>
        <DatePicker
          label="終了日"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
          format="yyyy/MM/dd"
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          検索
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default DateRangePicker;
