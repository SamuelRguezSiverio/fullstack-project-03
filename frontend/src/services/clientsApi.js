import authApi from "./authAPIConfig";

export async function getAllClients(clientId = null) {
    const { data } = await authApi.get('/clients/', {headers : {token : localStorage.getItem('token')}})
    if (clientId) {
        return data.find(client => client.id === parseInt(clientId))
    }
    return data
}

export async function getClientsByAccountManager() {
    try{
      const { data } = await authApi.get('/clients/accountManager/',   {headers : {token : localStorage.getItem('token')}}
      )
      return data
    } catch (error) {
      console.error(error)
    }
  }
