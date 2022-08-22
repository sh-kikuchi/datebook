import { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux";
import { createEventData } from "../../EventSlice";

function FormCard() {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [detail, setDetail] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [borderColor, setBorderColor] = useState('');

  const dispatch = useDispatch();

  const handleClickRegister = () => {
    const formData = {
      id: Math.random().toString(),
      title,
      start,
      end,
      detail,
      backgroundColor,
      borderColor
    };
    console.log(formData);
    dispatch(createEventData(formData));
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
            sx={{ width: 250 }}
            placeholder="イベント名"
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            id="datetime-local"
            label="開始日"
            type="datetime-local"
            placeholder="開始日"
            sx={{ width: 200 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => setStart(event.target.value)}
          />
          <TextField
            id="datetime-local"
            label="終了日"
            type="datetime-local"
            placeholder="終了日"
            sx={{ width: 200 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => setEnd(event.target.value)}
          />
        </Box>
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
            sx={{ width: 500 }}
            placeholder="ひとくちメモ"
            onChange={(event) => setDetail(event.target.value)}
          />
          <div>
            <input
              type="color"
              onChange={(event) => {
                setBackgroundColor(event.target.value)
                setBorderColor(event.target.value)
              }}
            />
            <label> ※カレンダー内のイベントバーの色を変えることが出来ます</label>
          </div>
        </Box>
        <CardActions sx={{ minWidth: '120', display: 'flex', justifyContent: 'center' }}>
          <Button size="small" onClick={handleClickRegister}>イベントを追加する</Button>
        </CardActions>
      </CardContent>
    </Card>

  );
}

export default FormCard;
