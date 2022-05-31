import { Box, Container, CssBaseline, Grid, Button } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useSelector } from 'react-redux';
import './Home.css'
import { Link } from 'react-router-dom';


const Home = () => {

  const user = useSelector(state => state.user)

  return (
    <Container component='main' maxWidth='sm' >
      <CssBaseline/>
      <Box
      sx={{
        marginTop: 7,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <AccountCircleOutlinedIcon/>
          </Avatar>
        <Typography component="h1" variant="h4" sx={{m:1}}>
            Welcome  {user.firstName+" "+user.lastName}
          </Typography>
      </Box>

      <Box>
        <Grid className='home'>
          <Grid item xs={12} sx={{m:1}} >
            <Typography variant='subtitle1'><b>User ID: </b>{user.id}</Typography>
          </Grid>
          <Grid item xs={12} sx={{m:1}}>
            <Typography  variant='subtitle1'><b>Email: </b>{user.email}</Typography>
          </Grid>
          <Grid item xs={12} sx={{m:1}}>
            <Typography  variant='subtitle1'><b>Age: </b>{user.age}</Typography>
          </Grid>
          <Grid item xs={12} sx={{m:1}}>
            <Typography  variant='subtitle1'><b>Gender: </b>{user.sex}</Typography>
          </Grid>
          <Grid item xs={12} sx={{m:1}}>
          <Button component={Link} to='/history' variant="contained">View Diagnosis History</Button>
          </Grid>
        </Grid>
      </Box>


    </Container>
  )
}

export default Home


{/* <Box>
<Grid container spacing={2}>
<TextField
    id="user-id"
    value={user.id}
    InputProps={{
      readOnly: true,
    }}
  />
<TextField
    id="user-email"
    value={user.email}
    InputProps={{
      readOnly: true,
    }}
  />
  <Grid item xs={12} sm={6}>
  <TextField
    id="user-first-name"
    value={user.firstName}
    InputProps={{
      readOnly: true,
    }}
  />
  </Grid>
  <Grid item xs={12} sm={6}>
  <TextField
    id="user-last-name"
    value={user.lastName}
    InputProps={{
      readOnly: true,
    }}
  />
  </Grid>
  <Grid item xs={12} sm={6}>
  <TextField
    id="user-age"
    value={user.age}
    InputProps={{
      readOnly: true,
    }}
  />
  </Grid>
  <Grid item xs={12} sm={6}>
  <TextField
    id="user-sex"
    value={user.sex}
    InputProps={{
      readOnly: true,
    }}
  />
  </Grid>
</Grid>
</Box> */}