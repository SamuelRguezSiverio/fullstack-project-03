import axios from 'axios'

const authApi = axios.create({
  baseURL: 'https://fullstackp03.onrender.com/api',
})

export default authApi