//1.Import Area
import { Component } from "react";
import { E } from "./E";
//2.Function definition area



//2.1 Using React Class Component(RCC).
export class D extends Component {
    //1.Property
    //2.Constructor
    //3.Method
    render() {
        //Every Function return Something.
        return (
            <>
                <h1 className="news">News-4, 4.1 Using React Class Component & 4.2 Named Export</h1>
                <h1>UK review flags anti-India rhetoric over Kashmir, pro-Khalistan extremism</h1>
                <p>A review into the UK government's scheme set up to prevent terrorism has flagged the radicalisation of UK Muslims over Kashmir and "potentially toxic" pro-Khalistan extremism as some of the areas of growing concern and made recommendations for improvements to tackle Islamist extremism as the "primary threat" to the country.A review into the UK government's scheme set up to prevent terrorism has flagged the radicalisation of UK Muslims over Kashmir and "potentially toxic" pro-Khalistan extremism as some of the areas of growing concern and made recommendations for improvements to tackle Islamist extremism as the "primary threat" to the country.The review into the government's counter-terrorism early intervention 'Prevent' strategy published this week warned that rhetoric from Pakistan is impacting UK Muslim communities when it comes to "inflaming anti-India sentiment, particularly around the subject of Kashmir".The review carried out by Commissioner for Public Appointments William Shawcross also warns against a false narrative being disseminated by a tiny number of pro-Khalistan groups operating in the UK.</p>
                <img src="https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/Khalistani_1611814048388_1611814053243_1676018289263_1676018289263.jpg" />
                <E />
            </>
        )
    }
}

//3.Export area
//3.1 We can export anything like-Function, Class,Variable,Array etc.
//3.2 There are two way to Export component-
//3.2.1 Default Export
//3.2.1 Named Export