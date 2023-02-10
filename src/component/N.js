//1. Import Area
import React, { Component } from 'react'
import O from './O'
//2. Function definition area
//2.1 Using React Functional Component(RFC).
export default class N extends Component {
    //1.Property
    //2. Constructure
    //3.Method
    render() {
        // Every Function return Something
        return (
            <React.Fragment>
                <h1 className='news'>News-14, Using React Class Component & Named Export</h1>
                <h1>‘Check status, leave early’: Mumbai airport's advisory ahead of PM Modi's visit</h1>
                <p>Ahead of Prime Minister Narendra Modi's visit to Mumbai to inaugurate two Vande Bharat trains on Friday, the Mumbai airport issued an advisory for its passengers considering the traffic congestion.Ahead of Prime Minister Narendra Modi's visit to Mumbai to inaugurate two Vande Bharat trains on Friday, the Mumbai airport issued an advisory for its passengers considering the traffic congestion. Informing passengers of the closure of roads “owing to the high-security measures due to the VVIP movement”, the airport advised all passengers to “check their flights and leave earlier”.

                </p>
                <img src='https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/-p-Mumbai-airport-issues-advisory-for-passengers-t_1671038992776_1676010747831_1676010747831.jpeg' />
                <O />
            </React.Fragment>
        )
    }
}
//3. Export Area
//3.1 We can export Anything like- Function, Class, variable Array etc.
//3.2 there are two ways to export components-
//3.2.1 Default export
//3.2.2 Named Export
