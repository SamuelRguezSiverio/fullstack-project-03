import { createBrowserRouter, redirect } from 'react-router-dom'

import Auth from '../pages/Auth/Auth'
import App from '../App'
import Products from '../pages/Products/Products'
import Cart from '../pages/Cart/Cart'
import AfterSales from '../pages/AfterSales/AfterSales'
import Home from '../pages/Home/Home'

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <Auth />,
  },
  {
    element: <App />,
    loader: () => {
      if (!localStorage.getItem('token')) {
        return redirect('/')
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
        path: '/productos',
        element: <Products />,
      },
      {
        path: '/carrito',
        element: <Cart />,
      },
      {
        path: '/postventa',
        element: <AfterSales />,
      }
    ]
  },

])

export default router