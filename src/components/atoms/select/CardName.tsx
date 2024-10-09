import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material';
import { memo, useState } from 'react';

type CardNameProps = CustomProps & SelectProps;
interface CustomProps {
  menuItems?: CardMenuItem[];
}

interface CardMenuItem {
  cardCode: number;
  cardName: string;
}

// TODO:通信処理ができるまでの暫定値
const dummyMenuItems: CardMenuItem[] = [
  {
    cardCode: 10,
    cardName: 'JQセゾンカード',
  },
  {
    cardCode: 20,
    cardName: 'au Payカード',
  },
  {
    cardCode: 30,
    cardName: 'JCBカード',
  },
];

/**
 * クレジットカード名のセレクトボックス
 */
export const CardName: React.FC<CardNameProps> = memo((props) => {
  const { required, menuItems } = props;
  const [cardName, setCardName] = useState('');

  const handleChange = (event: SelectChangeEvent): void => {
    setCardName(event.target.value);
  };

  return (
    <FormControl required={required} sx={{ minWidth: 150 }} size="small">
      <InputLabel id="card-name">カード名</InputLabel>
      <Select
        labelId="card-name"
        id="select-card-name"
        value={cardName}
        label={`カード名 ${props.required && '*'}`}
        onChange={handleChange}
      >
        {!props.required && (
          <MenuItem>
            <br />
          </MenuItem>
        )}
        {menuItems
          ? menuItems.map((item) => (
              <MenuItem key={item.cardCode} value={item.cardCode}>
                {item.cardName}
              </MenuItem>
            ))
          : dummyMenuItems.map((item) => (
              <MenuItem key={item.cardCode} value={item.cardCode}>
                {item.cardName}
              </MenuItem>
            ))}
      </Select>
      <FormHelperText>カード会社選択</FormHelperText>
    </FormControl>
  );
});
