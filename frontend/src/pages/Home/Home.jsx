import { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import './Home.css'
import { getAllPhones } from '../../services/phoneAPI'
import PhoneCard from '../../components/PhoneCard/PhoneCard'
import { Link } from 'react-router-dom'
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
    return topSales.map((phone) => ( 
      <Link key={phone.id} to={`/phones/${phone.id}`} style={{textDecoration: 'none', color: 'black'}}>
    <PhoneCard key={phone.id} {...phone} />
    </Link>
    ))
  }

  return (
    <div className='home-box'>
      <Banner />
      <br></br>
      <h1>TopSales</h1>
      <div className='box-top-sales'>
        {filterTopSalesPhones()}
      </div>
    </div>
  )
}

export default Home