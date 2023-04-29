import authApi from './authAPIConfig'

export async function getAllPhones(data) {
    const response = await authApi.get('/phones/', data)
    return response.data
  }