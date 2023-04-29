import React, {useState, useEffect} from 'react'
import PhoneDetail from '../../components/PhoneDetail/PhoneDetail'
import { getPhoneById } from '../../services/phoneAPI'
import { useParams } from 'react-router-dom'

function SinglePhone() {
    const [phone, setPhone] = useState([])
    const { id } = useParams()
  
    useEffect(() => {
        async function getAndSetPhoneById() {
            const phoneId = await getPhoneById(id)
            console.log(phone.modelo)
            setPhone(phoneId)
        }
        getAndSetPhoneById()
    }, [])

    return (
        <div key={phone.id}>
            {<PhoneDetail modelo={phone.modelo} peso={phone}/>}
        </div>
    )
}

export default SinglePhone

