import { useState, useEffect, useContext } from 'react';
import { getClientsByAccountManager } from '../../services/clientsApi'
import { CartContext } from '../../Contexts/CartContext';
import { useNavigate } from 'react-router-dom';

import './AfterSales.css'

function AfterSales() {
  const [clients, setClients] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/smartphones');
    }
  }, [cart, navigate]);

  useEffect(() => {
    async function getAndSetClients() {
      const clients = await getClientsByAccountManager();
      setClients(clients);
    }
    getAndSetClients();
  }, []);

  const [selectedClient, setSelectedClient] = useState(null);

  const handleSelectClient = (event) => {
    const clientId = event.target.value;
    const client = clients.find((c) => c.id === Number(clientId));
    setSelectedClient(client);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const orderSent = () => {
    const div = document.getElementById('main-aftersales');
    div.classList.toggle('main-aftersales-close');
    const div2 = document.getElementById('done');
    div2.classList.toggle('done-show');
    setTimeout(() => {
      setCart([])
      navigate('/')
    }, 2000);
  }

  return (
    <>
      <div id='main-aftersales' className='main-aftersales'>
        <h1>Post Venta</h1>
        <form onSubmit={handleSubmit}>
          <select className='classic' onChange={handleSelectClient}>
            <option value="">Selecciona un cliente</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </select>

          {selectedClient && (
            <div className='form-container'>
              <div className='form-container-data1'>
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  value={selectedClient.name}
                  readOnly
                />

                <label htmlFor="nif">NIF:</label>
                <input
                  type="text"
                  id="nif"
                  value={selectedClient.nif}
                  readOnly
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  value={selectedClient.email}
                  readOnly
                />

                <label htmlFor="mobile">Teléfono:</label>
                <input
                  type="text"
                  id="mobile"
                  value={selectedClient.mobile}
                  readOnly
                />
              </div>
              <div className='form-container-data2'>
                <label htmlFor="owner">Propietario:</label>
                <input
                  type="text"
                  id="owner"
                  value={selectedClient.owner}
                  readOnly
                />

                <label htmlFor="city">Ciudad:</label>
                <input
                  type="text"
                  id="city"
                  value={selectedClient.city}
                  readOnly
                />

                <label htmlFor="address">Dirección:</label>
                <input
                  type="text"
                  id="address"
                  value={selectedClient.address}
                  readOnly
                />
              </div>
            </div>
          )}
          {!selectedClient ? '' : <button className='button-form' type="submit" onClick={() => orderSent()}>Tramitar Pedido</button>
          }
        </form>
      </div>
      <div id='done' className='done'><h1>¡Su pedido ha sido procesado!</h1>
      </div>
    </>

  );
}

export default AfterSales;