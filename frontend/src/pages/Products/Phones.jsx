import { useState, useEffect } from 'react'
import PhoneList from '../../components/PhoneList/PhoneList'
import { Link } from 'react-router-dom'
import './Phones.css'
import { getAllPhones } from '../../services/phoneAPI'

function Phones() {

  const [phones, setPhones] = useState([])

  useEffect(() => {
    async function getAllAndSetPhones() {
      const phones = await getAllPhones()
      setPhones(phones)
    }
    getAllAndSetPhones()
  }, [])

  return (
    <div className='main'>
      {phones.map(phone => (
        <Link key={phone.id} to={`/phones/${phone.id}`}>
          <PhoneList phone={phone} />
        </Link>
      ))}
    </div>
  )
}

export default Phones
