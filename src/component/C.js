//1.Import Area
import { D } from "./D";
//2. Function definition area
// Using React Function Component(RFC)
function C() {
    //Every Function return something
    return (
        <React.Fragment>
            <h1 className="news">News-3, 3.1 Using Functional Component, 3.2 Default Export</h1>
            <h1>'India reforming out of conviction, not compulsion': PM at investors' summit</h1>
            <p>Only a few years ago, Uttar Pradesh was known as a BIMARU state, PM Modi said at the Global Investors' Meet 2023 in Lucknow.As Prime Minister Narendra Modi invited the delegates to the Global Investors' Summit 2023 in Lucknow on Friday, he said despite being the chief guest of the summit, it was his responsibility to accord the welcome as he is also an elected representative from the state. "Only a few years ago, Uttar Pradesh was known as a BIMARU state. Nobody had any hope from the state. But now Uttar Pradesh stands for good governance and development," PM Modi said adding that UP will be the state of five airports and is going to be linked to the seas directly.If India is the bright spot in the world, then UP is leading the growth of the country, PM Modi said adding, “India is reforming out of conviction, not out of compulsion.”Praising Budget 2023 for increased allocation in infrastructure, ease of doing business, PM Modi said one of the defence corridors of the country is going to come up in Uttar Pradesh.</p>
            <img src="https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/Pm_Modi_1676010473241_1676010480566_1676010480566.JPG" />
            <D />
        </React.Fragment>
    )
}
//3.Export Area
//We can export anything like- Function, Class, variable,Array ect.
//There are two ways to export component-
//3.1 Default Export
//3.2 Named Export
export default C;
