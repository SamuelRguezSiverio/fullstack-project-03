import { useState } from 'react'

import { signup } from '../../services/auth'

import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions
} from '@mui/material'

function SignupCard({ changeToLogin }) {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [dni, setDNI] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')

  async function onSignup() {
    const dataInSignup = {
      name,
      surname,
      dni,
      email,
      password,
      city
    }
    const apiResponse = await signup(dataInSignup)
    console.log(apiResponse)
  }

  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardHeader title="Sign Up" />
      <CardContent>
        <TextField
          onChange={(e) => setName(e.target.value)}
          label="Name"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setSurname(e.target.value)}
          label="Surname"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setDNI(e.target.value)}
          label="DNI"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setCity(e.target.value)}
          label="City"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={() => changeToLogin()}>Login</Button>
        <Button color="success" onClick={() => onSignup()}>
          Sign Up
        </Button>
      </CardActions>
    </Card>
  )
}

export default SignupCard