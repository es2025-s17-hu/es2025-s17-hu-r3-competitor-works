import Navbar from "../components/navbar.jsx";
import {Link} from "react-router-dom";
import NumberCard from "../components/number-card.jsx";
import hero from '../assets/hero.svg';
import feature1 from '../assets/feature1.svg';
import feature2 from '../assets/feature2.svg';
import feature3 from '../assets/feature3.svg';
import FeatureCard from "../components/feature-card.jsx";
import Testmonial from "../components/testmonial.jsx";
import PricingPlan from "../components/plan.jsx";
import Footer from "../components/footer.jsx";

export default function HomePage() {
    return (
        <>
            <Navbar></Navbar>
            <main>
                <div className={'hero'}>
                    <div className={'content'}>
                        <h1>Elevate Your Restaurant with <span>DineEase</span></h1>
                        <p>
                            Streamline operations, enhance customer service, and boost your profits with our
                            comprehensive
                            management software.
                        </p>
                    </div>
                    <div className={'actions'}>
                        <Link to={'/'} className={'button-primary'}>

                            Book a Free Demo
                        </Link>
                    </div>
                    <img src={hero} alt="Hero" className={'mobile'}/>
                </div>

                <section className={'numbers'}>
                    <h2>DineEase by the Numbers</h2>
                    <p>Our achievement in the journey depicted in numbers</p>

                    <div className={'cards'}>
                        <NumberCard number={'2,531'} end={'+'}>Customers</NumberCard>
                        <NumberCard number={'1,235,764'} end={''}>Transactions monthly</NumberCard>
                        <NumberCard number={98} end={'%'}>Customer Satisfaction</NumberCard>
                        <NumberCard number={25} end={'+'}>Awards Won</NumberCard>
                    </div>
                </section>

                <section className={'features'}>
                    <h2>Powerful Features Designed for Efficiency</h2>
                    <div className={'cards'}>
                        <FeatureCard title={'Inventory Management'} link={'/'} image={feature1}>
                            Reduce waste with precise tracking and predictive ordering.
                        </FeatureCard>
                        <FeatureCard title={'Real-Time Analytics'} link={'/'} image={feature2}>
                            Reduce waste with precise tracking and predictive ordering.
                        </FeatureCard>
                        <FeatureCard title={'CRM'} link={'/'} image={feature3}>
                            Reduce waste with precise tracking and predictive ordering.
                        </FeatureCard>
                    </div>
                </section>

                <section className={'feedback'}>
                    <h2>Trusted by Restaurants<br/>Worldwide</h2>
                    <div className={'testmonials'}>
                        <div className={'left'}>
                            <Testmonial author={'Floyd Miles'} role={'OceanView Cafe'}>
                                DineEase revolutionized our operations, making it easy to manage multiple locations
                                seamlessly. Their support team is incredibly responsive and truly understands the needs
                                of the hospitality industry.
                            </Testmonial>
                        </div>
                        <div className={'right'}>
                            <Testmonial author={'Jane Cooper'} role={'The Gourmet Bistro'}>
                                DineEase helped us reduce operational costs by 20% within the first six months.
                            </Testmonial>
                            <Testmonial author={'Kristin Watson'} role={'City Diner'}>
                                Our customer satisfaction has never been higher, thanks to the personalized service we
                                can provide with DineEase.
                            </Testmonial>
                        </div>
                    </div>
                </section>

                <section className={'pricing'}>
                    <h2>Flexible Pricing Plans</h2>
                    <p className={'desc'}>Choose the plan that best fits your business. No hidden fees, no
                        surprises.</p>

                    <div className={'plans'}>
                        <PricingPlan headline={'Starter'} price={'19'}
                                     description={'Ideal for new or small restaurants looking to streamline operations.'}>
                            <ul>
                                <li>Real-time sales tracking</li>
                                <li>Basic inventory management</li>
                                <li className={'disabled'}>Advanced inventory management</li>
                                <li className={'disabled'}>Priority phone support</li>
                                <li className={'disabled'}>Multi-location management</li>
                            </ul>
                        </PricingPlan>
                        <PricingPlan featured={true} headline={'Professional'} price={'49'}
                                     description={'Perfect for growing restaurants needing advanced analytics and marketing tools.'}>
                            <ul>
                                <li>Real-time sales tracking</li>
                                <li>Basic inventory management</li>
                                <li>Advanced inventory management</li>
                                <li>Priority phone support</li>
                                <li className={'disabled'}>Multi-location management</li>
                            </ul>
                        </PricingPlan>
                        <PricingPlan headline={'Enterprise'} price={'99'}
                                     description={'Comprehensive solutions for large-scale or multi-location operations.'}>
                            <ul>
                                <li>Real-time sales tracking</li>
                                <li>Basic inventory management</li>
                                <li>Advanced inventory management</li>
                                <li>Priority phone support</li>
                                <li>Multi-location management</li>
                            </ul>
                        </PricingPlan>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}