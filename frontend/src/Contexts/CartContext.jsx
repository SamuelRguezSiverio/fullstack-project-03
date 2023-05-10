import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const CartContext = createContext(null)

export default function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const navigate = useNavigate();

    function onCheckout() {
        if (cart.length > 0) {
            navigate('/postventa')
        } 
    }

    return (
        <CartContext.Provider value={[cart, setCart, onCheckout]}>
            {children}
        </CartContext.Provider>
    )
}








