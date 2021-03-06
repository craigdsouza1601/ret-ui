import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { logInWithEmailPassword } from '../assets/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { auth } from '../assets/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../assets/firebase';
import { async } from '@firebase/util';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/user';
import CircularProgress from '@mui/material/CircularProgress';
 
const theme = createTheme();

export default function SignIn() {

  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect( () => {
    if(user){
      var userData = {}
      navigate("/")
      const getUserData = async () => {
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
          const res = await getDocs(q)
          res.forEach((doc) => {
            userData = doc.data();
          });
          console.log(userData);
          dispatch(userActions.login(userData))
      }
      getUserData();
      
    }
  },[user])


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    const password = data.get('password')
    logInWithEmailPassword(email,password)
  };

  return (
    <ThemeProvider theme={theme}>
      {loading ? <CircularProgress/> : (<Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>)}
    </ThemeProvider>
  );
}