import { useState, useEffect, useContext } from 'react'
import PhoneCard from '../../components/PhoneCard/PhoneCard'
import { Link } from 'react-router-dom'
import './Phones.css'
import { getAllPhones } from '../../services/phoneAPI'
import { SearchContext } from '../../Contexts/SearchContext'

function Phones() {

  const { search } = useContext(SearchContext)
  const [phones, setPhones] = useState([])

  useEffect(() => {
    async function getAllAndSetPhones() {
      const phones = await getAllPhones()
      setPhones(phones)
    }
    getAllAndSetPhones()
  }, [])

  return (
    <div className="main">
      {phones
        .filter((phone) => search ? phone.modelo.toLowerCase().includes(search.toLowerCase()) : true)
        .map((phone) => (
          <Link key={phone.id} to={`/phones/${phone.id}`}>
            <PhoneCard {...phone} />
          </Link>
        ))}
    </div>
  );
}  

export default Phones
