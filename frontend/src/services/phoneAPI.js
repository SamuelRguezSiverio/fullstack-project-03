import authApi from './authAPIConfig'

export async function getAllPhones(phoneId = null) {
  const { data } = await authApi.get('/phones/', {headers : {token : localStorage.getItem('token')}})
  if (phoneId) {
    return data.find(phone => phone.id === parseInt(phoneId))
  }
  return data
}

export async function getPhonesByBrand(brandId) {
  try {
    const { data } = await authApi.get(`/phones/brands/${brandId}`, {headers : {token : localStorage.getItem('token')}})
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function getAllBrands() {
  try {
    const { data } = await authApi.get(`/brands/`, {headers : {token : localStorage.getItem('token')}})
    return data
  } catch (error) {
    console.error(error)
  }
}