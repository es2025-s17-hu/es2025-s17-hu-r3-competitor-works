import "../components_style/Home.css";
import {NavLink} from "react-router-dom";
import PhoneHeroImage from "../assets/images/hero.png";
import StatisticBox from "../components/StatisticBox.tsx";
import Features from "../components/Features.tsx";
import PricingPlans from "../components/PricingPlans.tsx";
import Testimony from "../components/Testimony.tsx";

// HOME PAGE
const Overview = () => {
    return (
        <section className={"Overview--page Page--component"}>
            {/*HERO SECTION*/}
            <section className="Hero--section">
                <h1>Elevate Your Restaurant with <br/>
                    <span className={"Hero-highlighted"}>DineEase</span>
                </h1>
                <h2>Streamline operations, enhance customer service, and boost your profits with our comprehensive
                    management software.
                </h2>
                <section className="Hero-lower-section">
                    <NavLink to={"/book-demo"}>Book a Free Demo</NavLink>
                    <div className="Lower-phone-image">
                        <img src={PhoneHeroImage} alt="An image of a phone"/>
                    </div>
                </section>
            </section>
            {/*Statistics section*/}
            <section className="Statistics--section-wrapper">
                <section className="Statistics--section">
                    <div className="Statistics-header">
                        <h2 className={"Statistics-title"}>DineEase by the Numbers</h2>
                        <h3 className={"Statistics-subtitle"}>Our achievement in the journey depicted in numbers</h3>
                    </div>
                    <div className="Statistics-boxes">
                        <StatisticBox number={2531} name={"Customers"} additionalSymbol={"+"}/>
                        <StatisticBox number={1235764} name={"Transactions monthly"}/>
                        <StatisticBox number={98} name={"Customer Satisfaction"} additionalSymbol={"%"}/>
                        <StatisticBox number={25} name={"Awards Wo"} additionalSymbol={"+"}/>
                    </div>
                </section>
            </section>
            {/*FEATURES SECTION*/}
            <Features/>
            {/*TESTIMONY SECTION*/}
            <Testimony />
            {/*PRICING PLANS SECTION*/}
            <PricingPlans />
        </section>
    );
};

export default Overview;