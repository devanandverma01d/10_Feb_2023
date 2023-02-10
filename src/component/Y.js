//1.Import Area
import React, { Component } from 'react'
import Z from './Z'
//2. Function definition area
//2.1 Using React Class component(RCC).

export default class Y extends Component {
    //1. Property
    //2.Constructor
    //3.Method
    render() {
        //Evry Function Return Something
        return (
            <>
                <h1 className='news'>News-25, 25.1-Using React Class component(RCC) & Named Export</h1>
                <h1>Punjab CM appeals to Behbal Kalan protesters to lift blockade on Amritsar-Bathinda highway
                </h1>
                <p>Punjab agriculture minister Kuldeep Singh Dhaliwal to meet protesters, who remain firm on their demand for justice in sacrilege and police firing cases of 2015.Punjab chief minister Bhagwant Mann on Friday appealed to protesters to lift the blockade at Behbal Kalan on the Amritsar-Bathinda national highway (NH-54) as the agitation against the slow pace of probe in the 2015 sacrilege and police firing incidents entered its sixth day. State agriculture minister Kuldeep Singh Dhaliwal will be arriving to meet the protesters at Behbal Kalan on Friday evening.
                </p>
                <img src='https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/Protesters-blocking-the-Amritsar-Bathinda-highway-_1676019090577.jpg' />
                <Z />
            </>
        )
    }
}
//3. Export Area
//3.1 We can export Anything like- Function, Class, variable Array etc.
//3.2 there are two ways to export components-
//3.2.1 Default export
//3.2.2 Named Export
