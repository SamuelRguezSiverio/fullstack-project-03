import React from 'react'
import ImageSlider from './ImageSlider';

function Banner() {
    const slides = [
        { url: "https://i.pinimg.com/originals/8e/f7/26/8ef726ffe903afa19aa545e23f3b9c72.png", title: "beach" },
        { url: "https://tecstore.pe/media/bannercito_xiaomi.png", title: "boat" },
        { url: "https://i.pinimg.com/originals/ea/bd/aa/eabdaadef69a169117a2900e77bfde9f.jpg", title: "forest" },
    ];
    const containerStyles = {
        width: "90%",
        height: "280px",
        margin: "20px",
    };
    return (
        <>
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
        </>
    )
}

export default Banner