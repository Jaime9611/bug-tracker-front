import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';

interface TableDataProps {
  rows: [];
  columns: GridColDef[];
}

const TableData: FC<TableDataProps> = ({ rows, columns }) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  );
};

export default TableData;
