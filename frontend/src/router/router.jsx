import { createBrowserRouter, redirect } from 'react-router-dom'

import Auth from '../pages/Auth/Auth'
import App from '../App'
import Cart from '../pages/Cart/Cart'
import AfterSales from '../pages/AfterSales/AfterSales'
import Home from '../pages/Home/Home'
import SinglePhone from '../pages/SinglePhone/SinglePhone'
import Phones from '../pages/Phones/Phones'
import CartProvider from '../Contexts/CartContext'
import SearchProvider from '../Contexts/SearchContext'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Auth />,
  },
  {
    element: (
      <CartProvider>
        <SearchProvider>

          <App />

        </SearchProvider>
      </CartProvider>
    ),
    loader: () => {
      if (!localStorage.getItem('token')) {
        return redirect('/login')
      } else {
        return null
      }
    },
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/phones',
        element: <Phones />,
      },
      {
        path: '/phones/:id',
        element: <SinglePhone />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/aftersales',
        element: <AfterSales />,
      }
    ]
  },

])

export default router