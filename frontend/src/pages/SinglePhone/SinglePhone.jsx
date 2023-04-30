import { useState, useEffect } from 'react'
import PhoneDetail from '../../components/PhoneDetail/PhoneDetail'
import { getAllPhones } from '../../services/phoneAPI'
import { useParams } from 'react-router-dom'

function SinglePhone() {
    const [phone, setPhone] = useState({})
    const { id } = useParams()

    useEffect(() => {
        async function getAndSetPhoneById() {
            const phoneObject = await getAllPhones(id)
            setPhone(phoneObject)
        }
        getAndSetPhoneById()
    }, [id])

    return (
        <div>
            <PhoneDetail {...phone} />
        </div>
    )
}

export default SinglePhone
