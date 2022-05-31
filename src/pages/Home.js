import { Box, Container, CssBaseline, Grid } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';



const Home = () => {

  const user = useSelector(state => state.user)

  return (
    <Container component='main' maxWidth='md'>
      <CssBaseline/>
      <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <Typography component="h1" variant="h4">
            Welcome {user.firstName}
          </Typography>
      </Box>

      <Box>
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
      </Box>
    </Container>
  )
}

export default Home