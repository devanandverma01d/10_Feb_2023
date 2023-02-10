//1. Import Area
import { Component } from "react";
import G from "./G";
//2. Function definition Area
//2.1 Using React Class Component(RCC).
export class F extends Component {
    //1. Property
    //2.Constructor
    //3.Method
    render() {
        // Every Function retun Something
        return (
            <>
                <h1 className="news">News-6, 6.1- Using React CLass Component & 6.2- Named Export</h1>
                <h1>'What I said is not gaali, it means sinner': Mahua Moitra on cuss word in Parliament</h1>
                <p>'What I said is not gaali, it means sinner': Mahua Moitra on cuss word in ParliamentTrinamool MP Mahua Moitra said in her understanding she did not use an abusive word in Parliament and the meaning of the word is a sinner. "I am not a Hindi speaker. If they in their Hindi finds the word to mean something else -- about mother and father -- not my problem," the Lok Sabha MP said in an interview. "If the shoe fits, wear it," Moitra said adding that many BJP MPs praised her for giving it back to Delhi BJP MP Ramesh Bishuri. "I am not saying right or wrong. What I am saying is you don't give me protection in the House and then you are roasting me. I don't care. If you want to make a heroine out of me, good luck to you. I don't care," the Lok Sabha MP said."What is the gaali? The word haraam means something sinful or forbidden. And the literal translation of what I said is sinner, in my understanding of the Arabic root of the word. Now if somebody assumes it to mean something else, that's not my problem. First, this person heckled me continuously when I was speaking. Second, my speech ended and Ram Naidu was speaking and still, the man did not shut up. So I called him the name because what he was doing is forbidden," Mahua Moitra said.</p>
                <img src="https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/ANI-20230207245-0_1675988564797_1675988564797_1675988632322_1675988632322.jpg" />
                <G />
            </>
        )
    }
}
//3. Export Area