import { useState, useEffect } from 'react'
import { getAllPhones } from '../../services/phoneAPI'
import PhoneCard from '../PhoneCard/PhoneCard'

function PhoneList() {

    const [showAllPhones, setShowAllPhones] = useState([])

    useEffect(() => {
        async function showPhoneList() {
            const phoneList = await getAllPhones()
            setShowAllPhones(phoneList)
        }
        showPhoneList()
    }, [])

    const showPhoneList = () => {
        return showAllPhones.map((phone, id) => (
            <PhoneCard key={id} modelo={phone.modelo} precio={phone.precio} />
        ));
    };

    return (
        <div>{showPhoneList}</div>
    )
}

export default PhoneList
