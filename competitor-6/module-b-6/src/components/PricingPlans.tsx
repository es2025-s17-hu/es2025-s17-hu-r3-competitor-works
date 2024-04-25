import "../components_style/PricingPlans.css";
const PricingPlans = () => {
    return (
        <section className={"Pricing-plans--section"}>
            <h2 className="Section-title">Flexible Pricing Plans</h2>
            <h3 className="Section-subtitle">Choose the plan that best fits your business. No hidden fees, no surprises.</h3>
            <div className="Pricing-plan-boxes">
                {/*STARTER BOX*/}
                <div className="Pricing-plan-box">
                    <div className="Pricing-plan-header">
                        <div className="Pricing-plan-name">Starter</div>
                        <div className="Pricing-plan-price">
                            $
                            <span className={"Price-highlighted"}>19</span>
                            per month
                        </div>
                        <p>Ideal for new or small restaurants looking to streamline operations.</p>
                    </div>
                    <div className="Pricing-plan-body">
                        <ul>
                            <li className={"Available-feature-item"}>Real-time sales tracking</li>
                            <li className={"Available-feature-item"}>Basic inventory management</li>
                            <li className={"Unavailable-feature-item"}>Priority phone support</li>
                            <li className={"Unavailable-feature-item"}>Multi-location management</li>
                        </ul>
                    </div>
                    <a href={"#"} className="Pricing-plan-link">Start Free Trial</a>
                </div>
                {/*PROFESSIONAL BOX*/}
                <div className="Pricing-plan-box Highlighted">
                    <div className="Pricing-plan-header">
                        <div className="Pricing-plan-name">Professional</div>
                        <div className="Pricing-plan-price">
                            $
                            <span className={"Price-highlighted"}>49</span>
                            per month
                        </div>
                        <p>Perfect for growing restaurants needing advanced analytics and marketing tools.</p>
                    </div>
                    <div className="Pricing-plan-body">
                        <ul>
                            <li className={"Available-feature-item"}>Real-time sales tracking</li>
                            <li className={"Available-feature-item"}>Basic inventory management</li>
                            <li className={"Available-feature-item"}>Priority phone support</li>
                            <li className={"Unavailable-feature-item"}>Multi-location management</li>
                        </ul>
                    </div>
                    <a href={"#"} className="Pricing-plan-link">Start Free Trial</a>
                </div>
                {/*ENTERPRISE BOX*/}
                <div className="Pricing-plan-box">
                    <div className="Pricing-plan-header">
                        <div className="Pricing-plan-name">Enterprise</div>
                        <div className="Pricing-plan-price">
                            $
                            <span className={"Price-highlighted"}>99</span>
                            per month
                        </div>
                        <p>Comprehensive solutions for large-scale or multi-location operations.</p>
                    </div>
                    <div className="Pricing-plan-body">
                        <ul>
                            <li className={"Available-feature-item"}>Real-time sales tracking</li>
                            <li className={"Available-feature-item"}>Basic inventory management</li>
                            <li className={"Available-feature-item"}>Priority phone support</li>
                            <li className={"Available-feature-item"}>Multi-location management</li>
                        </ul>
                    </div>
                    <a href={"#"} className="Pricing-plan-link">Start Free Trial</a>
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;