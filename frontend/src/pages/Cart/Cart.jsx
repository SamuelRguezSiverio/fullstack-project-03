import { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'
import { Button } from '@mui/material'
import './Cart.css'

function Cart() {
  const [cart, setCart] = useContext(CartContext)

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.precio
  }, 0)

  const addToCart = () => {
    setCart((currPhones) => {
      const isPhoneFound = currPhones.find((phone) => phone.id)
      if (isPhoneFound) {
        return currPhones.map((phone) => {
          if (phone.id) {
            return { ...phone, quantity: phone.quantity + 1 }
          } else {
            return phone
          }
        })
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

  return (
    <div className='main-cart'>
      {cart.map((phone, idx) => (
        <div key={idx} className='phone-cart-box'>
          <img src='https://thumb.pccomponentes.com/w-530-530/articles/1058/10581317/1866-apple-iphone-14-pro-max-256gb-plata-libre-0dd128be-99b7-434b-9158-d8fd7d29cca7.jpg' />
          <span>{phone.modelo} {phone.memoria} {phone.color}</span><br></br>
          <span>Cantidad: {phone.quantity}</span>
          <Button onClick={() => addToCart()}>+</Button>
          <Button onClick={() => removePhone(phone.id)}>-</Button>
        </div>
      ))}
      {quantity === 0 ? (<h1>Empty Cart</h1>) : null}
      <div>Items in Cart: {quantity}</div>
      <div>Total: {totalPrice} €</div>
    </div>
  )
}

export default Cart