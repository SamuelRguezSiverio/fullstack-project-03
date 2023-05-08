import { useEffect, useState, useContext } from 'react';
import { getClientsByAccountManager } from '../../services/clientsApi';
import ClientsList from '../../components/ClientsList/ClientsList';
import { CartContext } from '../../Contexts/CartContext';
import './AfterSales.css'
import { useNavigate } from 'react-router-dom';

function AfterSales() {
  const [clients, setClients] = useState([]);
  const [cart] = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/phones');
    }
  }, [cart, navigate]);


  useEffect(() => {
    async function getAndSetClients() {
      const clients = await getClientsByAccountManager();
      setClients(clients);
    }
    getAndSetClients();
  }, []);

  return (
    <div>
      <center>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>NIF</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Owner</th>
              <th>City</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <ClientsList key={client.id} {...client} />
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default AfterSales;
