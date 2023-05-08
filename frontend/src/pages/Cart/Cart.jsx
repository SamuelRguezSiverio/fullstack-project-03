import { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'
import { Button } from '@mui/material'
import './Cart.css'


function Cart() {
  const [cart, setCart, onCheckout] = useContext(CartContext)

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.precio
  }, 0)

  const addToCart = (id) => {
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
      {cart.map((phone) => (
        <div key={phone.id} className='phone-cart-box'>
          <div className='img-cart'>
            <img src={phone.imgUrl} />
          </div>
          <div className='data-cart'>
            <h3>{phone.modelo} {phone.memoria} {phone.color}</h3><br></br>
            <div>
              <span><b>Cantidad: {phone.quantity}</b></span>
              <Button size='small' sx={{
                p: "1", b: "0", mx: '20px', color: "white",
                backgroundColor: 'orange', '&:hover': { color: 'orange', backgroundColor: '#f7f7f7' }, fontSize: "20px",
                fontWeight: "600"
              }} onClick={() => removePhone(phone.id)}>-</Button>

              <Button size='small' sx={{
                p: "1", b: "0", color: "white",
                backgroundColor: 'orange', '&:hover': { color: 'orange', backgroundColor: '#f7f7f7' }, fontSize: "20px", fontWeight: "600"
              }} onClick={() => addToCart(phone.id)}>+</Button>
            </div>
          </div>
        </div>
      ))}
      {quantity === 0 ? (<h1>Empty Cart</h1>) : null}
      <div>Items in Cart: {quantity}</div>
      <div>Total: {totalPrice} €</div>
      <Button onClick={onCheckout} size='small' sx={{
        p: "1", b: "0", mx: '20px', color: "white",
        backgroundColor: 'orange', '&:hover': { color: 'orange', backgroundColor: '#f7f7f7' }, fontSize: "20px",
        fontWeight: "600"
      }}>Checkout</Button>
    </div>
  )
}

export default Cart