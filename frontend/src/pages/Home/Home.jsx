import { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import './Home.css'
import { getAllPhones } from '../../services/phoneAPI'
import Carousel from 'better-react-carousel'
import PhoneCard from '../../components/PhoneCard/PhoneCard'

function Home() {

  const [phones, setPhones] = useState([])

  useEffect(() => {
    async function getFilteresPhones() {
      const phones = await getAllPhones()
      setPhones(phones)
    }
    getFilteresPhones()
  }, [])

  function filterTopSalesPhones() {
    const topSales = phones.filter((phone) => phone.topSales === true)
    return topSales.map((phone) => ( <PhoneCard key={phone.id} {...phone} />))
  }

  return (
    <div className='home-box'>
      <Banner />
      <br></br>
      <h1>TOP SALES</h1>
      <div className='box-top-sales'>
        {filterTopSalesPhones()}
      </div>
    </div>
  )
}

export default Home