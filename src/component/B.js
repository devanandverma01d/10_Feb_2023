//1. Import area 
import React, { Component } from "react";
import C from "./C";
//2. function definition area
// using class component
export class B extends Component {
    //1.Property
    //2.Constructor
    //3.Method
    render() {
        //Every function return dsomeething
        return (
            <>
                <h1 className="news">News-2, 2.1- Using Class component, 2.2- Named Export </h1>
                <h1>'Misconceived': Supreme Court junks plea to ban BBC in India over Modi documentary</h1>
                <p>BBC Modi documentary row: The government had banned social media sites from sharing links to the two-part documentary.The Supreme Court on Friday dismissed as 'entirely misconceived' a petition by Hindu Sena chief Vishnu Gupta that sought to ban India ops of the British Broadcasting Corporation, or BBC, over its controversial two-part documentary on prime minister Narendra Modi.Gupta had claimed the BBC had taken an 'anti-India' position in the documentary - which has made headlines in India for its criticism of the prime minister - and that the film is '(the) result of deep conspiracy against global rise of India and its Prime Minister, Shri Narendra Modi (which)... is not being digested by anti-India lobby, media particularly BBC'.</p>
                <img src="https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/bbc_film_on_pm_modi_gujarat_riots_muslims_1674700302841_1676016767637_1676016767637.jpg" />
                <C />
            </>
        )
    }
}
//3. Export area
//We can Export Anything like function, Class, Variable,Array etc.
// There are two way to export componenets-
//1. Default export
//2. Named Export

