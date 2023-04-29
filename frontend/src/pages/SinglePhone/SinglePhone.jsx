import React from 'react'
import PhoneDetail from '../../components/PhoneDetail/PhoneDetail'


function SinglePhone() {


    return (
        <>
            <PhoneDetail />
        </>
    )
}

export default SinglePhone


// import React, { useEffect, useState } from 'react'
// import { getCocktailById } from '../../../../services/cocktailService'
// import CocktailCard from '../../../../components/CocktailCard/CocktailCard'
// import { useParams } from 'react-router-dom'

// function CocktailShow() {
//     const [cocktail, setCocktail] = useState({})
//     const { cocktailId } = useParams()

//     useEffect(() => {
//         async function getAndSetCocktailById() {
//             const cocktailListByCategory = await getCocktailById(cocktailId)
//             setCocktail(cocktailListByCategory)
//         }
//         getAndSetCocktailById()
//     }, [cocktailId])

//     return (
//         <div className='cocktail-card'>
//             {<CocktailCard cocktailImg={cocktail.strDrinkThumb} cocktailName={cocktail.strDrink} cocktailIngredients={cocktail.strInstructions} cocktailType={cocktail.strAlcoholic}/>}
//         </div>
//     )
// }

// export default CocktailShow