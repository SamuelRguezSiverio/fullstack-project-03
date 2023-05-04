import React from 'react'
import './PhoneCard.css'

function PhoneCard({ id, modelo, precio, brand, imgUrl }) {
  return (
    <div className='phone-box-card' key={id}>
      <img src={imgUrl} alt="" />
      <h1>{modelo}</h1>
      <h3>{precio}€</h3>
      <h3>{brand}</h3>
    </div>
  )
}

export default PhoneCard