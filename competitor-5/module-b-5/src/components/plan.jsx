import {Link} from "react-router-dom";

export default function PricingPlan({headline, price, description, children, featured}) {
    return (
        <div className={featured ? 'plan featured' : 'plan' }>
            <div className={'top'}>
                <p className={'headline'}>{headline}</p>
                <div className={'price-row'}>
                    <p>$</p>
                    <p className={'price'}>{price}</p>
                    <p>per month</p>
                </div>
                <p className={'description'}>
                    {description}
                </p>
            </div>
            <div className={'bottom'}>
                {children}
            </div>
            <Link to={'/'} className={'cta'}>Start Free Trial</Link>
        </div>
    )
}