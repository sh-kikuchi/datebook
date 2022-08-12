import { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux";
import { createExpenseData } from "../../ExpenseSlice"

function FormCard() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState('');

  const dispatch = useDispatch();

  const handleClickRegister = () => {
    const formData = { id: Math.random().toString(), name, price, date }
    console.log(formData);
    dispatch(createExpenseData(formData));
  }

  return (
    <Card>
      <CardContent>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': {
              m: 1,
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-error"
            label=""
            sx={{ width: '300px' }}
            placeholder="商品名"
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            id="outlined-error"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            label=""
            sx={{ width: '150px' }}
            placeholder="金額"
            onChange={(event) => setPrice(Number(event.target.value))}
          />
          <TextField
            id="outlined-error"
            label=""
            sx={{ width: '250px' }}
            placeholder="日付"
            onChange={(event) => setDate(event.target.value)}
          />
        </Box>
        <CardActions sx={{ minWidth: '120', display: 'flex', justifyContent: 'center' }}>
          <Button size="small" onClick={handleClickRegister}>追加</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default FormCard;
