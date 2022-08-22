import { useState } from 'react';
import { useSelector } from "react-redux";
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { RootState } from '../../../../store/index'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { deleteEventData } from "../../EventSlice"
import { useDispatch } from "react-redux";


const columns: GridColDef[] = [
  // { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'イベント名', width: 250 },
  { field: 'start', headerName: '開始日', width: 200 },
  { field: 'end', headerName: '修了日', width: 200 },
  { field: 'detail', headerName: 'ひとくちメモ', width: 400 },
];

type rowData = {
  id: String,
  title: String,
  start: String,
  end: String,
  detail: String
}

let rows: rowData[] = [];

// function FormList(props: Props) {
function FormList() {
  const event = useSelector((state: RootState) => state.event);
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  const dispatch = useDispatch();

  const handleDeleteRows = () => {
    console.log('handleDeleteRows is called');
    if (selectionModel.length === 0) return;
    dispatch(deleteEventData(selectionModel.toString()));
  }

  rows = event;

  return (
    <div style={{ height: 400, width: '100%' }} >
      <Box component='div' sx={{
        p: 2, display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Button variant="contained" color='info' href='/calendar'>カレンダー</Button>
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
