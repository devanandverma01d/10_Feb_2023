//1. Import area
import React, { Component } from 'react'
import Q from "./Q";
//2. Function definition area
//2.1 Using React Class Component(RCC).
export default class P extends Component {
    //1.Property
    //2. Constructor
    //3.Method
    render() {
        //Every Function return something
        return (
            <React.Fragment>
                <h1 className='news'>News-16, 16.1-Using React Class Component(RCC) & 16.2- Named Export </h1>
                <h1>After dust and debris, Chintels Paradiso residents fight uncertainty
                </h1>
                <p>The incident rendered 36 families homeless as they were forced to evacuate Tower D for fear of the building collapsing completely
                    For the past year, residents of Chintels Paradiso society in Sector 109 have been haunted by the memory of the dust, debris and chaos that ensued when six floors of Tower D partially collapsed on February 10, killing two of their neighbours.

                </p>
                <img src='https://www.hindustantimes.com/ht-img/img/2023/02/09/550x309/Residents-of-Chintels-Paradiso-protest-against-the_1675967909082.jpg' />
                <Q />
            </React.Fragment>
        )
    }
}
//3. Export Area
//3.1 We can export Anything like- Function, Class, variable Array etc.
//3.2 there are two ways to export components-
//3.2.1 Default export
//3.2.2 Named Export
