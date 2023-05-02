import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import router from './router/router'
import CartProvider from './Contexts/CartContext'
import SearchProvider from './Contexts/SearchContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <CartProvider>
      <SearchProvider>

        <RouterProvider router={router} />
        
      </SearchProvider>
    </CartProvider>
    
  </React.StrictMode>,
)
