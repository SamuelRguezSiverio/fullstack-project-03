import { useState, useEffect, useContext } from 'react'
import PhoneCard from '../../components/PhoneCard/PhoneCard'
import { Link } from 'react-router-dom'
import './Phones.css'
import { getAllPhones } from '../../services/phoneAPI'
import { SearchContext } from '../../Contexts/SearchContext'
import { useLocation } from 'react-router-dom'

function Phones() {

  const { search } = useContext(SearchContext)
  const [phones, setPhones] = useState([])
  const { state } = useLocation()
  const id = state?.id

  useEffect(() => {
    async function getAllAndSetPhones() {
      const phones = await getAllPhones()
      setPhones(phones)
    }
    getAllAndSetPhones()
  }, [])

  function filterPhones() {
    let filteredPhones = []
    if (search !== '') {
      filteredPhones = phones.filter((phone) => search ? phone.modelo.toLowerCase().includes(search.toLowerCase()) : true)
    } else {
      filteredPhones = phones
    }
    if (id !== undefined) {
      filteredPhones = filteredPhones.filter((phone) => phone.brandId === id)
    }
    filteredPhones = filteredPhones.map((phone) => (
      <Link key={phone.id} to={`/phones/${phone.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <PhoneCard {...phone} />
      </Link>
    ))
    if (filteredPhones.length > 0) {
      return filteredPhones
    } else {
      return <h1>No Results Found!</h1>
    }
  }

  return (
    <div className="main">
      <h1 className='title'>SmartPhones</h1>
      <div className='phone-boxes'>
        {phones.length > 0 && filterPhones()}
      </div>
    </div>
  );
}

export default Phones
