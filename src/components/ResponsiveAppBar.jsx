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
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link } from 'react-router-dom';


const pages = ['history'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar   position="static" style={{ background: '#000' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <RemoveRedEyeOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 7.5,
              display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to='/'  style={{textDecoration: 'none', color:'white'}}>Glaucoma Detection</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },  }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'
                // , fontFamily: 'monospace' 
              }}
              >
                <Link to={`/${page}`} style={{textDecoration: 'none', color:'white'}} >{page.toUpperCase()}</Link>
              </Button>
            ))}
          </Box>

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
              sx={{
                display: { xs: 'block', md: 'none' },
                // fontFamily: 'monospace'
              }}>

              {pages.map((page) => (

                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                   textAlign="center"
                   sx={{
                    // fontFamily: 'monospace'
                  }}>
                    <Link to={`/${page}`} style={{textDecoration: 'none', color:'black'}} >{page.toUpperCase()}</Link>
                  </Typography>
                </MenuItem>

              ))}
            </Menu>
          </Box>

          <RemoveRedEyeOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} size= "large"/>
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
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GD
          </Typography>


        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
