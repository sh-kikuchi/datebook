import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import EventView from './components/events/EventView';
import CalendarView from './components/calendar/CalendarView';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import EventIcon from '@mui/icons-material/Event';
import Link from '@mui/material/Link';

function App() {
  const pages = [
    { "name": "home", "url": "/" },
    { "name": "calendar", "url": "/calendar" },
    { "name": "event", "url": "/event" },];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/* <h1>datebook</h1> */}
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <EventIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                datebook
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  // スマホ用
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.name}>
                      <Typography textAlign="center">
                        <Link href={page.url} underline="none" color="inherit">{page.name}</Link>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <EventIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                datebook
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    href={page.url}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {/* <BasicBreadcrumbs /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/event" element={<EventView />} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}
//このコンポーネントからstoreにアクセス
export default App;
