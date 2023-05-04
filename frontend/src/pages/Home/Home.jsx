import React from 'react'
import Banner from '../../components/Banner/Banner'
import './Home.css'
import PhoneCard from '../../components/PhoneCard/PhoneCard'
function Home() {

  return (
    <div className='home-box'>
      <Banner />
      <br></br>
      <PhoneCard /> {/*Top Ventas*/}
    </div>
  )
}

export default Home