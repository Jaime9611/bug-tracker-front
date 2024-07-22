import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { tableStyles } from './table-data.styles';

interface TableDataProps<T extends NonNullable<unknown>> {
  rows: T[];
  columns: GridColDef[];
}

const TableData = <T extends NonNullable<unknown>>({
  rows,
  columns,
}: TableDataProps<T>) => {
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
      sx={tableStyles}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  );
};

export default TableData;
