//1.Import area
import { B } from "./B"
//2.function area
// Using React Functional component
function A() {
    //Every function return something 
    return (
        <React.Fragment>
            <h1 className="news">News-1, 1.1-Using Function Component & 1.2- Default export </h1>
            <h1>Lithium deposits found in India for first time; 5.9 million tons in J&K's Reasi</h1>
            <p>Lithium in Jammu and Kashmir Reasi: The ministry of mines made the announcement about discovery of lithium - which can be used to make batteries for Electric Vehicles - on Twitter.The Geological Survey of India has discovered 5.9 million tonnes of inferred resources (G3) of lithium, which is used for making electric vehicle (EV) batteries, for the first time in the country at Salal-Haimana in Jammu & Kashmir (J&K)’s Reasi district.</p>
            <img src="https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/Lithium-is-used-for-making-electric-vehicle-batter_1676006146170.jpg" />
            <B />
        </React.Fragment>
    )
}

//3.Export area
//We can Export anything like Function, Class, variable,Array etc.
// there are two way of exporting componenets-
//3.1 Default Export
//3.2 Named Export
export default A;

