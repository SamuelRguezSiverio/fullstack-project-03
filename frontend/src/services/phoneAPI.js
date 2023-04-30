import authApi from './authAPIConfig'

export async function getAllPhones(phoneId = null) {
  const { data } = await authApi.get('/phones/')
  if (phoneId) {
    return data.find(phone => phone.id === parseInt(phoneId))
  }
  return data
}


/* export async function getPhoneById(id) {
  const { data } = await authApi.get(`/phones/${id}`)
  console.log(data)
  return data
} */
