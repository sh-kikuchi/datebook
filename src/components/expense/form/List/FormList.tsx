import { useState } from 'react';
import { useSelector } from "react-redux";
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { RootState } from '../../../../store/index'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { deleteExpenseData } from "../../ExpenseSlice"
import { useDispatch } from "react-redux";


const columns: GridColDef[] = [
  // { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'name', width: 250 },
  { field: 'price', headerName: 'price', width: 150 },
  { field: 'date', headerName: 'date', width: 100 },
];

type rowData = {
  id: String,
  name: String,
  price: Number,
  date: String
}
let rows: rowData[] = [];

// function FormList(props: Props) {
function FormList() {
  const expense = useSelector((state: RootState) => state.expense);
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  const dispatch = useDispatch();

  const handleDeleteRows = () => {
    console.log('handleDeleteRows is called');
    if (selectionModel.length === 0) return;
    dispatch(deleteExpenseData(selectionModel.toString()));
  }

  rows = expense;

  return (
    <div style={{ height: 400, width: '100%' }} >
      <Box component='div' sx={{ p: 2, textAlign: 'right' }}>
        <Button variant="contained" color='warning' onClick={handleDeleteRows}>削除</Button>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection={true}
        disableSelectionOnClick={true}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
      />
    </div>
  );
}

export default FormList;
