//1.Import Area
import React from 'react'
import N from './N';
//2. Function definition area

let M = () => {
    return (
        <>
            <h1 className='news'>News-13, 13.1 Using React Functional Componenet(RFC) & 13.2- Default export </h1>
            <h1>Delhi L-G transfers 11 police officials, including three women IPS officers</h1>
            <p>2010 batch IPS officers Shweta Chauhan (DCP central) and Esha Pandey (DCP south east), have been appointed as DCP general administration and DCP traffic respectively
                The home department of Delhi government on Thursday reshuffled as many as 11 DCPs (deputy commissioner of police), including three women IPS officers.

            </p>
            <img src='https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/DCP-outer-north-Devesh-Kumar-Mahla-has-been-transf_1676004316071.jpg' />
            <N />

        </>
    )
}

//3. Export Area
//3.1 We can export Anything like- Function, Class, variable Array etc.
//3.2 there are two ways to export components-
//3.2.1 Default export
export default M;
//3.2.2 Named Export

