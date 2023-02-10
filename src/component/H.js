//1. Import Area
import { Component } from "react";
import I from "./I";
//2. Funtion definition area
//2.1 Using React Class Component(RCC).
export class H extends Component {
    //1.Porperty
    //2.Constructor
    //3.Method
    render() {
        //Every Function Return something
        return (
            <>
                <h1 className="news">New-8, 8.1- Using Reat Class Component & 8.2- Named Export</h1>
                <h1>US to resume 'domestic visa revalidation' on pilot basis for H-1B visa holders</h1>
                <p>US to resume 'domestic visa revalidation' on pilot basis for H-1B visa holdersIn a move that could benefit tens of thousands of foreign tech workers on H-1B and L1 visas, the US is planning to resume “domestic visa revalidation” in certain categories on a pilot basis with the goal of scaling it up in the next few years.Until 2004, certain categories of non-immigrant visas, particularly the H-1B, could be renewed or stamped inside the US. After that, for renewal of these visas, in particular, those on H-1B, the foreign tech workers have to go out of the country, mostly to their own country to get the H-1B extension stamped on their passport.For all the H-1B visa holders, when their visa is renewed, they need to get their passports stamped with renewal dates. This is required if they wish to travel outside of the US and re-enter the US. As of now, H-1B visa restamping is not allowed within the US.</p>
                <img src="https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/_78fcd3ec-ea8b-11e8-a696-ab1a80e4d2e8_1676015101163_1676015101163.png" />
                <I />
            </>
        )
    }
}
//3. Export Area
//3.1 We can export Anything like- Function, Class, variable Array etc.
//3.2 there are two ways to export components-
//3.2.1 Default export
//3.2.2 Named Export


