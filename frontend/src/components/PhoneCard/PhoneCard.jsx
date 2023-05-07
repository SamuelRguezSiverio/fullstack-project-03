import React from 'react'
import './PhoneCard.css'

function PhoneCard({ id, modelo, precio, memoria, imgUrl }) {
  return (
    <div className='phone-box-card' key={id}>
      <img src={imgUrl} alt="" />
      <h2>{modelo} {memoria}</h2>
      <p>{precio}€</p>
    </div>
  )
}

export default PhoneCard