import { styled } from '@mui/material';
import { blue } from '@mui/material/colors';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';

const SDataGrid = styled(DataGrid)({
  minHeight: '100px',
  '& .MuiDataGrid-columnHeaders': {
    background: blue,
    color: blue,
  },
});

export const CustomDataGrid: React.FC<DataGridProps> = (props) => {
  return <SDataGrid {...props} />;
};
