import authApi from "./authAPIConfig";

export async function getAllClients(clientId = null) {
    const { data } = await authApi.get('/clients/')
    if (clientId) {
        return data.find(client => client.id === parseInt(clientId))
    }
    return data
}