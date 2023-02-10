//1. Import Area
import React from 'react'
import R from './R'
//2. Function definition area
//2.1 Using React functional Component(RFC). 
export default function Q() {
    //every Function return something
    return (
        <>
            <h1 className='news'>News-17, 17.1-Using React functional Component(RFC) & 17.2- Default Export </h1>
            <h1>Leopard captured from Ghaziabad court released in Saharanpur range</h1>
            <p>The leopard had injured at least 10 persons at the Ghaziabad courts on Wednesday afternoon before it was cornered in the building stairwell and captured after being tranquillised.The eight-year-old male leopard that was rescued from the Ghaziabad district courts complex on Wednesday evening was released into the Saharanpur ranges early Thursday morning, said officials of the forest department.
            </p>
            <img src='https://www.hindustantimes.com/ht-img/img/2023/02/09/550x309/It-took-forest-officials-at-least-four-hours-to-co_1675965876343.jpg' />
            <R />
        </>
    )
}
//3. Export Area
//3.1 We can export Anything like- Function, Class, variable Array etc.
//3.2 there are two ways to export components-
//3.2.1 Default export
//3.2.2 Named Export
