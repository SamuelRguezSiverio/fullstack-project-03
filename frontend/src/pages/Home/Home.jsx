import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import { getAllBrands } from '../../services/phoneAPI'
import './Home.css'

function Home() {

  const [elements, setElements] = useState([
    'Apple',
    'Samsung',
    'Xiaomi'
  ])

  const [brands, setBrands] = useState([])

  useEffect(() => {
    async function getAndSetBrands() {
      const brands = await getAllBrands()
      console.log(brands)  
      setBrands(brands)
    }
    getAndSetBrands()
  }, [])

  return (
    <div className='home-box'>
      <Banner/>
    </div>
  )
}

export default Home