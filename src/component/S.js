//1. Import area
import React, { Component } from 'react'
import T from './T'
//2. Function definition area
//2.1 Using React Class Component(RFC).

export default class S extends Component {
    //1. Property
    //2. Constructor
    //3. Method
    render() {
        //Every Function return Something
        return (
            <>
                <h1 className='news'>News-19, 19.1-Using React Class Component(RFC) & 19.2- Named Export</h1>
                <h1>7 die of asphyxiation in Andhra oil factory</h1>
                <p>Meanwhile, Kakinada district collector Krithika Shukla told the reporters that the factory had been sealed and an inquiry had been ordered for which a four-member committee has been set up.Seven workers of an oil factory died of asphyxiation after they entered an oil tanker for cleaning in Andhra Pradesh’s Kakinada district on Thursday morning, police said.
                </p>
                <img src='https://www.hindustantimes.com/ht-img/img/2023/02/09/550x309/State-home-minister-Taneti-Vanitha-expressed-shock_1675969983381.jpg' />
                <T />
            </>
        )
    }
}
//3. Export Area
//3.1 We can export Anything like- Function, Class, variable Array etc.
//3.2 there are two ways to export components-
//3.2.1 Default export
//3.2.2 Named Export
