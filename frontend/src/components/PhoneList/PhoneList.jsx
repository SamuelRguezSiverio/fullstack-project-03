import { useState, useEffect } from 'react'
import { getAllPhones } from '../../services/phoneAPI'
import PhoneCard from '../PhoneCard/PhoneCard'
import { Link } from 'react-router-dom'
import './PhoneList.css'

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
            <Link key={id} to={`/phones/${phone.id}`}><PhoneCard key={phone.id} modelo={phone.modelo} precio={phone.precio} brandId={phone.brand}/></Link>
        ));
    };

    return (
        <div className='phone-list-card'>{showPhoneList()}</div>
    )
}

export default PhoneList
