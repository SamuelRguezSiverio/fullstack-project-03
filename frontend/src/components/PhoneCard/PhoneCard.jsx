import React from 'react'
import './PhoneCard.css'

function PhoneCard({ id, modelo, precio, brand }) {
  return (
    <div className='phone-box-card' key={id}>
      <h1>{modelo}</h1>
      <h3>{precio}</h3>
      <h3>{brand}</h3>
    </div>
  )
}

export default PhoneCard