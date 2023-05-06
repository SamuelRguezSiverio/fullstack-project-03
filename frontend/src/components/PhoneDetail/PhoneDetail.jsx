import { useContext } from 'react'
import { Button } from '@mui/material'
import { CartContext } from '../../Contexts/CartContext'
import './PhoneDetail.css'

function PhoneDetail(props) {
  const { id, memoria, marca, modelo, pantalla, dimensiones, procesador, camara_frontal, camara, peso, bateria, extras, precio, color, imgUrl } = props

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
        return [...currPhones, { id, quantity: 1, precio, modelo, memoria, color }]
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
          <h3>{modelo} {memoria} {color}</h3>
          <h1 style={{color: 'orange'}}>{precio}€</h1>
          {quantityPerItem > 0 && (
            <div><h1 style={{ color: 'red' }}>{quantityPerItem}</h1></div>
          )}
          {quantityPerItem === 0 ? (
            <Button onClick={() => addToCart()}>Añadir al Carrito</Button>
          ) : (
            <Button onClick={() => addToCart()}>Añadir +</Button>
          )}
          {quantityPerItem > 0 && (
            <Button onClick={() => removePhone(id)}>Quitar -</Button>
          )}
        </div>
        <div>
          <p>Procesador: {procesador}</p>
          <p>Cámara: {camara}</p>
          <p>Cámara Frontal: {camara_frontal}</p>
          <p>Dimensiones: {dimensiones}</p>
          <p>Peso: {peso}</p>
          <p>Batería: {bateria}</p>
          <p>Pantalla: {pantalla}</p>
          <p>Extras: {extras}</p>
        </div>
      </div>
      
      {/* <div className='main-box-phone'>
        <div className='img-single-phones'>
          <img src={imgUrl} />
        </div>
        <div>
          <h3>{modelo}</h3>
          <h1>{precio}€</h1>
          {quantityPerItem > 0 && (
            <div><h1 style={{ color: 'red' }}>{quantityPerItem}</h1></div>
          )}
          {quantityPerItem === 0 ? (
            <Button onClick={() => addToCart()}>Añadir al Carrito</Button>
          ) : (
            <Button onClick={() => addToCart()}>Añadir +</Button>
          )}
          {quantityPerItem > 0 && (
            <Button onClick={() => removePhone(id)}>Quitar -</Button>
          )}
        </div>
      </div>
      <div className='phone-data'>
        <p>Procesador: {procesador}</p>
        <p>Color: {color}</p>
        <p>Memoria: {memoria}</p>
        <p>Cámara: {camara}</p>
        <p>Cámara Frontal: {camara_frontal}</p>
        <p>Dimensiones: {dimensiones}</p>
        <p>Peso: {peso}</p>
        <p>Batería: {bateria}</p>
        <p>Pantalla: {pantalla}</p>
        <p>Extras: {extras}</p>
      </div> */}
    </div>
  )
}

export default PhoneDetail
