//1.Import Area

import React from 'react'
import P from './P';
//2. Function definition area
//2.1 Using React Functional Component
let O = () => {
    //every Function return something
    return (
        <>
            <h1 className='news'>News-15,Using React Functional Component & 15.2- Default export</h1>
            <h1>Five new traffic police stations to be opened in Bengaluru. Details</h1>
            <p>CM Bommai also said that 11 overpassees will be added to Bengaluru’s infrastructure.
                Five new traffic police stations will be opened in Bengaluru for the better management of traffic in the city and they will be provided with a DCP (Deputy Commissioner of Police), staff, vehicles, and all the equipment to deal with traffic density, said Karnataka CM Basavaraj Bommai. He also said that 11 overpassees will be added to Bengaluru’s infrastructure.

            </p>
            <img src='https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/mask-day-rally-in-bengaluru_bb9f4c5c-b13b-11ea-8315-f58cec6734ed_1676023422971_1676023422971.jpg' />
            <P />

        </>
    )
}
//3. Export Area
//3.1 We can export Anything like- Function, Class, variable Array etc.
//3.2 there are two ways to export components-
//3.2.1 Default export
export default O;
//3.2.2 Named Export

