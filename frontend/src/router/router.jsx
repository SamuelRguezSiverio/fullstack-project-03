import { createBrowserRouter, redirect } from 'react-router-dom'

import Auth from '../pages/Auth/Auth'
import App from '../App'
import Products from '../pages/Products/Phones'
import Cart from '../pages/Cart/Cart'
import AfterSales from '../pages/AfterSales/AfterSales'
import Home from '../pages/Home/Home'
import SinglePhone from '../pages/SinglePhone/SinglePhone'
import Phones from '../pages/Products/Phones'

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <Auth />,
  },
  {
    element: <App />,
    loader: () => {
      if (!localStorage.getItem('token')) {
        return redirect('/signup')
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