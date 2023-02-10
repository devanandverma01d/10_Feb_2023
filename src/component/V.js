//1. import area
import React from 'react'
import W from './W';
//2. Function definition area
//2.1 Using React Functional Component(RFC).

let V = () => {
    //Every Function return something
    return (
        <>
            <h1 className='news'>News-22, 22.1- Using React Functional Component(RFC) & 22.1 Default Export</h1>
            <h1>Those hoping to defeat DMK should form an alliance, says Dhinakaran</h1>
            <p>“I’m not saying that we should all merge but we should form a coalition. All those hoping to defeat the evil force that is the DMK should form an alliance,” Dhinakaran said on Thursday.TTV Dhinakaran, who leads the Amma Makkal Munnetra Kazhagam (AMMK), a faction that broke away from the All India Anna Dravida Munnetra Kazhagam (AIADMK), on Thursday said he would consider allying with national parties for the 2024 general elections.


            </p>
            <img src='https://www.hindustantimes.com/ht-img/img/2023/02/09/550x309/TTV-Dhinakaran--HT-_1675969704408.jpg' />
            <W />
        </>
    )
}
//3. Export Area
//3.1 We can export Anything like- Function, Class, variable Array etc.
//3.2 there are two ways to export components-
//3.2.1 Default export
export default V;
//3.2.2 Named Export

