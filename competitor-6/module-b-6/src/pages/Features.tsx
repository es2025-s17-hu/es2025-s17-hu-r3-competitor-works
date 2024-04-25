
import FeatureBox from "../components/FeatureBox.tsx";
import F1 from "../assets/images/feature1.png";
import F2 from "../assets/images/feature2.png";
import F3 from "../assets/images/feature3.png";

const Features = () => {
    return (
        <section className="Feature--section">
            <h2 className={"Section-title"}>Powerful Features Designed for Efficiency</h2>
            <section className="Feature-boxes">
                <FeatureBox image={F1} name={"Inventory Management"}
                            description={"Reduce waste with precise tracking and predictive ordering."}/>
                <FeatureBox image={F2} name={"Real-Time Analytics"}
                            description={"Make informed decisions with up-to-the-minute data on sales, staffing, and customer preferences."}/>
                <FeatureBox image={F3} name={"CRM"}
                            description={"Enhance guest experiences through personalized service and targeted marketing."}/>
            </section>
        </section>
    );
};

export default Features;