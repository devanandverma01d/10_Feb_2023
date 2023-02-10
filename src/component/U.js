//1. Import area
import React, { Component } from 'react'
import V from './V'
//2. Function definition area
//2.1 Using React Class component (RCC)

export default class U extends Component {
    //1.Property
    //2.Constructor
    //3.Method
    render() {
        //Every Function return something
        return (
            <>
                <h1 className='news'>News-21, 21.1- Using React Class component (RCC) & Named Export</h1>
                <h1>Woman loses vision due to smartphone use, doctor shares precautions</h1>
                <p>A Hyderabad-based doctor shared a case study of his patient and explained how the ‘smartphone vision syndrome’ (SVS) is caused and how she corrected her vision.A 30-year-old woman has developed vision impairment due to long-term use of smartphones. In a series of tweets, a Hyderabad-based doctor shared a case study of his patient and explained how the ‘smartphone vision syndrome’ (SVS) is caused and how she corrected her vision.


                </p>
                <img src='https://www.hindustantimes.com/ht-img/img/2023/02/09/550x309/smartphone_74ed7fce-f378-11e6-800c-c780129a337a_1675947485582_1675947485582.jpg' />
                <V />
            </>
        )
    }
}
