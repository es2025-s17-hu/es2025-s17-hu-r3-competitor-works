import {Link} from "react-router-dom";

export default function FeatureCard({image, children, title, link}) {
    return (
        <div className={'feature-card'}>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{children}</p>
            <Link to={link}>Know more -></Link>
        </div>
    )
}