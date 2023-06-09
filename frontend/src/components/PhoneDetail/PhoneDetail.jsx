import { useContext } from 'react'
import { Box } from '@mui/material'
import { CartContext } from '../../Contexts/CartContext'
import './PhoneDetail.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function PhoneDetail(props) {
  const { id, memoria, modelo, pantalla, dimensiones, procesador, camara_frontal, camara, peso, bateria, extras, precio, color, imgUrl } = props

  const [cart, setCart] = useContext(CartContext)

  const addToCart = () => {
    setCart((currPhones) => {
      const isPhoneFound = currPhones.find((phone) => phone.id === id)
      if (isPhoneFound) {
        return currPhones.map((phone) => {
          if (phone.id === id) {
            return { ...phone, quantity: phone.quantity + 1 }
          } else {
            return phone
          }
        })
      } else {
        return [...currPhones, { id, quantity: 1, precio, modelo, memoria, color, imgUrl }]
      }
    })
  }

  const removePhone = (id) => {
    setCart((currPhones) => {
      if (currPhones.find((phone) => phone.id === id)?.quantity === 1) {
        return currPhones.filter((phone) => phone.id !== id)
      } else {
        return currPhones.map((phone) => {
          if (phone.id === id) {
            return { ...phone, quantity: phone.quantity - 1 }
          } else {
            return phone
          }
        })
      }
    })
  }

  const removePhoneCart = (id) => {
    setCart((currPhones) => {
      return currPhones.filter((phone) => phone.id !== id);
    });
  };

  const getQuantityById = (id) => {
    return cart.find((phone) => phone.id === id)?.quantity || 0
  }

  const quantityPerItem = getQuantityById(id)

  return (
    <div className='phone'>
      <div className='img-single-phone'>
        <img src={imgUrl} />
      </div>
      <div className='content-single-phone'>
        <div>
          <h3 style={{ marginBottom: '10px' }}>{modelo} {memoria} {color}</h3>
          <h1 style={{ color: 'orange', marginBottom: 10 }}>{precio}€</h1>
          <div className='cart-buttons'>
            {quantityPerItem === 0 ? (
              <button className='button-detail-add' onClick={() => addToCart()}>Añadir al Carrito</button>
            ) :
              (
              <>
              <div className='product-added'><h4>¡Artículo añadido a la cesta!</h4></div>
              <div><button className='button-detail-trash' onClick={() => removePhoneCart(id)}><DeleteForeverIcon/></button></div>
              </>
            )}
          </div>
        </div>
        <div>
          <h3>Características</h3>
          <p><b>Procesador:</b> {procesador}</p>
          <p><b>Cámara:</b> {camara}</p>
          <p><b>Cámara Frontal:</b> {camara_frontal}</p>
          <p><b>Dimensiones:</b> {dimensiones}</p>
          <p><b>Peso:</b> {peso}</p>
          <p><b>Batería:</b> {bateria}</p>
          <p><b>Pantalla:</b> {pantalla}</p>
          <p><b>Extras:</b> {extras}</p>
        </div>
      </div>
    </div>
  )
}

export default PhoneDetail
