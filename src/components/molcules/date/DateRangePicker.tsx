import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import {
  LocalizationProvider,
  DatePicker,
  PickerChangeHandlerContext,
  DateValidationError,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { ja } from 'date-fns/locale/ja';

interface DateRangePickerProps {
  /** ID */
  id?: string;
  /** 名称 */
  name?: string;
  /** ラベル */
  label?: string;
  /** 値 */
  startDate?: Date;
  /** 値 */
  endDate?: Date;
  /** フォーマット */
  format?: string;
  /** ビュー */
  // views?: CalendarPickerView[];
  /** 指定可能な最小日付  */
  minDate?: Date;
  /** 指定可能な最大日付 */
  maxDate?: Date;
  /** 必須入力フラグ */
  required?: boolean;
  /** 日付変更イベント */
  onChangeDate: (event: any, name?: string, rowId?: any) => void;
  /** エラーイベント */
  onError?: (error: React.ReactNode) => void;
  /** 読み取り専用フラグ */
  isReadOnly?: boolean;
  /** CSSクラス名 */
  className?: string;
  /** テキスト幅 */
  width?: number;
  /** 行データのID */
  rowId?: any;
}

/**
 * 日付の期間指定コンポーネント
 * @author col
 */
const DateRangePicker: React.FC<DateRangePickerProps> = (props) => {
  // const [startDate, setStartDate] = useState<Date | null>(null);
  // const [endDate, setEndDate] = useState<Date | null>(null);

  // const handleSearch = () => {
  //   if (startDate && endDate) {
  //     // 検索処理をここに追加します
  //     console.log('Start Date:', startDate);
  //     console.log('End Date:', endDate);
  //   } else {
  //     console.log('Please select both start and end dates.');
  //   }
  // };
  const handleDateChange = (
    value: Date | null,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => {
    if (context.validationError === 'invalidDate') {
    }
    console.log(value);
    console.log(context);

    props.onChangeDate(value, props.name, props.rowId);
  };

  return (
    // date-fns V3以降は「@mui/x-date-pickers/AdapterDateFnsV3」を採用する
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <Box display="flex" alignItems="center" gap={1}>
        <DatePicker
          label="開始日"
          name="startDate"
          value={props.startDate}
          onChange={handleDateChange}
          format="yyyy/MM/dd"
        />
        <Box>〜</Box>
        <DatePicker
          label="終了日"
          name="endDate"
          value={props.endDate}
          onChange={handleDateChange}
          format="yyyy/MM/dd"
        />
      </Box>
    </LocalizationProvider>
  );
};

export default DateRangePicker;
