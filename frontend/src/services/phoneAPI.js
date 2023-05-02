import authApi from './authAPIConfig'

export async function getAllPhones(phoneId = null) {
  const { data } = await authApi.get('/phones/')
  if (phoneId) {
    return data.find(phone => phone.id === parseInt(phoneId))
  }
  return data
}

export async function getPhonesByBrand(brandId) {
  try {
    const { data } = await authApi.get(`/brands/${brandId}/phones`)
    return data
  } catch (error) {
    console.error(error)
  }
}