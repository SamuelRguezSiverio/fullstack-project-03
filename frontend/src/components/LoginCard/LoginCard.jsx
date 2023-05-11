import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded'; import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundIMG from '../../assets/login-templete.jpg'
import { login } from '../../services/auth'
import { useNavigate } from 'react-router-dom'

function Copyright(props) {
  return (
    <Typography variant="body2" color="black" align="center" {...props}>
      {'triPHONE Copyright © '}
      Todos los derechos reservados
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginCard() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  function updateEmail(inputValue) {
    setEmail(inputValue)
  }

  function updatePassword(inputValue) {
    setPassword(inputValue)
  }

  async function onLogin() {
    const dataInLogin = {
      email,
      password
    }
    try {
      const apiResponse = await login(dataInLogin)
      localStorage.setItem('token', apiResponse.data.token)
      navigate('/')
    } catch (error) {
      setErrorMessage(error.response.data)
      setTimeout(() => {
        setErrorMessage('')
      }, 3000)
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${backgroundIMG})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, backgroundColor: 'orange' }}>
              <PhoneIphoneRoundedIcon />
            </Avatar>
            <Typography sx={{
              color: "orange",
              textDecoration: "none",
              fontFamily: "Dela Gothic One",
            }} component="h1" variant="h5">
              triPHONE
            </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => updateEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') return onLogin()
                }}
                onChange={(e) => updatePassword(e.target.value)}
              />
              {errorMessage && (
          <Typography color="error" textAlign="center" mt={2}>
            {errorMessage}
          </Typography>
        )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={() => onLogin()}
                sx={{ mt: 3, mb: 2, backgroundColor: 'orange', '&:hover': { backgroundColor: '#e09916' } }}
              >
                Login
              </Button>
              <Copyright sx={{ mt: 3 }} />
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}