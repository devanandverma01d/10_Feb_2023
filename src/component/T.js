//1. Import Area
import React from 'react'
import U from './U';
//2. Function definition area
//2.1 Using React Functional Component

let T = () => {
    //every Function return something
    return (
        <React.Fragment>
            <h1 className='news'>News-20, 20.1- Using React Functional Component & default Export</h1>
            <h1>Formula E an opportunity to showcase city and country, says Karun Chandhok</h1>
            <p>India's ex-Formula 1 and Formula E driver believes the Hyderabad racing event could regenerate India's lost interest in motorsport.Karun Chandhok has seen Formula E grow from scratch, having been part of the first ever season back in 2014-15. Nine years down the line, the 39-year-old is commentating on the all-electric series that will make its India debut with the Hyderabad E-Prix on Saturday. The only Indian to have raced in Formula E, the former Formula 1 driver will be travelling to Hyderabad for the race where he will also be trying out the new Gen3 car that is raced in Formula E.
            </p>
            <img src='https://www.hindustantimes.com/ht-img/img/2023/02/09/550x309/WhatsApp_Image_2023-02-09_at_22.51.56_1675963360526_1675963376232_1675963376232.jpeg' />
            <U />
        </React.Fragment>
    )
}

//3. Export Area
//3.1 We can export Anything like- Function, Class, variable Array etc.
//3.2 there are two ways to export components-
//3.2.1 Default export
export default T;
//3.2.2 Named Export
