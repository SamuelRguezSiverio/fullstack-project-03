import { createBrowserRouter, redirect } from 'react-router-dom'

import Auth from '../pages/Auth/Auth'
import App from '../App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
  },
  {
    loader: () => {
      if (!localStorage.getItem('token')) {
        return redirect('/')
      } else {
        return null
      }
    },
    children: [

      {
        path: '/home',
        element: <App />,

      }
    ]
  },

])

export default router