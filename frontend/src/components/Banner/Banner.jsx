import React, { useEffect, useState } from 'react'
import ImageSlider from './ImageSlider';
import { getAllBrands } from '../../services/phoneAPI';

function Banner() {

    const containerStyles = {
        width: "90%",
        height: "500px",
        margin: "20px",
    };

    const [brands, setBrands] = useState([])

    useEffect(() => {
        async function getAndSetBrands() {
            const brands = await getAllBrands()
            const mappedBrands = brands.map((brand) => {
                const midResult = {...brand, url: brand.imgUrl};
                delete midResult.imgUrl
                return midResult
            })
            setBrands(mappedBrands)
        }
        getAndSetBrands()
    }, [])

    return (
        <>
            <div style={containerStyles}>
                {brands.length > 0 && <ImageSlider slides={brands} />}
            </div>
        </>
    )
}

export default Banner