//1.Import Area

import { H } from "./H";
//2.Function definition Area
//2.1 Using React Functional Component
let G = () => {
    // Every Function return Something
    return (
        <>
            <h1 className="news">News-7, 7.1- Using React Functional Component(RFC) & 7.2- Default Export</h1>
            <h1>Parliament session LIVE: 'India still fastest growing major economy', Sitharaman replies to Budget 2023 debate in LS</h1>
            <p>Parliament budget session 2023: The Budget session of the Parliament began on Tuesday with President Droupadi Murmu giving her maiden address to a joint sitting of Lok Sabha and Rajya Sabha on January 31.set to convene on Friday. On Thursday, as the Opposition raised slogans of ‘Modi-Adani, bhai-bhai’ in Rajya Sabha, Prime Minister Narendra Modi unleashed a stinging attack against them, saying the more ‘keechad’ (dirt) they will fling, the bigger ‘kamal’ (lotus) will bloom. He was replying to a debate on a motion thanking the President for her address to a joint sitting of Parliament. The motion was passed by voice vote after Congress members walked out saying they wanted to seek clarifications from PM Modi, who left soon after his speech, PTI reported.The Opposition parties have expressed concerns over the exposure of financial institutions such as SBI and investors into Adani Group which they said has endangered the savings of crores of Indians. Consequently, Parliament proceedings have faced much disruption during the ongoing budget session with the Opposition parties ramping up pressure on PM Modi over his ‘silence’ on the issue. Meanwhile, much ruckus also followed on Thursday after Leader of Opposition (LoP) in the Rajya Sabha Mallikarjun Kharge and Congress MPs objected to chairman Jagdeep Dhankhar expunging words from his speech in the House a day earlier.</p>
            <img src="https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/parliament_budget_session_live_1675993290599_1675993290817_1675993290817.jpg" />
            <H />
        </>
    )
}

//3.Export Area
//3.1 we can Export everything like- Function, Class, Variable, Array etc.
//3.2 there are two ways to Export components-
//3.2.1 Default Export
export default G;
//3.2.2 Named Export