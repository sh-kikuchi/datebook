import './App.css';
import Grid from '@mui/material/Unstable_Grid2';
import HomeImage from './images/calender_schedule_empty.png'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function Home() {
  return (
    <div className="Home">
      <Grid container>
        <Grid xs={12} md={6}>
          <img src={HomeImage} alt="アイコン" />
        </Grid>
        <Grid xs={12} md={6}>
          <Box sx={{ width: '100%', maxWidth: 550, bgcolor: 'background.paper' }}>
            <nav aria-label="secondary mailbox folders">
              <h2>お品書き</h2>
              <Divider />
              <List>
                <ListItem disablePadding >
                  <ListItemButton href="/event">
                    <ListItemText
                      primary={"Events"}
                      secondary={"この画面では、イベントを追加・削除が出来るフォーム、イベントが表示されるリストが用意されています。"}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton href="/calendar">
                    <ListItemText
                      primary={"Calendar"}
                      secondary={"イベントリスト画面で追加したイベントはカレンダーでも確認することが出来ます。"}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
            <nav aria-label="secondary mailbox folders">
              <h2>ことわり</h2>
              <Divider />
              <List>
                <ListItem disablePadding >
                  <ListItemButton>
                    <ListItemText
                      secondary={"本アプリではデータの格納場所としてLocalStorageを利用しております。"}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
