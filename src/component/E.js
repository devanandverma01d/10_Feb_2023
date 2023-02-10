//1.Import area

import { F } from "./F";

//2.Function Definition area
//2.1 Using React Functional Component(RFC).
export function E() {
    //Every Function Return something
    return (
        <>
            <h1 className="news">News-5, 5.1- Using React Functional Component & 5.2-Default Export</h1>
            <h1>Number theory: Understanding the Union Budget’s tax calculations</h1>
            <p>In 2017, India moved to the GST regime. This led to a sharp fall in share of union excise duties in the Centre’s GTR as most indirect taxes, except those on petroleum products, moved to GST.A higher tax buoyancy than 2022-23 is among the most crucial assumptions in the 2023-24 Budget. Tax buoyancy measures changes in taxes per unit change in GDP. Here are four charts that explain why this assumption is critical, and provide a wider context to the Budget’s tax calculations.</p>
            <img src="https://images.hindustantimes.com/img/2023/02/03/550x309/_d44d7aee-dfee-11ea-a97c-4447400c36de_1675453611587_1675453611587.jpg" />
            <F />
        </>
    )
}
//3.Export Area
//3.1 we can export anything like- function, Class, variable Array etc.
//3.2 There are two way to export component-
//3.2.1 Default Export
//3.2.2 Named Export