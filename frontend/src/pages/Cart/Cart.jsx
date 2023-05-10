import { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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

  const removePhoneCart = (id) => {
    setCart((currPhones) => {
      return currPhones.filter((phone) => phone.id !== id);
    });
  };

  return (
    <div className='main-cart'>
        <h1>Mi Cesta</h1>
      <div>Productos en el carrito: {quantity}</div>
      {cart.map((phone) => (
        <div key={phone.id} className='phone-cart-box'>
          <div className='img-cart'>
            <img src={phone.imgUrl}/>
          </div>
          <div className='data-cart'>
            <Link to={`/smartphones/${phone.id}`} style={{textDecoration: 'none', color:'black'}} key={phone.id}><h3 className='cart-phone-title'>{phone.modelo} {phone.memoria} {phone.color}</h3></Link><br></br>
            <div>
            <button className='button-cart-delete' onClick={() => removePhoneCart(phone.id)}><DeleteForeverIcon/></button>
              <button className='button-cart-qty' onClick={() => removePhone(phone.id)}>-</button><span className='qty-text'>{phone.quantity}</span><button className='button-cart-qty' onClick={() => addToCart(phone.id)}>+</button>
            </div>
          </div>
        </div>
      ))}
      <div className='cart-resume'>
        <h3>Total: {totalPrice} €</h3>
        {quantity === 0 ? '' : <button className='button-cart' onClick={onCheckout}>Continuar</button>}
      </div>
    </div>
  )
}

export default Cart