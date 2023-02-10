//1.Import Area
import React, { Component } from 'react'
import X from './X';
//2.Function definition area
//2.1Using React Class Component(RCC)
class W extends Component {
    //1.Property
    //2.Constructor
    //3.Method
    render() {
        //Every Method return Something
        return (
            <>
                <h1 className='news'>News-23, 23.1-Using React Class Component(RCC) & Named Export</h1>
                <h1>‘Aapne kitni baar pyar kiya hai?’: Congress MP asks VP Dhankhar in Rajya Sabha
                </h1>
                <p>Congress MPs were up on their feet questioning the rationale behind the expunging of remarks made on Wednesday, when similar ones were made by former prime ministers Vajpayee and Manmohan Singh in the House and which continue to be part of the proceedings.Rajya Sabha on Friday witnessed a lighter moment when Congress MP Pramod Tiwari asked chairman Jadgeep Dhankhar about the number of times he has fallen in love. Discussing a point of order against the chairman's decision to expunge parts of the Leader of Opposition's speech on the motion of thanks to President's address, Tiwari said that Mallikarjun Kharge had “written a poem in your love.”


                </p>
                <img src='https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/rajya_sabha_dhankhar_dhankar_love_1676027904524_1676027904982_1676027904982.jpg' />
                <X />
            </>
        )
    }
}
//3. Export Area
//3.1 We can export Anything like- Function, Class, variable Array etc.
//3.2 there are two ways to export components-
//3.2.1 Default export
export default W;
//3.2.2 Named Export

