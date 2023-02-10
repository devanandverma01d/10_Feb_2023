//1. Import Area
import React from 'react'
import Y from './Y'
//22. Function definition area
//2.1 Using React Functional Component(RFC).
export default function X() {
    //every Function return something
    return (
        <>
            <h1 className='news'>News-24, 24.1-Using React Functional Component(RFC) & Default Export</h1>
            <h1>Himachal: Atal Tunnel closed after heavy snowfall at Rohtang
            </h1>
            <p>Heavy snowfall in the higher reaches of Himachal Pradesh left 176 roads, including four national highways, blocked on Friday.Heavy snowfall in the higher reaches of Himachal Pradesh left 176 roads, including four national highways, blocked on Friday.


            </p>
            <img src='https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/The-Manali-Leh-highway-was-closed-after-heavy-snow_1676022492168.jpg' />
            <Y />
        </>
    )
}
//3. Export Area
//3.1 We can export Anything like- Function, Class, variable Array etc.
//3.2 there are two ways to export components-
//3.2.1 Default export
//3.2.2 Named Export
