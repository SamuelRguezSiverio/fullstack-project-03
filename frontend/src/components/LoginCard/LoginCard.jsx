import { useState } from 'react'

import { login } from '../../services/auth'

import { useNavigate } from 'react-router-dom'

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  TextField
} from '@mui/material'
import './LoginCard.css'
import imgLogin from '../../assets/login.png'
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";


function LoginCard() {
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

    <div className='container'>   
     <div className='infoLogin'>
     <Card sx={{ maxWidth: '500px' }}>
      <CardHeader sx={{color: 'orange'}} title="triPHONE"></CardHeader>
      <CardContent>
        <TextField
          onChange={(e) => updateEmail(e.target.value)}
          sx={{ marginBottom: '20px'}}
          label="Email"
          variant="outlined"
          fullWidth
        ></TextField>
        <TextField
          onKeyPress={(e) => {
            if (e.key === 'Enter') return onLogin()
          }}
          onChange={(e) => updatePassword(e.target.value)}
          label="Password"
          variant="outlined"
          fullWidth
        ></TextField>
        {errorMessage && (
          <Typography color="error" textAlign="center" mt={2}>
            {errorMessage}
          </Typography>
        )}
      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={() => onLogin()} sx={{color: 'orange'}}>
          Login
        </Button>
      </CardActions>
    </Card>
      </div>
      <div className='imageLogin'>
        <img src={imgLogin} alt="Login IMG"/>
      </div>
    </div>


  )
}

export default LoginCard