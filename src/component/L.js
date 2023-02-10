//1. Import Area
import React, { Component } from 'react'
import M from './M'

//2. Function definition area

//2.1 Using React Class Component(RCC).

export default class L extends Component {
    //1. Property
    //2. Constructor
    //3.Method
    render() {
        // every Method Return Something
        return (
            <>
                <h1 className="news">News-12,12.1-Using React Class Component(RCC) & 12.2- Named Export</h1>
                <h1>LeBron James and the audacity of hope</h1>
                <p>LeBron achieved what experts thought no one ever would. When he scored 38 points for the LA Lakers, he beat the all-time scoring record in the NBA regular seasonThere is no athlete in the sporting firmament who has evoked more mixed emotions and more fervent responses than LeBron James. He is revered for his versatility but berated for his apparent lack of killer instinct. He was derided for his selfishness when he left the Cleveland Cavaliers in 2010, and celebrated for his grace when he rejoined them in 2014 and won them an unthinkable NBA title. He is sometimes declared as the greatest of all time for what he does on court, but often run down as not quite role model material in the manner that Michael Jordan (MJ) and Magic Johnson were. Through all this, he has remained the most interesting, the most feared, the most grudgingly admired athlete in world sport.

                </p>
                <img src='https://www.hindustantimes.com/ht-img/img/2023/02/09/550x309/Thunder-Lakers-Basketball-82_1675866110710_1675866110710_1675944960838_1675944960838.jpg' />
                <M />
            </>
        )
    }
}
//3. Export Area
//3.1 We can export Anything like- Function, Class, variable Array etc.
//3.2 there are two ways to export components-
//3.2.1 Default export
//3.2.2 Named Export

