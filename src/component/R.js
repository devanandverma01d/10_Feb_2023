//1.Import Area
import React, { Component } from 'react'
import S from './S'
//2. Function definition area
//2.1 Using React Class Components
export default class R extends Component {
    //1.Property
    //2. Constructor
    //3. Method
    render() {
        // Every function/ method Return something
        return (
            <React.Fragment>
                <h1 className='news'>News-18, 18.1- Using React Class Components & 18.2- Named Export</h1>
                <h1>Martyrs’ Memorial in Telangana to be world’s largest 'seamless stainless steel structure'
                </h1>
                <p>The 'diya-shaped' structure was built to remember those who sacrificed lives over the time during the 'Telangana movement' - for the creation of a separate state.The Martyrs' Memorial that is to be unveiled soon in the city of Hyderabad in Telangana is believed to be the world's largest 'seamless stainless steel structure'. The 'diya-shaped' structure was built to remember those who sacrificed lives over the time during the 'Telangana movement' - for the creation of a separate state.
                </p>
                <img src='https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/memo_1676005693656_1676005705381_1676005705381.JPG' />
                <S />
            </React.Fragment>
        )
    }
}
//3. Export Area
//3.1 We can export Anything like- Function, Class, variable Array etc.
//3.2 there are two ways to export components-
//3.2.1 Default export
//3.2.2 Named Export
