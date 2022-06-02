import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { logOut } from '../assets/firebase';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router';
import { auth } from '../assets/firebase';
import { useSelector } from 'react-redux';

const ResponsiveAppBar = () => {
  const [user, loading, error] = useAuthState(auth)

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const userLoggedIn = useSelector(state => state.user)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: '#000'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <RemoveRedEyeOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 500,
              letterSpacing: '.01rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Glaucoma Detection
          </Typography>

          <RemoveRedEyeOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
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
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {/* <Button
                component={Link}
                to='/history'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                History
              </Button>            */}
          </Box>

          {user && (<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleOutlinedIcon sx={{color: '#fff'}} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography component={Link} to='/history' textAlign="center"  sx={{textDecoration: 'none', color: '#000'}}>History</Typography>
                </MenuItem>
                {userLoggedIn.type == "admin" && (<MenuItem onClick={handleCloseUserMenu}>
                  <Typography component={Link} to='/register' textAlign="center" sx={{textDecoration: 'none', color: '#000'}}>Add User</Typography>
                </MenuItem>)}
                {userLoggedIn.type != "patient" && (<MenuItem onClick={handleCloseUserMenu}>
                  <Typography component={Link} to='/upload' textAlign="center" sx={{textDecoration: 'none', color: '#000'}}>Upload</Typography>
                </MenuItem>)}
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography component={Link} to='/' onClick={()=>{logOut()}} textAlign="center" sx={{textDecoration: 'none', color: '#000'}}>Log Out</Typography>
                </MenuItem>
                
                
            </Menu>
          </Box>)}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
