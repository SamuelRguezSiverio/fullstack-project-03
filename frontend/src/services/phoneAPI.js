import authApi from './authAPIConfig'

export async function getAllPhones() {
    const {data} = await authApi.get('/phones/')
    return data
  }

  export const getPhoneById = async (q) => {
    const { data } = await authApi.get(`/phones/${q}`)
    return data[0]
}