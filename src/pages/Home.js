import { Box, Container, CssBaseline, Grid, Button } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useSelector } from 'react-redux';
import './Home.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { auth } from '../assets/firebase';

const Home = () => {

  const user = useSelector(state => state.user)

  const [user1, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if(!user1){
      navigate("/login")
    }
  },[user1])

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
            Welcome  {user.firstName && user.firstName+" "+user.lastName}
          </Typography>
      </Box>

      <Box>
        <Grid className='home'>
          <Grid item xs={12} sx={{m:1}} >
            <Typography variant='subtitle1'><b>User ID: </b>{user.id}</Typography>
          </Grid>
          <Grid item xs={12} sx={{m:1}} >
            <Typography variant='subtitle1'><b>Account type: </b>{user.type ? user.type.charAt(0).toUpperCase()+user.type.slice(1) : "Null"}</Typography>
          </Grid>
          <Grid item xs={12} sx={{m:1}}>
            <Typography  variant='subtitle1'><b>Email: </b>{user.email && user.email}</Typography>
          </Grid>
          <Grid item xs={12} sx={{m:1}}>
            <Typography  variant='subtitle1'><b>Age: </b>{user.age}</Typography>
          </Grid>
          <Grid item xs={12} sx={{m:1}}>
            <Typography  variant='subtitle1'><b>Gender: </b>{user.sex ? user.sex.charAt(0).toUpperCase()+user.sex.slice(1) : "Null"}</Typography>
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

