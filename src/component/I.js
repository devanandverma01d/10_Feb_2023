//1. Import Area
import J from "./J";
//2. Function definition Area
//2.1 Using React Function Component(RFC).
let I = () => {
    //Every Function return Something
    return (
        <>
            <h1 className="news">News-9, 9.1- Using React Functional Component(RFC) & 9.2- Default Export</h1>
            <h1>Finance Secretary defends higher investment limit in saving schemes, says…</h1>
            <p>Finance Secretary TV Somanathan said the ceilings under the Senior Citizen Savings Scheme have been unchanged for quite some time, and the decision to raise the ceiling is primarily a measure for the welfare of the middle class and senior citizens.The decision to raise the investment ceilings in small savings schemes is aimed at benefiting senior citizens and the middle class who park funds in safe government deposit schemes offering higher returns than banks, Finance Secretary TV Somanathan has said.The Budget 2023-24 raised the maximum deposit limit for Senior Citizen Savings Scheme from ₹15 lakh to ₹30 lakh. Also, the maximum deposit limit for Monthly Income Account Scheme will be enhanced from ₹4.5 lakh to ₹9 lakh for a single account and from ₹9 lakh to ₹15 lakh for a joint account.In a post-budget interview with PTI, Somanathan said the ceilings under the Senior Citizen Savings Scheme have been unchanged for quite some time, and the decision to raise the ceiling is primarily a measure for the welfare of the middle class and senior citizens.</p>
            <img src="https://images.hindustantimes.com/img/2023/02/05/550x309/rupee_1675573855785_1675573855931_1675573855931.jpg" />
            <J />

        </>
    )
}
//3. Export Area
//3.1 We can export Anything like- Function, Class, variable Array etc.
//3.2 there are two ways to export components-
//3.2.1 Default export
export default I;
//3.2.2 Named Export
