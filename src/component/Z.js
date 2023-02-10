//1. Import Area
import React from 'react'
import Thanks from './Thanks'
//2.Function definition area
//2.1 Using React Functional Component(RFC)
export default function Z() {
    //Every Function return something
    return (
        <>
            <h1 className='news'>News-26, 26.1-Using React Functional Component(RFC) & Export</h1>
            <h1>Haryana CM Manohar Lal Khattar invites investments from SCO member countries
            </h1>
            <p>Chief minister Manohar Lal Khattar termed Haryana a key investment destination and invited Shanghai Cooperation Organization (SCO) to invest in the state.Chief minister Manohar Lal Khattar termed Haryana a key investment destination and invited the member countries of the Shanghai Cooperation Organization (SCO) to invest in the state.
            </p>
            <img src='https://www.hindustantimes.com/ht-img/img/2023/02/09/550x309/Chief-minister-Manohar-Lal-Khattar-assured-the-mem_1675975047069.jpg' />
            <Thanks />
        </>
    )
}
