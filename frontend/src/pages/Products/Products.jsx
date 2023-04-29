import {useState, useEffect} from 'react'
// import PhoneCard from '../../components/PhoneCard/PhoneCard'
import PhoneList from '../../components/PhoneList/PhoneList'
import './Products.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getPhoneById } from '../../services/phoneAPI'

function Products() {

  const [phone, setPhone] = useState({})
  const { id } = useParams()

  useEffect(() => {
      async function getAndSetPhoneById() {
          const phoneId = await getPhoneById(id)
          setPhone(phoneId)
      }
      getAndSetPhoneById()
  }, [id])

  return (
    <div className='main'>
      <Link to={`/products/${phone.id}`}><PhoneList/></Link>
    </div>
  )
}

export default Products