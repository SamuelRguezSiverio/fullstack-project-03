import { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'
import PhoneDetail from '../../'

function Cart() {
  const [cart, setCart] = useContext(CartContext)

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)

const totalPrice = cart.reduce((acc, curr) => {
  return acc + curr.quantity * curr.precio
},0)

  return (
    <div>
      {cart.map((phone, id) => (
          <PhoneDetail key={id} modelo={phone.modelo} />
      ))}
      <div>Items in Cart: {quantity}</div>
      <div>Total: {totalPrice} €</div>
    </div>
  )
}

export default Cart